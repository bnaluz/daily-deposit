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

// function lengthOfLongestSubstring(str) {
//   let maxLength = 0;
//   let left = 0;
//   let right = 0;
//   let charSet = new Set();

//   while (right < str.length) {
//     if (!charSet.has(str[right])) {
//       charSet.add(str[right]);
//       maxLength = Math.max(maxLength, right - left + 1);
//       right++;
//     } else {
//       charSet.delete(str[left]);
//       left++;
//     }
//   }
//   return maxLength;
// }

// console.log(lengthOfLongestSubstring('abcabcbb')); // Expected output: 3
// console.log(lengthOfLongestSubstring('bbbbb')); // Expected output: 1
// console.log(lengthOfLongestSubstring('pwwkew')); // Expected output: 3
// console.log(lengthOfLongestSubstring('')); // Expected output: 0
// console.log(lengthOfLongestSubstring('au')); // Expected output: 2
// console.log(lengthOfLongestSubstring('dvdf')); // Expected output: 3

/* 
*Day 4
You are given an array of integers representing the prices of a stock on different days. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Write a JavaScript function maxProfit that returns the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Problem Statement:

Write a JavaScript function maxProfit that takes an array of integers prices as input and returns the maximum profit you can achieve from a single buy and sell operation.
*/

// const maxProfit = (prices) => {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   // Iterate through the array of prices
//   for (let price of prices) {
//     // Update minPrice if the current price is lower
//     if (price < minPrice) {
//       minPrice = price;
//     }
//     // Calculate potential profit
//     let profit = price - minPrice;
//     // Update maxProfit if the potential profit is greater
//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }
//   }
//   return maxProfit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected output: 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // Expected output: 0
// console.log(maxProfit([1, 2, 3, 4, 5])); // Expected output: 4
// console.log(maxProfit([2, 4, 1])); // Expected output: 2
// console.log(maxProfit([3, 2, 6, 5, 0, 3])); // Expected output: 4

/* 
*Day 5
You are given an array of integers. Your task is to find the length of the longest contiguous subarray that contains only unique integers. Write a JavaScript function longestUniqueSubarray that returns the length of this subarray.

Problem Statement:

Write a JavaScript function longestUniqueSubarray that takes an array of integers as input and returns the length of the longest contiguous subarray that contains only unique integers.
*/

// function longestUniqueSubarray(nums) {
//   let maxLength = 0;
//   let right = 0;
//   let left = 0;
//   let charSet = new Set();

//   while (right < nums.length) {
//     if (!charSet.has(nums[right])) {
//       charSet.add(nums[right]);
//       maxLength = Math.max(maxLength, right - left + 1);
//       right++;
//     } else {
//       charSet.delete(nums[left]);
//       left++;
//     }
//   }
//   return maxLength;
// }

// console.log(longestUniqueSubarray([2, 1, 2, 3, 4, 1, 2, 3])); // Expected output: 4
// console.log(longestUniqueSubarray([1, 2, 3, 4, 5])); // Expected output: 5
// console.log(longestUniqueSubarray([5, 5, 5, 5, 5])); // Expected output: 1
// console.log(longestUniqueSubarray([2, 3, 4, 5, 2, 3, 4, 5])); // Expected output: 4
// console.log(longestUniqueSubarray([1, 2, 3, 1, 2, 3, 4, 5])); // Expected output: 5

//*DAY 6

/*
*Day 6
Word Problem:
You are given an array of integers representing daily temperatures. Your task is to calculate, for each day in the array, how many days you have to wait until a warmer temperature. If there is no future day with a warmer temperature, return 0 for that day.

Problem Statement:
Write a function dailyTemperatures in JavaScript that takes an array of integers temperatures as input and returns an array of integers representing the number of days to wait until a warmer temperature.

Function Signature:
function dailyTemperatures(temperatures) {
  // Your code here
}

Example:
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Expected output: [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // Expected output: [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // Expected output: [1, 1, 0]

Solution:
*/

// function dailyTemperatures(temperatures) {
//   let result = new Array(temperatures.length).fill(0);
//   let stack = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     while (
//       stack.length > 0 &&
//       temperatures[i] > temperatures[stack[stack.length - 1]]
//     ) {
//       let j = stack.pop();
//       result[j] = i - j;
//     }
//     stack.push(i);
//   }

//   return result;
// }

// // Test Cases
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Expected output: [1, 1, 4, 2, 1, 1, 0, 0]
// console.log(dailyTemperatures([30, 40, 50, 60])); // Expected output: [1, 1, 1, 0]
// console.log(dailyTemperatures([30, 60, 90])); // Expected output: [1, 1, 0]
// console.log(dailyTemperatures([90, 80, 70, 60])); // Expected output: [0, 0, 0, 0]
// console.log(dailyTemperatures([30, 40, 30, 50, 20, 60])); // Expected output: [1, 2, 1, 1, 1, 0]

//*Day 7
//*Problem: Sum of All Numbers
//*Write a function sumOfNumbers that takes an array of numbers and returns the sum of all the numbers in the array.

