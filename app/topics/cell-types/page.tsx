import { notFound } from 'next/navigation';
import { TopicLayout } from '@/components/site/topic-layout';
import { TopicContent } from '@/components/site/topic-content';
import { getTopic } from '@/lib/site';

export function generateStaticParams() {
  return [{ slug: 'cell-types' }];
}

export default function Page() {
  const topic = getTopic('cell-types');
  if (!topic) notFound();
  return (
    <TopicLayout topic={topic}>
      <TopicContent topic={topic} />
    </TopicLayout>
  );
}
