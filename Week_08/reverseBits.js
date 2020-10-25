/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let max = 32
  let res = 0

  while (max--) {
    res *= 2
    res += n & 1
    n = n >> 1
  }

  return res
};
