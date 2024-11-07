function reverseString(sentence, left, rigth) {
  if (!sentence || sentence.length < 2) return;
  while (left < rigth) {
    let temp = sentence[left];
    sentence =
      sentence.substr(0, left) + sentence[rigth] + sentence.substr(left + 1);
    sentence = sentence.substr(0, rigth) + temp + sentence.substr(rigth);
    left++;
    rigth++;
  }
  return sentence;
}

function reverseString(sentence) {
  let left = 0;
  let rigth = 0;
  sentence = sentence.split("").reverse().join();
  while (true) {
    while (sentence[left] === "") left++;
    if (left >= sentence.length && sentence[rigth] != "") break;
    rigth = left + 1;
    while (rigth < sentence.length && sentence[rigth] !== " ") rigth++;
    sentence = reverseString(sentence, left, rigth - 1);
    left = rigth;
  }
  return sentence;
}

let sentence = "I love JsCafe";
console.log(sentence);
console.log(reverseString(sentence));
