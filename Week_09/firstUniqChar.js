/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        if (s[i] in obj) obj[s[i]].count++
        else {
        obj[s[i]] = {
            count: 0,
            index: i
        }
        }
    }

    for (const key in obj) {
        if (obj[key] && obj[key].count === 0) return obj[key].index
    }

    return -1
};
