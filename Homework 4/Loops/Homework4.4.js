let tip2 = prompt("Enter type of the array:");
const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19];

function evenNumberFunction(numbersarr, tips2) {
  let result = [];
  for (let i = 0; i < numbersarr.length; i++) {
    if (tips2 === "even" && numbersarr[i] % 2 === 0) {
      return (result = "\n");
    } else {
      return (result = "");
    }
  }
}

console.log(evenNumberFunction(numbersArray2, tip2));
