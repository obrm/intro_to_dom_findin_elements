// Finding HTML elements by id
// The getElementById method returns the first element with the specified id.
let header = document.getElementById("main-header");
console.log(header);

// Finding HTML elements by tag name
// The getElementsByTagName method returns a HTMLCollection of elements with the specified tag name.
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Finding HTML elements by class name
// The getElementsByClassName method returns a HTMLCollection of elements with the specified class name.
let intro = document.getElementsByClassName("intro");
console.log(intro);

// Finding HTML elements by CSS selectors
// The querySelector method returns the first element that matches the specified CSS selectors.
let firstParagraph = document.querySelector("p");
console.log(firstParagraph);

// The querySelectorAll method returns a NodeList of all elements that match the specified CSS selectors.
let allListItems = document.querySelectorAll("li");
console.log(allListItems);

// Finding HTML elements by HTML object collections
// The getElementsByTagName method can also be used to access the elements in a HTML object collection.
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