// function sumOfNumbers(arr) {
//   let sum = 0;

//   while (arr.length) {
//     sum += arr[0];
//     arr.shift();
//   }
//   return sum;
// }

// console.log(sumOfNumbers([1, 2, 3, 4, 5])); // Expected output: 15
// console.log(sumOfNumbers([10, -2, 30, 4])); // Expected output: 42
// console.log(sumOfNumbers([])); // Expected output: 0
// console.log(sumOfNumbers([7])); // Expected output: 7

// function sumOfNumbers(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// Example: console.log(sumOfNumbers([1, 2, 3, 4, 5])); // Expected output: 15
// console.log(sumOfNumbers([10, -2, 30, 4])); // Expected output: 42
// console.log(sumOfNumbers([])); // Expected output: 0
// console.log(sumOfNumbers([7])); // Expected output: 7

//*START 2 Month learning plan */

//? Day1
/*
Word Problem:
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the target.  
You may assume that each input has exactly one solution, and you may not use the same element twice.

Problem Statement:
Write a JavaScript function twoSum that takes an array of integers and a target sum, and returns the indices of the two numbers that add up to the target.

Function Signature:
*/

// function twoSum(nums, target) {
//   let mapy = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (mapy.has(complement)) {
//       return [mapy.get(complement), i];
//     }
//     mapy.set(nums[i], i);
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Expected output: [1, 2]
// console.log(twoSum([3, 3], 6)); // Expected output: [0, 1]
//!NOTES DAY 1:
/*
    1. Create a map to store elements with their indicies 
    2. Iterate through the provided array, checking if the complement to the current index exists in the map 
    3. If the element does NOT exist in map => store the element and its index in the map.set(nums[i],i)
    4. Else store the element and index in the map
*/

/*
*Day 2
Word Problem:
Given two strings `s` and `t`, write a function to determine if `t` is an anagram of `s`.
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

Problem Statement:
Write a JavaScript function isAnagram that takes two strings as input and returns `true` if `t` is an anagram of `s`, and `false` otherwise.

Function Signature:


Example:
console.log(isAnagram("anagram", "nagaram")); // Expected output: true
console.log(isAnagram("rat", "car")); // Expected output: false
console.log(isAnagram("listen", "silent")); // Expected output: true
console.log(isAnagram("hello", "world")); // Expected output: false

Solution:
*/

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const count = new Array(26).fill(0);
//   const base = 'a'.charCodeAt(0);

//   for (let i = 0; i < s.length; i++) {
//     count[s.charCodeAt(i) - base]++;
//     count[t.charCodeAt(i) - base]--;
//   }

//   return count.every((value) => value === 0);
// }

// console.log(isAnagram('anagram', 'nagaram')); // Expected output: true
// console.log(isAnagram('rat', 'car')); // Expected output: false
// console.log(isAnagram('listen', 'silent')); // Expected output: true
// console.log(isAnagram('hello', 'world')); // Expected output: false

//*DAY 3
// Problem: Two Sum
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// // You can return the answer in any order.

// const twoSum = (arr, target) => {
//   const visited = {};
//   for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];
//     if (visited[complement] !== undefined) {
//       return [visited[complement], i];
//     }
//     visited[arr[i]] = i;
//   }
//   return [];
// };

// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
// console.log(twoSum([3, 3], 6)); // Output: [0, 1]

//*JS Methods practice (map,reduce,filter,for loops,date manipulations)
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(nums) {
  return nums.map((num) => {
    return Math.pow(num, 2);
  });
}

// console.log(squareNumbers(numbers));
// Expected Output: [1, 4, 9, 16, 25]

const nums = [10, 20, 30, 40];

function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

// console.log(sumArray(nums));
// Expected Output: 100

const words = ['hello', 'world', 'javascript', 'is', 'awesome'];

function filterOddLengthStrings(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(filterOddLengthStrings(words));
// Expected Output: ['hello', 'world', 'awesome']

// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const input = 'Every developer likes to mix kubernetes and javascript';

const makeNumeronym = (string) => {
  const first = string[0];
  const last = string[string.length - 1];
  const middle = string.length - 2;

  return first + middle + last;
};

const lengthCheck = (word) => {
  if (word.length > 4) {
    return makeNumeronym(word);
  } else {
    return word;
  }
};

console.log(input.split(' ').map(lengthCheck).join(' '));

// const abbreviate = (string) => {
//   const stringArr = string.split(' ');
//   const endOutput = [];

//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i].length >= 4) {
//       let firstLetter = stringArr[i][0];
//       let lastLetter = stringArr[i][stringArr[i].length - 1];
//       let middleVals = stringArr[i].length - 2;
//       let newVal = `${firstLetter}${middleVals}${lastLetter}`;
//       endOutput.push(newVal);
//     } else {
//       endOutput.push(stringArr[i]);
//     }
//   }
//   return endOutput.join(' ');
// };

// console.log(abbreviate(input));

//expected output "E3y d7r l3s to mix k8s and j8t";
