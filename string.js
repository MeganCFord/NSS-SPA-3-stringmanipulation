//variables to assign locations in the dom.
var startButton = document.getElementById("startButton");
var inputString = document.getElementById("inputString"); 
var reversedText = document.getElementById("reversedText");
var alphabetizedText = document.getElementById("alphabetizedText");
var palindromeIndicator = document.getElementById("palindromeIndicator");

//made this a global variable to make it accessible to the palindrome function...
var reversedString = "";

// set the value of the testString variable to the value of the input.
// The output of each of the functions should immediately appear as well.
function runTheStuff() {
  var testString = inputString.value;
  console.log("input string", testString, typeof testString);
  reversedText.innerHTML = `reversed: ${reversal(testString)}`;
  alphabetizedText.innerHTML = ` alphabetized: ${alphabits(testString)}`;
  palindromeIndicator.innerHTML = palindrome(testString);
};

// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
function reversal(testString) {
  reversedString = testString.split("").reverse().join("");
  console.log("reversed string", reversedString, typeof reversedString);
  return reversedString;
}

// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabits(testString) {
  var alphaString = testString.split("").sort().join("");
  console.log("alphabetized string", alphaString );
  return alphaString;
}

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome(testString) {
  console.log("the original string", testString);
  console.log("the reversed string", reversedString);
  
  if (reversedString === testString) {  
    console.log("Your string is a palindrome");
    return "Your string is a palindrome";
  } else {
    console.log("Your string is not a palindrome");
    return "Your string is not a palindrome";
  }
}

// When the user presses the enter key in the text input, or clicks the button, start function 
startButton.addEventListener("click", runTheStuff);

var enterKeyListener = function(event){
  if(event.keyCode == 13) {
    startButton.click();
  }
}
document.getElementById("mainContent").onkeydown = enterKeyListener;
