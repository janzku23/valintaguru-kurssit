import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPageView from "@/components/LegalPageViewTemp";
import {
  legalPageBySlug,
  legalPages,
} from "@/data/legalPages";

type LegalPageRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return legalPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: LegalPageRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPageBySlug[slug];

  if (!page) {
    return {
      title: "Sivua ei löytynyt | ValintaGuru",
    };
  }

  return {
    title: `${page.title} | ValintaGuru`,
    description: `${page.title} – ValintaGuru Oy`,
  };
}

export default async function LegalPageRoute({
  params,
}: LegalPageRouteProps) {
  const { slug } = await params;
  const page = legalPageBySlug[slug];

  if (!page) {
    notFound();
  }

  return <LegalPageView page={page} />;
}