function GetProblems () {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return {
    title: "Top 5 problems",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    list: [text, text, text, text, text],
  }
}

module.exports = {GetProblems};