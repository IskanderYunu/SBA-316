function main() {
  const title = document.getElementById("heading");
  title.style.color = "red";
  const title2 = document.querySelector("#heading");
  const screen = document.querySelector(".mainScreen");
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((para) => (para.style.color = "pink"));

  //creating new element
  const newpara = document.createElement("p");
  newpara.textContent = "This is a new paragraph";
  document.body.appendChild(newpara);
}
function changeTitleColor() {
  const title = document.getElementById("heading");
  title.style.color = "blue";
}
function unhide() {
  const paragraphToHide = document.querySelector(".sneaky");
  paragraphToHide.removeAttribute("hidden");
}
function hover() {
  const changeColor = document.querySelector(".mouseHover");
  changeColor.style.color = "red";
}
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  const ageLimit = 21;
  evt.preventDefault();
  let ageInput = document.querySelector("#age-input");
  let age = ageInput.value;
  if (age >= 21) {
    alert("You can pass!");
  } else {
    alert(`You shall not PASS! You are only ${age}!!!`);
  }
}
