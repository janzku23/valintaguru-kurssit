"use client";

const DB_NAME = "valintaguru-podcast-audio";
const DB_VERSION = 1;
const STORE_NAME = "audio";

type CachedPodcastAudio = {
  id: string;
  sourceUrl: string;
  blob: Blob;
  cachedAt: number;
};

export type PodcastAudioCacheTrack = {
  id: string;
  url: string;
};

/**
 * Saman äänitteen rinnakkaiset lataukset yhdistetään samaan Promiseen.
 * Tämä estää saman tiedoston hakemisen useaan kertaan esimerkiksi silloin,
 * kun React renderöi komponentin uudelleen kehitystilassa.
 */
const inFlightDownloads = new Map<
  string,
  Promise<Blob | null>
>();

let persistentStorageRequested = false;

function isBrowser() {
  return (
    typeof window !== "undefined" &&
    typeof indexedDB !== "undefined"
  );
}

function openPodcastAudioDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!isBrowser()) {
      reject(
        new Error(
          "IndexedDB ei ole käytettävissä."
        )
      );
      return;
    }

    const request = indexedDB.open(
      DB_NAME,
      DB_VERSION
    );

    request.onupgradeneeded = () => {
      const db = request.result;

      if (
        !db.objectStoreNames.contains(
          STORE_NAME
        )
      ) {
        db.createObjectStore(
          STORE_NAME,
          {
            keyPath: "id",
          }
        );
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(
        request.error ??
          new Error(
            "Podcast-välimuistia ei voitu avata."
          )
      );
    };
  });
}

async function readRecord(
  id: string
): Promise<CachedPodcastAudio | null> {
  const db = await openPodcastAudioDb();

  try {
    return await new Promise(
      (resolve, reject) => {
        const transaction =
          db.transaction(
            STORE_NAME,
            "readonly"
          );

        const store =
          transaction.objectStore(
            STORE_NAME
          );

        const request =
          store.get(id);

        request.onsuccess = () => {
          resolve(
            (request.result as
              | CachedPodcastAudio
              | undefined) ?? null
          );
        };

        request.onerror = () => {
          reject(
            request.error ??
              new Error(
                "Podcast-välimuistin lukeminen epäonnistui."
              )
          );
        };
      }
    );
  } finally {
    db.close();
  }
}

async function writeRecord(
  record: CachedPodcastAudio
): Promise<void> {
  const db = await openPodcastAudioDb();

  try {
    await new Promise<void>(
      (resolve, reject) => {
        const transaction =
          db.transaction(
            STORE_NAME,
            "readwrite"
          );

        transaction.oncomplete =
          () => resolve();

        transaction.onerror = () => {
          reject(
            transaction.error ??
              new Error(
                "Podcast-välimuistiin tallentaminen epäonnistui."
              )
          );
        };

        transaction.onabort = () => {
          reject(
            transaction.error ??
              new Error(
                "Podcast-välimuistiin tallentaminen keskeytyi."
              )
          );
        };

        transaction
          .objectStore(STORE_NAME)
          .put(record);
      }
    );
  } finally {
    db.close();
  }
}

async function deleteRecord(
  id: string
): Promise<void> {
  const db = await openPodcastAudioDb();

  try {
    await new Promise<void>(
      (resolve, reject) => {
        const transaction =
          db.transaction(
            STORE_NAME,
            "readwrite"
          );

        transaction.oncomplete =
          () => resolve();

        transaction.onerror = () => {
          reject(
            transaction.error ??
              new Error(
                "Vanhan podcast-välimuistin poistaminen epäonnistui."
              )
          );
        };

        transaction
          .objectStore(STORE_NAME)
          .delete(id);
      }
    );
  } finally {
    db.close();
  }
}

/**
 * Pyytää selainta säilyttämään sivuston paikallisen tallennustilan
 * tavallista välimuistia pysyvämmin.
 *
 * Selain päättää itse myönnetäänkö lupa. Epäonnistuminen ei estä
 * podcastin normaalia käyttöä.
 */
