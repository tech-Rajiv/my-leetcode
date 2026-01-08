import { wholeQuestionData } from "@/data/data"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const allQuestions = wholeQuestionData
export const top75Questions = wholeQuestionData.filter((question) =>
  question.includeIn.includes("Top 75 Questions")
)
export const top150Questions = wholeQuestionData.filter((question) =>
  question.includeIn.includes("Top 150 Questions")
)