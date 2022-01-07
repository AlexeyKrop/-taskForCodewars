function largestPairSum(numbers) {
  let newArr = numbers.sort((a, b) => a - b);
  console.log(newArr);
  console.log(newArr[newArr.length - 1] + newArr[newArr.length - 2]);
}
largestPairSum([10, 14, 2, 23, 19]);
