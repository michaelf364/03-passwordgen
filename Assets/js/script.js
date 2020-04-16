// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  characters: "!@#$%^&*()_+~`|}{[]\:;?><,./-="
};
var genPassword = "";
var passwordOptions = "";
var passwordLengthSlider = document.getElementById("passwordLengthSlider");
var passwordLengthValue = document.getElementById("passwordLengthValue");
passwordLengthValue.textContent = passwordLengthSlider.value;
passwordLengthSlider.addEventListener('input', function () {
  passwordLengthValue.textContent = passwordLengthSlider.value;
})

function useLowercaseSwitch() {
  var useLowercase = document.getElementById("useLowercaseSwitch");
  if (useLowercase.checked) {
    passwordOptions = passwordOptions + charset.lowercase;
  }
}
function useUppercaseSwitch() {
  var useUppercase = document.getElementById("useUppercaseSwitch");
  if (useUppercase.checked) {
    passwordOptions = passwordOptions + charset.uppercase;
  }
}
function useNumbersSwitch() {
  var useNumbers = document.getElementById("useNumbersSwitch");
  if (useNumbers.checked) {
    passwordOptions = passwordOptions + charset.numbers;
  }
}
function useCharactersSwitch() {
  var useCharacters = document.getElementById("useCharactersSwitch");
  if (useCharacters.checked) {
    passwordOptions = passwordOptions + charset.characters;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  useLowercaseSwitch();
  useUppercaseSwitch();
  useNumbersSwitch();
  useCharactersSwitch();
  console.log(passwordOptions);
  for (let i = 0, n = passwordOptions.length; i < passwordLengthSlider.value; i++) {
    genPassword += passwordOptions.charAt(Math.floor(Math.random() * n));
  }
  console.log(genPassword);
  return password = genPassword;
}


// Write password to the #password input
function writePassword() {
  passwordOptions = "";
  genPassword = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




