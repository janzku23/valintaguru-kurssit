export type FreeExamOption = {
  id: string;
  text: string;
};

export type FreeExamQuestion = {
  id: string;
  task: number;
  question: string;
  type: "choice" | "select" | "number";
  options: FreeExamOption[];
  correctAnswerIds: string[];
  correctNumber?: number;
  sourceNote?: string;
};

export type ArticlePage = {
  page: number;
  text: string;
};

export const freeExam2026Questions: FreeExamQuestion[] = [
  {
    "id": "A1.1",
    "task": 1,
    "question": "Politiikkapohjainen tieto muuttuu tietopohjaiseksi politiikaksi, kun tutkimustietoa käytetään valikoivasti ja poimitaan vain tavoiteltua ratkaisua ja poliittista linjausta tukevaa tutkimusnäyttöä päätöksenteon tueksi.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s.3",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A1.2",
    "task": 1,
    "question": "Aiempi tutkimus antaa viitteitä siitä, että tutkimustiedon käytön toimintatavat ovat vahvasti kansallisesti institutionalisoituneita ja juurtuneita ja ne vaihtelevat merkittävästi eri maiden välillä. Tutkimuksen hyödyntämisen edellytyksiin vaikuttavat artikkelin mukaan:",
    "type": "choice",
    "correctAnswerIds": [
      "a",
      "c",
      "d"
    ],
    "sourceNote": "s. 3–4",
    "options": [
      {
        "id": "a",
        "text": "politiikan teon tavat ja kulttuuri"
      },
      {
        "id": "b",
        "text": "hallitussuhteet"
      },
      {
        "id": "c",
        "text": "tutkimustiedon tarjonta ja tuottajat sekä yleinen tutkimuksen ja tieteen arvostus"
      },
      {
        "id": "d",
        "text": "tutkimustiedon kysyntä sekä kytkennät tutkimustiedon tuottajien ja käyttäjien välillä"
      },
      {
        "id": "e",
        "text": "ei mikään näistä"
      }
    ]
  },
  {
    "id": "A1.3",
    "task": 1,
    "question": "Montako monimenetelmällistä eli laadullisia ja määrällisiä tutkimusmenetelmiä yhdistävää tutkimusta sisällytettiin artikkelin aineistoon?",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 9",
    "options": [
      {
        "id": "a",
        "text": "6"
      },
      {
        "id": "b",
        "text": "12"
      },
      {
        "id": "c",
        "text": "20"
      },
      {
        "id": "d",
        "text": "26"
      },
      {
        "id": "e",
        "text": "ei mikään näistä"
      }
    ]
  },
  {
    "id": "A1.4",
    "task": 1,
    "question": "Artikkelin aineistoon on sisällytetty (alasvetovalikko: a. enemmän b. vähemmän) vain laadullisia menetelmiä hyödyntäviä tutkimuksia kuin vertaisarvioituja tutkimuksia.",
    "type": "select",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 9",
    "options": [
      {
        "id": "a",
        "text": "enemmän"
      },
      {
        "id": "b",
        "text": "vähemmän"
      }
    ]
  },
  {
    "id": "A1.5",
    "task": 1,
    "question": "Artikkelin aineistoa voi kuvailla toteamalla, että geneerinen tutkimus on tyypillisesti vertaisarvioimaton ja laadullinen tai laadullisia ja määrällisiä aineistoja yhdistävä tutkimus, kun taas sektorikohtainen tutkimus on tyypillisesti vertaisarvioitu laadullinen tutkimus.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 9",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A2.1",
    "task": 2,
    "question": "Ensimmäisen kansallisen ilmastostrategian valmistelua käsittelevässä tutkimuksessa huomattiin, että:",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 14–15",
    "options": [
      {
        "id": "a",
        "text": "valmistelussa tiedon tuotannon ja politiikan prosessit olivat vahvasti yhteydessä toisiinsa"
      },
      {
        "id": "b",
        "text": "ilmastopolitiikkaa koskevaa tutkimustietoa koettiin olevan liikaa, ja tiedon paljous heikensi erilaisten perinteisten, legitiimin aseman saavuttaneiden asiantuntijatahojen roolia politiikkaprosessissa"
      },
      {
        "id": "c",
        "text": "kansallisesti vakiintuneen aseman saavuttaneiden tutkimuslaitosten ja niitä edustavien tutkijoiden nähtiin edustavan konservatiivisena pidettyä asiantuntijuutta"
      },
      {
        "id": "d",
        "text": "ei mikään näistä"
      }
    ]
  },
  {
    "id": "A2.2",
    "task": 2,
    "question": "Tutkimustiedon käyttö poliittisten asiakirjojen laadinnassa raportoidaan aina systemaattisesti ja läpinäkyvästi, koska siihen on lakisääteinen velvoite.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A2.3",
    "task": 2,
    "question": "Sekä valtiollisten tutkimuslaitosten että yliopistojen pääasiallinen tarkoitus on tuottaa tutkimustietoa juuri valtion hallinnonalojen päätösten ja kehittämisen avuksi.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A2.4",
    "task": 2,
    "question": "Artikkelin analyysiin sisällytetyistä tutkimuksista yli puolessa käytettiin laadullisia menetelmiä.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 9",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A2.5",
    "task": 2,
    "question": "Symbolisessa tutkimustiedon hyödyntämisessä on kyse pitkälti tiedon poliittisesta tai taktisesta käytöstä.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 5",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A3.1",
    "task": 3,
    "question": "Eräs keskeinen ero kartoittavan ja systemaattisen kirjallisuuskatsauksen välillä on tarkasteltavien kysymysten laajuudessa.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 5",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A3.2",
    "task": 3,
    "question": "Artikkelin kirjallisuuskatsauksen lopullinen analyysi kohdistui 54 tutkimukseen.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 7",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A3.3",
    "task": 3,
    "question": "Mikä seuraavista tietopohjan aukkoja kuvaavista väittämistä on artikkelin perusteella epätosi?",
    "type": "choice",
    "correctAnswerIds": [
      "c"
    ],
    "sourceNote": "s. 24",
    "options": [
      {
        "id": "a",
        "text": "Pitkäjänteisemmät päätöksenteon ja tutkimustiedon rajapintaa tarkastelevat tutkimusohjelmat olisivat tapa täydentää olemassa olevaa tietoa."
      },
      {
        "id": "b",
        "text": "Ministereiden ja tutkitun tiedon suhteeseen liittyy useita avoimia kysymyksiä."
      },
      {
        "id": "c",
        "text": "Tutkimustiedon läsnäoloa valmistelu- ja päätöksentekoprosessissa tarkastelevat tutkimukset puuttuvat."
      },
      {
        "id": "d",
        "text": "Tutkimustiedon vaikuttavuuteen keskittyvät tutkimusnäkökulmat olisivat tärkeitä."
      },
      {
        "id": "e",
        "text": "Ei mikään näistä."
      }
    ]
  },
  {
    "id": "A3.4",
    "task": 3,
    "question": "Vuoden 2017 hallituksen esityksiä käsitelleessä tutkimuksessa akateemisen tutkimuksen osuus tutkimusviittaushavainnoista valtioneuvoston päätöksenteossa ja sen valmistelussa oli korkeampi kuin hallinnon tuottaman tutkimuksen osuus.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 10",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A3.5",
    "task": 3,
    "question": "Mikä seuraavista väittämistä pitää paikkansa? Valtioneuvoston päätösten tueksi lakihankkeisiin tilataan uutta tutkimusta:",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 10.",
    "options": [
      {
        "id": "a",
        "text": "erityisesti silloin, jos aihe on yhteiskunnallisesti kiistanalainen tai täysin uudenlainen"
      },
      {
        "id": "b",
        "text": "erityisesti silloin, jos aiheesta ei ole tehty viime vuosina laadullista tutkimusta"
      },
      {
        "id": "c",
        "text": "vain silloin, jos sen tarve on määritelty valtioneuvoston yleisistunnossa"
      },
      {
        "id": "d",
        "text": "ei mikään näistä"
      }
    ]
  },
  {
    "id": "A4.1",
    "task": 4,
    "question": "Vain strategisen tutkimuksen rahoitusvälineen kautta rahoitettujen tutkimushankkeiden tuloksia hyödynnetään strategioiden valmistelussa ja laadinnassa.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A4.2",
    "task": 4,
    "question": "Artikkelissa mainitun tutkimuksen tulosten mukaan eduskunnan valiokuntien kuulemisissa tutkijoiden osuus oli ___ %.",
    "type": "number",
    "correctAnswerIds": [],
    "correctNumber": 7,
    "sourceNote": "Oikea vastaus 7 %.  s. 19.",
    "options": []
  },
  {
    "id": "A4.3",
    "task": 4,
    "question": "Artikkelissa mainitun tutkimuksen tulosten mukaan ympäristö-, ilmasto- ja energiapolitiikan alalla valtiolliset tutkimuskeskukset (Syke, Luke, VATT jne.) ja niiden tutkijat ovat päätöksenteossa enemmän esillä kuin yliopistot ja niiden tutkijat.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 16.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A4.4",
    "task": 4,
    "question": "Artikkelin perusteella ministerit hyödyntävät pääsääntöisesti erityisavustajilta saamaansa tietoa päätöksenteossa.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 24.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A4.5",
    "task": 4,
    "question": "Eduskunnan perustuslakivaliokunnan kuulemisista suurin yksittäinen osuus on tutkijoiden kuulemisia.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 13 ja s. 19.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A5.1",
    "task": 5,
    "question": "Mikä seuraavista sosiaali- ja terveysalan suositusten perusteluihin liittyvistä väittämistä pitää paikkansa?",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 17.",
    "options": [
      {
        "id": "a",
        "text": "Kansainvälisesti on havaittu, että suositukset ja politiikkadokumentit valottivat hyvin niukasti suositusten perusteluja eikä niissä viitattu tutkimukseen eikä systemaattisia kirjallisuuskatsauksia laadittu."
      },
      {
        "id": "b",
        "text": "Suomen osalta on havaittu, että suositukset ja politiikkadokumentit valottivat hyvin niukasti suositusten perusteluja eikä niissä viitattu tutkimukseen eikä systemaattisia kirjallisuuskatsauksia laadittu."
      },
      {
        "id": "c",
        "text": "Suomen ja Tanskan osalta on havaittu, että suositukset ja politiikkadokumentit valottivat hyvin niukasti suositusten perusteluja eikä niissä viitattu tutkimukseen eikä systemaattisia kirjallisuuskatsauksia laadittu."
      },
      {
        "id": "d",
        "text": "Ei mikään näistä."
      }
    ]
  },
  {
    "id": "A5.2",
    "task": 5,
    "question": "Tutkimustiedon hyödyntämistä poliittisen päätöksenteon tukena on Suomen ulkopuolella tutkittu runsaasti.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A5.3",
    "task": 5,
    "question": "Artikkelissa mainittu valinnanvapauteen ja terveydenhuollon kehittämiseen liittyvä tutkimus nostaa esiin sen, että verrokkimaiden kokemukset on usein ohitettu.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 16",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A5.4",
    "task": 5,
    "question": "Artikkelin perusteella tutkijoiden osuuden kasvaminen valiokuntakuulemisissa tarkoittaa, että tieteen asema päätöksenteossa on jonkin verran voimistunut.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A5.5",
    "task": 5,
    "question": "Vain harva ministeriöissä valmisteltu laaja lakihanke jättää tutkimustiedon huomioimatta.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 10",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A6.1",
    "task": 6,
    "question": "Artikkelissa mainittu kyselytutkimus osoittaa, että vajaa kolmasosa ministeriöiden virkamiehistä hyödyntää valtioneuvoston selvitys- ja tutkimustoiminnassa tuotettua tietoa vähintään muutaman kerran kuukaudessa.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 11",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A6.2",
    "task": 6,
    "question": "Artikkelista käy ilmi, että ainakin viiteen eri politiikan alueeseen kohdistuvassa tutkimuksessa sekä geneerisessä tutkimuksessa on tehty havaintoja tutkimustiedon valikoivasta käytöstä tai ohittamisesta.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 21",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A6.3",
    "task": 6,
    "question": "Artikkelissa esitellyssä tutkimuksessa mainitaan kaksi yliopistoa, jotka olivat tiedontuottajina muihin yliopistoihin nähden heikommassa asemassa.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A6.4",
    "task": 6,
    "question": "Artikkelissa mainitaan tutkimusjulkaisu, jonka mukaan feminististä tietoa suositaan kvantitatiivisessa muodossa.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 17",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A6.5",
    "task": 6,
    "question": "Artikkelissa mainitun tutkimuksen havainnot antavat viitteitä siitä, että ympäristöön liittyvän tutkimuksen rooli korostuu vasta, kun valmisteluvaiheesta edetään päätöksentekoon.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 15–16",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A7.1",
    "task": 7,
    "question": "Mitkä seuraavista tavoitteista ovat leimallisia erityisesti \"Diplomacy for Science\" tiedediplomatiatyypille?",
    "type": "choice",
    "correctAnswerIds": [
      "a",
      "c"
    ],
    "sourceNote": "s. 12",
    "options": [
      {
        "id": "a",
        "text": "Tieteenteon edellytysten parantuminen"
      },
      {
        "id": "b",
        "text": "Tietopohjan laajentaminen"
      },
      {
        "id": "c",
        "text": "Tieteen laadun vahvistuminen"
      },
      {
        "id": "d",
        "text": "Vastauksien hakeminen globaaleihin ongelmiin"
      },
      {
        "id": "e",
        "text": "Globaalien hyödykkeiden turvaaminen"
      },
      {
        "id": "f",
        "text": "Eivät mitkään näistä"
      }
    ]
  },
  {
    "id": "A7.2",
    "task": 7,
    "question": "Mitkä seuraavista väittämistä eivät pidä paikkaansa?",
    "type": "choice",
    "correctAnswerIds": [
      "c",
      "e"
    ],
    "sourceNote": "Kolmas vaihtoehto: s. 17, viides vaihtoehto: Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Kun tutkimuksessa tarkasteltiin tietopohjaista päätöksentekoa, mainittiin organisaatioista erityisesti Ulkopoliittinen instituutti."
      },
      {
        "id": "b",
        "text": "Ohjausryhmät voivat rajoittaa tutkijoiden vapautta."
      },
      {
        "id": "c",
        "text": "Tiedediplomatian vaikutus kansainväliseen politiikkaan on viime aikoina kasvanut."
      },
      {
        "id": "d",
        "text": "Tiedediplomatia tarjoaa haavekuvan siitä, kuinka kansainvälinen politiikka voisi muotoutua yhteisesti sovittujen päämäärien pohjalta."
      },
      {
        "id": "e",
        "text": "Suomen kansainvälisiä suhteita edistetään tieteen avulla etenkin ympäristöongelmista eniten kärsivissä maissa."
      }
    ]
  },
  {
    "id": "A7.3",
    "task": 7,
    "question": "Mitkä seuraavista tiedediplomatiaan liittyvistä väittämistä pitävät paikkansa?",
    "type": "choice",
    "correctAnswerIds": [
      "a",
      "c"
    ],
    "sourceNote": "Ensimmäinen vaihtoehto: s. 1, kolmas vaihtoehto: s. 3–4.",
    "options": [
      {
        "id": "a",
        "text": "Tiedediplomatiassa on kyse erimaalaisten toimijoiden käytänteistä ja keskinäisistä suhteista tieteeseen liittyvissä kysymyksissä sekä näiden käytänteiden ja suhteiden tutkimisesta."
      },
      {
        "id": "b",
        "text": "Tiedediplomatia on monitulkintainen käsite, joten sen avulla voidaan tehokkaasti selittää monia erilaisia ilmiöitä."
      },
      {
        "id": "c",
        "text": "Ketolan analyysissään käyttämässä tiedediplomatian määritelmässä tiedediplomatiaa tarkastellaan ulkopolitiikan, tieteen ja kansainvälisten suhteiden edistäjänä."
      },
      {
        "id": "d",
        "text": "Tiedediplomatian modernin ymmärryksen taustalla on korostunut valtioiden, ideologioiden ja ihmisten välinen kilpailu."
      },
      {
        "id": "e",
        "text": "Ei mikään näistä"
      }
    ]
  },
  {
    "id": "A7.4",
    "task": 7,
    "question": "Mitä seuraavista tiedediplomatian tutkimuksen piirteistä Ketola kritisoi?",
    "type": "choice",
    "correctAnswerIds": [
      "a",
      "c"
    ],
    "sourceNote": "Ensimmäinen ja kolmas vaihtoehto: s. 5",
    "options": [
      {
        "id": "a",
        "text": "Tiedediplomatiakirjallisuuden kuvailevaa luonnetta"
      },
      {
        "id": "b",
        "text": "Tiedediplomatian monitieteistä luonnetta"
      },
      {
        "id": "c",
        "text": "Tiedediplomatiakirjallisuudessa esiintyvää itsetehostusta"
      },
      {
        "id": "d",
        "text": "Tiedediplomatian tutkimukseen varattuja liian niukkoja määrärahoja"
      },
      {
        "id": "e",
        "text": "Ei mitään näistä"
      }
    ]
  },
  {
    "id": "A7.5",
    "task": 7,
    "question": "Mitä näkyviä piirteitä on kriittisessä tiedediplomatiatutkimuksen koulukunnassa?",
    "type": "choice",
    "correctAnswerIds": [
      "b",
      "d"
    ],
    "sourceNote": "Toinen vaihtoehto: s. 5, neljäs vaihtoehto: s. 5–6",
    "options": [
      {
        "id": "a",
        "text": "Koulukunta on saavuttanut laajan suosion Euroopassa."
      },
      {
        "id": "b",
        "text": "Koulukunnassa pyritään muistuttamaan tiedediplomatia-termin taustalla olevista valtakamppailuista."
      },
      {
        "id": "c",
        "text": "Koulukunnassa keskitytään pelkästään tieteen ulkopuolisten valtakamppailuiden selvittämiseen."
      },
      {
        "id": "d",
        "text": "Koulukunnassa halutaan kyseenalaistaa tiedediplomatian tieteellisiä ja diplomaattisia lähtöolettamuksia."
      },
      {
        "id": "e",
        "text": "Ei mitään näistä"
      }
    ]
  },
  {
    "id": "A7.6",
    "task": 7,
    "question": "Mitkä seuraavista Ketolan tutkimukseen liittyvistä väittämistä pitävät paikkansa?",
    "type": "choice",
    "correctAnswerIds": [
      "a",
      "c"
    ],
    "sourceNote": "Ensimmäinen vaihtoehto: s. 10, kolmas vaihtoehto: s. 10–11",
    "options": [
      {
        "id": "a",
        "text": "Tutkimushaastattelujen teemat perustuivat kirjallisuuskatsaukseen ja tutkimushaastattelut raportoitiin nimettöminä."
      },
      {
        "id": "b",
        "text": "Taulukon 2 luokittelun sarakkeista oranssit, violetit ja siniset ovat pelkästään teorialähtöisiä."
      },
      {
        "id": "c",
        "text": "Ketolan käyttämät raportit osoittavat tiedediplomatian muuttuneen aiempaa riskiorientoituneemmaksi."
      },
      {
        "id": "d",
        "text": "Ei mikään näistä"
      }
    ]
  },
  {
    "id": "A8.1",
    "task": 8,
    "question": "Mikä seuraavista tiedediplomatian muutoksia koskevista väittämistä pitää paikkansa?",
    "type": "choice",
    "correctAnswerIds": [
      "c"
    ],
    "sourceNote": "s. 15",
    "options": [
      {
        "id": "a",
        "text": "Tiedediplomatiassa on nähtävissä siirtymä tiede- ja teknologiayhteistyön uhkista ja mahdollisuuksista kohti kestävän kehityksen tavoitteiden mukaisia teemoja."
      },
      {
        "id": "b",
        "text": "Lisääntynyt riskienhallintadiskurssi on osoitus tiedediplomatian painottumisesta maailmanlaajuisten yhteisten ongelmien, kuten ilmastokriisin ratkaisemiseen."
      },
      {
        "id": "c",
        "text": "Suomalainen keskustelu tieteenteon avoimuuden rajoista liittyy tiedediplomatian toimintaympäristössä tapahtuneeseen muutokseen."
      },
      {
        "id": "d",
        "text": "Ei mikään näistä"
      }
    ]
  },
  {
    "id": "A8.2",
    "task": 8,
    "question": "Mikä seuraavista väittämistä pitää paikkansa?",
    "type": "choice",
    "correctAnswerIds": [
      "d"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Neoliberaalin institutionalismin käsite tiedediplomatiassa kuvaa tieteen ja teknologian merkitystä valtaresurssina."
      },
      {
        "id": "b",
        "text": "Ulkopolitiikkaa palveleva tiedontuotanto tarkoittaa, että diplomatiaa hyödynnetään tieteen edistämisessä."
      },
      {
        "id": "c",
        "text": "Tiedediplomatian edistämisen kannalta on hyvä, jos toimijat ovat pelkästään valtiollisia toimijoita."
      },
      {
        "id": "d",
        "text": "Ei mikään näistä"
      }
    ]
  },
  {
    "id": "A8.3",
    "task": 8,
    "question": "Miten artikkelissa luonnehditaan tiedediplomatian tutkimusta?",
    "type": "choice",
    "correctAnswerIds": [
      "d"
    ],
    "sourceNote": "",
    "options": [
      {
        "id": "a",
        "text": "Tiedediplomatian tarpeellisuutta ja merkitystä ei korosteta tutkimuksessa riittävästi."
      },
      {
        "id": "b",
        "text": "Tiedediplomatian tutkijat ovat yksimielisiä siitä, että kansainväliset teknologiahankkeet edistävät demokraattisia yhteiskunnallisia tavoitteita ja parantavat valtioiden välisiä suhteita."
      },
      {
        "id": "c",
        "text": "Muun muassa Latour ja Putnam ovat havainneet neutraalin tieteen ongelmallisuuden tiedediplomatiassa jo varhain."
      },
      {
        "id": "d",
        "text": "Tiedediplomatian tutkimusta ei artikkelissa luonnehdita millään edellä mainituista tavoista."
      }
    ]
  },
  {
    "id": "A8.4",
    "task": 8,
    "question": "Mikä seuraavista tiedediplomatiaan liittyvistä käytänteistä on Ketolan artikkelin mukaan oikein?",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 8–9",
    "options": [
      {
        "id": "a",
        "text": "Tutkittujen maiden joukossa harvinaisinta on keskittyminen tiedediplomatiaan kansainvälisten suhteiden edistäjänä."
      },
      {
        "id": "b",
        "text": "Suomessa tiedediplomatiaa ohjataan ulkoministeriöstä."
      },
      {
        "id": "c",
        "text": "Yleisimmät tiedediplomatian ohjenuorat tutkituissa maissa olivat tieteellinen rationaali ja globaaleihin kysymyksiin orientoituminen."
      },
      {
        "id": "d",
        "text": "Tiedediplomaattisille käytänteille on tyypillistä pysyvyys yli hallituskausien."
      },
      {
        "id": "e",
        "text": "Ei mikään näistä"
      }
    ]
  },
  {
    "id": "A9.1",
    "task": 9,
    "question": "Mikä seuraavista väittämistä viittaa siihen, että tiedediplomatia on sekä subjekti että objekti?",
    "type": "choice",
    "correctAnswerIds": [
      "c"
    ],
    "sourceNote": "s. 1",
    "options": [
      {
        "id": "a",
        "text": "Tiedediplomatia on käsitteenä vakiintumaton."
      },
      {
        "id": "b",
        "text": "Käsitteen tiedediplomatia analyyttinen selitysvoima on heikko."
      },
      {
        "id": "c",
        "text": "Tiedediplomatia on sekä toimintaa että tutkimuskohde."
      },
      {
        "id": "d",
        "text": "Tiedediplomatian käsite on kieliopillisesti monitulkintainen."
      },
      {
        "id": "e",
        "text": "Ei mikään näistä"
      }
    ]
  },
  {
    "id": "A9.2",
    "task": 9,
    "question": "Mikä on ulkopolitiikkaa palvelevan tiedontuotannon keskeinen arvo?",
    "type": "choice",
    "correctAnswerIds": [
      "e"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Kansainvälisyys"
      },
      {
        "id": "b",
        "text": "Tieteen itsenäisyys"
      },
      {
        "id": "c",
        "text": "Maan etu"
      },
      {
        "id": "d",
        "text": "Tieteen vapaus"
      },
      {
        "id": "e",
        "text": "Ei mikään näistä"
      }
    ]
  },
  {
    "id": "A9.3",
    "task": 9,
    "question": "Mikä seuraavista vaihtoehdoista kuvaa parhaiten tiedediplomatian science in diplomacy -kategoriaa?",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 3 ja 4",
    "options": [
      {
        "id": "a",
        "text": "Erilaiset kansainväliset toimijat ovat merkittävässä roolissa."
      },
      {
        "id": "b",
        "text": "Pääpaino on ulkopolitiikassa, jossa hyödynnetään tieteellistä tutkimustietoa päätöksenteon tukena."
      },
      {
        "id": "c",
        "text": "Tieteen merkitys ulkopoliittisen päätöksenteon tukena on vähäinen."
      },
      {
        "id": "d",
        "text": "Tavoitteena on edistää laadukasta tieteentekemistä muun muassa solmimalla kansainvälisiä tutkimus- ja tiedesopimuksia."
      },
      {
        "id": "e",
        "text": "Kiinnostus tutkimusyhteistyötä kohtaan on voimakkaampaa niiden maiden kanssa, joilla on korkeatasoista tutkimusta kuin niiden maiden, jotka ovat tutkimuksellisesti vähemmän edistyneitä."
      }
    ]
  },
  {
    "id": "A9.4",
    "task": 9,
    "question": "Mikä seuraavista vaihtoehdoista kuvaa suomalaista tiedediplomatiaa haastatteluaineiston mukaan?",
    "type": "choice",
    "correctAnswerIds": [
      "d"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Ilmastonmuutos ja siihen liittyvä suomalainen osaaminen korostui erityisesti valtioneuvostovetoisten instrumenttien tarjoamien mahdollisuuksien vuoksi."
      },
      {
        "id": "b",
        "text": "Suomen koulutusvienti nähtiin haastatteluaineistossa merkityksellisenä tekijänä maailmanlaajuisten ongelmien ratkaisemisessa."
      },
      {
        "id": "c",
        "text": "EU-jäsenyys lisää Suomen toimintamahdollisuuksia kansainvälisen tiedediplomatian kentällä."
      },
      {
        "id": "d",
        "text": "Ei mikään näistä"
      }
    ]
  },
  {
    "id": "A10.1",
    "task": 10,
    "question": "Latour oli sitä mieltä, että tieteen keskeinen piirre on neutraalius.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Kyllä"
      },
      {
        "id": "b",
        "text": "Ei"
      }
    ]
  },
  {
    "id": "A10.2",
    "task": 10,
    "question": "Tiedediplomatian tutkimus on usein vallankäytön tutkimusta.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Kyllä"
      },
      {
        "id": "b",
        "text": "Ei"
      }
    ]
  },
  {
    "id": "A10.3",
    "task": 10,
    "question": "Tim Flink edustaa tiedediplomatian tutkimuksessa globaalihallinnallista näkökulmaa.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Kyllä"
      },
      {
        "id": "b",
        "text": "Ei"
      }
    ]
  },
  {
    "id": "A10.4",
    "task": 10,
    "question": "Ketolan mukaan tiedediplomatian tutkimuksessa tulisi nykyistä enemmän keskittyä valtiollisten ja itsenäisten toimijoiden välisten erojen tutkimukseen.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 14",
    "options": [
      {
        "id": "a",
        "text": "Kyllä"
      },
      {
        "id": "b",
        "text": "Ei"
      }
    ]
  },
  {
    "id": "A10.5",
    "task": 10,
    "question": "Kun edistetään kansainvälisiä suhteita tieteen avulla, yhtenä tavoitteena on hyvinvointi.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 4 ja 12",
    "options": [
      {
        "id": "a",
        "text": "Kyllä"
      },
      {
        "id": "b",
        "text": "Ei"
      }
    ]
  },
  {
    "id": "A11.1",
    "task": 11,
    "question": "Tiedediplomatian analyyttinen selitysvoima on heikko, koska tiedediplomatiadiskurssia leimaa geo- ja valtapoliittinen kilpailu.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A11.2",
    "task": 11,
    "question": "Ketolan mukaan tiede edustaa tiedediplomatiassa objektiivisuutta ja diplomatia politiikkaa.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A11.3",
    "task": 11,
    "question": "Kriittisessä tiedediplomatiatutkimuksessa arvostellaan kansainvälisen sääntöpohjaisen järjestelmän toimivuutta ja korostetaan monitieteisten rajat ylittävien tutkimushankkeiden mahdollisuuksia valtioiden välisen konsensuksen edistäjinä.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A11.4",
    "task": 11,
    "question": "Ketola pitää tiedediplomatian valtiolähtöistä tarkastelutapaa turhan kapeana.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 14",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A11.5",
    "task": 11,
    "question": "Ketolan mukaan tiedediplomatia tarjoaa rajoitteistaan huolimatta keinoja puolustaa tieteen vapautta ja edistää maailmanlaajuisten ongelmien ratkaisua.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s. 17",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A12.1",
    "task": 12,
    "question": "Nykyisellään tiedediplomatian keskeisin tavoite on yhdistää maita ja niiden väestöjä ratkomalla yhteisiä globaaleja haasteita.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 15–16",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A12.2",
    "task": 12,
    "question": "Tiedediplomatia toimii keinona erilaisten tavoitteiden ja etujen edistämisessä.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "s.14",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A12.3",
    "task": 12,
    "question": "Ketolan artikkelissa tarkastellun kirjallisuuden perusteella vaikuttaa siltä, että tiedediplomatian osa-alueista \"Science for Diplomacy\" on yleisin tiedediplomatian muoto.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 8–9",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A12.4",
    "task": 12,
    "question": "Suomessa tiedediplomatian tavoitteeksi on noussut pyrkimys läpileikkaavuuteen ja objektiivisuuteen.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Teksti ei sisällä tällaista tietoa.",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A12.5",
    "task": 12,
    "question": "Tiedediplomatian painopisteissä on tapahtunut äkillisiä muutoksia.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 15",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A12.6",
    "task": 12,
    "question": "Englannin kielen kiistattoman valta-aseman vuoksi kieli- ja kulttuuriosaamista ei nähdä tiedediplomatiassa yhtä tärkeänä kuin ennen.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "s. 16.",
    "options": [
      {
        "id": "a",
        "text": "Oikein"
      },
      {
        "id": "b",
        "text": "Väärin"
      }
    ]
  },
  {
    "id": "A13.1",
    "task": 13,
    "question": "Pelkonen ei käsittele ilmastoaiheiden integroitumista osaksi Suomen kansainvälisiä tutkimusyhteistyöverkostoja, mutta Ketola käsittelee.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "Ketola, s. 14",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A13.2",
    "task": 13,
    "question": "Molempien artikkelien tutkimusmenetelmänä käytetään niin sanottua systemaattista kirjallisuuskatsausta.",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Ketola, s. 10, Pelkonen s. 5–6",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A13.3",
    "task": 13,
    "question": "Artikkelien tutkimuksissa ei käytetä aineistona",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Ketola, s. 10, Pelkonen s. 5–8",
    "options": [
      {
        "id": "a",
        "text": "aiempia tutkimuksia"
      },
      {
        "id": "b",
        "text": "Kansallisarkiston aineistoja"
      },
      {
        "id": "c",
        "text": "raportteja"
      },
      {
        "id": "d",
        "text": "haastatteluja"
      }
    ]
  },
  {
    "id": "A13.4",
    "task": 13,
    "question": "Molemmat artikkelit käsittelevät tutkimustiedon hyödyntämistä sekä kansallisesti että kansainvälisesti.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "Ketola, esim. s. 1, 3–4, 7 ja 12–14; Pelkonen esim. s. 2–4, 14–15, 17 ja 23.",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A13.5",
    "task": 13,
    "question": "Tutkimustiedon valikoivasta käytöstä (policy-based evidence) on olemassa tutkimustuloksia viimeiseltä 15 vuodelta. Tiedediplomatian uudestaan suuntautuminen viime vuosikymmenen lopulta voidaan nähdä olevan linjassa tämän näytön kanssa.",
    "type": "choice",
    "correctAnswerIds": [
      "a"
    ],
    "sourceNote": "Ketola, s. 15, Pelkonen s. 21",
    "options": [
      {
        "id": "a",
        "text": "Tosi"
      },
      {
        "id": "b",
        "text": "Epätosi"
      }
    ]
  },
  {
    "id": "A14.1",
    "task": 14,
    "question": "Mihin tiedediplomatian kategoriaan tai kategorioihin tietopohjaisen politiikan ideaali ei ole yhdistettävissä?",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Ketola, s. 3–4, Pelkonen s. 2",
    "options": [
      {
        "id": "a",
        "text": "science in diplomacy"
      },
      {
        "id": "b",
        "text": "diplomacy for science"
      },
      {
        "id": "c",
        "text": "science for diplomacy"
      }
    ]
  },
  {
    "id": "A14.2",
    "task": 14,
    "question": "Tiedediplomatia voi hyödyntää tutkimustietoa",
    "type": "choice",
    "correctAnswerIds": [
      "a",
      "b",
      "c"
    ],
    "sourceNote": "Ketola, s. 7–8, Pelkonen s. 5",
    "options": [
      {
        "id": "a",
        "text": "instrumentaalisesti"
      },
      {
        "id": "b",
        "text": "käsitteellisesti"
      },
      {
        "id": "c",
        "text": "symbolisesti"
      }
    ]
  },
  {
    "id": "A14.3",
    "task": 14,
    "question": "Pelkosen katsauksen johtopäätösten pohjalta voidaan päätellä, että science in diplomacy -tyyppinen toiminta on Suomessa",
    "type": "choice",
    "correctAnswerIds": [
      "b"
    ],
    "sourceNote": "Ketola, s. 3–4, Pelkonen s. 20",
    "options": [
      {
        "id": "a",
        "text": "laajaa ja systemaattista"
      },
      {
        "id": "b",
        "text": "toisinaan tapahtuvaa"
      },
      {
        "id": "c",
        "text": "olematonta"
      }
    ]
  },
  {
    "id": "A14.4",
    "task": 14,
    "question": "Kummankin artikkelin aihepiirit käsittelevät omilla näkökulmillaan tiedon merkitystä yhteiskuntien kehittämisessä. Mikä tai mitkä seuraavista vaihtoehdoista edistävät tietopohjaista päätöksentekoa?",
    "type": "choice",
    "correctAnswerIds": [
      "a",
      "d"
    ],
    "sourceNote": "Ketola, s. 3–4, Pelkonen s. 3 ja 13",
    "options": [
      {
        "id": "a",
        "text": "science in diplomacy"
      },
      {
        "id": "b",
        "text": "politiikkapohjainen tieto"
      },
      {
        "id": "c",
        "text": "governance for bureaucracy"
      },
      {
        "id": "d",
        "text": "valiokuntien asiantuntijakuulemiset"
      }
    ]
  },
  {
    "id": "A14.5",
    "task": 14,
    "question": "Ilmastoaiheet näyttäytyvät kummassakin artikkelissa hieman eri tavoin sanoitettuina. Millaisissa asiayhteyksissä ilmastopolitiikkaa on käsitelty?",
    "type": "choice",
    "correctAnswerIds": [
      "a",
      "c",
      "d"
    ],
    "sourceNote": "Ketola, s. 14, Pelkonen s. 14–15",
    "options": [
      {
        "id": "a",
        "text": "kansalliset ilmastostrategiat"
      },
      {
        "id": "b",
        "text": "alueellinen ilmasto-oikeudenmukaisuus"
      },
      {
        "id": "c",
        "text": "maakuvatyö"
      },
      {
        "id": "d",
        "text": "tiedon vaihdon verkostot"
      }
    ]
  }
];

