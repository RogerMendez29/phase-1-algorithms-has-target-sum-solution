function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // n steps
    let complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      // n * n steps
      if (array[j] === complement) return true;
    }
  }
  return false;
}

console.log(hasTargetSum([4], 4));

/* 
  Write the Big O time complexity of your function here
  run time complexity is O(n^2)
  space complexity is O(n)
*/

/* 
  iterate through the array twice adding each iteration per array index 
  set a compliment to equall the difference of the target and the first iteration
return true if the compliment equals the second iteration value at some point through the array
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
