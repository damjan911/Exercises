let humanYear = prompt("Enter a human year");
humanYear = parseInt(humanYear);

function humanToDogYear(year1) {
  if (isNaN(year1)) {
    return "Invalid Input !";
  }

  return year1 * 7;
}

const dogYear = humanToDogYear(humanYear);

console.log(`The Dog has ${dogYear} years`);

// Bonus

/* let dogYear = prompt("Enter a dog year");
dogYear = parseInt(dogYear);

function dogToHumanYear(year2) {
  if (isNaN(year2)) {
    return "Invalid Input !";
  }

  return year2 / 7;
}

const humanYear = dogToHumanYear(dogYear);

console.log(`The human has ${humanYear} years`); */
