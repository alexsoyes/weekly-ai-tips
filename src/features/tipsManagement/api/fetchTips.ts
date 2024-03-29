import { firestore } from "firebase-admin";
import { EntityTipForm } from "../types/TipEntity";

export async function fetchTips(): Promise<Array<EntityTipForm>> {
  const db = firestore();
  const tipsCollection = db.collection("tips");
  const snapshot = await tipsCollection.get();
  const tips: Array<EntityTipForm> = [];

  snapshot.forEach((doc) => {
    const tip = doc.data();
    tips.push({
      id: doc.id,
      name: tip.name,
      htmlContent: tip.htmlContent,
      shortDescription: tip.shortDescription,
    });
  });

  return tips;
}
