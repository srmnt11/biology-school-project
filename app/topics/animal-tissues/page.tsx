import { notFound } from 'next/navigation';
import { TopicLayout } from '@/components/site/topic-layout';
import { getTopic } from '@/lib/site';
import { AnimalTissuesContent } from '@/components/site/topics/animal-tissues-content';

export function generateStaticParams() {
  return [{ slug: 'animal-tissues' }];
}

export default function Page() {
  const topic = getTopic('animal-tissues');
  if (!topic) notFound();
  return (
    <TopicLayout topic={topic}>
      <AnimalTissuesContent />
    </TopicLayout>
  );
}