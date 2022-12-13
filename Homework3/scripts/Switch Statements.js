const year=Number(prompt("Enter the year:"));

const zodiacSigns=(year-4)%12;



switch (zodiacSigns){

    case 0 :

       console.log("Your Zodiac is Rat");

    break; 

    case 1 :

       console.log("Your Zodiac is Ox");

    break;

    case 2 :

       console.log("Your Zodiac is Tiger");

    break;   

    case 3 :

       console.log("Your Zodiac is Rabbit");

    break;

    case 4 :

       console.log("Your Zodiac is Dragon");

    break; 

    case 5 :

       console.log("Your Zodiac is Snake");

    break;   

    case 6 :

       console.log("Your Zodiac is Horse");

    break;   

    case 7 :

       console.log("Your Zodiac is Goat");

    break;   

    case 8 :

       console.log("Your Zodiac is Monkey");

    break;   

    case 9 :

       console.log("Your Zodiac is Rooster");

    break;

    case 10 :

       console.log("Your Zodiac is Dog");

    break;   

    case 11 :

       console.log("Your Zodiac is Big");

    break;   

    



}

console.log(zodiacSigns);