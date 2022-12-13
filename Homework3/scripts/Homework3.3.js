let money=prompt("Enter a money that you want to take it !");

const bankAccount=300;

money=parseInt(money);

function ATM(takeCash){

    if(typeof money !== "number"){

        return "Invalid Input!";
    }

    if (money < bankAccount){

        console.log("You have anough money in Bank Account !");
    }

     if(money >= bankAccount){

        console.log("Not enough money !");

     }

     return (money);
}


ATM(money);