const year=Number(prompt("Enter the year:"));

const zodiacSigns=(year-4)%12;


if(zodiacSigns===0){

    console.log("Your Zodiac is Rat");
}

else if(zodiacSigns===1){

    console.log("Your Zodiac is Ox");
}

else if(zodiacSigns===2){

    console.log("Your Zodiac is Tiger");
}

else if(zodiacSigns===3){

    console.log("Your Zodiac is Rabbit");
}

else if(zodiacSigns===4){

    console.log("Your Zodiac is Dragon");
}

else if(zodiacSigns===5){

    console.log("Your Zodiac is Snake");
}

else if(zodiacSigns===6){

    console.log("Your Zodiac is Horse");
}

else if(zodiacSigns===7){

    console.log("Your Zodiac is Goat");
}

else if(zodiacSigns===8){

    console.log("Your Zodiac is Monkey");
}

else if(zodiacSigns===9){

    console.log("Your Zodiac is Rooster");
}

else if(zodiacSigns===10){

    console.log("Your Zodiac is Dog");
}

else if(zodiacSigns===11){

    console.log("Your Zodiac is Pig");
}
else{

    console.log("Error!");
}

// Above I have utilized the formula to calculate which is the year and who is the Chinese Zodiac

console.log(zodiacSigns);

