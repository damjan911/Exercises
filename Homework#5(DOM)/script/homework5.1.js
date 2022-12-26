/*Change the text of all paragraphs and headers with JavaScript.
Note:The HTML must not be changed. */

// Here I have changed the text of the header 1 in the first div.

let firstDiv = document.getElementsByTagName("div")[0];

let heading1 = (firstDiv.firstElementChild.innerHTML =
  "Yea! This is really cool page.");

console.log(firstDiv);
console.log(heading1);

// Here I have changed the text of the header 1 in the last div.

let lastDiv = document.getElementsByTagName("div")[2];

let heading1ForLastDiv = (lastDiv.firstElementChild.innerHTML =
  "This should be stay the same.");

console.log(heading1ForLastDiv);

// I have changed the text of the header 3 in the last div.

let heading3ForLastDiv = document.querySelector("h3");

let heading3ForLastDiv1 = (heading3ForLastDiv.innerText =
  "Text added from JS.");

console.log(heading3ForLastDiv);
console.log(heading3ForLastDiv1);

// Here I have changed all the paragraps at the document.

let allParagraphs = document.getElementsByClassName("paragraph");

for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].innerHTML = "This are cool exercises";
  console.log(allParagraphs[i]);
}
