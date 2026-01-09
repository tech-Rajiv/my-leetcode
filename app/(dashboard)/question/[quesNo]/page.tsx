async function page({ params }: { params: Promise<{ quesNo: string }> }) {
  const { quesNo } = await params;
  console.log("Question No:", quesNo);
  return <div>Question: {quesNo}</div>;
}

export default page;
