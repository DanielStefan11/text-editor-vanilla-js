// SELECTORS
const textContent = document.querySelector("#content"),
  // Count total characters
  numOfChar = document.querySelector("#num-of-characters"),
  charBtn1 = document.querySelector("#counter-1"),
  // Count characters without spaces
  charNoSpaces = document.querySelector("#char-no-spaces"),
  charBtn2 = document.querySelector("#counter-2"),
  // Count Words
  numOfWords = document.querySelector("#num-of-words"),
  countWordsBtn = document.querySelector("#count-words-btn"),
  // To upper or lower case
  upperCaseBtn = document.querySelector("#upper-case"),
  lowerCaseBtn = document.querySelector("#lower-case"),
  newText = document.querySelector("#new-text"),
  copyBtn = document.querySelector("#copy-btn"),
  copyContainer = document.querySelector("#copy-container"),
  // Search Word/Char
  itemForSearch = document.querySelector("#item-for-search"),
  confirmation = document.querySelector("#confirmation"),
  searchBtn = document.querySelector("#search-btn"),
  // Refresh Btn
  clearContent = document.querySelector("#clear-content");

// EVENT LISTENERS
charBtn1.addEventListener("click", countCharacters);
countWordsBtn.addEventListener("click", countWords);
charBtn2.addEventListener("click", countCharNoSpaces);
upperCaseBtn.addEventListener("click", changeToUpperCase);
lowerCaseBtn.addEventListener("click", changeToLowerCase);
copyBtn.addEventListener("click", copyText);
searchBtn.addEventListener("click", searchSmth);
clearContent.addEventListener("click", clearText);

// FUNCTIONS

//  Char Counter
function countCharacters() {
  numOfChar.innerHTML = textContent.value.length;
}

// Char Counter No Spaces
function countCharNoSpaces() {
  let newContent = textContent.value.replace(/ /g, "");
  charNoSpaces.innerHTML = newContent.length;
}

// Count Words
function countWords() {
  let inputContent = textContent.value.split(" ");
  numOfWords.innerHTML = inputContent.length;
}

// Change Text
function changeToUpperCase() {
  let newUpperText = textContent.value.toUpperCase();
  newText.innerHTML = newUpperText;
}

function changeToLowerCase() {
  let newLowerText = textContent.value.toLowerCase();
  newText.innerHTML = newLowerText;
}

function copyText() {
  newText.select();
  document.execCommand("copy");
  newText.value = "";
  showCopyMessage();
}

function showCopyMessage() {
  const copyMessageDiv = document.createElement("div");
  copyMessageDiv.className = "copy-message";
  copyMessageDiv.appendChild(document.createTextNode("Your text was copied!"));
  copyContainer.appendChild(copyMessageDiv);
  setTimeout(clearCopyMessage, 2000);
}

function clearCopyMessage() {
  document.querySelector(".copy-message").remove();
}

// Clear Text
function clearText() {
  textContent.value = "";
  numOfChar.innerHTML = "0";
  charNoSpaces.innerHTML = "0";
  numOfWords.innerHTML = "0";
  itemForSearch.value = "";
  newText.value = "";
  confirmation.innerHTML = "";
}

// Search Char/Word
function searchSmth() {
  if (textContent.value.includes(itemForSearch.value) === true) {
    confirmation.innerHTML = "Yes";
  } else {
    confirmation.innerHTML = "No";
  }
}
