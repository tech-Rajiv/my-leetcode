import Homepage from "@/components/HomePage/Homepage";
import { allQuestionsData } from "@/lib/utils";

export default function Home() {
  return (
    <div className="overflow-x-auto overscroll-x-contain">
      <Homepage questions={allQuestionsData} heading="AtoZ Questions" />
    </div>
  );
}
