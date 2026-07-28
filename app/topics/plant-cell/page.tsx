import { notFound } from 'next/navigation';
import { TopicLayout } from '@/components/site/topic-layout';
import { getTopic } from '@/lib/site';
import { PlantCellContent } from '@/components/site/topics/plant-cell-content';

export function generateStaticParams() {
  return [{ slug: 'plant-cell' }];
}

export default function Page() {
  const topic = getTopic('plant-cell');
  if (!topic) notFound();
  return (
    <TopicLayout topic={topic}>
      <PlantCellContent />
    </TopicLayout>
  );
}