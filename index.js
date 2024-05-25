/*Word Problem
You are in charge of organizing a basketball tournament. The tournament is structured so that each team plays against every other team exactly once. You need to create a function that calculates the total number of games that will be played in the tournament.

Problem Statement:
Given the number of teams in the tournament, write a JavaScript function calculateTotalGames that returns the total number of games to be played. Each team plays against every other team exactly once.

Function Signature*/

function calculateTotalGames(teams) {
  return (teams * (teams - 1)) / 2;
}

console.log(calculateTotalGames(4)); // Expected output: 6
console.log(calculateTotalGames(5)); // Expected output: 10
console.log(calculateTotalGames(6)); // Expected output: 15
console.log(calculateTotalGames(10)); // Expected output: 45
console.log(calculateTotalGames(2)); // Expected output: 1
console.log(calculateTotalGames(3)); // Expected output: 3
