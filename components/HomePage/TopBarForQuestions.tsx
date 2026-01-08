function TopBarForQuestions() {
  const topHeadings = [
    { label: "All Questions", url: "" },
    { label: "Top 75 Questions" },
    { label: "Top 150 Questions" },
  ];

  return (
    <div>
      {topHeadings.map((heading, index) => (
        <span
          key={index}
          className="text-lg font-medium mr-6 cursor-pointer hover:underline"
        >
          {heading.label}
        </span>
      ))}
    </div>
  );
}

export default TopBarForQuestions;
