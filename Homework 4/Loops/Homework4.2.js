function sumFunction(array1) {
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    result = result + array1[i];
  }
  return result;
}

const myArray = [2, 4, 6, 8, 9];
console.log(sumFunction(myArray));
