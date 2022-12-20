const arr = [3, 5, 6, 8, 11];

function numbersFunction(arr1) {
  let maxnumber = -Infinity;
  let minnumber = Infinity;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > maxnumber) {
      maxnumber = arr1[i];
    }
    if (arr1[i] < minnumber) {
      minnumber = arr1[i];
    }
  }
  sum = maxnumber + minnumber;
  return { maxnumber, minnumber, sum };
}

console.log(numbersFunction(arr));
