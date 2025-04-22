function generateWish(event) {
  event.preventDefault();
  new Typewriter("#wish", {
    strings: "Happy Birthday! May your day be filled with so much joy!",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let wishFormElement = document.querySelector("#wish-generator-form");
wishFormElement.addEventListener("submit", generateWish);
