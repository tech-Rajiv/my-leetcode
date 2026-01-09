import Homepage from "@/components/HomePage/Homepage";
import { top75QuestionsData } from "@/lib/utils";
import React from "react";

function page() {
  return (
    <div>
      <Homepage questions={top75QuestionsData} heading="Top 75 Questions" />
    </div>
  );
}

export default page;
