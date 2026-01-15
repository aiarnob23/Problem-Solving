// https://leetcode.com/problems/license-key-formatting/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let s_modified = s.replace(/-/g, "").toUpperCase();
    let result = "";
    let count = 0;

    for (let i = s_modified.length - 1; i >= 0; i--) {
        result = s_modified[i] + result;
        count++;

        if (count === k && i !== 0) {
            result = "-" + result;
            count = 0;
        }
    }

    return result;
};

licenseKeyFormatting("2-5g-3-J", 2);