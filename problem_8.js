// problem_8: Capitalize first letter of each word

function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalizeWord = [];
  for (let word of words) {
    capitalizeWord.push(word[0].toUpperCase() + word.slice(1));
  }
  return capitalizeWord.join(" ");
}
console.log(capitalizeWords("hello worlds"));
