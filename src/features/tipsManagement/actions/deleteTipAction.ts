"use server";

import { deleteFirestoreObject } from "@/src/utils/firestore/deleteFirestoreObject";
import { revalidatePath } from "next/cache";

export async function deleteTipAction(
  _: boolean | null,
  formData: FormData
): Promise<boolean | null> {
  const id = formData.get("id") as string | undefined;

  if (!id) throw new Error("ID is required");

  const isDeleted = await deleteFirestoreObject("tips", id);

  revalidatePath("/dashboard/tips");

  return isDeleted;
}