export async function requestPersistentPodcastStorage() {
  if (
    persistentStorageRequested ||
    typeof navigator === "undefined"
  ) {
    return;
  }

  persistentStorageRequested = true;

  try {
    if (
      navigator.storage?.persist
    ) {
      await navigator.storage.persist();
    }
  } catch {
    // Podcast toimii edelleen Firebase-lähteestä,
    // vaikka selain ei myöntäisi persistent storagea.
  }
}

/**
 * Palauttaa paikallisesti tallennetun äänitteen vain silloin,
 * kun sen alkuperäinen Firebase-URL on edelleen sama.
 *
 * Jos URL on vaihtunut, vanha tiedosto poistetaan. Näin uuden
 * podcast-version julkaiseminen onnistuu vain vaihtamalla URL.
 */
export async function getCachedPodcastAudio(
  id: string,
  sourceUrl: string
): Promise<Blob | null> {
  if (!isBrowser()) {
    return null;
  }

  try {
    const record =
      await readRecord(id);

    if (!record) {
      return null;
    }

    if (
      record.sourceUrl !== sourceUrl ||
      !(record.blob instanceof Blob) ||
      record.blob.size <= 0
    ) {
      await deleteRecord(id);
      return null;
    }

    return record.blob;
  } catch {
    return null;
  }
}

/**
 * Hakee yhden äänitteen Firebase Storagesta ja tallentaa sen
 * IndexedDB:hen. Jos tiedosto on jo tallennettu, verkkopyyntöä
 * ei tehdä uudelleen.
 */
export async function cachePodcastAudio(
  track: PodcastAudioCacheTrack
): Promise<Blob | null> {
  if (!isBrowser()) {
    return null;
  }

  const sourceUrl =
    track.url.trim();

  if (!sourceUrl) {
    return null;
  }

  const existing =
    await getCachedPodcastAudio(
      track.id,
      sourceUrl
    );

  if (existing) {
    return existing;
  }

  const downloadKey =
    `${track.id}::${sourceUrl}`;

  const alreadyDownloading =
    inFlightDownloads.get(
      downloadKey
    );

  if (alreadyDownloading) {
    return alreadyDownloading;
  }

  const downloadPromise =
    (async () => {
      try {
        const response =
          await fetch(
            sourceUrl,
            {
              method: "GET",
              cache: "force-cache",
            }
          );

        if (!response.ok) {
          throw new Error(
            `Äänitteen lataus epäonnistui (${response.status}).`
          );
        }

        const blob =
          await response.blob();

        if (blob.size <= 0) {
          throw new Error(
            "Äänitiedosto oli tyhjä."
          );
        }

        await writeRecord({
          id: track.id,
          sourceUrl,
          blob,
          cachedAt: Date.now(),
        });

        return blob;
      } catch {
        /**
         * Offline-tallennus on lisäominaisuus.
         * Jos fetch/IndexedDB ei onnistu esimerkiksi selaimen
         * tallennusrajoituksen tai CORS-asetusten vuoksi, varsinainen
         * <audio>-elementti käyttää edelleen Firebase-URL:ia.
         */
        return null;
      } finally {
        inFlightDownloads.delete(
          downloadKey
        );
      }
    })();

  inFlightDownloads.set(
    downloadKey,
    downloadPromise
  );

  return downloadPromise;
}

/**
 * Lataa podcastin puuttuvat äänitteet automaattisesti taustalla.
 *
 * Äänitteet ladataan yksi kerrallaan, jotta sivun avaus ei aiheuta
 * useita isoja rinnakkaisia verkkolatauksia.
 */
export async function warmPodcastAudioCache(
  tracks: PodcastAudioCacheTrack[]
): Promise<void> {
  if (
    !isBrowser() ||
    tracks.length === 0
  ) {
    return;
  }

  await requestPersistentPodcastStorage();

  for (const track of tracks) {
    await cachePodcastAudio(
      track
    );
  }
}
