"use client";
import {
  ALL_QUESTIONS,
  TOP_150_QUESTIONS,
  TOP_75_QUESTIONS,
} from "@/lib/consts";

function TopBarForQuestions({
  setSelectedTab,
  selectedTab,
}: {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
}) {
  const topHeadings = [
    { label: ALL_QUESTIONS },
    { label: TOP_75_QUESTIONS },
    { label: TOP_150_QUESTIONS },
  ];

  return (
    <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
      {topHeadings.map((heading, index) => (
        <button
          key={index}
          onClick={() => setSelectedTab(heading.label)}
          className={`
        min-w-40
        px-6 py-4
        rounded-md
        border
        text-center
        font-medium
        whitespace-nowrap
        transition
        duration-200
        ${
          selectedTab === heading.label
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }
      `}
        >
          {heading.label}
        </button>
      ))}
    </div>
  );
}

export default TopBarForQuestions;
