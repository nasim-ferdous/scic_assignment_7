// problem_4: Find the maximum number in a array
function findMax(numbers) {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax([1, 2, 3, 55, 4, 5]));
