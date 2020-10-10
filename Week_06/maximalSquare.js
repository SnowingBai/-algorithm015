/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix === null || matrix.length < 1 || matrix[0].length < 1) return 0

  let dp = []
  let row = matrix.length
  let col = matrix[0].length
  let max = Number.MIN_VALUE

  for (let i = 0; i < row + 1; i++) {
    if (i === 0) dp[i] = Array(col + 1).fill(0)
    else dp[i] = [0]
  }

  for (let i = 1; i < row + 1; i++) {
    for (let j = 1; j < col + 1; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }

  return max * max
};
// @lc code=end
