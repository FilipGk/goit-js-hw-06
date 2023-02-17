const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");
const firstElement = document.createElement("li");
firstElement.textContent = ingredients[0];
const secondElement = document.createElement("li");
secondElement.textContent = ingredients[1];
const thirdElement = document.createElement("li");
thirdElement.textContent = ingredients[2];
const fourthElement = document.createElement("li");
fourthElement.textContent = ingredients[3];
const fifthElement = document.createElement("li");
fifthElement.textContent = ingredients[4];
const sixthElement = document.createElement("li");
sixthElement.textContent = ingredients[5];

list.append(firstElement, secondElement, thirdElement, fourthElement, fifthElement, sixthElement);
