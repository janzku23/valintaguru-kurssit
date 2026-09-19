import type { CourseId } from "@/data/courses";

export type PodcastAudioTrack = {
  id: string;
  title: string;

  /**
   * Firebase Storage -äänitiedoston download URL.
   */
  url: string;

  /**
   * Valinnainen keston teksti, esimerkiksi "12 min".
   */
  duration?: string;
};

export type PodcastEpisode = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;

  /**
   * Canva-esityksen embed-linkki.
   */
  canvaUrl?: string;

  /**
   * Jakson äänitteet. Määrää ei ole rajoitettu.
   */
  audioTracks?: PodcastAudioTrack[];

  /**
   * Valinnainen koko jakson kesto.
   */
  duration?: string;

  theoryTitle?: string;
  theory: string;
};

export type CoursePodcastContent = {
  courseId: CourseId;

  /**
   * Podcast näkyy kurssin navigaatiossa vain kun tämä on true.
   */
  enabled?: boolean;

  title: string;
  description: string;
  episodes: PodcastEpisode[];
};
