const counterValue = document.querySelector("#value");
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

let count = 0;

function updating() {
  counterValue.innerHTML = count;
}

btnIncrement.addEventListener("click", () => {
  count++;
  updating();
});

btnDecrement.addEventListener("click", () => {
  count--;
  updating();
});
