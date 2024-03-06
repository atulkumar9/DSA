/**
 * 
Problem Statement - https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let [i, j, map, max] = [0, 0, new Map(), 0];
  while (j < s.length) {
    while (map.has(s[j]) && i <= map.get(s[j])) {
      map.delete(s[i]);
      i++;
    }
    map.set(s[j], j);
    max = Math.max(max, j - i + 1);
    j++;
  }
  return max;
};