export const freeExamTaskArticles: Record<number, string> = {
  "1": "Aineisto 1",
  "2": "Aineisto 1",
  "3": "Aineisto 1",
  "4": "Aineisto 1",
  "5": "Aineisto 1",
  "6": "Aineisto 1",
  "7": "Aineisto 2",
  "8": "Aineisto 2",
  "9": "Aineisto 2",
  "10": "Aineisto 2",
  "11": "Aineisto 2",
  "12": "Aineisto 2",
  "13": "Molemmat aineistot",
  "14": "Molemmat aineistot"
};

export const freeExam2026Articles = [
  {
    id: "aineisto-1",
    title: "Tutkimustiedon hyödyntäminen valtioneuvoston ja eduskunnan päätöksenteossa ja valmistelussa – kirjallisuuskatsaus",
    author: "Antti Pelkonen",
    localPdfUrl: "/aineistot/valintakoe-g-2026/Aineisto-1-1.pdf",
    originalPdfUrl: "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Aineisto-1-1.pdf",
    pages: [
  {
    "page": 1,
    "text": "1 \n \nTIEDEPOLITIIKKA 4/2024 \nTutkimustiedon hyödyntäminen valtioneuvoston ja \neduskunnan päätöksenteossa ja valmistelussa  \n– kirjallisuuskatsaus \nAntti Pelkonen \nSuomessa ei ole tehty tutkimukseen perustuvaa kokoavaa analyysiä tutkitun tiedon \nhyödyntämisestä poliittisen päätöksenteon tukena. Tässä artikkelissa kartoitetaan \nkirjallisuuskatsauksen avulla aiheeseen liittyvää tutkimusta ja luodaan tällaista \nkokonaiskuvaa valtioneuvoston ja eduskunnan päätöksenteon kontekstissa. Artikkeli \ntarkastelee, mitä olemassa oleva tutkimus kertoo tutkimustiedon hyödyntämisestä ja \nerityisesti hyödyntämisen yleisyydestä valtioneuvoston ja eduskunnan päätöksenteossa. \nArtikkelissa tarkastellaan 38 tutkimusta vuosilta 2010–2023. \nJohdanto \nYhteiskunnallisen päätöksenteon tietopohjan vahvistamisesta on puhuttu pitkään sekä \nkansainvälisesti että Suomessa (esim. Baron, 2018). Suomessa aihetta pohdittiin varsin \nintensiivisesti muun muassa 2010-luvun alussa, jolloin valtioneuvoston piirissä asiaa \ntarkasteli sekä poikkihallinnollinen kehittämistyöryhmä (valtioneuvoston kanslia, 2011) että \nselvityshenkilö (Raivio, 2014). Vuonna 2013 valtion tutkimuslaitosten ja -rahoituksen \nkokonaisuudistuksessa (ns. TULA-uudistus) linjattiin, että ”yhteiskuntapolitiikan valmistelun, \npäätöksenteon ja toimeenpanon tulisi perustua tutkittuun tietoon” (valtioneuvosto, 2013, s. \n2). Aihepiirin kehittämistyötä on sittemmin tehty sekä valtionhallinnossa että tiedeyhteisön \npiirissä.  \n2020-luvulla myös hallitusohjelmakirjauksissa on tunnistettu tutkitun tiedon merkitys \npäätöksenteon tukena. Pääministeri Marinin hallituksen (2019–2023) ohjelmassa linjattiin \nlupauksista politiikan uudistamiseksi. Yksi lupauksista koski tietopohjaista politiikkaa: \nhallitus sitoutui ”tietopohjaisen politiikan tekoon sekä systemaattiseen vaikutusarviointiin \nkaikessa lainvalmistelussa” sekä yhteistyön syventämiseen tiedeyhteisön kanssa \n(valtioneuvosto, 2019, s. 11). Vastaavasti pääministeri Orpon hallitusohjelmassa (2023–2027) \ntodetaan, että ”hallitus hyödyntää yhteiskunnallisia tietovarantoja ja tutkittua tietoa \naktiivisesti päätöksenteossaan, jotta rajalliset resurssit voidaan kohdistaa vaikuttaviin \ntoimenpiteisiin” (valtioneuvosto 2023, s. 212). Vuonna 2019 Kiinasta käynnistynyt COVID-19-\npandemia nosti tieteen ja poliittisen päätöksenteon suhteen globaalisti aivan uudella tavalla \nvalokeilaan ja suuren kiinnostuksen kohteeksi. \nJulkisessa keskustelussa sekä Suomessa että laajemminkin päätöksenteon \ntietopohjaisuudesta esitetään aika ajoin erilaisia näkemyksiä ja arvioita. Arviot pohjautuvat"
  },
  {
    "page": 2,
    "text": "2 \n \nusein esimerkiksi henkilökohtaisiin kokemuksiin, satunnaisiin prosesseihin tai yksittäisten \ntutkimusten tuloksiin. Tutkimustietoon perustuvaa, kokoavaa analyysiä siitä, kuinka yleistä \ntutkimustiedon hyödyntäminen päätöksenteossa on ja minkä tahojen tuottamaa tutkittua \ntietoa hyödynnetään päätöksenteon ja päätöksenteon valmistelun tukena erilaisissa \nkansallisissa konteksteissa, ei useinkaan ole. Tässä artikkelissa pyritään \nkirjallisuuskatsauksen avulla luomaan tällaista analyysiä Suomen, ja erityisesti \nvaltioneuvoston ja eduskunnan päätöksenteon, kontekstissa. Kokoavalla analyysillä \ntarkoitetaan tässä artikkelissa nimenomaan näkymää tutkimustiedon hyödyntämisen \nlaajuuteen ja yleisyyteen päätöksenteossa. \nArtikkeli etenee seuraavasti. Seuraavassa luvussa tarkastellaan aiempaa kansainvälisestä \ntutkimusta suhteessa artikkelin keskeisiin kiinnostuksen kohteisiin ja sen pohjalta esitetään \ntäsmennetyt tutkimuskysymykset. Tämän jälkeen esitetään kirjallisuuskatsauksen \ntoteutustapa, menetelmät sekä muodostettu aineisto ja perustellaan näihin liittyvät keskeiset \nratkaisut. Seuraavissa kolmessa luvussa kuvataan tutkimuksen tulokset ja viimeisessä \nluvussa vedetään tulokset yhteen ja tehdään niiden perusteella johtopäätöksiä. \nTietopohjainen päätöksenteko – Tutkimustiedon hyödyntämisen yleisyys, \npolitiikkapohjainen tieto ja kansalliset erityispiirteet \nTietopohjaisesta politiikasta on viime vuosina tullut ideaali, jota muun muassa monet \nkansainväliset organisaatiot (esimerkiksi Euroopan unioni, Taloudellisen yhteistyön ja \nkehityksen järjestö OECD ja Maailman terveysjärjestö WHO) voimallisesti edistävät. Samalla \naihetta koskeva kansainvälinen tutkimus on lisääntynyt. Tutkimuksessa keskeisiä \nkiinnostuksen kohteita ovat olleet muun muassa kysymykset siitä, mitkä tekijät edistävät ja \nestävät tutkimustiedon käyttöä, miten tutkimuksen hyödyntämistä voitaisiin lisätä ja \nminkälaisia vaikutuksia tutkimustiedon edistämiseen pyrkivillä toimenpiteillä on ollut (esim. \nOliver ym., 2014). Mielenkiintoista on, että kansainvälisessä tutkimuksessa on varsin vähän \ntarkasteltu kysymystä siitä, missä määrin poliittinen päätöksenteko ja päätöksenteon \nvalmistelu todella on tutkimusnäyttöön perustuvaa. Esimerkiksi Oliver ym. (2014) toteavat, \nettä tutkimuksen perusteella tiedetään yllättävän niukasti siitä, missä määrin \npäätöksentekijät ja valmistelijat tutkimustietoa käyttävät. Vastaavasti Head (2015, s. 474) \narvioi, että on vähän tutkimusta siitä, mitä tiedon lähteitä ja miten tutkimustietoa \npäätöksenteossa käytetään. Erityisen vähän on tutkimuksia, jotka pyrkivät määrällisesti \narvioimaan, missä määrin ja miten tutkimusta käytetään poliittisten päätösten tukena (Zardo \n& Collie, 2015). Esimerkiksi terveyspolitiikan osalta Masood ym. (2020) arvioivat, että on selvä \npuute laajamittaisesta, kvantifioivasta näytöstä koskien sitä, missä määrin päätöksentekijät \nhyödyntävät tutkimustietoa. Samanlaiseen tulokseen päätyvät Orton ym. (2011) \nsystemaattisessa kirjallisuuskatsauksessa. Kun otetaan huomioon aihetta tarkastelevan \nkansainvälisen tutkimuskirjallisuuden vähyys, kysymys tutkimustiedon hyödyntämisen \nyleisyydestä on erityisen kiinnostava, sillä sen voidaan ajatella olevan koko tietopohjaisen \npäätöksenteon ajatuksen taustalla. Kysymys on myös poliittis-hallinnollisen järjestelmän"
  },
  {
    "page": 3,
    "text": "3 \n \nkannalta tärkeä: jos tiedämme kovin vähän tutkimustiedon hyödyntämisen yleisyydestä, se \nheijastuu tietämykseemme koko tietopohjaisen päätöksenteon tilasta. \nYksittäisiä, laajoja aineistoja hyödyntäviä kansainvälisiä tutkimuksia tutkimustiedon käytön \nyleisyydestä on kuitenkin olemassa. Niiden tulokset viittaavat hieman eri suuntiin (ks. myös \nOECD, 2020, s. 14). Newmanin ym. (2017, s. 165) laajan kyselytutkimuksen mukaan politiikan \nvalmistelijat eivät systemaattisesti hyödynnä akateemista tutkimustietoa politiikka-\nanalyysissä ja valmistelussa. Williamson ym. (2019) analysoivat tutkimustiedon käyttöä 131 \npolitiikkadokumentin valmistelussa Australiassa terveyspolitiikan alueella ja saivat \ntulokseksi, että yleisesti ottaen tutkimustietoa hyödynnettiin ”kohtuullisesti”. \nSamansuuntaiseen tulokseen päätyy edellä mainittu Masoodin ym. (2020) systemaattinen \nkatsaus: tutkimus antaa ”maltillista näyttöä” siitä, että erityyppistä tutkimustietoa käytetään \npolitiikkapäätösten valmistelun tukena. Toisaalta on myös tutkimuksia, jotka raportoivat \ntutkimustiedon vahvasta ja laajasta hyödyntämisestä. Esimerkiksi Yin ym. (2021) analysoivat \n7730:tä COVID-19-kriisiin liittyvää politiikkadokumenttia ja päätyivät johtopäätökseen, että \nglobaalisti tarkastellen politiikkadokumentit merkittävässä määrin kytkeytyivät \najankohtaiseen, vertaisarvioituun ja korkeatasoiseen tieteelliseen tutkimukseen. Artikkeli \ntuntuisi osoittavan, että tietyntyyppisissä tilanteissa, tässä tapauksessa globaalin pandemian \nolosuhteissa, tutkimustietoon tukeutuminen voi olla ekstensiivistäkin.  \nTietopohjaisen politiikan ideaali voi joissain tapauksissa myös kääntyä toiseen ääripäähän. \nNäin on esimerkiksi tilanteissa, joissa tutkimustietoa käytetään valikoivasti poimien vain \ntavoiteltua ratkaisua ja poliittista linjausta tukevaa tutkimusnäyttöä päätöksenteon tueksi. \nTietopohjainen politiikka muuttuu tällöin politiikkapohjaiseksi tiedoksi (policy-based \nevidence). Sen voidaan nähdä perustuvan kahdentyyppiseen valikoivuuteen: tutkimusnäyttö \nvoidaan ohittaa tai vääristää, mikäli se on ristiriidassa poliittisten arvojen tai ideologian \nkanssa (normatiivinen valikoivuus), tai näyttö voidaan sivuuttaa tai tulkita väärin johtuen \npoliittis-hallinnollisen järjestelmän rajoittuneesta havaintokyvystä (kognitiivinen valikoivuus) \n(Strassheim & Kettunen, 2014). Tutkimuskirjallisuudesta löytyy runsaasti esimerkkejä \npolitiikkaprosesseista, joissa tutkimusnäyttöä on hyödynnetty valikoivasti eri tavoin (esim. \nParkhurst, 2017, s. 47–49). Cairneyn (2019) mukaan tietopohjainen politiikka ja \npolitiikkapohjainen näyttö voidaankin nähdä eräänlaisena jatkumona, jonka ääripäissä ovat \nselkeästi kumpaankin kategoriaan kuuluvat tilanteet. Näiden väliin asettuu monenlaisia \ntilanteita, joissa on elementtejä kummastakin ja joita on viime kädessä vaikea kategorisoida \nselkeästi kummankaan otsikon alle. Mielenkiintoista on, että kansainvälisiä tutkimuksia, \njoissa systemaattisesti arvioitaisiin valikoivan tutkimustiedon käytön yleisyyttä, ei vaikuttaisi \nolevan.  \nAiempi tutkimus antaa vahvoja viitteitä myös siitä, että tutkimustiedon käytön toimintatavat \novat vahvasti kansallisesti institutionalisoituneita ja juurtuneita ja ne vaihtelevat merkittävästi \neri maiden välillä. Tutkimuksen hyödyntämisen edellytyksiin vaikuttavia tekijöitä ovat \nesimerkiksi politiikan teon tavat ja kulttuuri, hallintasuhteet, tutkimustiedon tarjonta ja"
  },
  {
    "page": 4,
    "text": "4 \n \ntuottajat sekä yleinen tutkimuksen ja tieteen arvostus, tutkimustiedon kysyntä sekä kytkennät \ntutkimustiedon tuottajien ja käyttäjien välillä (esim. Nutley ym., 2010). Näihin tekijöihin \nliittyvien kansallisten erityispiirteiden voi olettaa heijastuvan vahvasti siihen, missä määrin, \nmiten ja minkä tahojen tuottamaa tutkimustietoa päätöksenteossa hyödynnetään. Toki on \nhuomattava, että monet näistä tekijöistä voivat vaihdella kansallisesti eri politiikkasektoreilla. \nOn esimerkiksi esitetty, että tietoon pohjautuvan politiikan edellytykset ovat paremmat \nsellaisilla politiikka-alueilla, joissa ideologiset kiistat ovat vähäisempiä ja tietty \npolitiikkaparadigma tai lähestymistapa on jossain määrin vakiintunut (Head, 2015). Joka \ntapauksessa eri politiikkasektoreilla voi ajatella olevan erilaisia taipumuksia tutkimustiedon \nhyödyntämiseen ja ne voivat myös vaihdella ajan yli.   \nModerneissa yhteiskunnissa tutkimustietoa tuottavat hyvin monenlaiset toimijat. Kysymys \nsiitä, minkä tahojen tuottamaan tietoa päätöksenteon tukena hyödynnetään, voikin kytkeytyä \nsekä edellä esiintuotuun tiedon valikoivaan käyttöön että kansallisiin erityispiirteisiin. Voi \nesimerkiksi olla, että kansallisista erityispiirteistä tai institutionaalisista rakenteista johtuen \nerilaisten tiedontuottajien asema suhteessa päätöksentekoon poikkeaa toisistaan. Samoin \nvoi olla, että asiaan vaikuttaa tutkimustiedon mahdollinen valikoiva käyttö siten, että tietyissä \ntilanteissa tietoisesti vain tiettyjen tiedontuottajien tietoa hyödynnetään.  \nKytkeytyen edellä kuvattuun aiempaan tutkimuskirjallisuuteen tässä artikkelissa etsitään \nkirjallisuuskatsauksen avulla vastauksia seuraaviin tutkimuskysymyksiin: \n• Minkälaisista näkökulmista tutkimustiedon hyödyntämisen yleisyyttä valtioneuvoston \nja eduskunnan päätöksenteossa ja päätöksenteon valmistelussa on \ntutkimuskirjallisuudessa tarkasteltu?  \n• Minkälaisia hyödyntämisen yleisyyttä tarkastelevia tutkimuksia on olemassa?  \n• Minkälaisia havaintoja on tehty hyödyntämisen yleisyydestä tutkimuskirjallisuudessa? \nTähän liittyen kiinnitetään huomiota myös tutkimustiedon valikoivan käytön \nyleisyyteen. \n• Mitä tutkimukset kertovat siitä, minkä tahojen tuottamaa tietoa päätöksenteon tukena \nhyödynnetään? \nTutkimus tuo kansainvälisestikin katsottuna uudenlaista näkökulmaa tutkimukseen, joka \ntarkastelee tutkitun tiedon ja päätöksenteon suhteita. Kuten edellä todettiin, tutkimustiedon \nhyödyntämisen yleisyyttä on kansainvälisessäkin tutkimuksessa tarkasteltu varsin vähän.  \nVastaavanlaisia, kokoavia analyysejä yhden maan tilanteesta ei näyttäisi ole olemassa, \nainakaan englanniksi julkaistuna. Tässä suhteessa artikkeli avaa uuden tarkastelutavan \naihepiiriin, ja olisikin hyvin kiinnostavaa, mikäli vastaavia analyysejä tehtäisiin Suomen \nkannalta kiinnostavien verrokkimaiden (esim. Pohjoismaiden) konteksteissa.  \nTutkimustiedon hyödyntäminen päätöksenteossa ja päätöksenteon valmistelussa voi olla \nhyvin moninaista. Alan tutkimuksessa viitataan usein ideaalityyppiseen jaotteluun, jonka \nmukaan tutkimustiedon hyödyntäminen voi olla instrumentaalista, käsitteellistä tai"
  },
  {
    "page": 5,
    "text": "5 \n \nsymbolista (esim. Amara ym., 2004; Weiss, 1979). Instrumentaalinen hyödyntäminen viittaa \ntilanteisiin, jossa tutkimustuloksia hyödynnetään suoraviivaisesti osana päätöksentekoa. \nKäsitteellisessä hyödyntämisessä puolestaan tietoa käytetään ymmärryksen lisäämiseen, \nkun taas symbolisessa hyödyntämisessä tutkimustietoa hyödynnetään toiminnan tai (jo \npäätettyjen) toimenpiteiden perustelemiseen tai legitimointiin, jolloin kyse on pitkälti tiedon \npoliittisesta tai taktisesta käytöstä. Hyödyntämisen tavat eivät ole toisiaan poissulkevia ja \nniitä voidaan jakaa edelleen yksityiskohtaisempiin muotoihin. Olennaista kuitenkin on, että \nideaalityypit kuvaavat sitä, miten tutkimustietoa voidaan päätöksentekoprosesseissa käyttää \nmonilla eri tavoin sekä monin erilaisin perustein, motiivein ja tavoittein. Aihetta tarkastelevan \ntutkimuksen näkökulmasta tärkeä seuraus tästä moninaisuudesta on se, että hyödyntämistä \nvoidaan olettaa tapahtuvan myös siten, ettei siitä jää merkintää tai muuta jälkeä mihinkään \nasiakirjaan. Näin ollen hyödyntämistä voi olla tutkimuksen keinoin vaikea tavoittaa, ja sitä \njoudutaan analysoimaan usein myös epäsuorasti, esimerkiksi tarkastelemalla \ntutkimustoimijoiden edustusta eli ”läsnäoloa” erilaisissa päätöksenteko- ja \nvalmistelutilanteissa. Olennainen seuraus tästä on, ettei ole olemassa yhtä (tai useampaa) \nselkeää mittaria tai seikkaa, joka kokonaisvaltaisesti kertoisi tutkimustiedon \nhyödyntämisestä, vaan asiaa on tutkimuksen keinoin perustellusti lähestytty monenlaisista \nnäkökulmista. Tämä näkyy myös tämän tutkimuksen aineiston muodostavissa tutkimuksissa. \nSamalla on huomattava, että myös päätöksenteko- ja valmisteluprosessit ja -tilanteet ovat \nmoninaisia. Lainvalmistelu on sekä valtioneuvoston että eduskunnan osalta keskeinen \nprosessi, mutta etenkin valtioneuvoston osalta kyseeseen tulevat myös monenlaiset muut \npäätöstilanteet ja niiden valmistelu, esimerkiksi muu sääntely, strategiat ja ohjausasiakirjat. \nAineisto ja menetelmät \nTässä kirjallisuuskatsauksessa yhdistetään kartoittavan (scoping review) ja systemaattisen \nkirjallisuuskatsauksen (systematic review) lähestymistapoja. Molemmissa katsaustyypeissä \ntutkimusaineistona ovat tietystä aiheesta tehdyt aiemmat tutkimukset. Katsauksissa \nolemassa olevia tutkimuksia etsitään laajasti useista luotettavista tietokannoista, kuvataan \ntutkimusten valinnan ja poissulkemisen kriteerit ja johtopäätökset johdetaan aineiston \nmuodostavien tutkimusten tuloksista (Petticrew & Roberts, 2006). Keskeinen ero \nkatsaustyyppien välillä liittyy siihen, minkälaisia kysymyksiin niitä sovelletaan. Systemaattiset \nkatsaukset tarkastelevat tarkasti rajattuja kysymyksiä, kun taas kartoittavat katsaukset \nkäsittelevät laajempia kysymyksiä ja pyrkivät luomaan kokonaiskuvaa olemassa olevasta \ntutkimustiedosta ja siitä, minkälaisia tutkimuksia tietystä aiheesta tai tutkimuskysymyksistä \non olemassa. Kartoittavat katsaukset ovat luonteeltaan kuvailevampia kuin systemaattiset \nkatsaukset, jotka pyrkivät tarjoamaan hyvin rajatun tuloksen tarkasti rajattuun \ntutkimuskysymykseen. \nTämä tutkimus on luonteeltaan kartoittava katsaus: siinä pyritään luomaan kokonaiskuvaa ja \nkartoittamaan olemassa olevaa tutkimusta liittyen tutkimustiedon hyödyntämiseen \npäätöksenteon tukena ja erityisesti kysymykseen hyödyntämisen yleisyydestä ja tietoa"
  },
  {
    "page": 6,
    "text": "6 \n \ntuottavista tahoista. Toisaalta siinä hyödynnetään systemaattisissa katsauksissa normaalisti \ntoteutettua menettelyä, jonka mukaan katsaukseen sisällytetyt artikkelit myös arvioidaan. \nArviointia ei kartoittavissa katsauksissa välttämättä yleensä tehdä.  \nKartoittavan katsauksen tavoitteiden mukaisesti tässä artikkelissa pyritään kartoittamaan \ntutkimusta, joka tarkastelee tutkimustiedon hyödyntämisen yleisyyttä ja päätöksenteon \ntukena käytetyn tiedon tuottajia, sekä muodostamaan tästä tutkimuksesta ja siinä saaduista \nhavainnoista kokonaiskuvaa. Tästä syystä tarkasteluun on sisällytetty myös sellaisia \ntutkimuksia, joissa kysymykset hyödyntämisen yleisyydestä tai päätöksentekoa tukevan \ntutkimustiedon tuottajista eivät ole tutkimusten pääkohde, mutta niitä on tutkimuksissa \ntarkasteltu (osana tutkimusta), ja jotka siten tuottavat olennaista tietoa tämän katsauksen \ntutkimuskysymyksiin. Tavoitteena on siis ollut kartoittaa ja koostaa tutkimusnäyttöä \nmahdollisimman laaja-alaisesti.  \nTässä artikkelissa toteutetussa kirjallisuushaussa hyödynnettiin pääasiallisesti kolmea \ntietokantaa: Summon-, Finna- ja Melinda-tietokantoja. Kuvaus tietokannoista sekä \ntoteutetuista hauista on liitteessä 1. Kirjallisuuskatsaukseen sisällytettävien tutkimusten \nvalinnassa sovellettiin seuraavia sisäänottokriteerejä: \n1) Tutkimus tarkastelee tutkimustiedon hyödyntämistä päätöksenteossa Suomessa. \n2) Tutkimus käsittelee tutkimustiedon hyödyntämistä valtioneuvoston tai eduskunnan \nvalmisteluun tai päätöksentekoon kytkeytyen. \n3) Tutkimus perustuu empiiriseen tutkimusaineistoon. \n4) Tutkimus on julkaistu 1.1.2010 jälkeen. \n5) Tutkimus tuottaa tietoa tämän kirjallisuuskatsauksen tutkimuskysymyksiin. \nKirjallisuuskatsauksessa huomioitiin sekä vertaisarvioitu tutkimuskirjallisuus että \ntutkimusraportit ja muu ”harmaa kirjallisuus”. Vertaisarvioimattomia tutkimuksia ei suljettu \nkatsauksen ulkopuolelle, sillä aiheesta on tutkimuksia varsin rajallinen määrä ja tavoitteena \noli kokoavan analyysin luominen. Vertaisarvioimattomien tutkimusten sisällyttämistä \nsystemaattisiin tai kartoittaviin katsauksiin pidetään tärkeänä juuri tulosten kattavuuden \nnäkökulmasta (Haddaway ym., 2020). Rajautuminen vertaisarvioituun kirjallisuuteen olisi \nkarsinut tuloksia tutkimuksen tavoitteeseen nähden epätarkoituksenmukaisella tavalla. \nTutkimusten tulosten käsittelyn yhteydessä vertaisarvioidut tutkimukset on merkitty \nkursiivilla, jotta lukija tietää, milloin viitataan vertaisarvioituun ja milloin \nvertaisarvioimattomaan tutkimukseen (esim. Elomäki ym., 2021). \nKirjallisuushaussa tutkimuksia löytyi 967. Hakuprosessin aikana löydettiin lisäksi muista \nlähteistä (mm. suoraan kirjoittajilta, verkkosivustoilta ja artikkelien lähdeluetteloista) 35 \nhakutuloksiin sisältymätöntä, teeman kannalta relevantilta vaikuttavaa tutkimusta. \nTutkimusten vastaavuus sisäänottokriteerien suhteen arvioitiin kahdessa vaiheessa, ensin \nabstraktien osalta ja tämän vaiheen läpäisseiden tutkimusten osalta koko tekstin perusteella \n(ks. kuvio 1)."
  },
  {
    "page": 7,
    "text": "7 \n \nSisäänottokriteerien arviointivaiheen jälkeen jäljellä oli 45 tutkimusta. Tutkimukset arviointiin \nhyödyntämällä kahta arviointikehikkoa: laadulliset tutkimukset arviointiin tukeutuen Critical \nAppraisal Skills Programmen (2018) arviointikriteeristöön ja määrälliset tutkimukset \nPetticrew’n ja Robertsin (2006, s. 142–143) kriteeristöön. Tässä yhteydessä suljettiin pois \nseitsemän tutkimusta, joista kuusi oli pro gradu -tutkielmia ja yksi muu vertaisarvioimaton \ntutkimus.1 \nLopulliseen analyysiin sisällytettiin 38 tutkimusta, joista koottiin keskeiset tiedot Excel-\ntietokantaan: tekijä(t), julkaisu, julkaisuvuosi, tieto vertaisarvioinnista, tutkimuksen aineistot \nja menetelmät, päätöksenteon konteksti, tutkimuksen tarkempi kohdentuminen sekä \ntarkasteluajanjakso ja linkki tutkimukseen. Analyysiin sisällytetyt tutkimukset on kuvattu \nliitteessä 2.  \nKatsaukseen sisällytettyjen tutkimusten analyysissä tutkimukset jaettiin ensin pääasiallisen \ntutkimuskohteen perusteella kahteen pääkategoriaan. Ensimmäisen kategorian muodostivat \ngeneeriset tutkimukset eli tutkimukset, jotka tarkastelevat tutkimustiedon hyödyntämistä \nvaltioneuvoston tai eduskunnan valmistelussa tai päätöksenteossa yleisesti riippumatta \npolitiikkasektoreista. Toisen kategorian muodostivat politiikkasektorikohtaiset tutkimukset, \njotka kohdistuvat yleensä yhteen politiikan lohkoon. Geneerisiä tutkimuksia löytyi kaikkiaan \n13 ja sektorikohtaisia 25 (ks. taulukko 1). Näiden kahden kategorian sisällä tehtiin tarkempia \njäsennyksiä tutkimusten kohdentumisen osalta. Tämän jälkeen artikkeleista etsittiin \ntutkimuskysymysten suhteen olennaisimmat tulokset."
  },
  {
    "page": 8,
    "text": "8 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nKuvio 1. Kirjallisuushaun toteutusprosessi. \n \nTietokantojen hakutulos \nkokonaisuudessaan (N = 967) \nMuista lähteistä löydetyt \nartikkelit (N = 37) \nArtikkeleita tuplien poistamisen \njälkeen (N = 785) \nAbstraktien läpikäynti (N = 785) \nKoko tekstien läpikäynti \n(N = 112) \nLaadunarviointiin etenevät \nartikkelit (N = 45) \nSystemaattiseen \nkatsaukseen valitut \nartikkelit (N = 38) \nAbstraktien perusteella \npoissuljetut (N = 673) \n1. Ei empiirinen tutkimus \n(N = 126) \n2. Ei valtioneuvosto tai \neduskunta (N = 37) \n3. Ei tutkimustiedon \nhyödyntäminen (N = 280) \n4. Ei poliittinen \npäätöksenteko (N = 156) \n5. Ei Suomi (N = 69) \n6. Ei saatavilla tai \nluettavissa (N = 4) \n7. Toisen julkaisun aiempi, \neriniminen versio (N = 1) \nKoko tekstin perusteella \npoissuljetut (N = 67) \n1. Ei empiirinen tutkimus \n(N = 20) \n2. Ei valtioneuvosto tai \neduskunta (N = 15) \n3. Ei tutkimustiedon \nhyödyntäminen (N = 23) \n4. Ei poliittinen \npäätöksenteko (N = 5) \n5. Ei Suomi (N = 2) \n6. Ei saatavilla tai \nluettavissa (N = 1) \n7. Toisen julkaisun aiempi, \neriniminen versio (N = 1) \nLaadunarvioinnissa \npoissuljetut \nartikkelit (N = 7) \nValinta \nArviointi \nKoko tekstit \nAbstraktit \nIdentifiointi"
  },
  {
    "page": 9,
    "text": "9 \n \nKaikista tutkimuksista 66 % on vertaisarvioituja (25/38), mutta vertaisarvioidut tutkimukset \njakaantuvat epätasaisesti geneeristen ja sektorikohtaisten tutkimusten välillä. Geneerisistä \ntutkimuksista vertaisarvioituja on 31 % (4/13), kun taas sektorikohtaisista tutkimuksista niitä \non valtaosa (84 %, 21/25). Sektorikohtaisista vertaisarvioiduista tutkimuksista suuri osa (76 \n%, 16/21) on kansainvälisesti vertaisarvioituja.  \nTaulukko 1. Analyysiin sisällytetyt tutkimukset \nTutkimukset \nGeneeriset \nSektorikohtaiset \nYhteensä \nYhteensä \n13 \n25 \n38 \nKv. vertaisarvoidut \n1 \n16 \n17 \nKotimaiset vertaisarvioidut \n3 \n5 \n8 \nVertaisarvioimattomat \n9 \n4 \n13 \n \n \n \n \nLaadulliset ja määrälliset \n7 \n5 \n12 \nLaadulliset \n4 \n19 \n23 \nMäärälliset \n2 \n1 \n3 \n \nVastaavasti kun katsotaan tutkimusmenetelmiä, huomataan, että suurehko osa kaikista \ntutkimuksista (61 %, 23/38) oli laadullisia. Laadullisia ja määrällisiä menetelmiä yhdistäviä \ntutkimuksia oli kolmannes tutkimuksista, kun taas yksinomaan määrällisiä menetelmiä \nhyödyntäviä tutkimuksia oli vain kolme kappaletta. Sektorikohtaisissa tutkimuksissa (76 %, \n19/25) laadullisten osuus korostuu geneerisiä (31 %, 4/13) huomattavasti enemmän. \nYhteenvetäen voisi sanoa, että sektorikohtainen tutkimus on tyypillisesti vertaisarvioitu \nlaadullinen tutkimus, kun taas geneerinen tutkimus on vertaisarvioimaton ja laadullinen tai \nlaadullisia ja määrällisiä aineistoja yhdistävä tutkimus. \nSeuraavissa kolmessa luvussa tarkastellaan löydettyjen tutkimusten näkökulmia ja keskeisiä \ntuloksia. Ensin käsitellään geneerisiä tutkimuksia siten, että aluksi tarkastellaan \nvaltioneuvoston päätöksentekoa ja sitten eduskuntaa tarkastelevia geneerisiä tutkimuksia. \nTämän jälkeen tarkastellaan sektorikohtaisia tutkimuksia. \nTutkimustiedon hyödyntäminen valtioneuvoston päätöksenteossa ja \npäätöksenteon valmistelussa \nValtioneuvoston päätöksentekoon ja sen valmisteluun kohdistuvat geneeriset tutkimukset \nvoidaan jakaa tutkimuskohteen perusteella kolmeen ryhmään. Ensimmäisen ryhmän \nmuodostavat tutkimukset, jotka kohdistuvat ministeriöiden lainvalmisteluun, ja toisen \nryhmän tutkimukset, jotka tarkastelevat tutkijoiden edustusta ministeriöiden työryhmissä. \nKolmannessa ryhmässä ovat tutkimukset, jotka tarkastelevat päätöksentekoa tukevien \ntutkimusrahoitusinstrumenttien hyödyntämistä."
  },
  {
    "page": 10,
    "text": "10 \n \nTutkimustiedon hyödyntäminen ministeriöiden lainvalmistelussa \nKattavin tutkimus tutkimustiedon käytön yleisyydestä ministeriöiden lainvalmistelussa on \nNieminen ym. (2019). Tutkimuksessa analysoidaan tutkimusviittauksia vuoden 2017 \nhallituksen esityksissä ja huomataan, että hieman yli puolet esityksistä (55 %) sisälsi ainakin \nyhden viittauksen tutkimustietoon (Nieminen ym., 2019, s. 33). Tutkimuksessa havaitaan \nmyös, että työryhmissä valmistelluissa lakihankkeissa suuressa osassa (79 %) oli \ntutkimusviitteitä ja että laajoissa lakihankkeissa lähes kaikissa oli tutkimusviitteitä. \nTutkimuksesta ei kuitenkaan käy ilmi, kuinka suuressa osassa hallituksen esityksiä olisi \nhyödynnetty tutkimusta laajemmin. Verrattuna aiempiin tutkimuksiin tutkimusviittausten \nmäärän havaitaan lisääntyneen ”noin 20 prosenttiyksikön verran” (Nieminen ym., 2019, s. 55). \nNiemisen ym. tutkimuksessa todetaan myös, että vuoden 2017 hallituksen esityksissä suurin \ntutkimustiedon tuottaja oli hallinto, joka tuotti 59 % kaikista viittauksista. Vain 6 % kaikista \ntutkimusviittaushavainnoista luokiteltiin luokkaan akateeminen tutkimustieto, ja \ntutkimuksessa todetaan, että ”kaiken kaikkiaan pelkästään akateemista tutkimusta \nhyödynnettiin verrattain vähän” (Nieminen ym., 2019, s. 47).2 \nSlantin ym. (2014) haastatteluaineistoja hyödyntävässä tutkimuksessa puolestaan havaitaan, \nettä lakihankkeissa tutkimustietoa hyödynnetään mutta hyödynnettävä tutkimustieto on \nyleensä jo olemassa olevaa tutkimusta, koska uutta tutkimusta ei useinkaan ehditä tilata \ntiukkojen aikataulujen vuoksi. Olemassa olevan tutkimuksen osalta haasteena puolestaan \non, että se ei välttämättä vastaa lakihankkeen tiedontarpeisiin (Slant ym., 2014, s. 43). Uutta \ntutkimusta pyritään tilaamaan erityisesti silloin, jos aihe on ”yhteiskunnallisesti \nkiistanalainen” tai ”täysin uudenlainen” (Slant ym., 2014, s. 45). \nMolemmissa edellä mainituissa tutkimuksissa eräs keskeinen havainto on, että \nministeriöiden lainvalmistelun kontekstissa tiettyjä tiedontuottajia pidetään luotettavampina \nkuin toisia. Nieminen ym. (2019, s. 61) toteavat, että luotetun tiedontuottajan aseman \nsaavuttaneita tiedontuottajia tyypillisesti ovat oman hallinnonalan virastot ja \ntutkimuslaitokset. Slantin ym. (2014, s. 47) tutkimuksessa päädytään huomioon, että \nluotettavina tahoina pidetään erityisesti yliopistoja ja valtion tutkimuslaitoksia, kun taas \nkonsulttiyrityksiin ja sidosryhmien tuottamaan tietoon suhtaudutaan varauksellisemmin. \nTutkimuksen mukaan lakihankkeissa tietoa ”lähdetään kartoittamaan lähteistä, jotka ovat \nhallinnonalalle tyypillisiä”, ja niitä ovat esimerkiksi hallinnonalojen tutkimuslaitokset ja \nerilaiset tilastot (Slant ym., 2014, s. 44). Slant ym. (2014) havaitsevat myös, että erityisesti \npoliittisesti vahvasti ohjatuissa lakihankkeissa epämieluinen tieto voi jäädä hyödyntämättä, \nsillä tutkimus osoittaa eri suuntaan kuin poliittisesti priorisoitu ratkaisumalli. Tällaiset \ntilanteet ovat kuitenkin tutkimuksen mukaan melko harvinaisia.   \nTutkijoiden edustus ministeriöiden työryhmissä ja selvitysmiehinä \nHolli ja Turkka (2021) lähestyvät tutkimustiedon hyödyntämistä analysoimalla tutkijoiden \nosallistumista valtion komiteoihin ja ministeriöiden laajapohjaisiin työryhmiin vuosina 1980–"
  },
  {
    "page": 11,
    "text": "11 \n \n2018. Heidän tuloksensa osoittavat, että tutkijoiden osuus on ajanjaksolla vähentynyt \nselvästi. 1980-luvulla tutkijoiden osuus komiteoiden jäsenistä liikkui 5–7 %:n välillä ja nousi \n10–12 %:iin 1990-luvun alkupuolella. Vuosina 2000–2010 työryhmien jäsenistä 7–8 % oli \ntutkijoita, mutta 2010-luvulla tutkijoiden osuus vähentyi nopeasti. Erityisen dramaattisesti \ntilanne muuttui vuosina 2015–2018, jolloin tutkijoiden prosentuaalinen osuus yli puolittui \naiemmasta: vuonna 2015 tutkijoiden osuus oli hieman alle 5 % ja vuonna 2018 runsaat 3 %.  \nHolli ja Turkka (2021) havaitsevat, että samalla myös tutkijoiden asema työryhmissä on \nheikentynyt. 1980-luvulla tutkijat muodostivat komiteoiden ”kovasta ytimestä” eli \npuheenjohtajista ja varsinaisista jäsenistä 6–7 %, ja osuus kasvoi 10 %:iin vuonna 1993. \nVuosina 2000–2010 tutkijoiden osuus laajapohjaisten valmistelutyöryhmien kovasta ytimestä \noli noin 6–7 %, mutta vuonna 2018 se oli enää 3 %. Tutkimuksessa todetaan, että myös \nsellaisten työryhmien määrä, joissa ei ole lainkaan tutkijoita mukana, on noussut \ntarkasteluajanjaksolla selvästi: 1980- ja 1990 aikana niitä oli tarkastelluista \nvalmisteluelimistä kolmas- tai neljäsosa, 2000-luvun alussa hieman yli puolet ja 2010-luvulla \njo lähes kolme neljäsosaa (Holli & Turkka, 2021). \nHolli (2016) puolestaan tutkii selvityshenkilöinstituution muutoksia ja havaitsee, että \ntutkijoiden osuus selvityshenkilöistä on noussut. Kun 1990-luvulla selvityshenkilöistä 17 % oli \ntutkijoita, 2000-luvulla osuus oli noussut 27 %:iin (Holli, 2016). \nPäätöksentekoa tukevan tutkimuksen rahoitusinstrumentit ja niiden \nhyödyntäminen \nArtikkelin johdannossa mainitun vuoden 2013 TULA-uudistuksen osana perustettiin kaksi \ntutkimuksen rahoitusvälinettä (valtioneuvoston selvitys- ja tutkimustoiminta VN TEAS ja \nstrategisen tutkimuksen rahoitusväline), joiden tarkoituksena on nimenomaisesti tuottaa \ntutkimustietoa päätöksenteon ja sen valmistelun tueksi.3 Kärkkäinen ym. (2022) analysoivat \nVN TEAS -toiminnassa tuotetun tiedon hyödyntämistä. Ministeriöiden virkamiehille \nsuunnatun kyselyn tulosten mukaan yli kolmannes vastaajista (36 %) kertoi hyödyntävänsä \nvaltioneuvoston selvitys- ja tutkimustoiminnassa tuotettua tietoa hyvin usein tai usein (eli \nvähintään muutaman kerran kuukaudessa). Tulokset osoittavat myös, että valtioneuvoston \nselvitys- ja tutkimustoiminnassa tuotettua tietoa hyödynnetään ministeriöissä monenlaisissa \npolitiikkavalmistelun tilanteissa. Sitä käytetään erityisesti ymmärryksen lisäämisessä ja \nkäsitteistön selkeyttämisessä, politiikkavalmistelun ja lainsäädäntöhankkeiden tukena sekä \nuudistushankkeissa ja strategioiden laadinnassa. Kyselytulokset kertovat tutkimustiedon \nhyödyntämisen yleisyydestä myös yleisemmällä tasolla: valtaosa vastaajista (75 %) \nhyödyntää tutkimustietoa työssään hyvin usein tai usein. Mielenkiintoinen tulos myös on, että \nkaikkein yleisin vastaajien käyttämä tutkimustiedon lähde olivat valtion tutkimuslaitokset (43 \n% vastaajista hyödynsi hyvin usein tai usein). \nKivistö ym. (2022) tarkastelevat strategisen tutkimuksen rahoitusvälineen kautta rahoitettujen \ntutkimushankkeiden hyödyntämistä päätöksenteon tukena, ja he havaitsevat, että strategisen"
  },
  {
    "page": 12,
    "text": "12 \n \ntutkimuksen yleisin käyttötarkoitus julkisella sektorilla on ollut uusien linjausten ja \nstrategioiden valmistelu. Strategisen tutkimuksen tuloksia on hyödynnetty melko usein myös \nlainsäädännön valmistelussa. Ministeriöiden välillä on kuitenkin selviä eroavaisuuksia siinä, \nmiten ja missä määrin ne ovat strategista tutkimusta hyödyntäneet. \nTutkimustiedon hyödyntäminen eduskunnan valmistelussa ja \npäätöksenteossa \nEduskunnan osalta geneeriset tutkimukset voidaan jakaa kolmeen ryhmään. Ensinnäkin on \ntutkimuksia, jotka tarkastelevat tutkimustiedon käyttöä ja lähteitä kansanedustajien työssä \nyleisesti. Toisena ryhmänä ovat tutkimukset, joissa tarkastellaan valiokuntakuulemisia ja \nkolmannessa ryhmässä kohteena ovat yleisistuntokeskustelut. \nTutkimustiedon käyttö ja lähteet kansanedustajien työssä \nUseissa tutkimuksissa todetaan, että erilaista tutkimustietoa on kansanedustajilla runsaasti \nsaatavilla mutta tiedon hyödyntämisen osalta tilanne on haastavampi (Aula & Konttinen, \n2020; Kontula, 2018; Leppänen ym., 2020). Leppäsen ym. (2020) mukaan ongelmana on \npikemminkin tiedon runsaus kuin sen puute. Kontula (2018, s. 41) kuvaa nykytilannetta siten, \nettä ”poliitikoille tietoa kannetaan kaksin käsin” mutta loppujen lopuksi eduskunnan \nkäytänteissä tietoa hyödynnetään ”verraten suppeasti”. Kansanedustajien haastatteluihin \npohjautuen Aula & Konttinen (2020) esittävät, että eduskunnassa ei ole pulaa tiedosta tai \ntietolähteistä vaan haasteena on asettaa eri reittejä tuleva tieto oikeisiin mittasuhteisiin ja \nhyödyntää sitä päätöksenteossa. Tieteellisen tutkimuksen lukemiselle ei ole kansanedustajan \ntyössä aikaa, minkä vuoksi tiedonhankinta keskittyy jo valmiiksi käsiteltyyn tietoon (Aula & \nKonttinen, 2020). \nLeppäsen ym. (2020, s. 20) tutkimuksen mukaan kansanedustajilla ei yleensä ole \nmahdollisuutta perehtyä syvälliseen tutkimustietoon ja pääasiallisesti he etsivät \nhyödynnettävää tietoa ”erilaisista raporteista, suoraan asiantuntijoilta, ministeriöiden \nasiakirjoista tai tilastoista”. Tietoa myös usein haetaan sellaisilta tahoilta, joiden ”tiedetään \nolevan jokseenkin saman mielisiä oman taustaryhmän kannan kanssa” (Leppänen ym., 2020, \ns. 20).  \nHieman vanhemmassa Jussilan (2012, s. 36–38) kyselytutkimuksessa kansanedustajat pitivät \ntutkimuslaitosten ja yliopistojen tuottaman tutkimustiedon roolia päätöksenteossa \n”merkittävänä”. Tärkein tutkitun tiedon lähde kansanedustajille tällöin oli media. \nHuomionarvoinen tulos myös on, että 65 % vastanneista kansanedustajista oli täysin tai osin \nsamaa mieltä väittämän ”kansanedustajakollegani käyttävät tutkimustietoa valikoidusti \noman näkemyksensä perusteluun” kanssa (Jussila, 2012, s. 36–38)."
  },
  {
    "page": 13,
    "text": "13 \n \nValiokuntakuulemiset eduskunnassa \nUseassa tutkimuksessa esitetään, että valiokuntien asiantuntijakuulemiset ovat \neduskunnassa tärkein päätöksentekoa tukeva tutkimustiedon hyödyntämistä edistävä \nrakenne (Aula & Konttinen, 2020; Kontula, 2018, s. 41; Leppänen ym., 2020, s. 22). Toisaalta \ntehdään huomio, että eduskunnan valiokuntien kuulemisvaiheessa tutkimustiedolla on ”enää \nrajallinen vaikutus lopputulokseen” (Nieminen ym., 2019, s. 24).  \nSeppänen ym. (2023) tutkivat tutkijoiden osallistumisen yleisyyttä valiokuntakuulemisissa \nlähes neljännesvuosisadan aikajänteellä (1999–2022).4 Aineisto kattaa kaikki eduskunnan \nasiantuntijakuulemiset tuolta ajalta eli yhteensä yli 145 000 kuulemiskäyntiä. Kaikista \nkuulemisista 7 % oli tutkijoiden kuulemisia. Hallituskausittain tutkijoiden kuulemisten osuus \nvaihteli 5 %:sta 11 %:iin. Tieteentekijöiden osuus oli suurin pääministeri Marinin kaudella. \nPitkällä aikajänteellä havaitaan, että tutkijakuulemisten osuus on kasvanut hieman. \nValiokunnittain kuulemisissa on suuria eroja: suurimmat tutkijakuulemisten osuudet olivat \nperustuslakivaliokunnassa (44 %) ja tulevaisuusvaliokunnassa (25 %), kun taas muissa \nvaliokunnissa osuudet olivat tuntuvasti pienempiä. Seppänen ym. (2023) tarkastelevat myös \ntutkijakuulemisten osuutta kevään 2023 hallitusneuvotteluissa. Neuvotteluissa \ntutkijakuulemisten osuus kaikista kuulemisista oli noin 9 %.  \nNieminen ym. (2019) saavat vastaavanlaisia tuloksia omassa tutkimuksessaan. Tarkastelun \nkohteena olivat vuoden 2014 kaikki eduskunnan asiantuntijakuulemiset (N = 6 739) sekä \nvuodelta 2017 kolmen valiokunnan (hallintovaliokunta, sosiaali- ja terveysvaliokunta ja \nvaltiovarainvaliokunta) asiantuntijakuulemiset. Tutkimuksessa havaitaan, että vuonna 2014 \nkaikista lausunnon antaneista tutkimustahoja oli 11 %. Tutkimustahoja enemmän lausuntoja \nantoivat ministeriöt (31 % lausunnoista), etujärjestöt (20 %) ja muut valtion viranomaiset (17 \n%). Tutkimustahojen lausunnoista hieman vajaassa puolessa (45 %) tapauksista \nlausunnonantaja oli sektoritutkimuslaitos. Toiseksi eniten kuulemisia oli yliopistoilla (29 %). \nYksittäisistä tutkimusorganisaatioista kuultiin eniten Terveyden ja hyvinvoinnin laitosta (44 % \nkaikista sektoritutkimuslaitosten kuulemisista). Tieteenaloista oikeustieteen edustajia \nkuultiin selvästi eniten, sillä 54 % kuulluista tutkimustahoista edusti oikeustiedettä. \nValiokunnista aktiivisin tutkijoiden kuulija oli perustuslakivaliokunta, jossa oli kaikista \ntutkijoiden kuulemisista 40 % (Nieminen ym., 2019, 52).  \nVuoden 2017 osalta Nieminen ym. (2019) havaitsevat, että tutkimustahojen kuulemisia oli \nhallintovaliokunnan kuulemisista 8 %, sosiaali- ja terveysvaliokunnan kuulemisista 13 % ja \nvaltiovarainvaliokunnan kuulemisista 9 %. Kaikissa näissä valiokunnissa tutkijoiden osuus \nkuulleista oli kuitenkin noussut vuoteen 2014 verrattuna. Eniten kuulemisia näissä \nvaliokunnissa oli Terveyden ja hyvinvoinnin laitoksella (35 % kaikista tutkimusorganisaatioiden \nkuulemisista) ja sillä oli muun muassa enemmän kuulemisia kuin kaikilla yliopistoilla (20 % \nkaikista tutkimusorganisaatioiden kuulemisista) yhteensä. Jussilan (2012, 39) tutkimuksen \nmukaan vaalikaudella 2007-2010 sosiaali- ja terveysvaliokunnan kuulemista asiantuntijoista \n(N = 1674) 7 % oli tutkijoita."
  },
  {
    "page": 14,
    "text": "14 \n \nTutkimustietoon vetoaminen yleisistuntokeskusteluissa \nSyväterä (2020) tarkastelee eduskunnan yleisistuntokeskusteluja vuosina 1994–2017. \nTutkimuksessa analysoiduista keskusteluista 61 % sisälsi viittauksia tieteen auktoriteettiin. \nTutkimuksessa havaitaan myös, että eduskuntakeskustelussa tieteen auktoriteettiin viitataan \nkaikilla politiikan alueilla – ei vain alueilla, jotka edellyttävät monimutkaista teknistä tietoa. \nErityisen usein tieteen auktoriteettiin viitataan ”tiheästi poliittisesti latautuneissa, kilpaileviin \nintresseihin ja arvoihin liittyvissä keskusteluissa” (Syväterä, 2020, s. 61). Tutkimuksessa \ntehdään myös havainto siitä, että tieteeseen vetoaminen lisääntyi ja vahvistui \ntarkasteluajanjaksolla, mutta tätä ei välttämättä pidä tulkita siten, että tieteen asema \npäätöksenteossa olisi vahvistunut. Kyse saattaa olla myös siitä, että ”kansanedustajat pitävät \ntieteen auktoriteettiin viittaamista entistä mielekkäämpänä retorisena strategiana”. (Syväterä, \n2020, s. 61.) \nToisessa tutkimuksessa (Syväterä ym., 2023) vertaillaan tieteeseen vetoamista \nparlamentaarisissa yleiskeskusteluissa neljässä maassa (Suomi, Iso-Britannia, Australia ja \nKenia) sekä erityisesti sitä, mihin organisaatioihin tieteellisinä auktoriteetteinä vedotaan. \nSuomen kohdalla analysoidaan 144 eduskuntakeskustelua, joista 76 keskustelussa (53 %) \nvedotaan tieteeseen. Näistä 76 keskustelusta 45 keskustelussa (59 %) viitataan johonkin \norganisaatioon tieteellisen auktoriteetin lähteenä. Neljän maan vertailussa Suomessa niiden \nkeskustelujen osuus, joissa vedotaan tieteeseen, on kaikkein alhaisin ja niiden keskustelujen \nosuus, joissa nimetään jokin organisaatio, on toiseksi alhaisin Kenian jälkeen. Suomessa \nselvästi eniten tieteellisenä auktoriteettina viitataan tutkimuslaitoksiin (40 % viittauksista), ja \nSuomi eroaa tässä suhteessa muista maista merkittävästi: Australiassa ja Keniassa useimmin \nvedotaan hallitusten välisiin järjestöihin (esim. OECD, WHO, Yhdistyneet kansakunnat) ja \nIsossa-Britanniassa hallinnollisiin organisaatioihin. Suomessa yliopistojen osuus viittauksista \non vertailumaiden toiseksi pienin (7 % viittauksista). Yksittäisistä organisaatioista Suomessa \neniten vedotaan Terveyden ja hyvinvoinnin laitokseen, jonka jälkeen tulevat OECD, \nTyöterveyslaitos, WHO, Kansaneläkelaitos ja Tilastokeskus. \nPolitiikkasektorikohtaiset tutkimukset \nTässä luvussa tarkastellaan politiikkasektorikohtaisia tutkimuksia. Sektorikohtaisista \ntutkimuksista suuri osa kohdistuu sosiaali- ja terveyspolitiikan sekä ympäristö, ilmasto- ja \nenergiapolitiikan alueille. \nYmpäristö-, ilmasto- ja energiapolitiikka \nIlmastopolitiikassa useampi tutkimus on tarkastellut tutkitun tiedon käyttöä kansallisten \nilmastostrategioiden valmistelussa. Kerkkänen (2010) tutkii väitöstutkimuksessaan \nensimmäisen kansallisen ilmastostrategian valmistelua ja havaitsee, että tässä prosessissa \ntiedon tuotannon ja politiikan prosessit olivat vahvasti toisiinsa yhteenkietoutuneita. \nTutkimuksessa huomataan, että ilmastostrategian laadinnan kohdalla ilmastopolitiikkaa \nkoskevaa tutkimustietoa koettiin olevan paljon, jopa liikaakin, ja tiedon paljous puolestaan"
  },
  {
    "page": 15,
    "text": "15 \n \nvahvisti erilaisten perinteisten, legitiimin aseman saavuttaneiden asiantuntijatahojen roolia \npolitiikkaprosessissa: tiettyjen kansallisesti vakiintuneen aseman saavuttaneiden \ntutkimuslaitosten ja niitä edustavien tutkijoiden nähtiin edustavan arvovapaana pidettyä \nasiantuntijuutta (Kerkkänen, 2010, s. 250–254). \nLevin (2010) tutkii väitöskirjassaan vuoden 2001 kansallisen ilmastostrategian ja erityisesti \nsitä vuonna 2005 seuranneen ilmastonmuutoksen sopeutumisstrategian laadintaa. \nTutkimuksessa esitetään, että yksi valtion tutkimuslaitos, tässä tapauksessa Suomen \nympäristökeskus (Syke), oli keskeinen toimija tieteen ja politiikan välisen vuorovaikutuksen \nvahvistamisessa sopeutumisstrategian yhteydessä. Tutkimuksessa todetaan, että Syken \nkeskeisen roolin taustalla olivat yhtäältä ministeriöiden vähäiset resurssit tehdä tutkimusta ja \ntutkimuspohjaisia politiikkasuosituksia ”in house” mutta toisaalta myös tutkimuslaitoksen \nrooli legitiiminä tiedon tuottajana ministeriölle ja valtioneuvostolle. \nSaarela ja Söderman (2015) puolestaan tutkivat kansallisen ilmasto- ja energiastrategian \nvalmisteluprosessia vuosina 2011–2013. Yhtenä tuloksena on, että prosessiin tiedon \ntuottajiksi pääsi mukaan vain ”luottotoimijoita” – toimijoita, jotka olivat olleet jo aiemmissa \nvastaavissa prosesseissa mukana (Teknologian tutkimuskeskus VTT, Valtion taloudellinen \ntutkimuskeskus VATT, Syke). ”Ulkopuolisilla”, kuten esimerkiksi kilpailevilla \ntutkimuslaitoksilla, yliopistoilla tai muilla tiedon tuottajilla, ei ollut mahdollisuuksia päästä \nprosessiin mukaan. Tutkimuksessa havaitaan, että strategiaprosessissa käytettävissä ollut \ntutkimustieto oli kaukana kattavasta vaikuttavuusalueiden, ulottuvuuksien ja toimijoiden \nosalta. Lisäksi huomataan, että osa vaikutusarvioinneista tehtiin niin myöhään, että osa \npoliittisista ratkaisuista oli tehty jo ennen arviointien valmistumista. \nMyös Hildén (2011) on tutkinut vaikutusarviointien hyödyntämistä ilmastopolitiikassa ja \ntoteaa, että arviointeja on hyödynnetty ilmastopolitiikan kehittämisessä ja ne ovat edistäneet \npolitiikkaoppimista mutta arviointien hyödyllisyyttä rajoittaa usein kapea mandaatti ja vahva \nkytkentä olemassa olevaan politiikkalinjaan. Samansuuntaiseen johtopäätökseen päätyvät \nPilli-Sihvola ym. (2015), jotka tarkastelevat ilmastoskenaarioiden käyttöä päätöksenteossa \nSuomessa, Ruotsissa ja Norjassa. He toteavat, ettei ilmastoskenaarioiden täyttä potentiaalia \nhyödynnetä ja että ilmastotutkijoiden ja politiikkatoimijoiden välisessä kommunikaatiossa on \nvahvistamisen varaa. \nHieman yleisemmällä tasolla asiaa tarkastelevat Kukkonen ja Ylä-Anttila (2020), jotka tutkivat \ntieteellisten organisaatioiden ja argumenttien roolia ilmastopoliittisissa diskurssiverkostoissa \nja osoittavat, että 2000-luvun kuluessa tieteellisistä argumenteista on tullut keskeisempiä \nilmastopolitiikkaa koskevissa keskustelussa. Samaan tapaan Wagner ym. (2020) tutkivat \ntiedon vaihdon verkostoja kansallisen tason ilmastopolitiikassa neljässä maassa (ml. Suomi) \nja toteavat, että ilmastopolitiikan toimijat suosivat nimenomaan tieteellisiä organisaatioita \ntutkitun tiedon tuottajina. \nSilfverberg ym. (2018) tarkastelevat ympäristöön liittyvän tutkimustiedon käyttöä \npäätöksenteon tukena yleisesti. He havaitsevat, että ympäristötiedon käyttö päätöksenteossa"
  },
  {
    "page": 16,
    "text": "16 \n \non usein vajavaista tai tietoa valikoidaan tarkoitushakuisesti. Tutkimus antaa viitteitä myös \nsiitä, että virkavalmistelussa tutkimustietoa käytetään mutta tieteellisen tiedon merkitys \nsaattaa heikentyä, kun valmistelusta siirrytään poliittiseen päätöksentekoon. Tutkimuksen \nmukaan päätöksentekijät ja valmistelijat hakevat ympäristötietoa etenkin \nsektoritutkimuslaitoksista (Syke ja Luonnonvarakeskus Luke), kun taas yliopistotutkijoiden \nyhteys päätöksentekoon on ”usein heikko”. Yliopistoista Helsingin yliopisto ja Itä-Suomen \nyliopisto näyttäytyivät muita yliopistoja vahvempina tiedontuottajina päätöksenteon \nnäkökulmasta. Saarela (2020) puolestaan havaitsee väitöskirjassaan, että ympäristöpolitiikan \nalueella tutkijoiden ja politiikan valmistelijoiden välinen vuorovaikutus on viime aikoina \nalkanut kehittyä vuorovaikutteisempaan suuntaan. \nYmpäristöpolitiikan alueella on myös tutkimuksia, joissa tarkastellaan spesifimpiä politiikan \nosa-alueita. Pihlajamäki ja Tynkkynen (2011) tutkivat tutkimustiedon roolia ja käyttöä \nItämeren rehevöitymisen estämiseen tähtäävässä politiikassa. He havaitsevat, että \nhallinnossa ja politiikan teossa usein edellytetään tutkimustiedon pelkistämistä ja \nyleistämistä. He huomaavat myös, että politiikkaprosesseissa kuullaan usein tiettyjä (samoja) \ntutkijoita ja että tutkimuslaitosten tutkijoita kuullaan enemmän kuin yliopistojen tutkijoita. \nSosiaali- ja terveyspolitiikka \nSosiaali- ja terveyspolitiikkaan liittyvät tutkimukset voidaan jakaa tutkimuskohteen ja \nrajautumisen perusteella kolmeen kategoriaan. Ensimmäinen kategoria kohdistuu \ntutkimustiedon käyttöön politiikkasektorilla yleensä, ja siinä on vain yksi tutkimus. Kilpeläisen \nym. (2019) tutkimuksessa tarkastellaan kyselyihin perustuvan tiedon käyttöä \nterveyspolitiikassa. Heidän tulostensa mukaan terveyskyselytietoon perustuvia analyysejä on \nlaajasti käytetty suomalaisen terveyspolitiikan kehittämisessä, toimeenpanossa, \nseurannassa ja arvioinnissa. Terveyskyselyihin perustuvat tutkimukset ovat muun muassa \nvaikuttaneet veropoliittisiin ratkaisuihin (alkoholi- ja tupakkavero). \nToisena kategoriana ovat tutkimukset, jotka tarkastelevat tutkimustiedon hyödyntämistä \nsuurten sosiaali- ja terveyspolitiikkaan ja -järjestelmään liittyvien reformien ja kokeilujen \nyhteydessä. Hiilamo (2021) tarkastelee tutkimukseen perustuvan asiantuntijatiedon käyttöä \nsote-uudistuksen eri vaiheissa vuosina 2005–2019. Tutkimuksessa todetaan, että tärkein \nyksittäinen sote-uudistuksen tieteellinen asiantuntijataho on ollut Terveyden ja hyvinvoinnin \nlaitos. Artikkeli päätyy tulokseen, ettei sote-uudistuksessa tutkimustietoa ole käytetty \nsystemaattisesti hyödyksi ja että akateemisilla sote-asiantuntijoilla oli vähäinen rooli sote-\nuudistuksen valmistelussa ennen Sipilän hallitusta. Tutkimuksessa havaitaan myös, että \nsote-valmistelun useissa vaiheissa poliittiset linjaukset olivat ristiriidassa virkamiesten ja \nakateemisten asiantuntijoiden näkemysten kanssa. \nPinheiro ym. (2017) puolestaan tutkivat valinnanvapautta korostaneita terveydenhuollon \nuudistuksia ja niiden perustelemiseen ja legitimointiin käytettyä tietopohjaa. Tulosten \nmukaan tietopohja on useimmiten ollut luonteeltaan anekdoottista ja vertailumaiden \nkokemuksiin perustuvaa. Lainsäädäntöesitysten tutkimuksellinen tietopohja oli usein"
  },
  {
    "page": 17,
    "text": "17 \n \nniukkaa, eikä se perustunut tutkimusnäytön systemaattiseen arviointiin. Kansainväliset \npolitiikkavirtaukset (”fashion following”) olivat varsin keskeisessä roolissa, eikä \nkontekstuaalisia seikkoja (l. suomalaisen terveydenhuoltojärjestelmän ominaispiirteet) \nvälttämättä otettu kunnolla huomioon. Elomäki ym. (2021) puolestaan analysoivat \npääministeri Sipilän hallituksen yritystä uudistaa perhevapaajärjestelmää. Heidän tulostensa \nmukaan uudistuksen valmistelussa taloustieteellinen tieto sai korostetun aseman, mikä näkyi \nmuun muassa työryhmien jäsenyyksissä sekä kvantitatiivisiin ja tilastollisiin menetelmiin \nperustuvan taloustieteellisen tutkimuksen keskeisessä roolissa. Arviot kustannus- ja \ntyöllisyysvaikutuksista muodostivat neuvotteluissa keskeisimmän tietopohjan, kun taas \nsosiaalitieteellinen tutkimus perhevapaiden epätasaisesta jakautumisesta ja perhevapaiden \nkäytön perusteista ei päässyt uudistuksen linjausten perustaksi. \nKolmannen kategorian muodostavat tutkimukset, jotka tarkastelevat sosiaali- ja \nterveyspolitiikan alueella tehtyjä rajatumpia lakihankkeita tai päätösprosesseja. Kurko (2015; \nmyös Kurko ym., 2012) tutkii lääkelain muutosprosessia, jolla laajennettiin vuonna 2006 \nnikotiinikorvaustuotteiden myyntiä apteekkijakelusta päivittäistavarakauppoihin, kioskeihin ja \nhuoltoasemille. Hän havaitsee, että lainmuutosprosessissa olemassa olevaa tutkimusnäyttöä \nei käytetty täysimääräisesti hyväksi ja sitä osin käytettiin valikoivasti. Lainvalmistelussa \npäätös perustui enemmän oletuksiin kuin varsinaiseen tutkimusnäyttöön. Leppo ja Hecksher \n(2011) tutkivat odottaville äideille kohdistettuja alkoholin käyttöä koskevia suosituksia \nSuomessa ja Tanskassa sekä niiden taustalla olevaa päätöksentekoa. He toteavat, että \nkummassakin maassa on omaksuttu politiikka, jossa raskaana olevia suositellaan \npidättäytymään alkoholista kokonaan. Tutkimuksessa todetaan kuitenkin, että tämä linjaus ei \nperustu olemassa olevaan tutkimusnäyttöön vaan pikemminkin varovaisuusperiaatteeseen. \nSuomen osalta havaitaan myös, että suositukset ja politiikkadokumentit valottivat hyvin \nniukasti suositusten perusteluja eikä niissä viitattu tutkimukseen eikä systemaattisia \nkirjallisuuskatsauksia laadittu. \nEdelleen St-Martin ym. (2018) tarkastelevat sitä, miten tutkimusnäyttöä on hyödynnetty \npäätöksenteossa Suomessa, Tanskassa, Ruotsissa ja Norjassa, kun on päätetty siitä, \nsisällytetäänkö rotavirusrokotus kansalliseen rokotusohjelmaan. He havaitsevat, että eri \nmaissa tutkimustietoa käytettiin ja tulkittiin eri tavoin ja että maat myös päätyivät erilaisiin \npäätöksiin, vaikka ne tulkitsivat samaa kansainvälistä tutkimustietoa omissa kansallisissa \nkonteksteissaan. Suomen osalta todettiin, että kansainvälisen tutkimustiedon ohella \nhyödynnettiin myös Suomessa tehtyä tutkimusta. Ylöstalo (2020a) puolestaan tutkii \nfeministisen (tutkimus)tiedon roolia politiikanteossa käyttämällä sukupuolitietoisen \nbudjetoinnin aloitetta esimerkkinä. Artikkelin tulosten mukaan feministisen tiedon käyttö on \nensi sijassa symbolista, sen preferoitu muoto on kvantitatiivinen ja uskottavia tiedon tuottajat \novat tasa-arvoasiantuntijat ja ekonomistit."
  },
  {
    "page": 18,
    "text": "18 \n \nMuut politiikkasektorit \nYlönen ym. (2020) tutkivat yhteisöverouudistuksiin kytkeytyneen tiedontuotannon muutoksia \n1990-luvun alusta 2010-luvulle ja erityisesti vuosien 1993 ja 2014 verouudistuksiin liittyneitä \nasiantuntijatyöryhmiä ja tietopohjaa. Tutkimuksessa havaitaan, että yhteisöverotuksen osalta \npäätöksenteossa käytettävän tiedon painopiste on siirtynyt oikeustieteellisestä \ntaloustieteelliseen tutkimustietoon. Muutoksen seurauksena tiedon rooli veropoliittisessa \npäätöksenteossa on muuttunut: oikeustieteelliseen tutkimukseen verrattuna \ntaloustieteelliset vaikutusarviot antavat sisällöltään konkreettisempia suosituksia \npolitiikkatoimille. Siirtymä merkitsi myös sitä, että talousteoreettisiin taustaoletuksiin \nperustuvat dynaamiset laskelmat (käyttäytymisvaikutukset) tulivat keskeiseksi osaksi \nsuomalaista veropolitiikan valmistelua. Poliittista päätöksentekoa kehystävä asiantuntijatieto \non alkanut yhä konkreettisemmin määrittää veropolitiikan sisältöä, ja näin ollen taloustieteen \nroolin korostumisella on myös ollut yhteisöveropolitiikkaa epäpolitisoiva vaikutus. \nKoulutuspolitiikan alueella Pinheiron ym. (2017) tutkimus tarkastelee korkeakoulujen \nfuusioita laajoina politiikkareformeina, ja niitä perustelleita ja niiden legitimointiin käytettyä \ntietopohjaa. He havaitsevat, että kansainvälisillä esimerkeillä ja muiden maiden kokemuksilla \noli keskeinen merkitys reformien perusteluiden tietopohjassa tutkitun tiedon sijasta.  \nLiikuntapolitiikan alueella Hämäläinen ja Villa (2014) tutkivat tutkimustiedon käyttöä viidessä \nliikuntapoliittisessa asiakirjassa (joista kolme valtioneuvostotasoisia) ja niiden valmistelussa. \nHe havaitsevat, että asiakirjoissa tutkimustieto oli taustalla läsnä mutta eksplisiittisesti sitä \ntuotiin esiin vain vähän. Tutkimusten systemaattista erittelyä ei juuri tehty politiikkatoimien \nasiakirjojen valmisteluprosessien aikana. Työryhmiin osallistuneiden asiantuntijoiden tieto oli \nusein suodattunut useaan kertaan siten, ettei tutkimuksellisen alkuperän erottelu ollut enää \nmahdollista. Tutkijat havaitsivat myös, että tutkimustietoa oli paljon saatavilla, mutta sen \nläpikäyminen ja politiikkatoimen valmistelun tarpeisiin valikoiminen koettiin haasteelliseksi. \nKriminaalipolitiikan alueella Helmisen ym. (2019) tutkimuksessa tarkastellaan tutkijoiden \nosallistumista 147 kriminaalipoliittisen lainsäädäntöhankkeen valmisteluun vuosina 1991–\n2017. Hankkeiden valmisteluun oli dokumentoidusti osallistunut yhteensä 163 eri tutkijaa, ja \nne sisälsivät yhteensä 883 jonkin tutkimustahon (tutkijan, N = 818 tai tutkimusorganisaation, \nN = 65) osallistumiskertaa. Tutkijoiden osallistumiskerroista (N = 818) valtaosa oli \noikeustieteilijöiden (87 %), miesten (88 %) ja Helsingin yliopiston tutkijoiden osallistumisia (48 \n%). Tieteenaloista oikeustieteellä oli vallitseva rooli erityisesti eduskunnan valiokunnissa \ntapahtuneissa osallistumisissa (91 %) mutta myös ministeriössä tapahtuneissa \nosallistumisissa (78 %). Tutkimusorganisaation nimissä tapahtuneista osallistumisista (N = \n65) eniten eli neljäsosa oli Terveyden ja hyvinvoinnin laitoksen ja vajaa viidesosa \nOikeuspoliittisen tutkimuslaitoksen osallistumisia. \nNoin kaksi kolmasosaa tutkimustahojen osallistumisista oli eduskunnan valiokunnissa \ntapahtuneita osallistumisia. Tutkijoiden osuus kaikista valiokunnissa annetuista lausunnoista \nja kuulemisista (N = 2936) oli 20 %. Valiokunnista tutkijoita oli kuultu eniten"
  },
  {
    "page": 19,
    "text": "19 \n \nlakivaliokunnassa, perustuslakivaliokunnassa ja hallintovaliokunnassa. \nPerustuslakivaliokunnassa tutkijoita oli myös kuultu eniten suhteessa muihin tahoihin, sillä \ntutkimustahojen kuulemiset muodostivat yli kaksi kolmasosaa kaikista \nperustuslakivaliokunnan kuulemisista. \nKeskustelu ja johtopäätökset \nKeskeisenä kiinnostuksen kohteena tässä artikkelissa on ollut tutkimustiedon hyödyntäminen \nvaltioneuvoston ja eduskunnan päätöksenteossa ja valmistelun tukena ja erityisesti se, mistä \nnäkökulmista aihetta on tutkittu ja mitä tutkimus kertoo hyödyntämisen yleisyydestä. \nArtikkelin lopuksi vedetään yhteen keskeisiä havaintoja ja pohditaan niiden luomaa näkymää \ntieteen ja päätöksenteon suhteeseen sekä aihepiirin tutkimustarpeisiin. \nTutkimuksen näkökulmat, hyödyntämisen yleisyys ja tutkimuksen tuottajat \nAiheeseen liittyvä tutkimus näyttäytyy kirjallisuuskatsauksen perusteella varsin moninaiselta. \nTutkimusta on tehty monenlaisista näkökulmista ja erilaisilla lähestymistavoilla ja erilaisiin \npäätöksentekoprosesseihin ja -konteksteihin kytkeytyen. Tämä on yhtäältä rikkaus, mutta \ntoisaalta moninaisuus on myös haaste. Esimerkiksi tutkimuksia, joissa toistettaisiin \nsamantyyppisiä tutkimusasetelmia ei ole kovinkaan paljoa, jolloin tiedon kumuloituminen jää \nvähäisemmäksi. Tutkimusta siis tarvittaisiin enemmän. \nHyödyntämisen yleisyyden osalta osassa tutkimuksista päädytään määrällisiin arvioihin. \nKuten artikkelin alussa todettiin, kansainvälisessä tutkimuskirjallisuudessa määrällisiä \narvioita on tehty hyvin vähän (ks. esim. Masood ym., 2020), mikä nostaa Suomea koskevien \ntutkimustulosten kiinnostavuutta. Eduskunnan valiokuntakuulemisten osalta tiedämme, että \nviimeisen neljännesvuosisadan aikana 7 % kuulemisista on ollut tutkijoiden kuulemisia \n(Seppänen ym., 2023). Edelleen konkreettisina numeerisina tuloksia saadaan esimerkiksi se, \nettä hieman yli puolet hallituksen esityksistä sisältää vähintään yhden viittauksen \ntutkimustietoon (Nieminen ym., 2019), että 2000-luvulla valtioneuvoston työryhmissä \ntutkijoiden osuus työryhmien jäsenistä oli 6,4 % (Holli & Turkka, 2021) ja että 61 %:ssa \neduskunnan yleisistuntokeskusteluista vedotaan tieteen auktoriteettiin (Syväterä, 2020). \nTulokset ovat mielenkiintoisia ja arvokkaita, mutta samalla keskeiseksi kysymykseksi nousee \nniiden tulosten asettaminen jonkinlaiselle mittatikulle. Yksi mahdollisuus mittatikuksi olisi \nkansainvälinen vertailutieto, mutta sitä ei juurikaan tutkimuksissa tuoda esiin. Poikkeuksena \ntästä on lähinnä Hollin ja Turkan (2021) artikkeli, jossa kevyesti verrataan tilannetta Norjaan. \nToinen hieman kansainvälistä vertailua sisältävä tutkimus on Syväterä ym. (2023). \nToinen vaihtoehto eräänlaiseksi mittatikuksi olisi verrata tutkimuksen saamaa ”äänenpainoa” \npäätöksenteossa suhteessa muiden toimijoiden rooliin. Tästä on joissain tutkimuksissa \nesimerkkejä. Esimerkiksi tutkimustoimijoiden kuulemisten määrää eduskunnan \nvaliokunnissa on suhteutettu muiden toimijoiden, kuten esimerkiksi ministeriöiden ja \netujärjestöjen, antamien lausuntojen määrään (Nieminen ym., 2019). Tällaistakaan"
  },
  {
    "page": 20,
    "text": "20 \n \nsuhteuttamista ei tutkimuksissa systemaattisesti tehdä, eikä se luonnollisesti ole kaikissa \ntapauksissa mahdollistakaan. \nKun varsinaiset mittatikut puuttuvat, tilanteen arvioiminen on haastavaa. Yleisenä arviona \nvoisi kuitenkin esittää, etteivät edellä mainitut määrälliset tulokset välttämättä ole kovinkaan \nkorkeita. Voisi ajatella, että mikäli päätöksentekoa tehdään tutkimustietoon vahvasti \ntukeutuen, tutkijoiden osuus eduskunnassa kuulluista asiantuntijoista voisi olla korkeampi \nkuin yksi kymmenesosa tai että tutkijoiden osuus työryhmäjäsenistä voisi olla suurempi kuin \nreilut 6 %. Toki on huomattava, ettei asiantilaa voida arvioida yksittäisten lukujen perusteella \nja että lukuihin vaikuttavat monenlaiset tekijät, joita ei tässä ole mahdollista tarkastella.  \nMäärällisten tutkimusten ohella on myös laadullisia tutkimuksia, jotka valottavat kysymystä \ntutkimustiedon hyödyntämisen yleisyydestä. Nämä ovat usein yksittäisiin tapaustutkimuksiin \nperustuvia tutkimuksia, joista osa kylläkin tarkastelee hyvin laajoja politiikkaprosesseja. \nUseammassa tällaisessa tutkimuksessa on päädytty siihen, ettei tutkimustiedon \nhyödyntäminen tarkastelluissa prosesseissa ole ollut systemaattista (esim. Hiilamo, 2021; \nKurko, 2015; Pinheiro ym., 2017). Osassa tutkimuksia tuloksena myös saadaan, että \nvirkavalmistelussa tutkittua tietoa hyödynnetään mutta varsinaisessa poliittisessa \npäätöksenteossa ei niinkään (Silfverberg ym., 2018; Tuomisto ym., 2017). Tutkimuksissa \nhavaitaan myös, että uudistuksia saatetaan oikeuttaa tutkitulla tiedolla, mutta toteutuksessa \ntutkitun tiedon rooli voi jäädä pienemmäksi (Ylöstalo, 2020b).  \nKun huomioidaan kokonaisuutena sekä määrälliset ja laadulliset tutkimukset, muodostuu \nsamansuuntainen kuva kuin yksittäisissä, laajoja aineistoja hyödyntäneissä kansainvälisissä \ntutkimuksissa. Näissä tuloksena usein on ollut se, että tutkimustietoa käytettiin \n”kohtalaisesti” (Williamson, 2019) tai että löydettiin ”maltillista näyttöä” tutkimustiedon \nhyödyntämisestä (Masood ym., 2020). Mielenkiintoista on, että tutkimuksia, joissa olisi \npäädytty siihen, että tutkimustietoa käytettiin hyvin vahvasti päätöksenteon valmistelussa, ei \nSuomen osalta juurikaan löytynyt. Useat laadulliset tutkimukset päätyvät päinvastoin melko \nkriittiseen arvioon. \nKysymystä tutkimustiedon hyödyntämisen yleisyydestä voi pohtia myös yli ajan tapahtuneen \nmuutoksen kautta. Ajallista muutosta tarkastelevia tutkimuksia on kuitenkin valitettavan \nvähän, ja tulokset osoittavat hieman eri suuntiin. Tutkimuksista systemaattisin tässä \nsuhteessa on Hollin ja Turkan (2021) tutkimus, jonka mukaan tutkijoiden määrä \nvaltioneuvoston laajapohjaisissa työryhmissä on vähentynyt ja asema heikentynyt. Toisaalta \ntutkijoiden osuus selvityshenkilöistä on noussut (Holli, 2016). Myös eduskunnan \nyleisistuntokeskusteluissa tieteeseen vetoaminen on lisääntynyt (Syväterä, 2020), \ntutkimusviittaukset lakiteksteissä ovat lisääntyneet (Nieminen ym., 2019) ja \nvaliokuntakuulemisissakin tutkijoiden osuus on hieman kasvanut (Seppänen ym., 2023). \nLisäksi on yksittäisiä laadullisia havaintoja, joiden mukaan esimerkiksi ilmastopolitiikassa \ntieteellisistä argumenteista on tullut keskeisempiä (Kukkonen & Ylä-Anttila, 2020) ja"
  },
  {
    "page": 21,
    "text": "21 \n \ntutkijoiden ja politiikan valmistelijoiden välinen vuorovaikutus on alkanut kehittyä \nvuorovaikutteisempaan suuntaan (Saarela, 2020).  \nKuten kansainvälisen tutkimuskirjallisuuden perusteella saattaa olettaa, tutkimuksissa tehtiin \nhavaintoja myös tutkimustiedon valikoivasta käytöstä (policy-based evidence). Saarelan \n(2019) haastattelututkimuksessa bioenergiapolitiikan alueella raportoitiin tutkimustiedon \nsivuuttamisesta ja osin arvioitiin tutkimustiedon valikoivan käytön olevan yleistäkin. Myös \nympäristöpolitiikan (Silfverberg ym., 2018) ja terveyspolitiikan (Kurko, 2015, s. 94–96) alueelta \nhavaittiin esimerkkejä tutkimustiedon valikoivasta käytöstä. Myös useat geneeriset \ntutkimukset toivat saman havainnon esiin (Jussila, 2012; Leppänen ym., 2020; Slant ym. \n2014; Tuomisto ym., 2017). Valikoiva käyttö näyttäisi liittyvän erityisesti tilanteisiin, joihin \nliittyy vahvoja poliittisia kantoja (Slant ym., 2014; Tuomisto ym., 2017). Huomionarvoista \nkuitenkin on, että räikeitä esimerkkejä (vrt. Cairney, 2019) politiikkapohjaisesta tiedosta ei \ntutkimuksissa kuitenkaan raportoitu. Arviot ilmiön yleisyydestä vaihtelivat.  \nPäätöksenteossa hyödynnetyn tutkimustiedon tuottajien osalta tutkimusten tulokset \nosoittavat selkeästi samaan suuntaan. Tutkimusten perusteella näyttää siltä, että etenkin \nvaltion tutkimuslaitoksilla on keskeinen, jopa ensisijainen, rooli tutkimustiedon tuottajana \npäätöksenteossa (esim. Jussila, 2012; Kerkkänen, 2010; Levin, 2010; Nieminen ym. 2019; \nPihlajamäki & Tynkkynen, 2011; Saarela & Söderman, 2015; Silfverberg ym., 2018; Slant ym., \n2014). Kaikissa edellä mainituissa tutkimuksissa tuloksena esitetään, että tutkimuslaitokset \nnousevat esiin tahoina, jotka ovat luotettuja tiedon tuottajia ja joista tutkimustietoa haetaan. \nOsassa tutkimuksissa myös yliopistot nousevat tutkimuslaitosten rinnalle, mutta nämä \ntutkimukset ovat määrällisesti vähemmistössä. Useammassa tutkimuksessa havainto oli, \nettä tutkituissa politiikkaprosesseissa tiedon tuottajiksi ovat päässeet vain tietyt \nluottotoimijat (esim. Pihlajamäki & Tynkkynen, 2011; Saarela & Söderman, 2015). \nValtion tutkimuslaitosten keskeinen rooli tiedon tuottajana kytkeytyy vahvasti suomalaiseen \ntutkimusjärjestelmän ominaispiirteisiin ja poliittis-hallinnollisen päätöksenteon ja \ntutkimuksen institutionaaliseen organisoitumiseen (vrt. Nutley ym., 2010). Valtion \ntutkimuslaitosten roolina suomalaisessa järjestelmässä on nimenomaan tuottaa tutkittua \ntietoa hallinnonalojen päätöksenteon ja kehittämisen tueksi. Monissa muissa maissa, \nesimerkiksi Ruotsissa, ei tutkimuslaitossektorilla ole perinteisesti ollut samanlaista roolia. \nHieman yllättävää kuitenkin on, kuinka selkeästi tutkimuslaitosten asema suhteessa \nvaltioneuvoston ja eduskunnan päätöksentekoon näyttäisi eroavan yliopistoista tässä \ntutkimuksessa löydettyjen tutkimusten perusteella. \nTieteen ja päätöksenteon suhde, tutkimuksen rajoitteet ja jatkotutkimustarpeet \nKirjallisuuskatsauksen tutkimusten perusteella tutkimuksen ja päätöksenteon suhde \nnäyttäytyy moninaiselta, vaihtelevalta ja varsin usein myös kontekstisidonnaiselta. Paikoin \ntutkittua tietoa on paljon, jopa liikaakin, kun taas paikoin sitä puuttuu tai olemassa oleva \ntutkimustieto ei ole relevanttia päätöksenteon kannalta. Mikäli relevanttia tutkittua tietoa ei \nole valmiina, sitä ei aina ehditä tai kyetä hankkimaan. Tutkimusta hyödynnetään"
  },
  {
    "page": 22,
    "text": "22 \n \npäätöksenteossa ja päätöksenteon valmistelussa ja siihen myös vedotaan eri vaiheissa, \nmutta samalla sitä käytetään ainakin ajoittain valikoivasti. Myös päätöksentekijät tunnistavat \nvalikoivan käytön. Yhtäältä voisikin nähdä, että tutkitun tiedon ja päätöksenteon suhde \nmäärittyy jokaisessa valmistelu- ja päätöksentekoprosessissa aina erikseen: on kustakin \ntilanteesta kiinni, miten tutkittua tietoa kyetään, halutaan ja onnistutaan kytkemään \nprosessiin mukaan. Lisäksi voisi arvioida, että tutkimustiedon ja päätöksenteon suhde \nnäyttäytyy vähintäänkin osin suljetulta, eksklusiiviselta, sillä kirjallisuuskatsauksen \nperusteella usein perinteisillä, legitiimin aseman saavuttaneilla tutkimustahoilla on \netulyöntiasema päätöksentekoprosesseissa. Tämä on tärkeä havainto, sillä se kuvastaa \ntilannetta, jossa osa tutkimustiedon tuottajista jää prosessien ulkopuolelle ja potentiaali \nhyödyntämättä. \nTutkimustiedon hyödyntämisen laajuus ja intensiteetti vaihtelevat tilanteittain. Kiinnostava \nkysymys onkin se, mitkä tekijät vaikuttavat siihen, että tietyssä valmistelu- ja \npäätöksentekoprosesseissa tutkittua tietoa hyödynnetään ja toisissa ei niinkään. Aiemman \ntutkimuksen perusteella tiedetään, että muun muassa korkeampi koulutustaso \n(tutkijankoulutus) ja aiempi työkokemus tutkimusorganisaatioissa lisäävät \npolitiikkavalmistelijoiden taipumusta hyödyntää tutkimustietoa työssään (ks. esim. \nKärkkäinen ym., 2022, s.  54; Thune & Gulbrandsen, 2018), mutta hyödyntämiseen vaikuttavat \nvarmasti hyvin monet muutkin, kuten esimerkiksi politiikkaorganisaatioon, -sektoriin ja -\nkontekstiin liittyvät, seikat. Tutkimustiedon ja päätöksenteon suhde on epäilemättä myös \nkaikkea muuta kuin lineaarinen: valmistelu- ja päätöksentekoprosessit ovat usein hyvin \nmoninaisia ja monimutkaisia ja näissä prosesseissa tutkimustieto voi kytkeytyä ja kietoutua \nsiihen monin tavoin. Useimmiten tutkittu tieto myös suodattuu prosesseissa moneen kertaan \nja monen toimijan kautta.  \nArtikkelin alussa viitattiin tutkimustiedon hyödyntämisen erilaisiin muotoihin, \ninstrumentaaliseen, käsitteelliseen ja symboliseen hyödyntämiseen. Tässä artikkelissa \nensisijaisena näkökulmana on ollut hyödyntämisen yleisyys, eikä tarkastelluista \ntutkimuksista useinkaan erotella hyödyntämisen muotoja edellä kuvatun jaottelun \nmukaisesti. Kuitenkin, kuten edellä todettiin, tutkimuksissa löydettiin näyttöä tutkimustiedon \nvalikoivasta käytöstä omien poliittisten näkemysten tai jo tehtyjen päätösten \nperustelemiseksi. Tämäntyyppinen tutkimustiedon hyödyntäminen on hyvin lähellä \nsymbolista käyttöä. Hyödyntämisen eri muotojen tarkempi analyysi olisikin hyvin tärkeää \nmyös yleisyyden arvioinnin näkökulmasta: jos ajateltaisiin, että hyödyntäminen olisi laaja-\nalaisesti symbolista (esim. jo tehtyjä päätöksiä jälkikäteen legitimoivaa), niin on mahdollista, \nettä päätöksenteon laatu ei välttämättä paranisi, vaikka tutkimustiedon määrällinen \nhyödyntäminen lisääntyisikin. Osa tutkimuksista suhtautuukin jossain määrin kriittisesti \ntutkimustiedon hyödyntämiseen.  \nLopuksi on hyvä pohtia hieman kirjallisuushaussa löydetyn ja katsaukseen valikoituneen \ntutkimuskirjallisuuden mahdollisia puutteita ja epävarmuuksia. Ensinnäkin katsauksen"
  },
  {
    "page": 23,
    "text": "23 \n \nmuodostamaa kokonaiskuvaa pohdittaessa on tärkeä pitää mielessä käsitellyn aineiston \nrajallisuus: aineisto käsittää 38 tutkimusta. Se on väistämättä varsin pieni määrä, kun \npuhutaan hyvin laajasta ilmiökokonaisuudesta. Tutkimusta on siis varsin vähän, mikä asettaa \nrajoituksia yleisten johtopäätösten tekemiselle. Toiseksi on selvää, että tutkimusmenetelmiin \nliittyy aina vahvuuksia ja heikkouksia. Kun esimerkiksi kyselyillä tai haastatteluilla tutkitaan \ntutkimustiedon hyödyntämistä, voi riskinä olla, että vastaajat haluavat antaa \nhyödyntämisestä todellisuutta paremman kuvan. Asiakirja-aineistojen ongelmana voi olla se, \nettei niihin välttämättä systemaattisesti dokumentoida niiden laadinnassa hyödynnettyä \ntutkimuskirjallisuutta eikä muuten kuvata valmistelussa tapahtunutta tutkimustiedon \nhyödyntämistä. Tämä on ilmeinen ongelma, jos esimerkiksi hallituksen esityksiä käytetään \ntutkimusaineistona.  \nTutkimustiedon hyödyntämistä jää väistämättä piiloon. Tämä voi vaikuttaa tässä \nkatsauksessa saatuihin tuloksiin. Tähän tutkimukseen valikoituneessa \ntutkimuskirjallisuudessa huomionarvoista on kuitenkin se, että valtaosassa tutkimuksia \nhyödynnettiin useantyyppisiä aineistoja. Kolmasosassa tutkimuksia hyödynnettiin sekä \nlaadullisia että määrällisiä aineistoja. Pelkästään laadullisiin aineistoihin nojaavissa \ntutkimuksissa (N = 23, 61 %) hyödynnettiin useita laadullisia aineistotyyppejä rinnakkain. \nUseiden aineistotyyppien hyödyntäminen tukee monipuolisen kuvan luomista ja osaltaan \npienentää riskiä siitä, että yksi aineisto antaisi vinoutunutta näkymää tutkimuksen \nkohteeseen. Ehkä yhtenä puutteena aineistoon valikoituneessa kirjallisuudessa voidaan \nkuitenkin pitää sitä, ettei uudenlaisia tutkimusmenetelmiä ja aineistoja, kuten esimerkiksi \nerilaisia suuria data-aineistoja hyödyntäviä tutkimuksia, juurikaan löytynyt. Esimerkiksi \nlaajoja politiikkadokumenttien aineistopankkeja on jo olemassa, ja ne saattavat avata \nuudenlaisen mielenkiintoisen väylän analysoida tutkimustiedon käyttöä päätöksenteossa. \nOn myös huomioitava tarkasteltujen tutkimusten pitkähkö aikajänne: tutkimukset on julkaistu \naikavälillä 2010–2023, mutta osassa tutkimuksista analysoitavat aineistot voivat olla \nvanhempiakin. Näin ollen tutkimuksista muodostuva kuva ei välttämättä kuvaa yksioikoisesti \nnykyhetkeä vaan myös tilannetta pidemmän ajanjakson aikana, ja tilanne on saattanut joiltain \nosin jo muuttuakin.  \nTämän kirjallisuuskatsauksen perusteella on selvää, että aiheesta tarvitaan Suomessa lisää \ntutkimusta. Samalla on huomattava, että tutkimustiedon hyödyntäminen poliittisessa \npäätöksenteossa on varsin laaja tematiikka, ja kotimaisen ja kansainvälisen tutkimuksen \nperusteella aihepiiristä tiedetäänkin jo varsin paljon. Kansainvälinen tutkimus täydentää \nkotimaista tutkimusta teeman yleisemmän ymmärryksen vahvistamisessa, mutta \nsuomalaisesta kontekstista konkreettisesti voivat luonnollisesti kertoa vain Suomen \npäätöksentekojärjestelmään liittyvät tutkimukset. Suomea koskevan tutkimuksen \nvahvistaminen olisi  tärkeää muun muassa siksi, että tutkimustiedon hyödyntämistä \npäätöksenteon tukena voidaan edistää tutkimustietoon pohjautuen. Tarvitaan sekä geneerisiä \ntutkimuksia että eri politiikkasektoreita ja niiden päätöksentekoprosesseja tarkastelevia"
  },
  {
    "page": 24,
    "text": "24 \n \ntutkimuksia. Tärkeää olisi myös, että vertaisarvioituja tutkimuksia olisi enemmän, sillä niihin \npohjautuva näyttö on vahvempaa ja niiden painoarvo tieteellisessä keskustelussa on \nluonnollisesti suurempi.  \nOlemassa olevassa tietopohjassa on kuitenkin selkeitä aukkoja. Esimerkiksi sellaista \ntutkimusta, joka analysoisi päätöksentekijöiden (ministereiden) suhdetta tutkittuun tietoon, \nei tällä hetkellä ole. Miten ministerit työssään hyödyntävät tutkittua tietoa? Mikä on \nesimerkiksi erityisavustajien rooli tässä? Mitä lähteitä ministerit käyttävät tutkitun tiedon \nsaamiseksi? Yleisemmin ottaen yksittäiset tutkimukset ovat usein pistemäisiä ja \ntarkkarajaisia ja luonnollisesti päätöksenteon ja tutkimuksen laajasta rajapinnasta vain \npienen osan kattavia. Ehkä ideaalitapauksessa olisi mahdollista laatia pitkäjänteisempi \ntutkimusohjelma tai -agenda, jolla voitaisiin lähteä tarkastelemaan päätöksenteon ja \ntutkimustiedon rajapintaa kokonaisvaltaisemmasta ja systeemisesti mietitystä lähtökohdasta \nkäsin.  \nTärkeä näkökohta, joka olemassa olevista tutkimuksista usein puuttuu, on tutkimuksen \nvaikuttavuus päätöksentekoon. Tutkimukset useimmiten tarkastelevat sitä, missä määrin \ntutkimustieto on ”läsnä” valmistelu- ja päätöksentekoprosessissa. Vähemmän on \ntutkimuksia, jotka avaavat sitä, miten tutkimustieto viime kädessä on päätöksentekoon \nvaikuttanut. Tämänkaltaisten tutkimusten vähyyteen on varmasti monia syitä, joista \nmetodologiset haasteet ovat varmastikin yksi keskeinen. Kuitenkin voisi ajatella, että tarkat \ntapaustutkimukset, kuten esimerkiksi sote-uudistusta analysoiva tutkimus (Hiilamo, 2021), \nvoisivat olla ensimmäinen askel tähän suuntaan. Niitä olisi hyvä kohdistaa juuri isoihin ja \nmerkittäviin päätöksentekoprosesseihin, joilla on keskeistä yhteiskunnallista merkitystä. \nViitteet \n1) Pro gradu -tutkielmat suljettiin tässä vaiheessa lähtökohtaisesti katsauksen \nulkopuolelle. \n2) Tutkimuksessa havaintoyksikkönä on hallituksen esityksen yhdessä osiossa olleet \nviittauskokonaisuudet, jotka saattoivat sisältää useiden eri tahojen tuottamia \ntutkimusviitteitä. Tiedontuottajat jaoteltiin luokkiin hallinto, akateeminen, muu ja \nuseita. Luokittelu on jossain määrin epätarkka, sillä varsin suuri osuus (21 %) \nhavainnoista luokiteltiin luokkaan ”useita tiedontuottajia”. Tämä luokka saattoi siis \nsisältää myös esimerkiksi akateemisia tiedontuottajia. \n3) Kevään 2023 hallitusneuvotteluissa linjattiin VN TEAS -toiminnan lakkauttamisesta. \nSyksyn 2024 budjettiriihessä hallitus päätti uudesta kuuden miljoonan euron \nmäärärahasta valtioneuvoston päätöksentekoa tukevaan tutkimustoimintaan. \n4) Tutkijoiden osallistumisesta valiokuntakuulemisiin on tehty useita pro gradu -\ntutkielmia. Niiden tulokset ovat pitkälti samansuuntaisia kuin tässä esitettyjen \ntulosten."
  },
  {
    "page": 25,
    "text": "25 \n \nLähteet \nAmara, N., Ouimet, M. & Landry, R. (2004). New evidence on instrumental, conceptual, and \nsymbolic utilization of university research in government agencies. Science Communication, \n26(1), 75–106. https://doi.org/10.1177/1075547004267491 \nAula, V. & Konttinen, L. (2020). Miten kansaa edustetaan? Selvitys kansanedustajien työstä \neduskuntatyön uudistamiseksi. Sitra. https://www.sitra.fi/wp/wp-\ncontent/uploads/2020/02/miten-kansaa-edustetaan.pdf \nBaron, J. (2018). A brief history of evidence-based policy. The ANNALS of the American \nAcademy of Political and Social Science, 678(1), 40–50. \nhttps://doi.org/10.1177/0002716218763128 \nCairney, P. (2019). The UK government’s imaginative use of evidence to make policy. British \nPolitics, 14(1), 1–22. https://doi.org/10.1057/s41293-017-0068-2 \nCritical Appraisal Skills Programme. (2018). CASP qualitative checklist. https://casp-\nuk.net/casp-tools-checklists/ \nElomäki, A., Mustosmäki, A. & Koskinen Sandberg, P. (2021). The sidelining of gender equality \nin a corporatist and knowledge-oriented regime: the case of failed family leave reform in \nFinland. Critical Social Policy, 41(2), 294–314. https://doi.org/10.1177/0261018320947060 \nExLibris. (2014). Summon: Provider Content in the Central Discovery Index. \nhttps://knowledge.exlibrisgroup.com/Summon/Product_Documentation/Overview_of_The_S\nummon_Service/Central_Discovery_Index/Sum-\nmon%3A_Provider_Content_in_the_Central_Disco-very_Index \nHaddaway, N., Bethel, A., Dicks, L. Koricheva, J., Macura, B., Petrokofsky, G. Pullin, A., S., \nSavilaakso, S. & Stewart, G. B. (2020). Eight problems with literature reviews and how to fix \nthem. Nature Ecology Evolution, 4, 1582–1589. https://doi.org/10.1038/s41559-020-01295-x \nHead, B. (2015). Toward more “evidence-informed” policy making? Public Administration \nReview, 76(3), 472–484. https://doi.org/10.1111/puar.12475 \nHelminen M., Lundell, S. & Alvesalo-Kuusi, A. (2019). Tutkittu tieto kriminaalipoliittisissa \nlakihankkeissa. Suomen kulttuurirahasto. https://urn.fi/URN:NBN:-fi-fe2021042825074 \nHiilamo, H. (2021). Tutkimukseen perustuvan asiantuntijatiedon käyttö päätöksenteossa: \nesimerkkinä sote-uudistus. Hallinnon tutkimus, 40(2), 111–128. \nhttps://doi.org/10.37450/ht.110879 \nHildén, M. (2011). The evolution of climate policies – the role of learning and evaluations. \nJournal of Cleaner Production, 19(16), 1798–1811. \nhttps://doi.org/10.1016/j.jclepro.2011.05.004"
  },
  {
    "page": 26,
    "text": "26 \n \nHolli, A. (2016). Selvityshenkilöt uudella vuosituhannella: Tutkimus selvityshenkilöinstituution \npiirteistä ja muutostrendeistä 1990-luvulta nykypäivään. Hallinnon tutkimus, 35(1), 5–23. \nHolli, A. & Turkka, S. (2021). Tieteen muuttuva rooli korporatistisessa neuvonannossa: \npitkittäisanalyysi tutkijoiden asemasta ministeriöiden valmistelutyöryhmissä 1980–2018. \nPolitiikka, 63(1), 54–81. https://doi.org/10.37452/politiikka.98500 \nHämäläinen, R.-M. & Villa, T. (2014). Tutkimustiedon käyttö terveyttä edistävien liikunnan \npolitiikkatoimien valmistelussa. Liikunta ja tiede, 51(1), 36–43. \nJussila, H. (2012). Päätöksenteon tukena vai hyllyssä pölyttymässä? Sosiaalipoliittisen \ntutkimustiedon käyttö eduskuntatyössä. Kelan tutkimusosasto. \nKerkkänen, A. (2010). Ilmastonmuutoksen hallinnan politiikka. Kansainvälisen \nilmastokysymyksen haltuunotto Suomessa. Tampere University Press. \nKilpeläinen, K., Koponen, P., Tolonen, H., Koskinen, S., Borodulin, K. & Gissler, M. (2019). From \nmonitoring to action: utilising health survey data in national policy development and \nimplementation in Finland. Archives of Public Health, 77(48). https://doi.org/10.1186/s13690-\n019-0374-9 \nKivistö, J., Kohtamäki, V., Lilja, E., Lyytinen, A., Tirronen, J., Holmberg, K. & Teräsahde, S. \n(2022). Strategisen tutkimuksen rahoitusinstrumentin arviointi. Valtioneuvoston kanslia. \nhttp://urn.fi/URN:ISBN:978-952-383-487-3 \nKontula, A. (2018). Eduskunta. Ystäviä ja vihamiehiä. Into. \nKukkonen, A. & Ylä-Anttila, T. (2020). The science-policy interface as a discourse network: \nFinland’s climate change policy 2002-2015. Politics and Governance, 8(2), 200–214. \nhttps://doi.org/10.17645/pag.v8i2.2603 \nKurko, T. (2015). Deregulation of nicotine replacement therapy products in Finland: reasons \nfor pharmaceutical policy changes and reflections on smoking cessation practices \n[väitöskirja, Helsingkin yliopisto]. Helda. http://urn.fi/URN:ISBN:978-951-51-1223-1  \nKurko, T., Silvast, A., Wahlroos, H., Pietilä, K. & Airaksinen, M. (2012). Is pharmaceutical policy \nevidence-informed? A case of the deregulation process of nicotine replacement therapy \nproducts in Finland. Health Policy, 105(2–3), 246–255. \nhttps://doi.org/10.1016/j.healthpol.2012.02.013 \nKärkkäinen, T., Lauronen, J.-P. & Muhonen, R. (2022). Valtioneuvoston selvitys- ja \ntutkimustoiminnassa tuotetun tiedon hyödyntäminen valmistelun ja päätöksenteon tukena. \nValtioneuvoston kanslia. http://urn.fi/URN:N-BN:fi-fe2022101962593 \nLeppo, A. & Hecksher, D. (2011). The rise of the total abstinence model. Recommendations \nregarding alcohol use during pregnancy in Finland and Denmark. Nordisk alkohol- & \nnarkotikatidskrift, 28(1), 7–27. https://doi.org/10.2478/v10199-011-0002-7"
  },
  {
    "page": 27,
    "text": "27 \n \nLeppänen, J., Aula, V. & Konttinen, L. (2020). Miten tietoa käytetään päätöksenteossa? Selvitys \nkansanedustajien tiedonkäytöstä lainsäädäntötyöhön liittyvässä päätöksenteossa. Sitra. \nLevin, K. (2010). Protecting biodiversity in a changing climate: the role of science in adaptation \npolicy advancement. Yale University. \nMasood, S., Kothari, A. & Regan, S. (2020). The use of research in public health policy: a \nsystematic review. Evidence & Policy, 16(1), 7–43. \nhttps://doi.org/10.1332/174426418X15193814624487 \nNewman, J. Cherney, A. & Head, B. (2017). Policy capacity and evidence-based policy in the \npublic service. Public Management Review, 19(2), 157–174. \nhttps://doi.org/10.1080/14719037.2016.1148191 \nNieminen, K., Alasuutari, N., Kautto, P., Saarela, S.-P., Järvi-kangas, I., Hiltunen, E. & Rantala, \nK. (2019). Tutkimustiedon hyödyntämisen hyvät käytännöt lainvalmistelussa: kohti parempaa \nsääntelyä? Valtioneuvoston kanslia. http://urn.fi/URN:ISBN:978-952-287-741-3 \nNutley, S., Morton, S., Jung, T. & Boaz, A. (2010). Evidence and policy in six European \ncountries: diverse approaches and common challenges. Evidence & Policy, 6(2), 131–144. \nhttps://doi.org/10.1332/174426410X502275 \nOECD (2020). Building capacity for evidence-informed policy-making. OECD Publishing. \nhttps://doi.org/10.1787/86331250-en \nOliver, K., Lorenc, T. & Innvær, S. (2014). New directions in evidence-based policy research: a \ncritical analysis of the literature. Health Research Policy and Systems, 12(1), 34. \nhttps://doi.org/10.1186/1478-4505-12-34 \nOrton, L., Lloyd-Williams, F. & Taylor-Robinson, D. (2011). The use of research evidence in \npublic health decision making processes: systematic review. PloS One, 6(7), e21704. \nhttps://doi.org/10.1371/journal.pone.0021704 \nParkhurst, J. (2017). The politics of evidence: from evidence -based policy to the good \ngovernance of evidence. Taylor & Francis. \nPetticrew, M. & Roberts, H. (2006). Systematic reviews in the social sciences. Blackwell \nPublishing. \nPihlajamäki, M. & Tynkkynen, N. (2011). The challenge of bridging science and policy in the \nbaltic sea eutrophication governance in Finland: the perspective of science. AMBIO, 40(2), \n191–199. https://doi.org/10.1007/s13280-010-0130-4 \nPilli-Sihvola, K., van Oort, B., Hanssen-Bauer, I., Ollikainen, M., Rummukainen, M. & \nTuomenvirta, H. (2015). Communication and use of climate scenarios for climate change \nadaptation in Finland, Sweden and Norway. Local Environment, 20(4), 510–524. \nhttps://doi.org/10.1080/13549839.2014.967757"
  },
  {
    "page": 28,
    "text": "28 \n \nPinheiro, R., Nordstrand Berg, L., Kekäle, J. & Tynkkynen, L.-K. (2017). Exploring the interplay \nbetween ‘fashion’ and ‘evidence-based’ policy: A comparative account of higher education \nand health care in the Nordics. Scandinavian Journal of Public Administration, 21(1), 33–55. \nhttps://doi.org/10.58235/sjpa.v21i1.14884 \nRaivio, K. (2014). Näyttöön perustuva päätöksenteko – suomalainen neuvonantojärjestelmä. \nValtioneuvoston kanslia. http://urn.fi/URN:ISBN:978-952-287-135-0 \nSaarela, S.-R. (2019). From pure science to participatory knowledge production? Researchers’ \nperceptions on science–policy interface in bioenergy policy. Science & Public Policy, 46(1), \n81–90. https://doi.org/10.1093/scipol/scy039 \nSaarela, S.-R. (2020). In between two worlds? Science-policy interaction in Finnish \nenvironmental governance [väitöskirja, Helsingin yliopisto]. Helda. \nhttp://urn.fi/URN:ISBN:978-951-51-5933-5 \nSaarela, S.-R. & Söderman, T. (2015). The challenge of knowledge exchange in national policy \nimpact assessment – a case of finnish climate policy. Environmental Science & Policy, 54, \n340–348. https://doi.org/10.1016/j.envsci.2015.07.029 \nSeppänen, J.-T., Nokelainen, O., Nygård, S. & Ojala, J. (2023). Kuuleeko edustkunta \ntieteentekijöitä? Tieteessä tapahtuu, 41(3), 6–14. \nSilfverberg, O., Huotari, E. & Kolehmainen, L. (2018). Ympäristötutkimuksen ja päätöksenteon \nsaumakohdassa: Miten parantaa tieteellisen ympäristötiedon vaikuttavuutta? \nYmpäristötiedon foorumi. https://www.ymparistotiedonfoorumi.fi/wp-\ncontent/uploads/2018/12/Ymparistotutkimus_paatoksenteossa_YTFselvitys-1.pdf \nSlant, O., Rantala, K. & Kautto, P. (2014). Vaikuttavaa vaikutusarviointia? Vaikutusarvioinnin \nmerkitys lainvalmisteluprosessissa. Oikeuspoliittinen tutkimuslaitos.  \nSt-Martin, G., Lindstrand, A., Sandbu, S. & Kølsen Fischer, T. (2018). Selection and \ninterpretation of scientific evidence in preparation for policy decisions: a case study regarding \nintroduction of rotavirus vaccine into national immunization programs in Sweden, Norway, \nFinland, and Denmark. Frontiers in Public Health, 6. \nhttps://doi.org/10.3389/fpubh.2018.00131 \nStrassheim, H. & Kettunen, P. (2014). When does evidence-based policy turn into policy-\nbased evidence? Configurations, contexts and mechanisms. Evidence & Policy, 10(2), 259–\n277. http://dx.doi.org/10.1332/174426514X13990433991320 \nSyväterä, J. (2020). Tieteen monitahoinen auktoriteetti: Analyysi eduskunnan uutta \nlainsäädäntöä koskevista keskusteluista. Sosiologia, 57(1), 44–64. \nSyväterä, J., Rautalin, M. & Kustán Magyari, A. (2023). From where do legislators draw \nscientific knowledge? Organizations as scientific authorities in four countries’ parliamentary"
  },
  {
    "page": 29,
    "text": "29 \n \ndebates. The British Journal of Sociology, 74(2), 222–240. https://doi.org/10.1111/1468-\n4446.12989 \nThune, T. & Gulbrandsen, M. (30.11.2018). Exploring the use of research in policy making: \ninsights from the literature and a pilot survey. OSIRIS Blog. \nhttps://www.sv.uio.no/tik/english/research/centre/osiris/osirisblog/resinpolicy.html \nTuomisto, J., Muurinen, R., Paavola, J.-M., Asikainen, A. Ropponen, T. & Nissilä, J. (2017). \nTiedon sitominen päätöksentekoon. Valtioneuvoston kanslia. https://urn.fi/URN:ISBN:978-\n952-287-386-6 \nValtioneuvosto. (2013). Valtioneuvoston periaatepäätös valtion tutkimuslaitosten ja \ntutkimusrahoituksen kokonaisuudistukseksi. 5.9.2013. \nValtioneuvosto. (2019). Osallistava ja osaava Suomi. Pääministeri Sanna Marinin hallituksen \nohjelma 10.12.2019. http://urn.fi/URN:ISBN:978-952-287-808-3  \nValtioneuvosto. (2023). Vahva ja välittävä Suomi: Pääministeri Petteri Orpon hallituksen \nohjelma 20.6.2023. http://urn.fi/URN:ISBN:978-952-383-763-8 \nValtioneuvoston kanslia. (2011). Poliittisen päätöksenteon tietopohjan  parantaminen – \ntavoitteet todeksi. http://urn.fi/URN:ISBN:978-952-5896-61-9 \nWagner, P., Ylä‐Anttila, T., Gronow, A., Ocelík P., Schmidt, L. & Delicado, A. (2020). Information \nexchange networks at the climate science‐policy inter-face: evidence from the Czech \nRepublic, Finland, Ireland, and Portugal. Governance, 34(1), 211–228. \nhttps://doi.org/10.1111/gove.12484 \nWeiss, C. (1979). The many meanings of research utilization. Public Administration Review, \n39(5), 426–431. https://doi.org/10.2307/3109916 \nWilliamson, A., Makkar, S. & Redman, S. (2019). How was research engaged with and used in \nthe development of 131 policy documents? Findings and measurement implications from a \nmixed methods study. Implementation Science, 14(1). https://doi.org/10.1186/s13012-019-\n0886-2 \nYin, Y., Gao, J., Jones, B. F. & Wang D. (2021). Coe-volution of policy and science during the \npandemic. Science, 371(6525), 128–130. https://doi.org/10.1126/science.abe3084 \nYlönen, M., Jaakkola, J., Saari, L. & Hiilamo, H. (2020). Näyttöperusteisuus ja yritysten verotus: \nekonomismin nousu suomalaisen yhteisöveropolitiikan tiedontuotannossa. Poliittinen talous, \n8(1), 27—69. https://doi.org/10.51810/pt.96159 \nYlöstalo, H. (2020a). Depoliticisation and repoliticisation of feminist knowledge in a Nordic \nknowledge regime: The case of gender budgeting in Finland. Nordic Journal of Women’s \nStudies, 28(2), 126–139. https://doi.org/10.1080/08038740.2020.1727008"
  },
  {
    "page": 30,
    "text": "30 \n \nYlöstalo, H. (2020b). The role of scientific knowledge in dealing with complex policy problems \nunder conditions of uncertainty. Policy and Politics, 48(2), 259–276. \nhttps://doi.org/10.1332/030557319X15707904457648 \nZardo, P. & Collie, A. (2015). Type, frequency and purpose of information used to inform public \nhealth policy and program decision-making. BMC Public Health, 15, 381. \nhttps://doi.org/10.1186/s12889-0151581-0"
  }
] as ArticlePage[],
  },
  {
    id: "aineisto-2",
    title: "Tiedediplomatian muuttuva kuva 2009–2025 – kaikkia hyödyttävästä yhteistyöstä geopoliittiseen kilpailuun",
    author: "Johanna Ketola",
    localPdfUrl: "/aineistot/valintakoe-g-2026/Aineisto-2-1.pdf",
    originalPdfUrl: "https://yliopistovalinnat.fi/wp-content/uploads/2026/06/Aineisto-2-1.pdf",
    pages: [
  {
    "page": 1,
    "text": "1 \n \nTiedepolitiikka 3/2025 \nTiedediplomatian muuttuva kuva 2009–2025  \n– kaikkia hyödyttävästä yhteistyöstä geopoliittiseen kilpailuun \nJohanna Ketola \nTiedediplomatia on verrattain uusi ja vakiintumaton käsite, jolla viitataan tutkimusta ja \nulkopolitiikkaa yhdistelevään toimintaan. Tämä artikkeli kuvaa tiedediplomatian muutosta \nvuosien 2009 ja 2025 välillä ja tarkastelee muutosta suomalaisessa viitekehyksessä. \nPäähavaintona on, että tiedediplomatia on geo- ja valtapolitiikan sävyttämässä diskurssissa \ntavoittelemisen arvoinen ideaali etsittäessä ratkaisuja ihmiskunnan yhteisiin ongelmiin. \nTutkimuksessa kuitenkin tarvitaan kriittisyyttä: käsitteenä tiedediplomatialla on heikko \nanalyyttinen selitysvoima. Monitulkintaisuuden vuoksi ei ole selvää, mitä tiedediplomatia \nlopulta selittää. Onkin pureuduttava politiikkaan käsitteen välineellistämisen takana. \nJohdanto \nTiedediplomatia (science diplomacy) on aihe, josta kirjotetaan kasvavissa määrin eri \ntieteenaloilla, erityisesti kansainvälisen politiikassa (Fähnrich, 2017; Turekian, 2018). Aihe on \nsikäli poikkeuksellinen politiikan tutkimuksessa, sillä varsinaista empiiristä valta-analyysia \ntiedediplomatiakirjallisuudessa on verrattain vähän. Tämä artikkeli pureutuu tiedediplomatian \nvaltaulottuvuuksiin ja keskittyy erityisesti siihen, millaisiin tarkoitusperiin tiedediplomatia on \nkäsitteenä valjastettu ja kenen toimesta. Aineistona ovat aikaisempi kirjallisuus, \nasiantuntijaraportit ja Suomessa kerätty haastatteluaineisto. \nMääritelmällisesti tiedediplomatia viittaa toimintaan, jossa yhdistyy tutkimus, ulkopolitiikka ja \nkansainväliset suhteet (Leijten, 2017). Tiedediplomatia on erilaisten kansainvälisten \ntoimijoiden keskinäisiä suhteita kysymyksissä, joissa on tieteellinen tarkoitus, prosessi tai \ntavoite. Lisäksi se on tutkimuskohde. Tiedediplomatia on siis sekä subjekti että objekti: se on \nkäytänteiden joukko ja oppiala, jossa näitä käytänteitä tarkastellaan lähemmin (Karltofen & \nAcuto, 2018, s. 9; Uusikylä ym., 2021b).  \nKäsitteenä tiedediplomatia on vakiintumaton. Monen yhteiskuntatieteellisen käsitteen tavoin \nsille ei ole selvää määritelmää. Tiedediplomatia on käsitteenä monitulkintainen ja \ntutkimuskohteena laaja. Tästä seuraa vääjäämättä, että tiedediplomatian analyyttinen \nselitysvoima on heikko.  \nTässä artikkelissa kuvataan ensinnäkin aikaisempaan laadulliseen tutkimukseen pohjaten \ntiedediplomatian kehitystä vuosien 2009 ja 2025 välillä. Toiseksi artikkelissa tyypitellään \nlaadullisen aineiston pohjalta erilaiset tavat ymmärtää tiedediplomatia."
  },
  {
    "page": 2,
    "text": "2 \n \nTutkimuksen tavoitteena on arvioida kriittisesti tiedediplomatiadiskurssia ja tuoda \nkansainvälistä tiedediplomatiakeskustelua lähemmäs suomalaista yleisöä. Tutkimus tukee \ntiedediplomatiasta kiinnostuneita ymmärtämään tiedediplomatiaa käsitteellisesti ja \nkäytännöllisesti, ja se auttaa tunnistamaan tiedediplomatian heikkoudet ja vahvuudet.  \nArtikkeli etenee niin, että seuraavaksi määritellään tutkimuksen peruskäsitteet, diplomatia ja \ntiedediplomatia, minkä jälkeen esitellään tutkimuksen aineisto ja analysoidaan se. Lopusta \nlöytyvät artikkelin johtopäätökset. \nDiplomatian ja tiedediplomatian käsitteet sekä määritelmät \nTässä luvussa avataan ensin tutkimukselle keskeiset käsitteet. Lopuksi tarkastellaan \ntiedediplomatiaa tutkimuskohteena sekä sen erilaisia käytänteitä ja muotoja. \nDiplomatia \nDiplomatia on yksinkertaistetusti taitoa hoitaa kansainvälisiä asioita ilman väkivaltaa tai sillä \nuhkaamista. Se on valtioiden keskinäisten suhteiden virallista hoitoa ja kansainvälisten \nsuhteiden hoitamista neuvottelukeinoin (Merriam-Webster, ei pvm.). \nDiplomatian päätehtävästä ei ole täyttä yksimielisyyttä, mutta yleisimmin diplomatian \ntarkoituksena nähdään rauhan saavuttaminen ja ylläpitäminen. Toisaalta osa näkee \ndiplomatian puhtaasti vallankäytön näkökulmasta itsekkäästi käyttäytyvien valtioiden \nkeinona turvata omat intressinsä kilpailullisessa kansainvälisessä järjestelmässä (Barston, \n1997, s. 1, 214; Berridge, 2003, s. 69–70; Zhang, 2015, s. 2). Kun sotateoreetikko Carl von \nClausewitzin klassikkoteoksen (1989) mukaan diplomatia on sodan jatkamista muilla \nkeinoilla, Michel Foucault argumentoi, että politiikka on sodan jatkamista muilla keinoilla \n(Hongisto, 2011, s. 66). \nRonald Peter Barstonin (1997) mukaan diplomatialla hoidetaan valtioiden keskinäisiä suhteita \nja suhteita muihin toimijoihin. Diplomatia on luonteeltaan edustuksellista tarkoittaen, että \nvaltiot tai muut kansainvälisen järjestelmän institutionaaliset toimijat eivät sinällään \nkommunikoi, vaan diplomatia on ennen kaikkea kansainvälistä viestintää ihmisten välillä. \nTämä inhimillinen ulottuvuus kuitenkin helposti unohtuu, kun katsoo esimerkiksi \nuutisotsikoiden tyypillisiä ilmaisuja, kuten ”Suomi hakee”, ”Yhdysvallat vetäytyy”, ”Venäjä \nkiistää” ja ”Iran uhkailee”.  \nDiplomatia on osoittautunut varsin kriisinkestäväksi ja valtioiden välisten suhteiden kannalta \nvälttämättömäksi instituutioksi (Jönsson, 2002, s. 212; Scharpf, 1999, s. 56). Vaikka \ndiplomatia on laajentunut käsittämään myös muunlaisten kansainvälisten suhteiden hoitoa \nkuin kahden valtion välistä virallista toimintaa, diplomatia liitetään yhä vahvasti Wienin \nsopimuksen (1961) mukaiseen kodifioituun valtioiden väliseen viestintään (Berridge, 2015). \nDiplomatian tutkimuksen merkkiteoksessaan On Diplomacy – A Genealogy of Western \nEstrangement James Der Derian (1987, s. 93) tarjoaa yleisen ja vaivalloisesti suomeksi \nkääntyvän määritelmän diplomatialle: ”a mediation between estranged individuals, groups or"
  },
  {
    "page": 3,
    "text": "3 \n \nentities.” Tämä minimalistinen mutta varsin väljä diplomatian määritelmä voitaisiin kääntää \nsuomeksi yksinkertaisesti siten, että diplomatia on vuoropuhelua toisistaan vieraantuneiden \nyksilöiden, ryhmien ja organisaatioiden välillä.  \nLähtöolettamuksena siten on, että diplomatiaa määrittää keskeisesti vieraantuneisuus \n(alienation, estrangement). Vieraantuneisuuden määritelmä kumpuaa Adam Smithin, Georg \nWilhelm Friedrich Hegelin ja Karl Marxin viitoittamista heterogeenisistä teorioista (Lagerspetz, \n2024, s. 219–221). Vieraantumisella voidaan viitata yksilön vieraantumiseen hänen \ntuotannostaan, työntekoprosessistaan, työntekovälineestään ja muista eläinlajeista (Der \nDerian, 1987, s. 6–8). Vieraantuneisuuden teorioita yhdistää ajatus siitä, että yksilöiden \nväliseen toimintaan liittyy aina mahdollisia positiivisia tai negatiivisia seurauksia, jotka eivät \nole ennakoitavissa tai jotka eivät ole toimijoiden tarkoittamia. Eerik Lagerspetzin mukaan \nSmithille ja Marxille tarkoittamattomien seurausten laki oli yhteiskuntatieteiden perusta, ja \nmoderneissa yhteiskunnissa se ilmenee instituutioiden erillisyytenä ihmisistä. Se ilmenee \nniin, että valtiot, oikeusjärjestys ja talous näyttäytyvät kasvottomina sortavina mahteina – \neivät dynaamisina organismeina, joiden toimintaa säätelee ihmisten toiminta. (Lagerspetz, \n2024, s. 219–221.) \nDiplomatian ennakkoehtona on ero, joka tehdään sosiaalisissa suhteissa yksilön ja muiden \nyksilöiden välille. Samalla se tekee diplomatiasta ytimeltään neuvottelua erillisten subjektien \nvälillä. Vaikka vieraantuminen on kokonaisvaltaisesti ja määritelmällisesti mukana \ndiplomatiassa, ei vieraantuminen selitä diplomatiaa kaikenkattavasti (Der Derian, 1987, s. \n29). Tämän määrittelyn pohjalta diplomatian lähtökohdaksi muodostuu subjektien erillisyys ja \nsisäänrakennettu toiseus, potentiaalinen intressiristiriita sekä toiminnan arvaamattomat \nseuraukset. \nTiedediplomatia \nTiedediplomatia on ilmiönä vanha (ks. esim. Turekian, 2018), mutta sen modernina \nsyntyhetkenä pidetään usein presidentti Barack Obaman puhetta “uudesta alusta” Kairon \nyliopistolla vuonna 2009. Puhe toi tiedeyhteistyön osaksi Yhdysvaltojen \nmaineenparannuskampanjaa terrorismin vastaisen sodan jälkimainingeissa. Yhtenä \ntaustatekijänä oli, että sodasta huolimatta Yhdysvallat oli säilyttänyt asemansa ja \nkiinnostavuutensa vetovoimaisena maana tiede- ja tutkimuspiireissä (Turekian, 2018). \nPuheen jälkeen Yhdysvallat lanseerasi tiede- ja teknologiaohjelmia muslimienemmistöisissä \nmaissa. Lisäksi jatkotoimenpiteenä tiedediplomatia käsitteellistettiin Wilton Park -\nseminaarissa, jonka lopputuotteena oli vuonna 2010 julkaistu ja edelleen käytetty \ntiedediplomatian kolmijakoinen määritelmä. Tiedediplomatian osa-alueita erottaa se, millä \ntiede ja politiikka kytkeytyvät toisiinsa. Kategorioita ovat science in diplomacy, diplomacy for \nscience ja science for diplomacy. Nämä kategoriat voidaan suomentaa esimerkiksi siten, että \nensimmäinen viittaa tietopohjaiseen päätöksentekoon, toinen tieteenteon edistämiseen \ndiplomatian keinoin ja kolmas kategoria kansainvälisten suhteiden edistämiseen tieteen \navulla."
  },
  {
    "page": 4,
    "text": "4 \n \nScience in diplomacy on yksinkertaistetusti ulkopolitiikkaa palvelevaa tiedontuotantoa \n(Ruffini, 2018b). Kategoria kontekstualisoituu eritoten tietopohjaisen päätöksenteon \ndiskurssiin, missä tieteellä on politiikkaa palveleva ja osittain välineellistetty rooli. Tässä \nkategoriassa tiedediplomatiaa määrittävät ensisijaisesti ulkopoliittiset prioriteetit, joita tiede, \ntutkimus ja tutkijat henkilöinä tukevat. \nDiplomacy for science viittaa tilanteisiin, joita määrittävät tutkimuksen ja tieteen intressit ja \njoissa diplomatiaa tarvitaan tieteen edistämiseksi. Vaikka tiede ja tiedeyhteisö ovatkin \nperusluonteeltaan kansainvälisiä, diplomatian keinoin tieteentekemisen edellytyksiä voidaan \ntoisinaan parantaa, erityisesti autoritaarisissa ja hierarkkisen toimintakulttuurin maissa \n(Uusikylä, 2021a).  \nScience for diplomacy -kategoria kääntyy toiminnaksi, jossa tieteenteko edistää \nkansainvälisiä suhteita, parhaimmillaan globaalien julkishyödykkeiden, kuten rauhan ja \nterveyden, edistämistä (Björn & Kola, 2021).  Näissä tilanteissa eri toimijoiden intressien \nkatsotaan kanavoituvan kaikkia hyödyttäväksi universaaliksi toiminnaksi, kuten \nkansainvälisiksi sopimuksiksi (Uusikylä, 2021a). \nOn myös esitetty muita tapoja hahmottaa tiedediplomatia. Matthias Leese (2018) jakaa \ntiedediplomatian keppeihin ja porkkanoihin. Pierre-Bruno Ruffini (2020c) sen sijaan jakaa \ntiedediplomatian sen mukaan, ovatko edistettävät edut itsekkäitä vai jaettuja eli ovatko ne \nlähtökohtaisesti orientoineita kilpailuun vai yhteistyöhön. Jako voidaan tehdä myös karkeasti \nsen mukaan, ovatko intressit ensisijaisesti tiedeyhteisön vai päätöksentekokoneiston (ks. \ntaulukko 2, s. 13). \nTiedediplomatiadiskurssiin kuuluu tiiviisti käsitys siitä, että on olemassa objektiivisesti \ntodennettavia yhteisiä intressejä, ihmiskunnan suuria ongelmia, joihin vastaaminen on \nkaikkien vastuulla. Näistä useimmiten mainitaan ilmastonmuutos. Horst W. J. Rittelin ja \nMelvin W. Webberin (1973) käsitteellistämä viheliäisten ongelmien terminologia näkyy myös \ntiedediplomatian yhteydessä (mm. Björn & Kola, 2021). \nTiedediplomatian käsitteellistämisen aikoihin tiedediplomatia ymmärrettiin kansainvälisessä \npolitiikassa eritoten neoliberaalin institutionalismin näkökulmasta. Sen lähtöoletus \nkansainvälisestä järjestelmästä on, että sääntöpohjaisen järjestelmän potentiaali nojaa \nsääntelyyn ja instituutioihin, ja eri toimijoiden yhteistyöllä voidaan edistää toimijoiden jaettuja \nintressejä. (Keohane, 1984.) \nTässä kontekstissa tiedediplomatia hahmottui positiivisena teknokraattisena voimavarana ja \ninstrumenttina, joka edistää universaaleita tieteen ja vapauden arvoja. Lähtötilanteessa \ntiedediplomatian katsottiin ainakin retorisesti hyödyttävän tiedeyhteisöä ja palvelevan \nsamalla kansallisvaltioiden demokraattisia, legitiimejä yhteiskunnallisia tavoitteita luottaen \nihmisen kykyihin ratkaista maailmanmitan ongelmat yhteistyön, tieteen ja teknologian avulla. \nTämä globaalihallinnallinen näkökulma on korostunut eurooppalaisessa \ntiedediplomatiadiskurssissa, mikä painottaa sitä, että yhteiset ongelmat yhdistävät ja luovat"
  },
  {
    "page": 5,
    "text": "5 \n \nvaltioiden välille keskinäisriippuvuuksia pakottaen ne yhteistoimintaan (Stone, 2020, s. 54–\n57). \nSamalla lähestymistapa sivuuttaa toisenlaisen näkökulman politiikan perusluonteesta: \npolitiikka on myös ideologista ja arvoihin kytkeytyvää kilpailua erilaisten ihmisyhteisöjen \nvälillä. On idealistista ajatella, että tiedediplomatiassa nimenomaan tiede edustaisi \nneutraaliutta ja arvovapautta ja diplomatia politiikkaa. \nTätä mieltä on myös Tim Flink (2020), joka on muistuttanut, että valta, arvot, kilpailu ja omien \nintressien ajaminen ovat myös osa tiedeyhteisöjä ja tiedeyhteistyötä. Flink on todennut (2020) \nraflaavasti, että tiedeyhteistyö ei ole ”globaali Woodstock” eikä tiedediplomatia-termin käyttö \neri yhteyksissä muuta asiaa. Kamppailu arvoista, resursseista ja vaikutusvallasta ei \ntiedediplomatiassa siis rajoitu diplomatiaan ja sen taustamäärittäjiin, kuten ulkopolitiikkaan, \nvaan se on myös osa tiedettä ja erilaisia yhteistyömuotoja. Diplomatiasta puhuminen vallan \ntai politiikan sijaan on myös omiaan sumentamaan kuvaa intressiristiriidoista ja kilpailusta. \nHuomio neutraalin tieteen ongelmallisuudesta ja arvovapaudesta on tehty tietopohjaisen \npäätöksenteon kirjallisuudessa jo varhain (mm. Latour, 1987; Pielke, 2007; Putnam, 1981). \nTiedediplomatiassa tieteen ”objektiivisuus” haastettiin vasta myöhään, eikä tieteen \nneutraaliuden haastaminen ole vielä valtavirtaa. \nTiedediplomatia tutkimuskohteena \nPolitiikan tutkimuksen näkökulmasta kiinnostavaa tiedediplomatiassa on se, missä valtaa on, \nkuka sitä käyttää, miten sitä käytetään ja mitä seurauksia tästä on. Politiikan tutkija saattaa \nkuitenkin pettyä syventyessään tiedediplomatiakirjallisuuteen, sillä siinä harvoin päästään \nempiirisesti käsiksi tähän. \nTiedediplomatiakirjallisuus on deskriptiivistä luonnehdintaa tavoista, joilla tutkijat, \ntieteenteko ja diplomatia tai laajemmin kansainväliset suhteet toimivat vuorovaikutuksessa. \nTämä avautuu nopealla vilkaisulla tiedediplomatian johtavaan amerikkalaiseen \nverkkojournaaliin Science & Diplomacy, jota julkaisee Yhdysvaltain monitieteellinen \nAmerican Association for the Advancement of Science (AAAS). Ensinnäkään kyseessä ei ole \nvertaisarvioitu tieteellinen julkaisu, ja siinä tutkimuksellisesti liikutaan usein kevyellä pohjalla. \nJulkaisuaiheiden laaja kirjo kertoo, kuinka tiedediplomatia-käsite on monimuotoisesti \nsulautunut osaksi eri tieteenaloja ja erilaisia kansainvälispoliittisia kysymyksiä. \nTyypillisesti tiedediplomatiaa tutkitaan tapaustutkimuksina, joissa tarkastellaan yksittäisten \nmaiden tiedediplomatiatoimintaa. Kirjallisuutta vaivaa itsetehostus – tarve perustella, miksi \ntiedediplomatia on tärkeää ja miksi sitä tarvitaan. Tiedediplomatialla on selitetty niin \nEtelämannersopimusta vuonna 1959, Kiinan ja Yhdysvaltojen välien lämpenemistä 1970-\nluvulla, kansainvälisen ydinaseita vastustavan liikkeen menestystä 1980-luvulla sekä \nYhdysvaltojen ja Kuuban diplomaattisuhteiden normalisointiprosessia 2010-luvulla \n(Berkman, 2019; Lane, 2016; Mas-Permejo ym., 2024). Müller (2021) pitää tiedediplomatian"
  },
  {
    "page": 6,
    "text": "6 \n \nansiona Iranin ydinasesopimusta, Yhdistyneiden kansakuntien Agenda 2030 -\ntoimintaohjelmaa ja Pariisin ilmastosopimusta – kaikki vuodelta 2015. \nKriittinen tiedediplomatiatutkimuksen koulukunta on leimallisen eurooppalainen ja pieni. Sen \nnäkyvimpiin edustajiin kuuluu saksalaistutkija Tim Flink. Flinkin (2020) mukaan \ntiedediplomatia on täynnä höttöisiä ja romantisoituja lupauksia siitä, kuinka sen avulla \nvaltioiden väliset suhteet ja yhteisiin haasteisiin vastaaminen mahdollistuu. Flink on pyrkinyt \nosoittamaan tieteenalan tutkimukselliset ongelmat ja aukot, esimerkiksi kyseenalaistamalla \nsen, että suuret monikansalliset tutkimusinfrastruktuurihankkeet muuttaisivat niissä \ntyöskentelevien käsityksiä muiden kansallisuuksien edustajista ja parantaisivat valtioiden \nvälisiä suhteita. Charlotte Rungius, Flink ja Sebastian Riedel purkavat vuonna 2022 \njulkaistussa tutkimuksessaan tiedediplomatiahankkeiden epävarmuuksia tarkastelemalla \nLähi-idän SESAME-hiukkaskiihdytintä, jonka esikuvana on ollut Euroopan hiukkasfysiikan \ntutkimuskeskus CERN. Tutkimus näyttää, kuinka vaikea on osoittaa \ntiedediplomatiahankkeiden edistävän yleviä tavoitteita, kuten rauhaa ja yhteisymmärrystä. \nSama tietysti pätee myös toisinpäin: on vaikea osoittaa, etteikö näin voisi tapahtua. \nVaihtoehdoksi amerikkalaiselle Science & Diplomacy -julkaisulle ollaankin perustamassa \nuutta, eurooppalaista tieteellistä tiedediplomatiajournaalia Frontiers in Science Diplomacy, \nmistä journaalin tuleva akateeminen julkaisijatalo kertoi Madridin \ntiedediplomatiakonferenssin yhteydessä joulukuussa 2023. \nTiedediplomatia käytänteenä \nYhdysvaltojen sisäpolitiikassa tapahtuneet muutokset ovat vaikuttaneet merkittävästi \ntiedediplomatian käytänteisiin ja muotoihin. Tunnetusti demokraatit ovat olleet \nrepublikaaneja yhteistyöhakuisempia ja avoimempia kansainväliselle yhteistyölle. Kuten \nmonet muutkin angloamerikkalaiset ilmiöt, tiedediplomatia on levinnyt Yhdysvaltoja ja \nBritanniaa kauemmas, ja siitä on tullut osa useiden maiden ulkopoliittista repertuaaria. Kuten \ntämän tutkimuksen aineistosta hahmottuu (ks. taulukko 1), Yhdysvallat on useimpien maiden \ntiedediplomatiatoiminnan kohdemaa. Tätä selittää sen johtava asema tieteen (yliopistot, \nenglanninkieliset julkaisut, vaihto-ohjelmat), teknologian ja kansainvälisen kaupan mahtina, \nmikä tekee Yhdysvalloista vetovoimaisen eri tiedediplomatian toiminta-alueilla ja \nsovellusaloilla. \nKuva on aineiston keruun ja analyysin jälkeen kuitenkin muuttumassa. Presidentti Donald J. \nTrumpin vuonna 2025 alkanut toinen kausi ja moninaiset hyökkäykset yliopistoja kohtaan \nvähentää Yhdysvaltojen vetovoimaa ja taloudellista houkuttelevuutta (Brint, 2025). Toki \ntutkimuksen kansainväliset rakenteet, kuten englannin kielen dominanssi \njulkaisumarkkinoilla, muuttuvat hitaasti ja suosivat yhä angloamerikkalaisia toimijoita. \nTiedediplomatiassa ei kuitenkaan ole kyse ”Amerikan mallin” kopioinnista. Eri mailla on laaja \nvariaatio intressien, rationaalien, orientaatioiden ja kumppanimaiden suhteen (Fähnrich, \n2017; Ruffini, 2018a). Italiassa ja Espanjassa tiedediplomatian kansallisesti tarkasteltuna"
  },
  {
    "page": 7,
    "text": "7 \n \nrationaalina on maiden tiedediasporan hyödyntäminen (Ruffini, 2018a). Ranskassa \npuolestaan on perinteisesti vahva panostus ranskan kielen ja kulttuurin edistämiseen \nmaailmalla (Ruffini, 2020b). Saksassa poikkeuksellisen vahvat tiede- ja tutkimusorganisaatiot \n(Fähnrich, 2017) ovat pitäneet huolen siitä, että tiedediplomatiakeskustelussa ei unohdu \ntieteen kansainvälistyminen. Tanskan tiedediplomatiatoiminnassa on painottunut innovaatiot \nja tiedediplomatian kaupallinen potentiaali, suuntana Yhdysvallat (Uusikylä ym., 2021a). \nTaulukkoon 1 on hahmotettuna aikaisemman kirjallisuuden pohjalta eri maiden \ntiedediplomatiatoimintaa sen mukaan, millainen rationaali toiminnassa korostuu (tieteen \nedistäminen, oman maan diasporan hyödyntäminen tiedediplomatian kohdemaissa, \nkansainvälisen kaupan edistäminen, kielen ja kulttuurin edistäminen, opiskelijaliikkuvuus ja \nkoulutusvienti), mikä tiedediplomatian kolmesta kategoriasta toiminnassa painottuu (science \nin diplomacy, diplomacy for science ja science for diplomacy), millaisiin kysymyksiin toiminta \non orientoitunut (akateemiset globaalit, taloudelliset ja ulkopoliittiset), kuka toimintaa ohjaa \n(mikä taho valtionhallinnossa), mitkä ovat sen keskeisiä kohdemaita ja mitkä konkreettiset \nteemat korostuvat. Koska tiedediplomatia ja sen painotukset ovat usein keskusjohtoisia ja \nverovaroin tuettuja projekteja, hallitusten vaihdokset muuttavat painopisteitä.  \nUseilla mailla on suurlähetystöverkostoihin kytketyt tiedediplomatiaverkostot, joiden kautta \nedistetään vaihtelevasti tiede-, kulttuuri- ja kieliyhteistyön lisäksi esimerkiksi innovaatio- ja \nteknologiakauppaa. Verkostot vaihtelevat siltä osin, mikä taho ohjaa niiden toimintaa. Usein \nkyse on työnjaosta tieteestä ja ulkopolitiikasta vastaavien ministeriöiden kesken.  \nSuomen Team Finland Knowledge -verkoston puitteissa työskentelee 8 asiantuntijaa eri \npuolilla maailmaa. Verkoston toiminnan ohjaus on opetus- ja kulttuuriministeriössä, jonka \nverkkosivuilla verkoston asiantuntijoiden toimintaa kuvataan seuraavasti ”Heidän \ntehtävänään on seurata (toiminta-)alueidensa korkeakoulu- ja tiedepolitiikkaa, raportoida \nsiitä Suomeen ja näin edistää yhteistyömahdollisuuksia ja näkyvyyttä kohdemaassa sekä \navustaa suomalaisia korkeakouluja ja muita sektorin toimijoita yhteistyön lisäämisessä \nalueen toimijoiden kanssa.” (Opetusministeriö, ei pvm.)"
  },
  {
    "page": 8,
    "text": "8 \n \nTaulukko 1. Tiedediplomatian erilaisia muotoja kirjallisuuden pohjalta eri maissa (Fähnrich, \n2017; Krasnyak, 2018; Ruffini, 2018, 2020a, 2020b; Uusikylä ym., 2021a, Uusikylä ym., 2021b). \n \nRationaali \nPiirre \nKategoria \nOrientaatio \nOhjaus \nKohdemaat \nTeemat \nEspanja \nDiaspora \nGlobaali, \nyhteis-\nkunta, \nmaakuva \nIII \nGlobaalit \nkysymykset \nUlkoministeriö \n(UM) \nIso-Britannia \nGlobaalit ongelmat, \nkehityskysymykset \nIntia \nTiede,  \ndiaspora \n* \nII \nAkateeminen \nTiede- ja tekno- \nlogiaministeriö,  \nUM \nAasia ja  \nlänsimaat \nml.  \nItävalta, \nJapani,  \nRanska, \nSaksa,  \nUS, UK, \nVenäjä \nTieteen laadun \nparantaminen  \nja ylläpito erit. \nphysical and  \nlife sciences, laaja \ndiaspora ja  \naivovuoto \nItalia \nDiaspora \nTiede \nIII \nAkateeminen \nLöyhästi UM ja  \nopetuksesta,  \nyliopistoista ja  \ntutkimuksesta  \nvastaava(t)  \nministeriö(t) \n* \nAvaruustutkimus \nJapani \nTiede \nTiede \nII \nAkateeminen \nPääministerin  \nkanslia \nIntia, EU, \nSveitsi, UK, \nUS \nTiedeyhteistyö eri \nnäkökulmista: \nglobaaliongelmien  \nratkaisu, oman \nteknologisen  \nkehityksen \nparantaminen,  \ntasavertainen \nkumppanuus  \nerit. Itä-Aasian \nmaihin \nKanada \nKauppa,  \nopiskelijat \nKauppa \nI \nTaloudellinen \nUM \nglobaali \nTehdä maasta \nkilpailukykyinen erit. \ntaloudessa \nKiina \nTiede \nTiede \nI, II \nAkateeminen \nTiede- ja  \nteknologia- \nministeriö ml.  \nTiedeakatemia \nPohjois-\nAmerikka, \nEU,  \nJapani, \nAfrikka \nTulkinnanvaraista, \nkuvauksissa  \nkorostuu \ntiedeyhteistyön \nmerkitys eri tavoilla \nml. parhaiden  \nteknologisten \ninnovaatioiden  \ntavoittelu \nRanska \nKulttuuri \nMaakuva \nI \nAkateeminen \nUM \nEU, Aasia, \nPohjois-\nAmerikka,  \nVälimeren \nalue \nTieteenaloista \nkorostuu terveys ja \nerilaiset teknologian  \nmuodot (bio, \nympäristö, nano) \nSaksa \nTiede,  \nopiskelijat \nMaakuva, \ntiede,  \nopiskelijat \nI \nAkateeminen \nOpetus- ja  \ntutkimusministeriö \nGlobaali \nErilaiset vaihto-\nohjelmat \nSuomi \nKoulutus \nMaa- \nkuva,  \nkauppa \nI \n* \nOpetus- ja  \nkulttuuriministeriö \nNousevat  \ntaloudet \nKoulutusvienti, \nilmakehätie- \nteet ja tähän liittyvät \nkaupalliset ratkaisut"
  },
  {
    "page": 9,
    "text": "9 \n \nSveitsi \nTiede,  \nkauppa \nTiede,  \nyhteis- \nkunta,  \nkauppa \nII \nTaloudellinen,  \nakateeminen,  \npoliittinen \nUlko-, opetus-,  \ntiede- ja  \ninnovaatio-\nkysymyksistä \nvastaava federal  \ncouncil \nEU, Yhdys- \nvallat, Kiina,  \nIntia, \nBrasilia,  \nSingapore \nEri toimipaikoissa eri \nportfolio:  \nml. tiedeyhteistyö, \ninnovaatiot, \nkoulutus, startupit,  \nrahoitusta \nyksityissektorilta ja  \nkiinteä \nyritysyhteistyö \nIso-\nBritannia \nTiede,  \nmaakuva,  \nkauppa \nTiede,  \nkauppa,  \nmaakuva \nII \nAkateeminen,  \nglobaalit  \nkysymykset \nTiedeministeriö ja \nUM \nGlobaali \nPysyminen tieteen \nkärkimaana eri \ntavoin (myös \nglobaalit  \nkysymykset, talous, \narvot) \nYhdysvallat \nTiede \nTiede,  \nyhteis- \nkunta,  \nmaakuva \nII \nGlobaalit  \nkysymykset \n* \nGlobaali \nMaailman \nlahjakkaimpien  \nkykyjen houkuttelu, \nmikä  \nylläpitää tieteen \ntasoa ja  \nkanavoituu \nglobaaliksi \nvaikutusvallaksi \nVenäjä \nKulttuuri \nMaakuva \nI \nPoliittinen \n* \nPerinteisesti  \nitsenäisten  \nvaltioiden  \nyhteisö \nNeuvostoliiton \naikaisen imagon \nylläpitäminen \ntieteellisesti \nkorkeatasoisena \nmaana erit.  \nmatemaattisissa \ntieteissä \n*Ei tietoa tai ei pystytä määrittelemään"
  },
  {
    "page": 10,
    "text": "10 \n \nAineisto ja analyysi \nArtikkelin tiedediplomatian kehityskaarta kuvaava aineisto perustuu aikaisempaan \ntutkimukseen sekä seuraaviin viimeaikaisiin tiedediplomatiayhteisön laatimiin raportteihin. \nAikaisempi tutkimus kartoitettiin kirjallisuuskatsauksessa, joka koostui vuosina 2015–2020 \njulkaistuista vertaisarvioiduista Web of Science -tietokannassa poimituista artikkelista. \nAineistoon sisällytettiin eniten siteeratut artikkelit, joiden hakusanana oli ”science \ndiplomacy”. Katsauksessa kartoitettiin tutkimusten pääasialliset tavoitteet, metodit ja \ntulokset. Tätä kokonaisuutta täydentää lähdeluettelossa mainittu, vuoden 2020 jälkeen \njulkaistu ja vertaisarvioitu kirjallisuus sekä seuraavaksi esiteltävät raportit, joista \ntunnistettujen pääteemojen mukaan tiedediplomatian geopoliittiseksi käänteeksi kuvattava \nmuutos on helppo todentaa. \nAnalyysin pohjana on käytetty neljän vuosina 2022–2025 toteutetun työpajan raporttia. Nämä \novat seuraavat: 1) raportti kansallisesta pienryhmäkeskustelusta, joka käsitteli suomalaista \ntiedediplomatiaa ja järjestettiin Helsingissä joulukuussa 2022, 2) Madridissa joulukuussa \n2023 järjestetyn Euroopan unionin (EU) ensimmäisen tiedediplomatiakonferenssin raportti, 3) \ngeopoliittisia vaikutuksia käsitelleen eurooppalaisen tiedediplomatiatyöpajan raportti \nhuhtikuulta 2024 ja 4) Euroopan komission tiedediplomatiaraportti helmikuulta 2025. Raportit \n2) ja 4) ovat saatavilla avoimesti (European Commission: Directorate-General for Research \nand Innovation ym., 2025; European Science Diplomacy Conference, 2023), mutta raportit 1) \nja 3) eivät ole julkisia. \nTiedediplomatian tyypittelyyn liittyvä analyysi pohjautuu vuosina 2020–2021 kerättyyn \npuolistrukturoituun haastatteluaineistoon (N = 30), johon haastateltiin tiedediplomatian \nkanssa työskenteleviä viranomaisia ja tutkijoita. Asiantuntijahaastattelu toteutettiin kuuden \nkirjallisuuskatsauksessa identifioidun pääteeman kautta. Kysymyskokonaisuudet ja teemat \nolivat kaikille haastateltaville samoja. Asiantuntijahaastatteluissa huomioitiin haastateltavien \ntulkinnat ja heidän merkityksenantonsa. Haastatteluaineisto pseudonymisoitiin ja purettiin \nnarratiiviseksi tiivistelmäraportiksi, minkä jälkeen aineisto kategorisoitiin tiedediplomatian \nkolmijaon mukaisesti.  \nVuosien 2022–2025 aikana raporttiaineistossa korostuvat seuraavat tiedediplomatian \nkehityksen kannalta keskeiset teemat: geopoliittinen ja teknologinen kilpailu, sota ja rauha, \nUkraina, Venäjä, Kiina sekä vakoilu. Muutos on havaittavissa esimerkiksi EU-tiedediplomatia-\nasiakirjojen painotuseroissa: kun vuonna 2019 hyväksytyssä niin sanotussa Madridin \ntiedediplomatiajulistuksessa painottui kestävän kehityksen tavoitteet sekä ihmisoikeuksiin, \ndemokratiaan ja tieteen itsenäisyyteen nojaavat arvot, joulukuussa 2023 järjestetyssä \ntiedediplomatiakonferenssissa nähtiin siirtymä kohti tiede- ja teknologianyhteistyön vaarojen \nja riskien tunnistamista. Tämä näkyy raportin vahvassa retoriikassa ”geopoliittisista \njännitteistä”. Geopolitiikkadiskurssi näkyy EU:n tiedediplomatiaraportissa ja komissaari \nEkaterina Zaharovan esipuheessa, jossa todetaan, että ”today, science, technology and \ninnovation translate more than ever into power and geopolitical influence, and this is one of"
  },
  {
    "page": 11,
    "text": "11 \n \nthe reasons why they matter for diplomacy” (European Commission: Directorate-General for \nResearch and Innovation ym., 2025). Keskusteluun ovat lisäksi tulleet mukaan vahvemmin \nhumanitaariset painotukset, kuten sotaa pakenevan ukrainalaisdiasporan tukeminen \n(suomalainen työpaja, 2022; ks. aiheesta myös esim. Lattu & Rostedt, 2022).  \nTaulukossa 2 esitellään tiedediplomatian tyypittely. Oransseissa painotussarakkeissa on \njaoteltu aikaisemman teoriakirjallisuuden pohjalta, onko kyseisen kategorian puitteissa tehty \ntiedediplomatia ensisijaisesti kansallisesti vai kansainvälisesti orientoitunutta. Kirjaus on \nsiten teorialähtöinen. Violeteissa tavoite -sarakkeissa on sekä aineiston että teorian \nsyntetisoinnin perusteella pyritty hahmottamaan, millaisiin tavoitteisiin kukin \ntiedediplomatiatyyppi nojaa ja millä perustein. Vihreällä pohjalla löytyvään toimijoita ja \ninstrumentteja -sarakkeeseen on kirjattu aineistossa mainittuja konkreettisia välineitä, joilla \ntiedediplomatiaa Suomessa tehdään. Viimeisissä, sinisissä sarakkeissa on teorialähtöistä \npohdintaa siitä, mikä demokraattisen järjestelmän arvo ja strategia sen toteuttamiseksi on \nsyytä huomioida, jotta tiedediplomatia ei etäänny demokraattisen yhteiskunnan \nperusarvoista."
  },
  {
    "page": 12,
    "text": "12 \n \nTaulukko 2. Aineisto purettuna käsitekategorian, tavoitteiden toiminnan ja arvojen mukaan. \n \nPainotus \nkansallinen \nvs. \nkansainvälinen \n \nTavoite \n \nToimijoita ja \ninstrumentteja \nArvo ja \nstrategia sen \nylläpitämiseksi \n \nScience in \ndiplomacy \nKansallinen \nUlkopolitiikka \nkansallisen \npolitiikan yhtenä \nsektorina \nMääritellyt \nulko- \npoliittiset \ntavoitteet \nTietopohjan \nlaajentaminen \nUlkopoliittiset päätöksen- \ntekijät, diplomaatit, tiedon- \ntuottajina tutkimuslaitokset \nml. Ulkopoliittinen \ninstituutti, Ilmatieteen \nlaitos sekä \ninstrumentit, kuten VN \nTEAS, \ntutkijat diplomaatteina \nDemokratia \nVaalit \nDiplomacy \nfor \nscience \nMolemmat \nTieteen \nkansainvälistyminen, \njoka parantaa \nmyös kotimaassa \ntehtävää tiedettä \nParasta \ntiedettä ja \ntutkimusta \nTieteenteon edellytysten \nparantuminen \nja tieteen laadun \nvahvistuminen mm. \nvaihto-ohjelmien, \nliikkuvuuden, yhteis- \ntyöverkostojen, \ntutkimusinfrahankkeiden \nmyötä \nSuomen edustustot \nmaailmalla, Team Finland \nKnowledge -verkosto, \nSuomen \nAkatemia, tiedeakatemiat, \nyliopistot \nTieteen \nitsenäisyys \nPitkäjänteinen ja \navoin \ntiedepolitiikka, \ntiedeyhteisölähtöiset \naloitteet \nScience \nfor \ndiplomacy \nKansainvälinen \nTiedeyhteistyön \navulla voidaan \nparantaa \nkahdenvälisiä \nsuhteita tai \nvastata globaaleihin \nhaasteisiin \nRauha, \nturvallisuus, \nhyvinvointi \nVastaukset globaali- \nongelmiin, globaalien \njulkishyödykkeiden \nturvaaminen \nPotentiaalisesti kaikki \nkansainvälisen \njärjestelmän \ntoimijat, eri järjestöt ml. \nYhdistyneet kansakunnat, \nTaloudellisen yhteistyön ja \nkehityksen järjestö OECD, \nUNESCO, kansallisvaltiot, \nglobaalit tiedontuottajat, \nvälineinä esim. \nkansainväliset sopimukset \nMonenvälisyys \nGlobaali- \ndemokratia"
  },
  {
    "page": 13,
    "text": "13 \n \n \nScience in diplomacy -kategoria ymmärrettiin parhaiten ulkopoliittisten päätöksentekijöiden \nja diplomaattien tietopohjan laajentamiseen liittyvinä toimina ja instrumentteina, joista \nerityisesti mainittiin Ulkopoliittinen instituutti ja valtioneuvoston tutkimus-, kehitys ja \narviointitoiminta (VN TEAS). Mainintoja saivat yliopistot, hajanaiset ulkomaiset \ntiedontuottajaorganisaation (mm. Tukholman rauhantutkimusinstituutti Sipri) ja myös ei-\nakateemiset tiedontuottajat, kuten CMI - Martti Ahtisaari Peace Foundation. \nKotimaisena ongelmana pidettiin tiedontuotannon markkinoiden kokoa (haastateltava, H30): \nmaa on pieni eikä kansainvälisesti kunnianhimoisia tutkijoita meritoi ulkopoliittinen \nvaikuttamistyö. Haastatteluhetkellä visioitiin, että VN TEAS-instrumentista voisi tulla \nmahdollisuus vaikuttaa kansainvälispoliittiseen keskusteluun (H11). Samalla kuitenkin \nkritisoitiin valtioneuvostovetoisen instrumentin rajoittavan tutkijoiden vapautta, sillä raportit \nolivat alisteisia hankkeiden ohjausryhmille (H30). Tieteen itsenäisyyden säilyttäminen \nkorostuikin tiedediplomatian keskeisenä ohjaavana arvona. Kuitenkin haastattelut vahvistavat \naikaisemman kirjallisuuden käsityksen siitä, että ulkopolitiikan ja tieteen suhteessa tiede on \ntoissijaista ja politiikka määrittää tahdin (H18; H22).  \nSamalla kun globaaliongelmista puhuttiin laajasti haastatteluissa, tiedediplomatia nähtiin \nkansallisena projektina, ”Ab Suomi Oy:n” tehtävänä (H11). Tiedediplomatian tavoitteena oli \nluoda Suomesta” kuvaa toimijana, joka on ratkaisemassa viheliäitä ongelmia” (H2), mikä \njättää tulkinnanvaraiseksi, onko imagopolitiikka kuitenkin tärkeämpää kuin aito edistyminen \nongelmien ratkaisussa. Samanlainen ulkopoliittinen realismi paistaa kommentista, että \n”tiedediplomatia tarjoaa kulissin erilaisille toimille”. Tiedediplomatiassa tärkeää on myös \nimago: “Epäitsekkyys on itsekkyyttä.” (H30.)  \nVaikka Suomi voisi olla tiedediplomatiassa kokoaan suurempi (H2), ”haasteena on se, että \nmeillä kaikki on niin pientä” (H17). Suuruuden ekonomiaan liittyvät myös pelot siitä, kuinka \nEU ja sitä kautta Suomi jää jalkoihin suurten maiden temmellyskentällä muun muassa \nkyberpuolella, jossa erityisesti Yhdysvalloilla on runsaasti yrityspuolen osaamista \n”vetoapunaan”. Kybermaailmassa “haetaan kauhun tasapainoa”, ja suurvalloilla on parhaat \nresurssit tähän kamppailuun. (H22.)  \nDiplomacy for science -kategoriassa korostui pohdinta siitä, kuinka diplomatian keinoin \nvoidaan edistää tutkimuksen tekoa. Tässä viitekehyksessä nousi erityisesti esiin edellä \nmainittu Team Finland Knowledge -verkosto mutta myös erilaiset ei-juridisesti sitovat \nkansainväliset yhteisymmärryspöytäkirjat ja kansainväliset tiede- ja tutkimussopimukset, \njoilla yhteistyötä vauhditetaan usein EU:n ulkopuolisten maiden toimesta, mutta joiden \ntodellinen merkitys jää usein kirjausten sitomattomuuden takia vaatimattomaksi (H27). \nErilaiset diplomatian arvovaltapalvelut ja niiden merkitys autoritaarisissa ja hierarkkisen \ntoimintakulttuurin maissa myös tunnistettiin. Yleisesti haastatteluissa korostui, että tieteen ja \ntutkimuksen itsenäisyyttä ja vapautta pidettiin erittäin tärkeänä osana tiedediplomatiaa."
  },
  {
    "page": 14,
    "text": "14 \n \nScience for diplomacy -kategoria heijasteli sitä, kuinka haastatteluhetkellä \nglobaaliongelmista korostui erityisesti ilmastonmuutos ja tähän liittyvä suomalainen tutkimus \nja teknologia. Samalla kuitenkin on huomattava, että ilmastopolitiikka oli haastatteluhetkellä \nyksi maakuvatyön kärkiteema ja siten jää tulkinnanvaraiseksi, mitä havainto lopulta selittää. \nSuomen näkökulmasta kiinnostavaa haastatteluissa oli, kuinka kansalliseksi kärkiteemaksi \nnoussutta koulutusvientiä perusteltiin esimerkiksi juuri ilmastoaiheisiin nähden kevyesti: \nilmastoaiheissa Suomen monipuoliset vahvuudet tunnistettiin kauttaaltaan \nperustutkimuksesta vientiteollisuuteen ja kansainväliseen diplomatiaan, kun taas koulutus \nhahmottui eksplisiittisemmin osaksi Suomen maakuvatyötä.  \nAineiston keräämisessä selväksi tuli, että eri tieteenalojen edustajat olivat hyvin kärkkäitä \nedistämään omia etujaan, mistä voidaan päätellä, että mikäli tiedediplomatia Suomessa \nresursoitaisiin vahvemmin, eri intressiristiriidat nousisivat voimallisemmin esiin. Suomen \npienet resurssit ja maailman suuret ongelmat muodostivat yhdessä vaikean strategisen \ndilemman: valtaosa haastateltavista kuitenkin halusi uskoa Suomen \nvaikutusmahdollisuuksiin, mutta tiedediplomatiakenttää vaivasi strategisen ohjauksen puute. \nToki onnistumisiakin mainittiin, esimerkiksi kuinka Suomi oli onnistunut vaikuttamaan \nesimerkiksi kansainvälisiin päästöneuvotteluihin (H9).  \nTulosten tarkastelu \nTässä luvussa arvioidaan analyysin tuloksia. Ensin avataan tiedediplomatiaa strategisena \nvälineenä ja sitten tarkastellaan tiedediplomatiadiskurssin muotoutumista poliittisten \nmuutosten valossa. \nTiedediplomatian reaalipoliittinen käänne \nTiedediplomatia on enemmän tai vähemmän strategisesti valittu keino erilaisten intressien \nedistämiseen. Kuten taulukko 1 havainnollistaa, intressien määrittämisen taustalla on usein \neri hallitusten ja ministeriöiden tavoitteet. Nämä tavoitteet muuttuvat ajan kuluessa ja \nvaihtuvat demokratioissa vaalien myötä, mutta kansainvälisessä aineistossa on \ntunnistettavissa useita tyypillisiä rationaaleja, joita ovat tieteellisten, kaupallisten ja \nulkopoliittisten intressien edistäminen. \nTutkimuksessa olisikin hedelmällisempää jatkossa keskittyä tähän politiikkaan \ntiedediplomatian taustalla – ei niinkään erilaisiin aktiviteettikartoituksiin, sillä nämä ovat \npääsääntöisesti kansallisten politiikkojen ja resursoinnin ilmentymiä. Valtio-opillisesti olisi \nkiinnostavaa esimerkiksi ymmärtää, ajavatko suuret eurooppalaiset puolueet, kuten \noikeistopopulistit, vihreät, sosiaalidemokraatit tai konservatiivit, samantyyppistä \ntiedediplomatiaa ja, jos ajavat, millaista se on. Samalla tulisi tehdä tarkemmin eroa \nitsenäisten, ei-valtiollisten tiedediplomatiatoimijoiden tavoitteenasetteluun ja pohtia, miten \nse eroaa hallitusten ajamasta linjasta. Nyt tulkintaa leimaa valtiokeskeinen näkökulma, jossa \nitsenäisten toimijoiden työ sovitetaan tulkinnallisesti yhteen virallisen toiminnan kanssa."
  },
  {
    "page": 15,
    "text": "15 \n \nEsimerkiksi yliopistoilla, tiedeakatemioilla ja tieteellisillä seuroilla voi olla hyvinkin virallisesta \nlinjasta poikkeavia pyrkimyksiä ja näkemyksiä (esim. Yhdysvallat).  \nTiedediplomatian “keksiminen” on itsessään hyvä esimerkki siitä, mitä tiedediplomatia \nkäytänteenä on valtiokeskeisestä valtaperspektiivistä. Sen käsitteellinen synty paikallistuu \nhetkeen, jolloin Yhdysvalta oli maailman ainoa supervalta. Maavertailussa voidaan huomata, \nettä globaalisti tarkasteltuna varsin suuri osa erilaisista tiede- ja teknologiaprojekteista \nkiinnittyy Yhdysvaltoihin ja Isoon-Britanniaan. Syynä on paitsi näiden maiden korkea tieteen \ntaso, mutta myös niiden isot vahvat tiedepanostukset. Käänteisesti asia tuli esiin \nhaastatteluaineistossa: ongelmana pidettiin yhteistyötä tutkimuksellisesti vähemmän \nedistyneiden maiden kanssa, ja nähtiin luontevana tähdätä sinne, mistä on opittavaa. \nTiedediplomatiaa voidaankin pitää Yhdysvaltojen liimastrategiana, jonka tavoitteena on \nylläpitää maailman johtavan suurvallan asemaa. Kielikysymys ei ole tässä kokonaisuudessa \nvähäpätöinen, sillä englanti on yhä kansainvälinen tieteen kieli.  \nHaastatteluaineistoista välittyy, että samalla kyse voi olla jaetuista, yhteiseksi puetuista tai \nyhteisesti sovituista intresseistä. Geo- ja valtapoliittisesta käänteestä huolimatta \nihmiskunnan yhteisiin haasteisiin vastaaminen ei ole täysin poistunut asialistalta, ja \nSuomella nähtiin edelleen rooli näissä yhteisissä talkoissa. Kansallisten etujen tunnistamisen \nja edistämisen suhteen oltiin varsin varovaisia, ja Suomen etu nähtiin maailman etuna \nerityisesti koulutus- ja ilmastoteemoissa. Tämä heijastaa Suomen pitkää ulkopoliittista linjaa \nkansainvälisen politiikan lääkärinä, ei tuomarina. \nTällä hetkellä tiedediplomatiassa painottuu aikaisempaa vahvemmin tieteen ja teknologian \nmerkitys valtaresurssina. Toimintaympäristöä leimaa Kiinan ja Yhdysvaltojen kiristynyt \nteknologinen kilpailu ja riskien tunnistaminen kansainvälisessä tiedeyhteistyössä. Muutos \nheijastuu myös kotimaiseen keskusteluun, jossa aikaisempaa valppaammin keskustellaan \ntieteenteon avoimuuden rajoista. Muutos ei kuitenkaan ole yhtäkkinen. \nVuosiin 2017–2018 paikantuu aineiston valossa tiedediplomatian reaalipoliittinen käänne, \njossa valtakysymykset ja intressit nousivat tiiviimmin osaksi tiedediplomatiadiskursseja. \nKäänne ajoittuu Trumpin ensimmäiseen valtakauteen. Yhdysvalloilla on keskeinen rooli \nkansainvälisen politiikan agendan määrittäjänä ja suunnan näyttäjänä. Trumpin hallinnon \nvahvimman oikeutta korostava ulkopolitiikka on ongelmallinen paitsi pienille maille, myös \nglobaalille tiedeyhteisölle ja moniääniselle näyttöperusteiselle politiikalle laajemmin. \nKun 15 vuotta sitten tiedediplomatia oli ennen kaikkea keino parantaa yhteyksiä ja suhteita \nkeskittymällä siihen, mikä yhdistää maita ja niiden väestöjä pikemminkin kuin mikä niitä \nerottaa, nyt tiedediplomatiakeskustelua sävyttää eräänlainen riskienhallintadiskurssi. Tiede- \nja teknologiayhteistyö on globalisoituneen maailman välttämättömyys, mutta samalla \nkeskustelussa painottuvat turvallisuusnäkökulmat ja tarve kytkeytyä irti riippuvuuksista. \nReaalipoliittinen käänne tarkoittaa ennen muuta sitä, että tiedediplomatiaa harjoitetaan ja \ntarkastellaan pikemminkin intressilähtöisesti kuin arvolähtöisesti eri osa-alueilla. Tässä"
  },
  {
    "page": 16,
    "text": "16 \n \nkäänteessä tieteen, tutkimuksen ja globaaliongelmakeskeisten ratkaisujen edistäminen jää \nmuiden toimijoiden aktiivisuuden varaan.  \nSuomen kaltaisen pienen maan selviytymisstrategiaksi jää sopeutuminen. Hyvänä \nesimerkkinä toimii Suomen Akatemiaa koskevan lain muuttaminen niin, että tieteelliselle \ntutkimukselle jaettu rahoitus ei saisi olla ristiriidassa Suomen ulko- ja turvallisuuspolitiikan \nkanssa. Lakihanketta on kritisoitu vahvasti: siinä on nähty kaikuja suomettumisesta ja \nepädemokraattisten maiden tavoista alistaa tiede poliittisille päämäärille (Sauli & Juntunen, \n2025).  \nTiedediplomatiakeskustelussa on sitkeästi pysynyt mukana vahva eetos sille, että \nglobaalihallintaan, kansainvälistymiseen ja ihmisyhteisöjen väliseen vuorovaikutukseen tulee \npanostaa eri syistä. Vaikeina aikoina on ylläpidettävä kielten ja kulttuurien tuntemusta tai \nmuuten tulevaisuudessa häämöttävinä helpompina aikoina ei ole lähtökohtia rakentaa \nsuhteita erilaisiin yhteisöihin. Esimerkiksi joulukuussa 2022 järjestetyssä suomalaisessa \ntyöpajassa todettiin, että suomalainen tiedeyhteisö on noudattanut tarkasti sanktioita ja \ninstitutionaalinen yhteistyö venäläistoimijoiden kanssa on lakkautettu, mutta samalla \ntodettiin, että tarve strategiselle ja laaja-alaiselle Venäjä-osaamiselle, mukaan lukien kielen ja \nkulttuurin tuntemukselle, ei tule katoamaan mihinkään. Madridin työpajassa vuonna 2023 \nkorostuivat samansuuntaiset vetoomukset kiinan kielen ja kulttuurin opiskelun puolesta. \nTässä palataan vieraantuneisuuden käsitteeseen ja ongelmaan, jossa instituutiot näyttäytyvät \nihmisyhteisöjen ulkopuolella toimiviksi organismeiksi, joihin omalla toiminnallaan ei voi \nvaikuttaa. Suurvaltapoliittinen käänne kansainvälisissä suhteissa on ongelmallinen, sillä se \nkorostaa toimijakeskeistä näkökulmaa. Näkökulma kiinnittyy institutionaalisiin järjestelyihin, \nrakenteisiin ja resursointiin, joka tuottaa yhteistyölle uhkia. \nTiedediplomatian potentiaalina on, että käsitteen avulla voidaan tarkastella diplomaatteja, \ntutkijoita ja tiedeyhteistyötä muustakin kuin kansallisesta ”maan edustajien” näkökulmasta. \nNäin tulee huomioiduksi myös se, että yksittäisillä ihmisillä ja heidän neuvottelukyvyillään voi \nolla merkittävä vaikutus laajempiin positiivisiin kehityskulkuihin ja luottamuksen \nrakentamiseen. Tutkimusstrategiana tämä on vaikeaa, sillä yksilön rooli tulisi piirtyä esiin \nlaajemmasta kontekstista.  \nMinding the gap – tiedediplomatian erilaiset kuilut \nTiedediplomatiaa harjoitetaan paitsi eri maissa eri lähtökohdista myös eri tieteenaloilla ja \npolitiikan sektoreilla. Näin ollen erilaisia vieraantuneisuuden kuiluja ja intressiristiriitoja on \nvääjäämättä erittäin suuri määrä institutionaalisella tasolla yksilötasosta puhumattakaan. \nTämän aineiston pohjalta niitä on esimerkiksi suhteissa Eurooppa–Yhdysvallat, tutkijat–\ndiplomaatit ja autoritaariset maat – demokraattiset maat. \nUseissa selvityksissä peräänkuulutetaan strategisempaa otetta tiedediplomatiaan. \nEurooppalaisella tasolla tätä keskustelua pyrittiin vauhdittamaan lanseeraamalla prosessi, \njonka lopputulos, helmikuussa 2025 julkaistu raportti ei kuitenkaan ole strategia vaan"
  },
  {
    "page": 17,
    "text": "17 \n \nsuosituksia sisältävä jäsentely, jossa kuvataan ja jäsennellään, mitä EU:n ulkosuhteissa \ntapahtuu tutkimuksen ja tieteen näkökulmasta. \nTiedediplomatian kenttä on varsin laaja. Siten strategisuus on välttämättömyys. Vain sillä, \nettä tavoitteista sovitaan erikseen, voidaan päättää, mihin resurssit keskitetään ja mikä on \ntiedediplomatian varsinainen hahmo ja muoto. Strategioillakaan ei kuitenkaan pystytä täysin \nhallitsemaan tiedediplomatian ennakoimattomia vaikutuksia. \nJohtopäätökset \nTiede ja teknologia ovat kautta historian olleet vallan välineitä. On selvää, että tutkijat ja \ntiedeyhteisö tarvitsevat tiedediplomatiaa enemmän kuin päätöksentekijät. Tutkijakunnalle ja \nerilaisille tieteen välittäjäorganisaatioille tiedediplomatia on väylä päästä kiinni valtaan. \nTiedediplomatiassa ilmennyt toiveikkuus tiedediplomatian kansainvälistä politiikkaa \ntransformoivasta potentiaalista vaikuttaa nykyluennassa naiivilta, kun maailmanpolitiikkaa \nvoi heiluttaa nopeasti pikaviestipalvelussa. \nVaikka tiedediplomatia itsessään tuskin kykenee murtamaan puhtaan valtapolitiikan kovaa \nydintä, tiedediplomatia antaa välineitä jatkaa tieteen ja vapauden universalismin \npuolustamista sekä globaaliongelmakeskeistä hallintaa. Tiedediplomatian laaja ja \nmoninainen toimijakenttä yrityksistä kansalaisjärjestöihin ja tiedeakatemioihin mahdollistaa \nkuitenkin näiden teemojen edistämisen kansainvälispoliittisesti vaikeina aikoina.  \nTiedediplomatia tarjoaa eräänlaisen teknokraattisen utopian siitä, kuinka kansainvälinen \npolitiikka voisi muotoutua yhteisesti sovittujen päämäärien pohjalta ja kanavoitua laajoja \nihmisjoukkoja hyödyttäväksi toiminnaksi. Tässä ideaalissa toimenpiteet määrittelisi \nkosmopoliittinen tiedeyhteisö ja tavoitteet määriteltäisiin universaalin vapauden ja eetoksen \nnäkökulmasta. Parhaiten tätä mallia ovat toistaiseksi vastanneet Yhdistyneiden kansakuntien \nvuosituhattavoitteet ja sen jälkeen kestävän kehityksen tavoitteet. Keskiössä olivat \nihmisoikeudet, ja tavoitteita edistettiin demokraattisesti niin kansainvälisesti kuin \nkansallisestikin. \nVaikka tämä utopia on kauempana kuin koskaan sitten tiedediplomatian käsitteellistämisen, \non myös syytä tietoisesti vastustaa trendejä, jotka pönkittävät maailman käsittämistä \npuhtaasta valtapoliittisesta perspektiivistä. Tarvitsemme yhä mielikuvia ja tavoitteita, joilla \nrakennetaan positiivisia tulevaisuuksia globaalisti sotien, etenevän ilmastokriisin, \nluontokadon ja pandemiariskien olosuhteissa. \nLähteet \nBarston, R. P. (1997). Modern diplomacy. Longman. \nBerkman, P. A. (2019). Evolution of science diplomacy and its local-global applications. \nEuropean Foreign Affairs Review, 24(AI), 63–79. https://doi.org/10.54648/eerr2019019  \nBerridge, G. R. (2003). Diplomacy – theory and practice. Palgrave Macmillan UK."
  },
  {
    "page": 18,
    "text": "18 \n \nBerridge, G. R. (2015). Diplomacy: theory and practice (5. painos). Palgrave Macmillan. \nBjörn, P. & Kola, J. (2021). Kansainvälinen tiedediplomatia viheliäisten ongelmien ratkaisujen \navaimena. Turun yliopiston blogi. https://blogit.utu.fi/utu/2021/11/09/kansainvalinen-\ntiedediplomatia-viheliaisten-ongelmien-ratkaisujen-avaimena/  \nBrint, S. (2025). US universities in the age of Trump: is there a way to prevent their long-term \ndecline? Society, 2025. https://doi.org/10.1007/s12115-025-01124-6 \nClausewitz, C. von. (1989). On war. Princeton University Press.  \nFlink, T. (2020). The sensationalist discourse of science diplomacy: a critical reflection. The \nHague Journal of Diplomacy, 15(3), 359–370. https://doi.org/10.1163/1871191X-BJA10032 \nDer Derian, J. (1987). On diplomacy: a genealogy of Western estrangement. Blackwell.  \nFähnrich, B. (2017). Science diplomacy: investigating the perspective of scholars on politics–\nscience collaboration in international affairs. Public Understanding of Science, 26(6), 688–\n703. https://doi.org/10.1177/0963662515616552  \nEuropean Commission: Directorate-General for Research and Innovation, Gjedssø Bertelsen, \nR., Bochereau, L., Chelioti, E., Dávid, Á., Gailiūtė-Janušonė, D., Hartl, M., Liberatore, A., \nMauduit, J.-C., Müller, J. M. & Van Langenhove, L. (toim.). (2025). A European framework for \nscience diplomacy: recommendations of the EU Science Diplomacy Working Groups. \nPublications Office of the European Union. https://data.europa.eu/doi/10.2777/9235330  \nEuropean Science Diplomacy Conference. (2025). Report about the 1 st European Science \nDiplomacy Conference: Towards a European Approach to Science Diplomacy, 18-19 \nDecember 2023, Madrid, Spain. https://2023.eu-science-diplomacy.service-\nfacility.eu/docs/Report_about_the_1st_European_Science_Diplomacy_Conference_Towards_\na_European_Approach_to_Science_Diplomacy.pdf  \nHongisto, P. (2011). Valta on edelleen tietoa. Tieteessä tapahtuu, 29(4–5), 65–66. \nJönsson, C. (2002). Diplomacy, bargaining, and negotiation. Teoksessa W. Carlsnaes, T. Risse \n& B. A. Simmons (toim.), Handbook of international relations (s. 212–234). SAGE Publications. \nhttps://doi.org/10.4135/9781848608290.n11 \nKarltofen, C. & Acuto, M. (2018). Science diplomacy: Introduction to a boundary problem. \nGlobal Policy, 9(3), 8–14. https://doi.org/10.1111/1758-5899.12621  \nKeohane, R. O. (1984). After hegemony: cooperation and discord in the world political \neconomy. Princeton University Press. \nKrasnyak, O. (2018). National styles in science, diplomacy, and science diplomacy: a case \nstudy of the United Nations Security Council P5 Countries. Brill Research Perspectives in \nDiplomacy and Foreign Policy, 3(1), 1–100. https://doi.org/10.1163/24056006-12340009"
  },
  {
    "page": 19,
    "text": "19 \n \nLagerspetz, E. (2024). Itsemäärääminen ja valta — Kirjoituksia poliittisesta filosofiasta. \nGaudeamus.  \nLane, E. (22.3.2016). Science diplomacy improves Cuba, U.S. relations. American Association \nfor the Advancement of Science. https://www.aaas.org/news/science-diplomacy-improves-\ncuba-us-relations \nLattu, A. & Mäkinen-Rostedt, K. (2022). #ScienceForUkraine, Suomi, tiede ja sota – aika \nreflektoida. Tieteessä tapahtuu, 5. https://www.tieteessatapahtuu.fi/numerot/5-\n2022/scienceforukraine-suomi-tiede-ja-sota-aika-reflektoida \nLatour, B. (1987). Science in action: how to follow scientists and engineers through society. \nHarvard University Press. \nLeese, M. (2018), Between a carrot and a stick: science diplomacy and access to EU research \nfunding. Global Policy, 9(S3), 48–52. https://doi.org/10.1111/1758-5899.12546 \nLeijten, J. (2017). Exploring the future of innovation diplomacy. European Journal of Futures \nResearch, 5, 20. https://doi.org/10.1007/s40309-017-0122-8  \nMas-Permejo, P., Marimón-Torres, N. & Dickinson-Meneses, F. (17.10.2024). Cuba-US \nscientific collaboration: science diplomacy in challenging times. Science & Diplo-macy. \nhttps://doi.org/10.1126/scidip.adt9910  \nMerriam-Webster. (ei pvm.). Diplomacy. Teoksessa Merriam-Webster.com dictionary. Haettu \n2.3.2025 osoitteesta https://www.merriam-webster.com/dictionary/diplomacy \nMüller, J.-M. (3.5.2021). Science for Multilateralism. Science & Diplomacy, 10(2) \nhttps://www.sciencediplomacy.org/perspective/2021/science-for-multilateralism  \nPielke, Jr., R. A. (2007). The honest broker: Making sense of science in policy and politics. \nCambridge University Press. \nPutnam, H. (1981). Reason, truth and history. Cambridge University Press. \nhttps://doi.org/10.1017/CBO9780511625398 \nRittel, H. W. & Webber, M. M. (1973). Dilemmas in a general theory of planning. Policy \nSciences, 4(2), 155–169. \nRuffini, P.-B. (2018a). Science and diplomacy: a new dimension of international relations. \nSpringer. https://doi.org/10.1007/978-3-319-55104-3 \nRuffini, P.-B. (2018b). The intergovernmental panel on climate change and the science-\ndiplomacy nexus. Global Policy, 9(S3) 73–77. https://doi.org/10.1111/1758-5899.12588 \nRuffini, P.-B. (2020a). Conceptualizing science diplomacy in the practitioner-driven literature: \na critical review. Humanities and Social Sciences Communications, 7(1), 1–9. \nhttps://doi.org/10.1057/s41599-020-00609-5"
  },
  {
    "page": 20,
    "text": "20 \n \nRuffini, P.-B. (28.6.2020b). France’s science diplomacy. Science & Diplomacy. \nhttps://www.sciencediplomacy.org/article/2020/frances-science-diplomacy \nRuffini, P. (2020c). Collaboration and competition: the twofold logic of science diplomacy. The \nHague Journal of Diplomacy, 15(3), 371–382. https://doi.org/10.1163/1871191X-BJA10028 \nRungius, C., Flink, T. & Riedel, S. (2022). SESAME - A synchrotron light source in the Middle \nEast: An international research infrastructure in the making. Open Research Europe, 4(1), 51. \nhttps://doi.org/10.12688/open-reseurope.13362.2  \nRungius, C. & Flink, T. (2020). Romancing science for global solutions: on narratives and \ninterpretative schemas of science diplomacy. Humanities and Social Science \nCommunications, 7, 102. https://doi.org/10.1057/s41599-020-00585-w  \nSauli, M. & Juntunen, K. (13.2.2025). Akateemikko uudesta lakihankkeesta: Olisi erikoista, että \ndemokratiassa lakiin kirjattaisiin, mitä tutkimuksen pitää olla. Yle. https://yle.fi/a/74-\n20143320  \nScharpf, F. (1999). Governing in Europe: effective and democratic? Oxford Academic. \nhttps://doi.org/10.1093/acprof:oso/9780198295457.001.0001 \nStone, D. (2020). Making global policy. Cambridge University Press. \nTurekian, V. (2018). The evolution of science diplomacy. Global Policy, 9(3), 5–7. \nhttps://doi.org/10.1111/1758-5899.12622 Opetus- ja kulttuuriministeriö. (ei pvm.). Team \nFinland Knowledge -verkosto. Haettu 23.3.2025 osoitteesta https://okm.fi/-/team-finland-\nknowlegde-verkosto  \nUusikylä, P., Ketola, J., Oreschnikoff, A. & Jaakkola, S. (2021a). Kansainvälisen \ntiedediplomatian tila (policy brief 2021:11). Valtioneuvoston kanslia. \nhttp://urn.fi/URN:ISBN:978-952-383-174-2  \nUusikylä, P. Ketola, J. Oreschnikoff, A., Aula, P., Kuosmanen, J., Jaakkola, S. & Jalonen, H. \n(2021b). Kohti mahdollistavaa tiedediplomatiaa. Suomalaisen tiedediplomatian tila ja \nkehittämistarpeet (valtioneuvoston selvitys- ja tutkimustoiminnan julkaisusarja 2021:41). \nValtioneuvoston kanslia. http://urn.fi/URN:ISBN:978-952-383-174-2  \nZhang, J. (2015). Interpersonal prominence and international presence: implicitness \nconstructed and translated in diplomatic discourse. Cambridge Scholars Publishing."
  }
] as ArticlePage[],
  },
] as const;
