// https://leetcode.com/problems/valid-palindrome/ 
//solved by : two pointer approach
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length == 0 || s.length == 1) return true;
    s = modifyString(s);
    for (i = 0, j = s.length - 1; i <= (Math.ceil(s.length / 2)) - 1;) {
        if (s[i] != s[j]) {
            return false;
        }
        else {
            i++;
            j--;
        }
    }
    return true;
};

var modifyString = function (s) {
    let res = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return res;
}

let s = "ab,cdba";
console.log(isPalindrome(s));