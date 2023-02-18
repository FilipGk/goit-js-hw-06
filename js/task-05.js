const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", (event) => {
  outputValue.textContent = event.currentTarget.value;
});

inputValue.addEventListener("input", function () {
  if (inputValue.value == "") {
    outputValue.textContent = "Anonymous";
  }
});
