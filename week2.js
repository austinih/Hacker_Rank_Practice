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

//  Dynamic Array


function dynamicArray(n, queries) {
  // Write your code here
  let lastAnswer = 0
  let arr = []
  let answers = []
  for (let i = 0; i < n; i++) {
      arr[i] = []
  }
  for (j = 0; j < queries.length; j++) {
    let idx = (queries[j][1] ^ lastAnswer) % n
    let y = (queries[j][2])
    if (queries[j][0] == 1) {
      arr[idx].push(y)
    } else  {
      lastAnswer = arr[idx][y % (arr[idx].length)]
      answers.push(lastAnswer)
    }
  }
  return answers

}
queries = [[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]]


//Grid Challenge
//Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

function gridChallenge(grid) {
  // Write your code here
  let rows = grid.length
  let columns = grid[0].length
  for (let i = 0; i<rows; i++) {
    grid[i].sort()
  }
  for (let j = 0; j<columns; j++) {
    for (let k = 0; k<grid.length -1; k++){
      if (grid[k][j] > grid[k +1][j]) {
        return 'NO'
      }
    }
  }
  return 'YES'
}

grid = [['a','b','c'],['g','z','z'],['g','e','f']]


// Sherlock and Array
//Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

function balancedSums(arr) {
  // Write your code here
  // 1. get total sum of array
  // 2. Create loop that 
      // a. sum of [i] + previous sum
      // b. compares sum to total sum - ([i]+1)
      // c. if == then 'YES', else 'NO'
      
  const totalSum = arr.reduce((acc, curVal) => acc + curVal, 0)
  let leftSum = 0
  for (let i = 0; i<arr.length; i++) {
    let value = arr[i]
    if (leftSum == (totalSum - leftSum - value)) {
      return "YES"
    } else {
      leftSum += value
    }
  }
  return "NO"
}

let testArray = [2,0,0,0]

balancedSums(testArray)
