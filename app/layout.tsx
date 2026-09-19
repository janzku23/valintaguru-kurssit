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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.valintaguru.fi";

const siteName = "ValintaGuru";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
    template: "%s | ValintaGuru",
  },

  description:
    "ValintaGurun valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon. Harjoittele päättelyä, aineistojen analysointia, tekstinymmärtämistä ja ajankäyttöä tehokkaasti verkossa.",

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
      "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
    description:
      "Valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon. Teoria, harjoitukset ja opiskelun seuranta yhdessä palvelussa.",
    images: [
      {
        url: "/Etusivulogo.png",
        width: 1200,
        height: 630,
        alt: "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ValintaGuru – Valintakoe G ja oikeustieteen valmennuskurssit",
    description:
      "Valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon.",
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
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  manifest: "/manifest.webmanifest",

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },

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
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0a0a0a",
    },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: "ValintaGuru.fi",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
  },
  description:
    "ValintaGuru tarjoaa valmennuskursseja Valintakoe G:hen ja oikeustieteen eriytyvään osioon.",
  inLanguage: "fi-FI",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  alternateName: "ValintaGuru.fi",
  description:
    "Valmennuskurssit Valintakoe G:hen ja oikeustieteen eriytyvään osioon.",
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
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}