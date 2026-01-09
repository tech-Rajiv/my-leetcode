function TopBarForQuestions({}) {
  const topHeadings = [
    { label: "All" },
    { label: "Arrays" },
    { label: "Strings" },
    { label: "Algorithms" },
  ];

  return (
    <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
      {topHeadings.map((heading, index) => (
        <button
          key={index}
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
        
      `}
        >
          {heading.label}
        </button>
      ))}
    </div>
  );
}

export default TopBarForQuestions;
