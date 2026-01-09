import { questionTypes } from "@/lib/typeExports";
import AllQuestionHome from "./AllQuestionHome";
import TopBarForQuestions from "./TopBarForQuestions";

function Homepage({
  questions,
  heading,
}: {
  questions: questionTypes[];
  heading: string;
}) {
  return (
    <div>
      <TopBarForQuestions />
      <AllQuestionHome questions={questions} heading={heading} />
    </div>
  );
}

export default Homepage;
