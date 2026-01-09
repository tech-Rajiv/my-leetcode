import TableOfAllQues from "./TableOfAllQues";

function AllQuestionHome({ allQuestions }: { allQuestions: any[] }) {
  return (
    <div className="my-8">
      <TableOfAllQues allQues={allQuestions} />
    </div>
  );
}

export default AllQuestionHome;
