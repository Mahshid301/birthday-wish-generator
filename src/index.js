function displayWish(response) {
  new Typewriter("#wish", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateWish(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "t9d32fe46026d08obe2316b28af5bf2b";
  let prompt = `please generate a birthday wish including ${instructionInput.value}`;
  let context = "please generate a lovely birthday wish no longer than 3 lines";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWish);
}

let wishFormElement = document.querySelector("#wish-generator-form");
wishFormElement.addEventListener("submit", generateWish);
