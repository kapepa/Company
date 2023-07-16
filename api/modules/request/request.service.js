function ProcessingRequest () {
  return "respond with a resource ProcessingRequest"
}

function GetHeaderText () {
  return {
    title: "LEAVE A REQUEST",
    subtitle: "for a free consultation",
  }
}

function CreateRequest(body) {
  const { name, mail } = body;
  const alias = name.toLowerCase();
  return `Thank you ${alias.charAt(0).toUpperCase() + alias.slice(1)} for your request, we will contact you as soon as possible and send a response to your ${mail}.`
}

module.exports = {ProcessingRequest, GetHeaderText, CreateRequest};