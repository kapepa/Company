function GetEducation() {
  let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return {
    title: "Education",
    educations: [
      { img: "ph_books-bold.svg", title: "Lorem Ipsum", desc: text },
      { img: "ic_sharp-business-center.svg", title: "Lorem Ipsum", desc: text },
      { img: "fluent_hat-graduation-20-filled.svg", title: "Lorem Ipsum", desc: text },
    ]
  }
}

module.exports = {GetEducation}