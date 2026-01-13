// problem_7: even numbers in an array

function evenNumbers(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(evenNumbers([3, 4, 5, 6, 7, 8]));
