//Array of the numbers

const array = [4, 3, 5, 2, 8, 1];

let sum = 0;

array.forEach((element) => {
  const para = document.createElement("li");
  para.innerText = element;
  document.body.appendChild(para);
  sum += element;
});


const result = document.createElement("p");
result.innerHTML = sum;
document.body.appendChild(result);

// Bonus

let bonusDiv = document.querySelector(".bonus");

bonusDiv.innerHTML += `${array[0]} + ${array[1]} + ${array[2]} + ${array[3]} + ${array[4]} + ${array[5]} = ${sum}`;
