import Homepage from "@/components/HomePage/Homepage";
import { top150QuestionsData } from "@/lib/utils";

function page() {
  console.log("top150QuestionsData:", top150QuestionsData);
  return (
    <div>
      <Homepage questions={top150QuestionsData} heading="Top 150 Questions" />
    </div>
  );
}

export default page;
