import TableOfAllQues from "./TableOfAllQues";

function AllQuestionHome() {
  const allQuest = [
    { id: 1, title: "Two Sum", difficulty: "Easy", topic: "Array" },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      topic: "Linked List",
    },
    {
      id: 3,
      title:
        "Longest Substring Without Repeating Characters Without Repeating Characters",
      difficulty: "Hard",
      topic: "String",
    },
  ];
  return (
    <div className="my-8">
      <TableOfAllQues allQues={allQuest} />
    </div>
  );
}

export default AllQuestionHome;
