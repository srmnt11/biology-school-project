import { notFound } from 'next/navigation';
import { TopicLayout } from '@/components/site/topic-layout';
import { getTopic } from '@/lib/site';
import { CellTypesContent } from '@/components/site/topics/cell-types-content';

export function generateStaticParams() {
  return [{ slug: 'cell-types' }];
}

export default function Page() {
  const topic = getTopic('cell-types');
  if (!topic) notFound();
  return (
    <TopicLayout topic={topic}>
      <CellTypesContent />
    </TopicLayout>
  );
}