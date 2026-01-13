// problem_2: Count vowel in a string
function countVowels(string) {
  let count = 0;
  const vowels = "aeiou";
  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("amanda"));
