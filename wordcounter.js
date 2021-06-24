function textOptions(e) {
  e.preventDefault();
  const textOptionChoice = document.getElementById("text-options").value;
  let textBoxInput = document.getElementById("text-box-field").value
  const currentDiv = document.getElementById("result");
  currentDiv.innerHTML = "";
 
  if (textOptionChoice === "word-count") {
    wordCount(currentDiv, textBoxInput)
  }
  else if (textOptionChoice === "character-count") {
    characterCount(currentDiv, textBoxInput)
  }
  else if (textOptionChoice === "sentence-count") {
    sentenceCount(currentDiv, textBoxInput)
  }
  else if (textOptionChoice === "paragraph-count") {
    paragraphCount(currentDiv, textBoxInput)
  }
  else if (textOptionChoice === "bigrams") {
    bigrams(currentDiv, textBoxInput)
  }
  else if (textOptionChoice === "randomizer") {
    randomizer(currentDiv, textBoxInput)
  }
}

function wordCount(getCurrentDiv, getTextInput) {
  let totalWords = 0

  for (let i = 0; i < getTextInput.length; i++) {
    let currentCharacter = getTextInput[i]
    if (currentCharacter == " ") {
      totalWords += 1
    }
  }
  totalWords += 1 // Don't know why it doesn't work without this check later
  getCurrentDiv.innerHTML = `Total Words: ${totalWords}`;
}

function characterCount(getCurrentDiv, getTextInput) {
  const totalCharacters = {}
  getTextInput.split('').forEach(character => {
    totalCharacters[character] = totalCharacters[character] ? (totalCharacters[character] + 1) : 1
  })
  for (const property in totalCharacters) {
    let item = `${property}: ${totalCharacters[property]}`
    let newElement = document.createElement('li')
    let newText = document.createTextNode(` found ${item}`)
    let newItem = newElement.appendChild(newText)
    getCurrentDiv.appendChild(newItem)

  }
  const finalCharacterCount = getTextInput.length;
  let totalChar = document.createElement("div")
  totalChar.innerHTML = `Total Characters: ${finalCharacterCount}`
  getCurrentDiv.appendChild(totalChar);
}
function sentenceCount(getCurrentDiv, getTextInput) {
  const sentenceCount = getTextInput.split(/[.!?]/).length - 1;
  getCurrentDiv.innerHTML = `Sentence Count: ${sentenceCount}`;
}
function paragraphCount(getCurrentDiv, getTextInput) {
  const totalParagraphs = getTextInput.split("\n\n").length;
  getCurrentDiv.innerHTML = `Total Paragraph(s): ${totalParagraphs}`;
}
function bigrams(getCurrentDiv, getTextInput) {
  const stringInput = getTextInput.split(" ");
  let result = [];

  for (let i = 1; i < stringInput.length; i++) {
    const value = i - 1;
    result.push(stringInput.slice(value, value + 2));
  }

  result = result.map(v => v.join(" "));

  result.forEach(r => {
    let ele = document.createElement("ul");
    ele.innerHTML = `
      <li>${r}</li>
    `;
    getCurrentDiv.appendChild(ele);
  })
}

function randomizer(getCurrentDiv, getTextInput) {
  let stringInput = getTextInput.split(' ');
  const random = stringInput[Math.floor(Math.random()*stringInput.length)]
  getCurrentDiv.innerHTML = `Random Text: ${random}`;
}

document.getElementById("submit").addEventListener("click", textOptions)