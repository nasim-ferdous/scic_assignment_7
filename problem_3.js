// problem_3 : check for palindrome

function palindromeCheck(string) {
  const reverseString = string.split("").reverse().join("");
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromeCheck("madam"));
