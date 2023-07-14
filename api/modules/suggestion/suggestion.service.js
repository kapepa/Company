function GetSuggestion () {
  return {
    title: "Lorem",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non pellentesque ante. Curabitur a mauris porttitor, pretium magna nec, aliquet augue. Curabitur a mauris porttitor, pretium magna nec, aliquet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non pellentesque ante. Curabitur a mauris porttitor, pretium magna nec, aliquet augue. Curabitur a mauris porttitor, pretium magna nec, aliquet augue. ",
  }
}

function AnswerSuggestion () {
  return { answer: "You cannot use this offer, you can try later!" }
}

module.exports = { GetSuggestion, AnswerSuggestion }