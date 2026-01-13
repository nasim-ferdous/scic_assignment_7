// problem_5: Remove duplicates from an array

function removeDuplicates(arr) {
  //   return [...new Set(arr)];
  let uniqueArray = [];
  for (let num of arr) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }
  return uniqueArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5]));
