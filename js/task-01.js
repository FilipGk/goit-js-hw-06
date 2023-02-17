const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;
const firstCategory = document.querySelector(".item").firstElementChild.textContent;
const firstCategoryElements = document.querySelector(".item").querySelector("ul").children.length;
const secondCategory = document
  .querySelector(".item")
  .nextElementSibling.querySelector("h2").textContent;
const secondCategoryElements = document
  .querySelector(".item")
  .nextElementSibling.querySelector("ul").children.length;
const thirdCategory = document
  .querySelector(".item")
  .nextElementSibling.nextElementSibling.querySelector("h2").textContent;
const thirdCategoryElements = document
  .querySelector(".item")
  .nextElementSibling.nextElementSibling.querySelector("ul").children.length;
console.log(
  `Number of categories: ${numberOfCategories}`,
  "\n",
  "\n",
  `Category: ${firstCategory}`,
  "\n",
  `Elements: ${firstCategoryElements}`,
  "\n",
  "\n",
  `Category: ${secondCategory}`,
  "\n",
  `Elements: ${secondCategoryElements}`,
  "\n",
  "\n",
  `Category: ${thirdCategory}`,
  "\n",
  `Elements: ${thirdCategoryElements}`
);
