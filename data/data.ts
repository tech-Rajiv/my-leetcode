import { TOP_150_QUESTIONS, TOP_75_QUESTIONS } from "@/lib/consts";

export const wholeQuestionAndAnswerData = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Array",
    url: "https://leetcode.com/problems/two-sum/description/",
    includeIn: [TOP_150_QUESTIONS, TOP_75_QUESTIONS],
    data: {
      question: [
        {
          type: "paragraph",
          content:
            "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        },
        {
          type: "paragraph",
          content:
            "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        },
        {
          type: "paragraph",
          content: "You can return the answer in any order.",
        },
        {
          type: "list",
          items: [
            "Example 1: Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].",
            "Example 2: Input: nums = [3,2,4], target = 6 Output: [1,2]",
            "Example 3: Input: nums = [3,3], target = 6 Output: [0,1]",
          ],
        },
        { type: "paragraph", content: "Constraints:" },
        {
          type: "list",
          items: [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "-10^9 <= target <= 10^9",
            "Only one valid answer exists.",
          ],
        },
      ],
      answer: [
        {type: "paragraph", content: "Here is a TypeScript solution using a hash map:"},
        {
          type: "code",
          language: "typescript",
          content: `function twoSum(nums: number[], target: number): number[] {
    const numToIndex = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement)!, i];
        }
        
        numToIndex.set(nums[i], i);
    }
    
    return [];
}`,
        },
      ],
    },
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    topic: "Linked List",
    url: "https://leetcode.com/problems/add-two-numbers/description/",
    includeIn: [TOP_150_QUESTIONS],
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Hard",
    topic: "String",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
    includeIn: [TOP_150_QUESTIONS],
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    topic: "Array",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
    includeIn: [TOP_75_QUESTIONS, TOP_150_QUESTIONS],
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    topic: "String",
    url: "https://leetcode.com/problems/longest-palindromic-substring/description/",
    includeIn: [TOP_150_QUESTIONS],
  },
  {
    id: 6,
    title: "Zigzag Conversion",
    difficulty: "Medium",
    topic: "String",
    url: "https://leetcode.com/problems/zigzag-conversion/description/",
    includeIn: [TOP_75_QUESTIONS],
  },
];

export const wholeQuestionData = wholeQuestionAndAnswerData.map(
  ({ id, title, difficulty, topic, url, includeIn }) => ({
    id,
    title,
    difficulty,
    topic,
    url,
    includeIn,
  })
);
