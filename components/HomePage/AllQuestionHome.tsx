import TableOfAllQues from "./TableOfAllQues";

function AllQuestionHome({
  questions,
  heading,
}: {
  questions: any;
  heading: string;
}) {
  console.log("Ahead", heading);
  return (
    <div className="my-8">
      <h2 className="font-semibold mb-2 ">{heading}</h2>
      <TableOfAllQues questions={questions} />
    </div>
  );
}

export default AllQuestionHome;
