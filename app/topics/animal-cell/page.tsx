import { notFound } from 'next/navigation';
import { TopicLayout } from '@/components/site/topic-layout';
import { getTopic } from '@/lib/site';
import { AnimalCellContent } from '@/components/site/topics/animal-cell-content';

export function generateStaticParams() {
  return [{ slug: 'animal-cell' }];
}

export default function Page() {
  const topic = getTopic('animal-cell');
  if (!topic) notFound();
  return (
    <TopicLayout topic={topic}>
      <AnimalCellContent />
    </TopicLayout>
  );
}