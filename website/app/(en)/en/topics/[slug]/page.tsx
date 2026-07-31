import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPage } from "../../../../../components/pages/TopicPage";
import { alternatesFor } from "../../../../../lib/i18n";
import { en } from "../../../../../lib/i18n/en";
import { findTopic, TOPIC_SLUGS } from "../../../../../lib/topics";

type TopicPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TOPIC_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = findTopic(slug);
  if (!topic) return {};

  return {
    title: en.topic.metaTitle(topic.en.question),
    description: en.topic.metaDescription(topic.en.question),
    alternates: alternatesFor("en", `/topics/${slug}`),
  };
}

export default async function Page({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = findTopic(slug);
  if (!topic) notFound();

  return <TopicPage lang="en" topic={topic} />;
}
