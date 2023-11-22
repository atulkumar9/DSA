/**
 * Problem Statement - https://practice.geeksforgeeks.org/problems/alien-dictionary/1Free
 */

const TopologicalSort = (adj) => {
  let q = [];
  let indegrees = {};
  let topo = "";

  for (let adjecentNode in adj) {
    indegrees[adjecentNode] = 0;
  }

  for (let adjecentNode in adj) {
    for (let node of adj[adjecentNode]) {
      if (indegrees.hasOwnProperty(node)) {
        indegrees[node] = indegrees[node] + 1;
      } else {
        indegrees[node] = 1;
      }
    }
  }

  for (let node in indegrees) {
    if (indegrees.hasOwnProperty(node) && !indegrees[node]) {
      q.push(node);
    }
  }

  while (q.length) {
    let node = q.shift();
    topo += node;
    if (adj.hasOwnProperty(node)) {
      for (let adjecentNode of adj[node]) {
        indegrees[adjecentNode] = indegrees[adjecentNode] - 1;
        if (!indegrees[adjecentNode]) {
          q.push(adjecentNode);
        }
      }
    }
  }

  return topo;
};

const AlienDictionary = (dict, N, K) => {
  let j = 0;
  let adj = {};
  for (let i = 1; i < N; i++) {
    while (dict[i][j] === dict[i - 1][j]) {
      j++;
    }
    if (adj.hasOwnProperty(dict[i - 1][j])) {
      adj[dict[i - 1][j]] = [...adj[dict[i - 1][j]], dict[i][j]];
    } else if (dict[i - 1][j]) {
      adj[dict[i - 1][j]] = [dict[i][j]];
    }
    j = 0;
  }

  return TopologicalSort(adj);
};

const N1 = 5;
const K1 = 4;
const dict1 = ["baa", "abcd", "abca", "cab", "cad"];

const N2 = 5;
const K2 = 5;
const dict2 = ["wrt", "wrf", "er", "ett", "rftt"];

const N3 = 3;
const K3 = 2;
const dict3 = ["z", "x", "z"];

const N4 = 23;
const K4 = 12;
const dict4 = [
  "ahhfiblcafelghehcadcilfkec",
  "dd",
  "dhclbbdliceedgflflkdlec",
  "dk",
  "ebkfklagilhliljac",
  "eblfhgecdchkkihicghakahkdg",
  "ecjdiibjfcblgl",
  "fdkbfkgahkeajdccjhgfabhdjde",
  "fglcbejiijfdcdadaeegagflcgfkhhhafaeeghebfhcgbj",
  "fldjdclh",
  "gbfbcafddiieicchlbhlbklcgejl",
  "gg",
  "ggjdlieiklffbkhhlcglfcghidehhaheihfflehi",
  "hbichfhgfkigaackjhbdegjackadhkikcdbchgkdgkbgfd",
  "hhgbeekcgcbccfdhfkkgalidfedchldhjgjeehcg",
  "ialbi",
  "iclgjigddh",
  "jdbfjjhflaigghgkfheaiad",
  "jlafh",
  "jlge",
  "kcgdgegijggejjajfajal",
  "lfadijikilhfadegj",
  "lkh",
];

console.log(AlienDictionary(dict1, N1, K1));
console.log(AlienDictionary(dict2, N2, K2));
console.log(AlienDictionary(dict3, N3, K3));
console.log(AlienDictionary(dict4, N4, K4));
