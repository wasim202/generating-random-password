// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //define an array for the uppercase letters
  var upperArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  //define an array for the lowercase letters
  var lowerArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //define an array for the numbers
  var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //define an array for the speacial characters.
  var specialArray = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "~",
    "`",
    "|",
    "}",
    "{",
    "[",
    "]",
    ":",
    ";",
    "?",
    ">",
    "<",
    ",",
    ".",
    "/",
    "-",
    "=",
    ";",
  ];
  // define genpass array to fill it out with the options that the user chooses
  var genpass = [];
  // define finalpass array to push the random generated password
  var finalpass = [];

  //prompt asking the user to enter a number between 8-128
  var passLength = prompt("Please enter a number between 8 to 128");
  var minpass = 8;
  var maxpass = 128;

  //test the user input
  if (passLength < minpass || passLength > maxpass) {
    alert("you should choose between 8 - 128");
    return;
  }

  var upperCase = confirm("Do you want upper case?");
  var loweCase = confirm("Do you want lower case?");
  var specialChar = confirm("Do you want special character?");
  var numeric = confirm("Do you want numeric?");

  //concat genpass array with upperArray if the user chooses upperCase prompt
  if (upperCase) {
    genpass = genpass.concat(upperArray);
  }

  //concat genpass array with lowerArray if the user chooses lowerCase prompt
  if (loweCase) {
    genpass = genpass.concat(lowerArray);
  }

  //concat genpass array with specialArray if the user chooses specialCase prompt
  if (specialChar) {
    genpass = genpass.concat(specialArray);
  }

  //concat genpass array with numaricArray if the user chooses numeric prompt
  if (numeric) {
    genpass = genpass.concat(numericArray);
  }

  if (!upperCase || !loweCase || !specialChar || !numeric) {
    //if the length of the user input doesnt fit the criteria an alerts pops up and start again
    alert("You have to choose at least one option");
    generatePassword();
  } else {
    //denerate random password and push it to finalpass array
    for (var i = 0; i <= passLength; i++) {
      finalpass.push(genpass[Math.floor(Math.random() * genpass.length)]);
    }

    //return final array as a string using join method
    return finalpass.join("");
  }
}
