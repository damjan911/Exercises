let tip = prompt("Enter type: ");
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findNumber(array, type) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (type !== "even" && type !== "odd") {
      return "Invalid Input!";
    }
    if (type === "even") {
      if (array[i] % 2 === 0) {
        result.push(array[i]);
      }
    }
    if (type === "odd") {
      if (array[i] % 2 !== 0) {
        result.push(array[i]);
      }
    }
  }

  return result;
}

console.log(findNumber(numbersArray, tip));
