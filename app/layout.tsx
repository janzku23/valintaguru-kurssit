import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://valintaguru.fi";
const siteName = "ValintaGuru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "ValintaGuru – Valmennuskurssit, valintakokeet ja YO-harjoittelu",
    template: "%s | ValintaGuru",
  },

  description:
    "ValintaGuru auttaa valmistautumaan valintakokeisiin ja ylioppilaskirjoituksiin. Teoriaa, harjoituksia, monivalintoja, opiskelupolkuja ja edistymisen seurantaa yhdessä palvelussa.",

  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  category: "education",

  referrer: "origin-when-cross-origin",


  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteUrl,
    siteName,
    title:
      "ValintaGuru – Valmennuskurssit, valintakokeet ja YO-harjoittelu",
    description:
      "Teoria, harjoitukset ja opiskelun seuranta valintakokeisiin ja ylioppilaskirjoituksiin yhdessä palvelussa.",
    images: [
      {
        url: "/Etusivulogo.png",
        alt: "ValintaGuru – valmennuskurssit ja valintakoeharjoittelu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ValintaGuru – Valmennuskurssit, valintakokeet ja YO-harjoittelu",
    description:
      "Teoria, harjoitukset ja opiskelun seuranta valintakokeisiin ja ylioppilaskirjoituksiin.",
    images: ["/Etusivulogo.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  manifest: "/manifest.webmanifest",

  other: {
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
  },
  description:
    "ValintaGuru tarjoaa valmennuskursseja, teoriaa ja harjoittelua valintakokeisiin sekä ylioppilaskirjoituksiin.",
  inLanguage: "fi-FI",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  inLanguage: "fi-FI",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
