// Select elements
const card = document.querySelector(".card");
const input = document.getElementById("email");
const notValidTxt = document.querySelector("span.notValid");
const thanksCard = document.querySelector(".thanks-card");
const userEmail = document.querySelector(".user-email");

console.log(thanksCard);

// check if the email is valid or not
function checkValidation() {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // if the email is not valid warn the user
  if (input.value === "" || !input.value.match(validRegex)) {
    input.classList.add("notValid");
    notValidTxt.innerHTML = "Valid email required";
  } else {
    card.remove();
    thanksCard.style.display = "block";
    userEmail.innerHTML = input.value;
  }
}

// when focusing on the input reset everything
function reset() {
  input.classList.remove("notValid");
  notValidTxt.innerHTML = "";
}
