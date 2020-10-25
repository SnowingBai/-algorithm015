/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0

    for (let i = 0; i < n; i++) {
        dfs(0, i, [])
    }

    function dfs(x, y, arr) {
        for (let [x0, y0] of arr) {
        if (y === y0 || Math.abs(x - x0) === Math.abs(y - y0)) return
        }
    
        if (x === n - 1) {
        count++
        return
        }
        
        for (let i = 0; i < n; i++) {
        arr.push([x, y])
        dfs(x + 1, i, arr)
        arr.pop()
        }
    }

    return count
};
