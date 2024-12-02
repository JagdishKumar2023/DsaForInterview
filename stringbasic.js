//Sting in javascript

//Creating string

const string = new String("This is first string for the string one");
const string2 = "This is string2 value";
const string3 = "This is string3 value for because in most of"; // double quotes
const string4 = `This is string4 ${string3} in the value is backtik in this string`; //backtik

console.log(string4);
console.log`Hello bactik`;

const str = "world";
console.log`hello ${str} how are ${"you"}`;

function test(string, youtubeChannel, person) {
  console.log(string, youtubeChannel, person);
  return;
}

const channel = "RoadsideCoder";
const firstName = "Piyush";

test`Subscribe to ${channel} run by ${firstName}`;

//string length

const str5 = "How";
console.log(str5.length);

//string reverse

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("Jagdish"));

// Palindrome

function isPalindrome(str) {
  let reversed = str.split("").reverse("").join("");
  return str === reversed;
}

console.log(isPalindrome("radar"));

// checking vowel length

function countVowels(str) {
  let vowels = "aeiou";
  return str.split("").filter((char) => vowels.includes(char.toLowerCase()))
    .length;
}

console.log(countVowels("javascript you love"));

function reverseString(str) {
  return str.split("").reverse("").join();
}

console.log(reverseString("Hello world"));

// concatenate the string in values for the it

function concatenateString(str1, str2) {
  return str1 + str2;
}
console.log(concatenateString("kotlin", "Springboot"));

// length of string

function stringLength(str) {
  return str.length;
}

console.log(stringLength("Interview for forntend")); // 22

//string in upper case

function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(toUpperCase("jagdishkumarsingh"));

// Extract a Substring

function getSubString(str, start, end) {
  return str.slice(start, end);
}

console.log(getSubString("javascript", 0, 5));

// Check if a String Contains Another String

function containsSubstring(str, substr) {
  return str.includes(substr);
}

console.log(containsSubstring("hellow world", "world"));

// string is trim

function trimString(str) {
  return str.trim();
}

console.log(trimString(" sonu sngh "));
