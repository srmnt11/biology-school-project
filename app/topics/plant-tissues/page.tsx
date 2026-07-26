import { notFound } from 'next/navigation';
import { TopicLayout } from '@/components/site/topic-layout';
import { TopicContent } from '@/components/site/topic-content';
import { getTopic } from '@/lib/site';

export function generateStaticParams() {
  return [{ slug: 'plant-tissues' }];
}

export default function Page() {
  const topic = getTopic('plant-tissues');
  if (!topic) notFound();
  return (
    <TopicLayout topic={topic}>
      <TopicContent topic={topic} />
    </TopicLayout>
  );
}
