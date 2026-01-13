// problem_6: sum of all numbers in an array

function sumOfArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumOfArray([4, 6, 3, 7, 5]));
