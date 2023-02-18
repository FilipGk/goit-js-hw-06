const input = document.querySelector("#validation-input");

input.addEventListener("blur", function () {
  const requiredLength = parseInt(input.dataset.length);
  const inputLength = input.value.length;

  if (inputLength === requiredLength) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
});
