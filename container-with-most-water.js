var maxArea = function (heights) {
  // start width edges
  // 1(0) 7(8) => small is 1 so max area is (8- 0), these are indexes
  // 1 < 7 so move start by one index will be (1) (8)
  // loop while indexes are not equeal
  let maxArea = -Infinity;
  let windowStart = 0;
  let windowEnd = heights.length - 1;
  while (windowStart !== windowEnd) {
    const currArea =
      (windowEnd - windowStart) *
      Math.min(heights[windowEnd], heights[windowStart]);
    console.log(currArea);
    maxArea = Math.max(currArea, maxArea);
    console.log(maxArea);
    if (windowStart < windowEnd) {
      windowStart += 1;
    } else {
      windowEnd -= 1;
    }
  }
  return maxArea;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1, 2, 1]));

