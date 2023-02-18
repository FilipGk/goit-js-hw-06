function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
btn.addEventListener("click", function () {
  let newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector(".color").innerHTML = newColor;
});
