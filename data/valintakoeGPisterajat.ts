export type ScoreLimitRow = {
  target: string;
  score: string;
};

export type ScoreLimitCategory = {
  id: string;
  title: string;
  maxPoints: string;
  notes?: string[];
  rows: ScoreLimitRow[];
};

export const VALINTAKOE_G_2027_DATE =
  "keskiviikkona 9.6.2027 klo 14.00";

export const scoreLimitCategories: ScoreLimitCategory[] = [
  {
    id: "hallintotieteet",
    title: "Hallintotieteet",
    maxPoints: "70 pistettä",
    rows: [
      {
        target: "Lapin yliopisto",
        score: "23 / 32",
      },
      {
        target: "Tampereen yliopisto",
        score: "29 / 36",
      },
      {
        target: "Vaasan yliopisto",
        score: "25",
      },
    ],
  },
  {
    id: "liikunnan-yhteiskuntatieteet",
    title: "Liikunnan yhteiskuntatieteet",
    maxPoints: "70 pistettä",
    rows: [
      {
        target:
          "Jyväskylän yliopisto, kandidaatti- ja maisteriohjelma",
        score: "30",
      },
      {
        target:
          "Jyväskylän yliopisto, maisteriohjelma",
        score: "31",
      },
    ],
  },
  {
    id: "sosiaalitieteet-ja-yhteiskuntatieteet",
    title: "Sosiaalitieteet ja yhteiskuntatieteet",
    maxPoints: "70 pistettä",
    notes: [
      "Näissä hakukohteissa valinta perustui valintakoe G yhteiseen osioon.",
    ],
    rows: [
      {
        target:
          "Helsingin yliopisto, samhällsvetenskaper",
        score: "21 / 28",
      },
      {
        target:
          "Helsingin yliopisto, kriminologia, sosiaalipsykologia, sosiologia ja yhteiskuntapolitiikka",
        score: "35 / 42",
      },
      {
        target:
          "Helsingin yliopisto, politiikka ja viestintä",
        score: "35 / 44",
      },
      {
        target:
          "Helsingin yliopisto, sosiaalityö",
        score: "33 / 41",
      },
      {
        target:
          "Helsingin yliopisto, yhteiskunnallinen muutos",
        score: "34 / 44",
      },
      {
        target:
          "Itä-Suomen yliopisto, Joensuu, julkisoikeus",
        score: "39",
      },
      {
        target:
          "Itä-Suomen yliopisto, Kuopio, sosiaalipsykologia",
        score: "25 / 32",
      },
      {
        target:
          "Itä-Suomen yliopisto, Kuopio, sosiaalityö",
        score: "23 / 31",
      },
      {
        target:
          "Itä-Suomen yliopisto, Joensuu, yhteiskuntatieteet",
        score: "25",
      },
      {
        target:
          "Jyväskylän yliopisto, sosiaalityö",
        score: "28 / 34",
      },
      {
        target:
          "Jyväskylän yliopisto, yhteiskuntatieteet",
        score: "25 / 28",
      },
      {
        target:
          "Lapin yliopisto, matkailututkimus",
        score: "6 / 16",
      },
      {
        target:
          "Lapin yliopisto, politiikkatieteet ja sosiologia",
        score: "21 / 30",
      },
      {
        target:
          "Lapin yliopisto, sosiaalityö",
        score: "19 / 33",
      },
      {
        target:
          "LUT-yliopisto, yhteiskuntatieteet",
        score: "25 / 29",
      },
      {
        target:
          "Tampereen yliopisto, politiikan tutkimus",
        score: "34 / 36",
      },
      {
        target:
          "Tampereen yliopisto, sosiaalityö",
        score: "30 / 37",
      },
      {
        target:
          "Turun yliopisto, poliittinen historia ja valtio-oppi",
        score: "35 / 42",
      },
      {
        target:
          "Turun yliopisto, sosiaalitieteet",
        score: "30 / 37",
      },
      {
        target:
          "Turun yliopisto, sosiaalityö",
        score: "30 / 37",
      },
      {
        target:
          "Åbo Akademi, Vasa, samhällsvetenskap",
        score: "7",
      },
      {
        target:
          "Åbo Akademi, Åbo, samhällsvetenskap",
        score: "10",
      },
      {
        target:
          "Åbo Akademi, Vasa, socialvetenskap",
        score: "2",
      },
    ],
  },
  {
    id: "viestintatieteet",
    title: "Viestintätieteet",
    maxPoints:
      "joko 70 tai 130 pistettä hakukohteesta riippuen",
    notes: [
      "Kaikki viestintätieteiden hakukohteet eivät käyttäneet viestintätieteiden eriytyvää osiota.",
      "Vain yhteinen osio: enintään 70 pistettä.",
      "Yhteinen osio + viestintätieteiden eriytyvä osio: enintään 130 pistettä (70 + 60).",
      "Tämän vuoksi viestintätieteiden hakukohteiden pisterajoja ei voi verrata suoraan keskenään, elleivät ne käytä samoja koeosioita.",
    ],
    rows: [
      {
        target:
          "Itä-Suomen yliopisto, viestintätieteet, Joensuu",
        score: "50 / 62",
      },
      {
        target:
          "Jyväskylän yliopisto, journalistiikka",
        score: "106",
      },
      {
        target:
          "Jyväskylän yliopisto, viestintä",
        score: "99 / 109",
      },
      {
        target:
          "LUT-yliopisto, viestintätieteet",
        score: "54 / 67",
      },
      {
        target:
          "Oulun yliopisto, informaatiotutkimus",
        score: "22",
      },
      {
        target:
          "Tampereen yliopisto, informaatiotutkimus",
        score: "26 / 29",
      },
      {
        target:
          "Tampereen yliopisto, journalistiikka",
        score: "111",
      },
      {
        target:
          "Tampereen yliopisto, mediatutkimus",
        score: "27 / 30",
      },
      {
        target:
          "Tampereen yliopisto, viestintä",
        score: "73 / 78",
      },
      {
        target:
          "Vaasan yliopisto, viestintätieteet",
        score: "97",
      },
    ],
  },
  {
    id: "oikeustiede",
    title: "Oikeustiede",
    maxPoints: "100 pistettä",
    notes: [
      "Oikeustieteen valintakoe muodostui kahdesta osiosta:",
      "Valintakoe G yhteinen osio: enintään 70 pistettä.",
      "Oikeustieteen eriytyvä osio: enintään 30 pistettä.",
      "Yhteensä: enintään 100 pistettä.",
      "Alla ovat oikeustieteen hakukohteiden lopulliset valintakoevalinnan pisterajat 7.8.2026 varasijavalintojen päättymisen jälkeen.",
      "Pisterajat on ilmoitettu muodossa ensikertalaiset / kaikki hakijat.",
    ],
    rows: [
      {
        target:
          "Helsingin yliopisto, Helsinki, opetus suomeksi",
        score: "56 / 63",
      },
      {
        target:
          "Helsingin yliopisto, Vaasa, opetus suomeksi",
        score: "54 / 60",
      },
      {
        target:
          "Helsingin yliopisto, Helsinki, opetus ruotsiksi",
        score: "43 / 54",
      },
      {
        target:
          "Helsingin yliopisto, Vaasa, opetus ruotsiksi",
        score: "38 / 44",
      },
      {
        target:
          "Itä-Suomen yliopisto",
        score: "54 / 63",
      },
      {
        target: "Lapin yliopisto",
        score: "52 / 59",
      },
      {
        target: "Turun yliopisto",
        score: "55 / 62",
      },
      {
        target: "Åbo Akademi",
        score: "45 / 51",
      },
    ],
  },
];
