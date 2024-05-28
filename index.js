/*Word Problem
//*Day 1
You are in charge of organizing a basketball tournament. The tournament is structured so that each team plays against every other team exactly once. You need to create a function that calculates the total number of games that will be played in the tournament.

Problem Statement:
Given the number of teams in the tournament, write a JavaScript function calculateTotalGames that returns the total number of games to be played. Each team plays against every other team exactly once.

Function Signature*/

// function calculateTotalGames(teams) {
//   return (teams * (teams - 1)) / 2;
// }

// console.log(calculateTotalGames(4)); // Expected output: 6
// console.log(calculateTotalGames(5)); // Expected output: 10
// console.log(calculateTotalGames(6)); // Expected output: 15
// console.log(calculateTotalGames(10)); // Expected output: 45
// console.log(calculateTotalGames(2)); // Expected output: 1
// console.log(calculateTotalGames(3)); // Expected output: 3

/*
*DAY2

You are tasked with creating a schedule for a series of classes. Each class has a start time and an end time, and no two classes can overlap. Given a list of classes with their start and end times, write a function to find the maximum number of non-overlapping classes that can be attended.

Problem Statement:

Write a JavaScript function maxNonOverlappingClasses that takes an array of classes, where each class is represented by an object with start and end properties, and returns the maximum number of non-overlapping classes. */

// function maxNonOverlappingClasses(classes) {
//   classes.sort((a, b) => a.end - b.end);

//   let count = 0;
//   let lastEndTime = 0;

//   for (const cls of classes) {
//     if (cls.start >= lastEndTime) {
//       count++;
//       lastEndTime = cls.end;
//     }
//   }

//   return count;
// }

// console.log(
//   maxNonOverlappingClasses([
//     { start: 1, end: 10 },
//     { start: 2, end: 3 },
//     { start: 4, end: 5 },
//     { start: 6, end: 7 },
//     { start: 8, end: 9 },
//   ])
// ); // Expected output: 4

// console.log(
//   maxNonOverlappingClasses([
//     { start: 1, end: 2 },
//     { start: 2, end: 3 },
//     { start: 3, end: 4 },
//   ])
// ); // Expected output: 3

// console.log(
//   maxNonOverlappingClasses([
//     { start: 1, end: 5 },
//     { start: 2, end: 3 },
//     { start: 3, end: 4 },
//     { start: 4, end: 6 },
//   ])
// ); // Expected output: 2

/*
*Day3 
Word Problem
You are given a string consisting of only lowercase English letters. You need to find the length of the longest substring without repeating characters. Write a JavaScript function lengthOfLongestSubstring that returns this length.

Problem Statement:

Write a JavaScript function lengthOfLongestSubstring that takes a string as input and returns the length of the longest substring without repeating characters.


*/

function lengthOfLongestSubstring(str) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let charSet = new Set();

  while (right < str.length) {
    if (!charSet.has(str[right])) {
      charSet.add(str[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      charSet.delete(str[left]);
      left++;
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // Expected output: 3
console.log(lengthOfLongestSubstring('bbbbb')); // Expected output: 1
console.log(lengthOfLongestSubstring('pwwkew')); // Expected output: 3
console.log(lengthOfLongestSubstring('')); // Expected output: 0
console.log(lengthOfLongestSubstring('au')); // Expected output: 2
console.log(lengthOfLongestSubstring('dvdf')); // Expected output: 3
