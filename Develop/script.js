// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var charset = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  characters: "!@#$%^&*()_+~`|}{[]\:;?><,./-="
};
var useLowercase = true;
var useUppercase = true;
var useNumbers = true;
var useCharacters = true;
var passwordOptions = "";
passwordLength = prompt("how long should the password be?");
while ((passwordLength < 8) || (passwordLength > 128)) {
  alert("Password must be between 8 and 128 characters long!");
  passwordLength = prompt("How long should the password be?");
}
console.log(passwordLength);
useLowercase = confirm("Do you want to include lowercase characters?");
console.log(useLowercase);
useUppercase = confirm("Do you want to include uppercase characters?");
console.log(useUppercase);
useNumbers = confirm("Do you want to include numbers?");
console.log(useNumbers);
useCharacters = confirm("Do you want to include special characters?");
console.log(useCharacters);
if (useLowercase) {
  passwordOptions = passwordOptions + charset.lowercase;
}
if (useUppercase) {
  passwordOptions = passwordOptions + charset.uppercase;
}
if (useNumbers) {
  passwordOptions = passwordOptions + charset.numbers;
}
if (useCharacters) {
  passwordOptions = passwordOptions + charset.characters;
}


console.log(passwordOptions);
function generatePassword() {

  var genPassword = "";
  for (let i = 0, n = passwordOptions.length; i < passwordLength; i++) {
    genPassword += passwordOptions.charAt(Math.floor(Math.random() * n));

  }
  console.log(genPassword);
  return password = genPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
