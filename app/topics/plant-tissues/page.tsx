import { notFound } from 'next/navigation';
import { TopicLayout } from '@/components/site/topic-layout';
import { getTopic } from '@/lib/site';
import { PlantTissuesContent } from '@/components/site/topics/plant-tissues-content';

export function generateStaticParams() {
  return [{ slug: 'plant-cell' }];
}

export default function Page() {
  const topic = getTopic('plant-cell');
  if (!topic) notFound();
  return (
    <TopicLayout topic={topic}>
      <PlantTissuesContent />
    </TopicLayout>
  );
}