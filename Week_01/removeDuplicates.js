/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums === null || nums.length === 0) return 0
  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      j++
      nums[j] = nums[i]
    }
  }

  return j + 1
};
// @lc code=end

