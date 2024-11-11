function main() {
  //Use getElementbyID
  const title = document.getElementById("heading");
  title.style.color = "red";
  //Use querySelector
  const title2 = document.querySelector("#heading");
  const screen = document.querySelector(".mainScreen");
  const paragraphs = document.querySelectorAll("p");
  //Iterate over collection of elements
  paragraphs.forEach((para) => (para.style.color = "red"));
  /*function callBack(para) {
    para.style.color = pink
}
paragraphs.forEach(callBack) */

  //Use createElement
  const newpara = document.createElement("p");
  newpara.textContent = "🧨BOOM!💥";
  //Use appendChild
  document.body.appendChild(newpara);
}
function changeTitleColor() {
  const title = document.getElementById("heading");

  // Toggle the color-change class
  title.classList.toggle("color-change");
}

function unhide() {
  const paragraphToHide = document.querySelector(".sneaky");
  paragraphToHide.removeAttribute("hidden");
}
//Use response to user interaction
// Define an array of colors
const colors = ["red", "blue", "magenta", "springgreen", "purple"];
let colorIndex = 0; // Track the current color index

function hover() {
  const changeColor = document.querySelector(".mouseHover");

  // Set the color based on the current index
  changeColor.style.color = colors[colorIndex];

  // Increment the color index, looping back to the start if necessary
  colorIndex = (colorIndex + 1) % colors.length;
}

// One type of Form/Input
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
//Event Listener
//(para) => (para.style.color = "pink")
addEventListener("resize", (window, ev) => console.log(window.innerWidth));
