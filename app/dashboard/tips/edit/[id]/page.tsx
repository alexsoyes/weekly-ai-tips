import Title from '@/components/ui/title';
import { fetchTags } from '@/src/features/tagManagement/api/tagManager';
import { fetchTip } from '@/src/features/tipManagement/api/fetchTip';
import TipDetail from '@/src/features/tipManagement/components/TipForm';
import { convertTipEntityToForm } from '@/src/features/tipManagement/utils/tipUtils';
import Link from 'next/link';

export type Props = {
  params: {
    id: string;
  };
};

export default async function TipEdit({ params: { id } }: Props) {
  const tip = await fetchTip('id', id);
  const tags = await fetchTags();

  if (!tip) {
    return (
      <div>
        <Title>Tip not found</Title>

        <Link href="/dashboard/tips">Back to list</Link>
      </div>
    );
  }

  return (
    <>
      <Title>Editing Tips {id}</Title>

      <TipDetail tags={tags} tip={convertTipEntityToForm(tip)} />
    </>
  );
}
