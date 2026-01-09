import { wholeQuestionData } from "@/data/data"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { TOP_150_QUESTIONS, TOP_75_QUESTIONS } from "./consts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const allQuestionsData = wholeQuestionData
export const top75QuestionsData = wholeQuestionData.filter((question) =>
  question.includeIn.includes(TOP_75_QUESTIONS)
)
export const top150QuestionsData = wholeQuestionData.filter((question) =>
  question.includeIn.includes(TOP_150_QUESTIONS)
)