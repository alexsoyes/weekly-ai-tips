import { fetchTips } from "@/src/features/tipsManagement/api/fetchTips";
import TipList from "@/src/features/tipsManagement/components/TipList";

export default async function Page() {
  const tips = await fetchTips();

  return <TipList tips={tips} />;
}
