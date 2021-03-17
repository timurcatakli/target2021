/********************************************************************
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 You can return the answer in any order.



 Example 1:

 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 Example 2:

 Input: nums = [3,2,4], target = 6
 Output: [1,2]
 Example 3:

 Input: nums = [3,3], target = 6
 Output: [0,1]
 *******************************************************************/

const twoSum = (nums, target) => {
  let helperMap = {};
  // O(2n) time, O(n) space;
  // nums.forEach((num, i) => {
  //   helperMap[(target - num).toString()] = i;
  // });
  // for (let i = 0; i < nums.length; i++) {
  //   if (helperMap[nums[i].toString()]) {
  //     return[i, helperMap[nums[i].toString()]];
  //   }
  // }
  // O(n) time, O(n - 1) space; same space consuming but runs a little faster
  for (let i = 0; i < nums.length; i++) {
    const male = nums[i].toString();
    const female = (target - nums[i]).toString();
    if (helperMap[female] || helperMap[female] === 0) {
      return [helperMap[female], i];
    }
    helperMap[male] = i;
  }

  return null;
};

const nums = [-2,7,11,15];
const target = 9;
console.log(twoSum(nums, target));
