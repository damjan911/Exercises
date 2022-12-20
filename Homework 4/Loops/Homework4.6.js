const firstNames = ["Bob", "Jill", "Paul"];
const lastNames = ["Gregory", "Wurtz", "McCartney"];

function firstAndLastNames(fname, lname) {
  let fullnames = [];
  for (let i = 0; i < lname.length; i++) {
    fullnames.push(`${fname[i]} ${lname[i]}`);
  }
  return fullnames;
}

console.log(firstAndLastNames(firstNames, lastNames));
