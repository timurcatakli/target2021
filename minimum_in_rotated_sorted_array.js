/***********************************************************************************************************************
 Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

 [4,5,6,7,0,1,2] if it was rotated 4 times.
 [0,1,2,4,5,6,7] if it was rotated 7 times.
 Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

 Given the sorted rotated array nums of unique elements, return the minimum element of this array.

 Example 1:
 Input: nums = [3,4,5,1,2]
 Output: 1
 Explanation: The original array was [1,2,3,4,5] rotated 3 times.

 Example 2:
 Input: nums = [4,5,6,7,0,1,2]
 Output: 0
 Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

 Example 3:
 Input: nums = [11,13,15,17]
 Output: 11
 Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
 **********************************************************************************************************************/

const findMin = nums => {
  if (nums.length < 2) {
    return nums[0];
  }
  const helper = (startIdx, endIdx) => {
    if (nums[startIdx] < nums[endIdx]) { // it covers [1, 2, 3, 4] and [1, 2]
      return startIdx;
    }
    if (startIdx === endIdx || startIdx === endIdx - 1) { // it covers [2, 1]
      return endIdx;
    }
    const midIdx = Math.floor((endIdx - startIdx) / 2 + startIdx);
    // if a number is less than both neighbors, it must be the minimum number
    if (nums[midIdx] < nums[midIdx + 1] && nums[midIdx] < nums[midIdx - 1]) {
      return midIdx;
    } else {
      // we only need to keep comparing the current mid with and the end value
      if (nums[midIdx] > nums[endIdx]) {
        return helper(midIdx, endIdx);
      } else {
        return helper(startIdx, midIdx);
      }
    }
  };
  const minIdx = helper(0, nums.length);
  return nums[minIdx];
};

console.log(findMin([5,1,2,3,4]));
