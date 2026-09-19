import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getCourseById,
  isCourseId,
} from "../../../data/courses";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    courseId: string;
  }>;
};

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { courseId } = await params;

  if (!isCourseId(courseId)) {
    return {
      title: "Kurssia ei löytynyt | ValintaGuru",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const course = getCourseById(courseId);

  if (!course) {
    return {
      title: "Kurssia ei löytynyt | ValintaGuru",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: {
      default: course.title,
      template: `%s | ${course.title} | ValintaGuru`,
    },

    description: course.description,

    /**
     * Kurssialue on käyttäjäkohtainen / käyttöoikeuden takana.
     *
     * Emme halua Googlen indeksoivan:
     * - teoriaa
     * - tehtäviä
     * - flashcardeja
     * - podcasteja
     * - edistymistä
     * - kirjautuneen käyttäjän kurssinäkymiä
     */
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        noimageindex: true,
      },
    },

    openGraph: {
      type: "website",
      siteName: "ValintaGuru",
      title: `${course.title} | ValintaGuru`,
      description: course.description,
      locale: "fi_FI",
    },

    twitter: {
      card: "summary_large_image",
      title: `${course.title} | ValintaGuru`,
      description: course.description,
    },
  };
}

export default async function CourseLayout({
  children,
  params,
}: Props) {
  const { courseId } = await params;

  if (!isCourseId(courseId)) {
    notFound();
  }

  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  return children;
}