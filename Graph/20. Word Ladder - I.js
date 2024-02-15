/**
 * Problem Statement - https://leetcode.com/problems/word-ladder/
 * Video - https://www.youtube.com/watch?v=tRPda0rcf8E
 * Algorithm -
 * 1. Change the first letter of the start word from 1-z and check if this new word exists in the word dictionary
 * 2. If the word exist and is not the same word insert it in the queue
 * 3. Delete the word from the word dictionary as well
 * 4. Change the second letter and repeat the algo
 * 5. Change for all the other letter
 * 6. get the element from the queue and repeat the same process with the word picked from the queue
 *
 * Intution, since we are traversing as levels and we need to find the total length
 * of the sequence, We'll use the BFS algorithm.
 *
 * Time Complexity - O (N * word.length * 26 * log N)
 * log N if you use set, if objects are used then it would be O (N * word.length * 26)
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let q = [];
  let dict = new Set(wordList);
  let newWord = "";
  q.push({ w: beginWord, l: 1 });

  while (q.length) {
    const { w: word, l: length } = q.shift();
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        let ch = String.fromCharCode(j);
        newWord = word.slice(0, i) + ch + word.slice(i + 1);
        if (newWord === endWord && dict.has(endWord)) {
          return length + 1;
        }
        if (dict.has(newWord) && ch != word[i]) {
          q.push({ w: newWord, l: length + 1 });
          dict.delete(newWord);
        }
      }
    }
  }

  return 0;
};

const beginWord1 = "hit";
const endWord1 = "cog";
const wordList1 = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord1, endWord1, wordList1));
