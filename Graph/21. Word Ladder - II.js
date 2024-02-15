/**
 * Problem Statement - https://leetcode.com/problems/word-ladder-ii/
 * Video Tut - https://www.youtube.com/watch?v=DREutrv2XD0
 * This is a hard problem :/
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let q = [];
  let dict = new Set(wordList);
  let newWord = "";
  let sts = [];
  q.push([beginWord]);

  if (wordList.indexOf(endWord) === -1) {
    return [];
  }

  let level = 0;

  while (q.length) {
    const wordSeq = q.shift();
    const word = wordSeq[wordSeq.length - 1];

    if (wordSeq.length > level) {
      level++;
      for (let i = 0; i < wordSeq.length; i++) {
        dict.delete(wordSeq[i]);
      }
    }

    if (word === endWord) {
      if (sts.length === 0) {
        sts.push(wordSeq);
      } else if (sts[0].length === wordSeq.length) {
        sts.push(wordSeq);
      }
    }

    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        let ch = String.fromCharCode(j);
        newWord = word.slice(0, i) + ch + word.slice(i + 1);
        if (dict.has(newWord) && ch != word[i]) {
          q.push([...wordSeq, newWord]);
        }
      }
    }
  }

  return sts;
};

const beginWord1 = "hit";
const endWord1 = "cog";
const wordList1 = ["hit", "hot", "dot", "dog", "lot", "log", "cog"];

const beginWord2 = "red";
const endWord2 = "tax";
const wordList2 = ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"];

const beginWord3 = "aaaaa";
const endWord3 = "ggggg";
const wordList3 = [
  "aaaaa",
  "caaaa",
  "cbaaa",
  "daaaa",
  "dbaaa",
  "eaaaa",
  "ebaaa",
  "faaaa",
  "fbaaa",
  "gaaaa",
  "gbaaa",
  "haaaa",
  "hbaaa",
  "iaaaa",
  "ibaaa",
  "jaaaa",
  "jbaaa",
  "kaaaa",
  "kbaaa",
  "laaaa",
  "lbaaa",
  "maaaa",
  "mbaaa",
  "naaaa",
  "nbaaa",
  "oaaaa",
  "obaaa",
  "paaaa",
  "pbaaa",
  "bbaaa",
  "bbcaa",
  "bbcba",
  "bbdaa",
  "bbdba",
  "bbeaa",
  "bbeba",
  "bbfaa",
  "bbfba",
  "bbgaa",
  "bbgba",
  "bbhaa",
  "bbhba",
  "bbiaa",
  "bbiba",
  "bbjaa",
  "bbjba",
  "bbkaa",
  "bbkba",
  "bblaa",
  "bblba",
  "bbmaa",
  "bbmba",
  "bbnaa",
  "bbnba",
  "bboaa",
  "bboba",
  "bbpaa",
  "bbpba",
  "bbbba",
  "abbba",
  "acbba",
  "dbbba",
  "dcbba",
  "ebbba",
  "ecbba",
  "fbbba",
  "fcbba",
  "gbbba",
  "gcbba",
  "hbbba",
  "hcbba",
  "ibbba",
  "icbba",
  "jbbba",
  "jcbba",
  "kbbba",
  "kcbba",
  "lbbba",
  "lcbba",
  "mbbba",
  "mcbba",
  "nbbba",
  "ncbba",
  "obbba",
  "ocbba",
  "pbbba",
  "pcbba",
  "ccbba",
  "ccaba",
  "ccaca",
  "ccdba",
  "ccdca",
  "cceba",
  "cceca",
  "ccfba",
  "ccfca",
  "ccgba",
  "ccgca",
  "cchba",
  "cchca",
  "cciba",
  "ccica",
  "ccjba",
  "ccjca",
  "cckba",
  "cckca",
  "cclba",
  "cclca",
  "ccmba",
  "ccmca",
  "ccnba",
  "ccnca",
  "ccoba",
  "ccoca",
  "ccpba",
  "ccpca",
  "cccca",
  "accca",
  "adcca",
  "bccca",
  "bdcca",
  "eccca",
  "edcca",
  "fccca",
  "fdcca",
  "gccca",
  "gdcca",
  "hccca",
  "hdcca",
  "iccca",
  "idcca",
  "jccca",
  "jdcca",
  "kccca",
  "kdcca",
  "lccca",
  "ldcca",
  "mccca",
  "mdcca",
  "nccca",
  "ndcca",
  "occca",
  "odcca",
  "pccca",
  "pdcca",
  "ddcca",
  "ddaca",
  "ddada",
  "ddbca",
  "ddbda",
  "ddeca",
  "ddeda",
  "ddfca",
  "ddfda",
  "ddgca",
  "ddgda",
  "ddhca",
  "ddhda",
  "ddica",
  "ddida",
  "ddjca",
  "ddjda",
  "ddkca",
  "ddkda",
  "ddlca",
  "ddlda",
  "ddmca",
  "ddmda",
  "ddnca",
  "ddnda",
  "ddoca",
  "ddoda",
  "ddpca",
  "ddpda",
  "dddda",
  "addda",
  "aedda",
  "bddda",
  "bedda",
  "cddda",
  "cedda",
  "fddda",
  "fedda",
  "gddda",
  "gedda",
  "hddda",
  "hedda",
  "iddda",
  "iedda",
  "jddda",
  "jedda",
  "kddda",
  "kedda",
  "lddda",
  "ledda",
  "mddda",
  "medda",
  "nddda",
  "nedda",
  "oddda",
  "oedda",
  "pddda",
  "pedda",
  "eedda",
  "eeada",
  "eeaea",
  "eebda",
  "eebea",
  "eecda",
  "eecea",
  "eefda",
  "eefea",
  "eegda",
  "eegea",
  "eehda",
  "eehea",
  "eeida",
  "eeiea",
  "eejda",
  "eejea",
  "eekda",
  "eekea",
  "eelda",
  "eelea",
  "eemda",
  "eemea",
  "eenda",
  "eenea",
  "eeoda",
  "eeoea",
  "eepda",
  "eepea",
  "eeeea",
  "ggggg",
  "agggg",
  "ahggg",
  "bgggg",
  "bhggg",
  "cgggg",
  "chggg",
  "dgggg",
  "dhggg",
  "egggg",
  "ehggg",
  "fgggg",
  "fhggg",
  "igggg",
  "ihggg",
  "jgggg",
  "jhggg",
  "kgggg",
  "khggg",
  "lgggg",
  "lhggg",
  "mgggg",
  "mhggg",
  "ngggg",
  "nhggg",
  "ogggg",
  "ohggg",
  "pgggg",
  "phggg",
  "hhggg",
  "hhagg",
  "hhahg",
  "hhbgg",
  "hhbhg",
  "hhcgg",
  "hhchg",
  "hhdgg",
  "hhdhg",
  "hhegg",
  "hhehg",
  "hhfgg",
  "hhfhg",
  "hhigg",
  "hhihg",
  "hhjgg",
  "hhjhg",
  "hhkgg",
  "hhkhg",
  "hhlgg",
  "hhlhg",
  "hhmgg",
  "hhmhg",
  "hhngg",
  "hhnhg",
  "hhogg",
  "hhohg",
  "hhpgg",
  "hhphg",
  "hhhhg",
  "ahhhg",
  "aihhg",
  "bhhhg",
  "bihhg",
  "chhhg",
  "cihhg",
  "dhhhg",
  "dihhg",
  "ehhhg",
  "eihhg",
  "fhhhg",
  "fihhg",
  "ghhhg",
  "gihhg",
  "jhhhg",
  "jihhg",
  "khhhg",
  "kihhg",
  "lhhhg",
  "lihhg",
  "mhhhg",
  "mihhg",
  "nhhhg",
  "nihhg",
  "ohhhg",
  "oihhg",
  "phhhg",
  "pihhg",
  "iihhg",
  "iiahg",
  "iiaig",
  "iibhg",
  "iibig",
  "iichg",
  "iicig",
  "iidhg",
  "iidig",
  "iiehg",
  "iieig",
  "iifhg",
  "iifig",
  "iighg",
  "iigig",
  "iijhg",
  "iijig",
  "iikhg",
  "iikig",
  "iilhg",
  "iilig",
  "iimhg",
  "iimig",
  "iinhg",
  "iinig",
  "iiohg",
  "iioig",
  "iiphg",
  "iipig",
  "iiiig",
  "aiiig",
  "ajiig",
  "biiig",
  "bjiig",
  "ciiig",
  "cjiig",
  "diiig",
  "djiig",
  "eiiig",
  "ejiig",
  "fiiig",
  "fjiig",
  "giiig",
  "gjiig",
  "hiiig",
  "hjiig",
  "kiiig",
  "kjiig",
  "liiig",
  "ljiig",
  "miiig",
  "mjiig",
  "niiig",
  "njiig",
  "oiiig",
  "ojiig",
  "piiig",
  "pjiig",
  "jjiig",
  "jjaig",
  "jjajg",
  "jjbig",
  "jjbjg",
  "jjcig",
  "jjcjg",
  "jjdig",
  "jjdjg",
  "jjeig",
  "jjejg",
  "jjfig",
  "jjfjg",
  "jjgig",
  "jjgjg",
  "jjhig",
  "jjhjg",
  "jjkig",
  "jjkjg",
  "jjlig",
  "jjljg",
  "jjmig",
  "jjmjg",
  "jjnig",
  "jjnjg",
  "jjoig",
  "jjojg",
  "jjpig",
  "jjpjg",
  "jjjjg",
  "ajjjg",
  "akjjg",
  "bjjjg",
  "bkjjg",
  "cjjjg",
  "ckjjg",
  "djjjg",
  "dkjjg",
  "ejjjg",
  "ekjjg",
  "fjjjg",
  "fkjjg",
  "gjjjg",
  "gkjjg",
  "hjjjg",
  "hkjjg",
  "ijjjg",
  "ikjjg",
  "ljjjg",
  "lkjjg",
  "mjjjg",
  "mkjjg",
  "njjjg",
  "nkjjg",
  "ojjjg",
  "okjjg",
  "pjjjg",
  "pkjjg",
  "kkjjg",
  "kkajg",
  "kkakg",
  "kkbjg",
  "kkbkg",
  "kkcjg",
  "kkckg",
  "kkdjg",
  "kkdkg",
  "kkejg",
  "kkekg",
  "kkfjg",
  "kkfkg",
  "kkgjg",
  "kkgkg",
  "kkhjg",
  "kkhkg",
  "kkijg",
  "kkikg",
  "kkljg",
  "kklkg",
  "kkmjg",
  "kkmkg",
  "kknjg",
  "kknkg",
  "kkojg",
  "kkokg",
  "kkpjg",
  "kkpkg",
  "kkkkg",
  "ggggx",
  "gggxx",
  "ggxxx",
  "gxxxx",
  "xxxxx",
  "xxxxy",
  "xxxyy",
  "xxyyy",
  "xyyyy",
  "yyyyy",
  "yyyyw",
  "yyyww",
  "yywww",
  "ywwww",
  "wwwww",
  "wwvww",
  "wvvww",
  "vvvww",
  "vvvwz",
  "avvwz",
  "aavwz",
  "aaawz",
  "aaaaz",
];

console.log(findLadders(beginWord1, endWord1, wordList1));
console.log(findLadders(beginWord2, endWord2, wordList2));
// console.log(findLadders(beginWord3, endWord3, wordList3)); // TLE Case
console.log("finish");

/**
 * The third case will give a time limit exceeded, so we need a better solution
 *
 * Step 1 - Store the level of a particular node, wile performnig the optimal bfs
 * Step 2 - Perform the DFS backwards as in let's say we conside the 1st test case
 *    cog -> log -> lot -> hot - > hit
 *    while traversing, we need to check if the current word and the new word should not
 *    be on the same level in the level map (this is how we are eliminating extra calls)
 *
 * Intution - If we start from mthe beginning then we'll have multiple ways to reach the end
 *  but if we start from the back then we'll only have few ways that will
 *  restricting our options. that in turn will reduce the number of recursive calls
 *
 * Following is the implementation of the algo discussed above
 */

