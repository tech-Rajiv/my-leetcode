"use client";
import { useEffect, useState } from "react";
import AllQuestionHome from "./AllQuestionHome";
import TopBarForQuestions from "./TopBarForQuestions";
import {
  ALL_QUESTIONS,
  TOP_150_QUESTIONS,
  TOP_75_QUESTIONS,
} from "@/lib/consts";
import {
  allQuestionsData,
  top150QuestionsData,
  top75QuestionsData,
} from "@/lib/utils";

function Homepage() {
  const [selectedTab, setSelectedTab] = useState(ALL_QUESTIONS);
  const [renderQuestions, setRenderQuestions] = useState(allQuestionsData);
  useEffect(() => {
    if (selectedTab === ALL_QUESTIONS) {
      setRenderQuestions(allQuestionsData);
    } else if (selectedTab === TOP_75_QUESTIONS) {
      setRenderQuestions(top75QuestionsData);
    } else if (selectedTab === TOP_150_QUESTIONS) {
      setRenderQuestions(top150QuestionsData);
    }
  }, [selectedTab]);
  return (
    <div>
      <TopBarForQuestions
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <AllQuestionHome allQuestions={renderQuestions} />
    </div>
  );
}

export default Homepage;
