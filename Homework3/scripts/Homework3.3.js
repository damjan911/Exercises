let ATM = prompt("Get Cash from a Credit Card at an ATM");
ATM = parseInt(ATM);

function getCashFromAtm(money) {
  let bankAccount = 300;

  if (isNaN(money)) {
    return "The transaction cannot be completed !";
  }

  if (money >= bankAccount) {
    return "The transaction cannot be completed !";
  }

  if (money < bankAccount) {
    return "You have enough money in your Bank Account !";
  }

  return money;
}

const getMoneyFromAtm = getCashFromAtm(ATM);

console.log(getMoneyFromAtm);
