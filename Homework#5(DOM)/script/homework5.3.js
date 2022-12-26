let recipe = prompt("Enter recipe name");
let ingrediantsNumbers = parseInt(prompt("Enter the number of ingredients"));

let ingredients = [];

while (ingredients.length < ingrediantsNumbers) {
  let ingredient = prompt("Enter ingredient");
  ingredients.push(ingredient);
}

let recipeText = document.createElement("h1");
recipeText.innerHTML = recipe;

const recipeHeading = document.getElementById("recipe");
recipeHeading.appendChild(recipeText);

let ingredientsList = document.getElementById("ingredientsList");

ingredients.forEach((item) => {
  let recipeElement = document.createElement("li");
  recipeElement.innerText = item;
  ingredientsList.appendChild(recipeElement);
});


