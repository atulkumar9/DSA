/**
Problem Link -
  Course Schedule 1 - https://leetcode.com/problems/course-schedule/
  Course Schedule 2 - https://leetcode.com/problems/course-schedule-ii/

We're given the array of prerequisites and the total number of courses
eg:- 
prerequisit - [[1, 0]]  
noOfCourses = 2

so to complete 0 we need to first take 1

hence the graph is as follows

1 -> 0

We'll start with constructing the adj. list

Then we'll apply topo sort, if there's a cycle then that means the tasks can't be done

*/

const TopologicalSort = (V, adj) => {
  let indegrees = new Array(V).fill(0);
  let q = [];
  let topo = [];

  for (let i = 0; i < V; i++) {
    for (let it of adj[i]) {
      indegrees[it] = indegrees[it] + 1;
    }
  }

  for (let i = 0; i < V; i++) {
    if (!indegrees[i]) {
      q.push(i);
    }
  }

  while (q.length) {
    let node = q.shift();
    topo.unshift(node);
    for (let it of adj[node]) {
      indegrees[it] = indegrees[it] - 1;
      if (!indegrees[it]) {
        q.push(it);
      }
    }
  }

  return topo;
};

const makeArrayOfEmptyArrays = (V) => {
  const arr = [];
  for (let i = 0; i < V; i++) {
    arr.push([]);
  }
  return arr;
};

const CourseSchedule1 = (V, prerequisites) => {
  let adj = makeArrayOfEmptyArrays(V);
  for (let i = 0; i < prerequisites.length; i++) {
    let parent = prerequisites[i][0];
    let child = prerequisites[i][1];
    if (adj[parent]) {
      adj[parent].push(child);
    } else {
      adj[parent] = [child];
    }
  }
  return TopologicalSort(V, adj).length === V;
};

const CourseSchedule2 = (V, prerequisites) => {
  let adj = makeArrayOfEmptyArrays(V);
  for (let i = 0; i < prerequisites.length; i++) {
    let parent = prerequisites[i][0];
    let child = prerequisites[i][1];
    if (adj[parent]) {
      adj[parent].push(child);
    } else {
      adj[parent] = [child];
    }
  }
  let topo = TopologicalSort(V, adj);
  if (topo.length === V) {
    return topo;
  }
  return [];
};

const noOfCourses = 2;

const prerequisites1 = [[1, 0]];
const prerequisites2 = [
  [1, 0],
  [0, 1],
];

const FourCourses = 4;
const prerequisites3 = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

const OneCourse = 1;
const prerequisites4 = [];

console.log(CourseSchedule1(noOfCourses, prerequisites1)); // true
console.log(CourseSchedule1(noOfCourses, prerequisites2)); // false

// console.log(CourseSchedule2(noOfCourses, prerequisites1)); // [0, 1]
console.log(CourseSchedule2(FourCourses, prerequisites3)); // [0, 1, 2, 3] | [0, 2, 1, 3]
// console.log(CourseSchedule2(OneCourse, prerequisites4)); // [0]
