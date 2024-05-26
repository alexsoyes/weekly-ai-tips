'use server';

import { revalidatePath } from 'next/cache';
import { setPublished } from '../../votingSystem/utils/setPublished';
import editTip from '../api/editTip';
import { fetchTip } from '../api/fetchTip';

export async function publishTipAction(
  _: boolean | string | null,
  formData: FormData,
): Promise<boolean | string | null> {
  const tipId = formData.get('id') as string;

  if (!tipId) {
    throw new Error('Tip ID is required');
  }

  const tip = await fetchTip('id', tipId);

  if (!tip) {
    throw new Error('Tip not found');
  }

  editTip(setPublished(tip));

  revalidatePath('/dashboard/tips');

  return true;
}
