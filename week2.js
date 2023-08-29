//Tower Breakers 
// Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally.The rules of the game are as follows:

// Initially there are  towers.
// Each tower is of height .
// The players move in alternating turns.
// In each turn, a player can choose a tower of height  and reduce its height to , where  and  evenly divides .
// If the current player is unable to make a move, they lose the game.
// Given the values of  and , determine which player will win. If the first player wins, return . Otherwise, return .
function towerBreakers(n, m) {
  // Write your code here
  return m === 1 ? 2 : (n % 2 !== 0 ? 1 : 2)
}

//MaxMin
// You will be given a list of integers, , and a single integer . You must create an array of length  from elements of  such that its unfairness is minimized. 
function maxMin(k, arr) {
  // Write your code here
  // 1. Sort arr
  // 2. test for min diff for k elements starting at arr[0] and continuing through possible combinations
  // 3. If curr diff is less than previous min diff, then curr diff becomes min diff
  let sortedArr = arr.sort((a,b) => a-b )
  let minDiff = Infinity
  for (let i = 0; i<sortedArr.length - k +1; i++) {
      let currDiff = sortedArr[i + k -1] - sortedArr[i]
      minDiff = Math.min(currDiff, minDiff)
  }
  return minDiff
}