var findLaddersOptimal = function (beginWord, endWord, wordList) {
  let q = [];
  let dict = new Set(wordList);
  let dict2 = new Set(wordList);
  let newWord = "";
  q.push({ w: beginWord, l: 0 });
  const levelMap = {};

  if (wordList.indexOf(endWord) === -1) {
    return [];
  }

  while (q.length) {
    const { w: word, l: level } = q.shift();

    if (levelMap.hasOwnProperty(word)) {
      levelMap[word] = Math.min(levelMap[word], level);
    } else {
      levelMap[word] = level;
    }

    if (word === endWord) {
      break;
    }

    // first creating the level map
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        let ch = String.fromCharCode(j);
        newWord = word.slice(0, i) + ch + word.slice(i + 1);
        if (dict.has(newWord) && ch != word[i]) {
          q.push({ w: newWord, l: level + 1 });
          dict.delete(newWord);
        }
      }
    }
  }


  // doing backtracking with DFS 
  let sts = [];
  const dfs = (seq) => {
    let word = seq[seq.length - 1];
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        let ch = String.fromCharCode(j);
        newWord = word.slice(0, i) + ch + word.slice(i + 1);
        if (newWord === beginWord) {
          sts.push([...seq, newWord].reverse());
        } else if (
          dict2.has(newWord) &&
          ch != word[i] &&
          levelMap[newWord] + 1 === levelMap[word]
        ) {
          dfs([...seq, newWord]);
        }
      }
    }
  };

  dfs([endWord]);

  return sts;
};

console.log(findLaddersOptimal(beginWord3, endWord3, wordList3)); // This will give the answer