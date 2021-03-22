/***********************************************************************************************************************
 There is an integer array nums sorted in ascending order (with distinct values).
 Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that
 the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

 Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

 Example 1:
 Input: nums = [4,5,6,7,0,1,2], target = 0
 Output: 4

 Example 2:
 Input: nums = [4,5,6,7,0,1,2], target = 3
 Output: -1

 Example 3:
 Input: nums = [1], target = 0
 Output: -1
 **********************************************************************************************************************/

const search = (nums, target) => {
  // just a regular binary search function
  const binarySearch = (startIdx, endIdx) => {
    if (startIdx === endIdx || startIdx === endIdx - 1) {
      return -1
    }
    const midIdx = Math.floor((endIdx - startIdx) / 2 + startIdx);
    if (nums[midIdx] === target) {
      return midIdx;
    } else if (target < nums[midIdx]) {
      return binarySearch(startIdx, midIdx);
    } else {
      return binarySearch(midIdx, endIdx);
    }
  };

  if (nums[0] === target) {
    return 0;
  } else if (nums[0] < nums[nums.length - 1]) { // if the nums is sorted already, we do not even need to find pivot
    return binarySearch(0, nums.length);
  }
  const findPivot = (startIdx, endIdx) => {
    if (nums[startIdx] < nums[endIdx]) { // it covers [1, 2, 3, 4] and [1, 2], but well, we do not really need it because the sorted case will be covered earlier
      return startIdx;
    };
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
        return findPivot(midIdx, endIdx);
      } else {
        return findPivot(startIdx, midIdx);
      }
    }
  };
  const pivotIdx = findPivot(0, nums.length - 1);

  if (target > nums[0]) {
    return binarySearch(0, pivotIdx);
  } else {
    return binarySearch(pivotIdx - 1, nums.length);
  }
};

console.log(search([1, 3], 3));
