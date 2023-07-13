function GetHeader () {
  return {
    header: {
      title: "Lorem Ipsum.",
      img: "Rectangle41.png",
      info: [
        { counter: 6, letter: "Lorem ipsum dolor sit amet, ipsum dolor sit amet"},
        { counter: 650, letter: "Lorem ipsum dolor sit amet, ipsum dolor sit amet"},
        { counter: 700, letter: "Lorem ipsum dolor sit amet"},
      ],
    }
  }
};

function GetStory () {
  let mockText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non pellentesque ante. Curabitur a mauris porttitor, pretium magna nec, aliquet augue.\n"
  return {
    stories: {
      title: "Our stories",
      histories: [
        { img: "Rectangle801.png", text: [mockText, mockText]},
        { img: "Rectangle811.png", text: [mockText, mockText]}
      ]
    }
  }
}

function ReceiveHome () {
  return Object.assign(GetHeader(), GetStory());
};

module.exports = { ReceiveHome, GetHeader,  }