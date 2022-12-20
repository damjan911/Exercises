const stringArray = ["Marco", "good", "active"];

let names = stringArray[0];
let moods = stringArray[1];
let activities = stringArray[2];

function tellStory(name, mood, activity) {
  let result = `This is ${names}. ${names} is nice person. He is in a ${moods} mood today. He is ${activities} all day.`;
  if (name !== "Marco" && mood !== "good" && activity !== "active") {
    return "Invalid Input!";
  }
  if (name === "Marco" && mood === "good" && activity === "active") {
    return result;
  }
}

console.log(tellStory(names, moods, activities));
