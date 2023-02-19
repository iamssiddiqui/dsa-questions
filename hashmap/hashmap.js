//01. Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K. solution in javascript

function countPairsWithSum(arr, K) {
    let count = 0;
    const seen = new Set(); // to store already seen numbers
    
    for (let i = 0; i < arr.length; i++) {
      const complement = K - arr[i]; // find the complement to get the target sum
      
      if (seen.has(complement)) {
        count++; // found a pair, increment count
      }
      
      seen.add(arr[i]); // add the current number to the set of seen numbers
    }
    
    return count;
  }

  //This function uses a Set to keep track of the numbers that have already been seen while iterating through the array. For each number arr[i], it computes the complement K - arr[i] and checks if it has already been seen. If it has, it means that there is a pair of elements in the array whose sum is equal to K, so the count is incremented. Finally, the function returns the count.

const arr = [1, 2, 3, 4, 5];
const K = 6;
const result = countPairsWithSum(arr, K);
console.log(result); // 2

//In this example, the function counts two pairs of elements whose sum is equal to K=6: (1, 5) and (2, 4).



//02. Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum solution in javascript

function hasZeroSumSubarray(arr) {
    const set = new Set(); // to store prefix sums
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      
      if (sum === 0 || set.has(sum)) {
        return true; // found a zero-sum subarray or a repeated prefix sum
      }
      
      set.add(sum);
    }
    
    return false; // no zero-sum subarray found
  }

  //This function uses a Set to keep track of the prefix sums seen so far while iterating through the array. For each element arr[i], it adds it to the running sum sum, and then checks if the sum is zero or if it has been seen before in the set. If either condition is true, it means that there is a subarray with zero sum, so the function returns true. Otherwise, it adds the current sum to the set of seen prefix sums and continues iterating. If no zero-sum subarray is found, the function returns false.

//Example usage:

const arr1 = [4, 2, -3, 1, 6];
const hasZeroSum = hasZeroSumSubarray(arr1);
console.log(hasZeroSum); // true

//03. Given an array arr[] of size n, find the first repeating element. The element should occur more than once and the index of its first occurrence should be the smallest solution in javascript

function firstRepeatingElement(arr) {
    const map = new Map(); // to store element frequencies and positions
    
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      
      if (map.has(element)) {
        // found a repeating element, return its position
        return map.get(element);
      }
      
      map.set(element, i + 1); // store the position of the element
    }
    
    return -1; // no repeating element found
  }

  //This function uses a Map to store the frequencies and positions of the elements seen so far while iterating through the array. For each element arr[i], it checks if it has been seen before in the map. If it has, it means that it is a repeating element, so the function returns its position (using 1-based indexing). Otherwise, it stores the element's position in the map and continues iterating. If no repeating element is found, the function returns -1.

//Example usage:

const arr2 = [10, 5, 3, 4, 3, 5, 6];
const firstRepeatingIndex = firstRepeatingElement(arr2);
console.log(firstRepeatingIndex); // 2

//In this example, the function finds the first repeating element 5 at index 2 (using 1-based indexing).

//04. You are given an array arr[] of size n. Find the total count of sub-arrays having their sum equal to 0 solution in javascript

function countZeroSumSubarrays(arr) {
    const map = new Map();
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum === 0) {
        count++;
      }
      if (map.has(sum)) {
        count += map.get(sum);
      }
      const prevCount = map.get(sum) || 0;
      map.set(sum, prevCount + 1);
    }
  
    return count;
  }

  //In this approach, we use a map to keep track of the cumulative sum of elements seen so far and the number of times each sum has occurred. We initialize the sum and count variables to 0. We then loop through the array, adding each element to the sum and checking if the sum equals 0. If it does, we increment the count by 1. We also check if the map contains the current sum. If it does, we increment the count by the number of times that sum has occurred in the map. Finally, we update the map with the current sum and its count.

//At the end of the loop, we return the count, which represents the total number of subarrays with a sum of 0.

//Example usage:

const arr3 = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
const count = countZeroSumSubarrays(arr3);
console.log(count); // Output: 4

//In this example, there are 4 subarrays with a sum of 0: [3, 4, -7], [4, -2, -2], [3, 1, -4], and [1, -1].


//05. Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

//Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
//Output: [[1,0,1],[0,0,0],[1,0,1]]

function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const rows = new Set();
    const cols = new Set();
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 0) {
          rows.add(i);
          cols.add(j);
        }
      }
    }
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (rows.has(i) || cols.has(j)) {
          matrix[i][j] = 0;
        }
      }
    }
  }

//In this approach, we first iterate through the matrix and store the indices of rows and columns containing 0s in two sets, respectively. We then iterate through the matrix again and set the corresponding elements to 0 if their row or column is in the sets.

//Example usage:
const matrix = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log(matrix); // Output: [[1,0,1],[0,0,0],[1,0,1]]

//In this example, the matrix has one 0 at position (1,1), so we set the entire second row and column to 0. The resulting matrix is [[1,0,1],[0,0,0],[1,0,1]].

//06. You are playing the Bulls and Cows game with your friend.

// You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

// The number of "bulls", which are digits in the guess that are in the correct position.
// The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
// Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

// The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

// Example 1:

// Input: secret = "1807", guess = "7810"
// Output: "1A3B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1807"
//   |
// "7810"

function getHint(secret, guess) {
    let bulls = 0;
    let cows = 0;
    const freq = new Map();
  
    for (let i = 0; i < secret.length; i++) {
      const s = secret[i];
      const g = guess[i];
  
      if (s === g) {
        bulls++;
      } else {
        freq.set(s, (freq.get(s) || 0) + 1);
        freq.set(g, (freq.get(g) || 0) - 1);
  
        if (freq.get(s) <= 0) {
          freq.delete(s);
        }
  
        if (freq.get(g) >= 0) {
          freq.delete(g);
        }
  
        cows++;
      }
    }
  
    return `${bulls}A${cows}B`;
  }

//In this approach, we use a hash map to maintain the frequency count of the digits in the secret and guess strings. We iterate through the strings and update the frequency count for each digit. If a digit in the secret string has not been matched as a cow yet, we increment its frequency count in the hash map. If a digit in the guess string has not been matched as a bull yet, we decrement its frequency count in the hash map. We also check if the frequency count of a digit becomes 0 or negative and remove it from the hash map if that is the case. Finally, we increment the cow count for each non-bull digit.

//At the end, we return a string of the form "xAyB" where x is the number of bulls, y is the number of cows, and A and B are separator characters.

//Example usage:

const secret = "1807";
const guess = "7810";
const hint = getHint(secret, guess);
console.log(hint); // Output: "1A3B"

//This example produces the same output as the previous implementation.


//07. Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

class RandomizedSet {
    constructor() {
      this.map = new Map();
      this.list = [];
    }
  
    insert(val) {
      if (this.map.has(val)) {
        return false;
      }
      this.map.set(val, this.list.length);
      this.list.push(val);
      return true;
    }
  
    remove(val) {
      if (!this.map.has(val)) {
        return false;
      }
      const index = this.map.get(val);
      const lastVal = this.list[this.list.length - 1];
      this.list[index] = lastVal;
      this.map.set(lastVal, index);
      this.list.pop();
      this.map.delete(val);
      return true;
    }
  
    getRandom() {
      const randomIndex = Math.floor(Math.random() * this.list.length);
      return this.list[randomIndex];
    }
  }

  
// In this implementation, we use a hash map to store the values and their corresponding indices in the list. We also use an array (list) to store the values in the order they were inserted.

// The insert method checks if the value is already in the map, and returns false if that's the case. Otherwise, it adds the value to the end of the list, and sets its index in the map.

// The remove method checks if the value is in the map, and returns false if it's not. Otherwise, it gets the index of the value in the map, and the value at the end of the list. It then updates the value at the index with the last value, updates the index of the last value in the map, removes the last value from the list, and removes the value from the map.

// The getRandom method generates a random index between 0 and the length of the list, and returns the value at that index.

// All three methods have an average time complexity of O(1).

// Example usage:

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Output: true
console.log(randomizedSet.remove(2)); // Output: false
console.log(randomizedSet.insert(2)); // Output: true
console.log(randomizedSet.getRandom()); // Output: 1 or 2 (with equal probability)
console.log(randomizedSet.remove(1)); // Output: true
console.log(randomizedSet.insert(2)); // Output: false
console.log(randomizedSet.getRandom()); // Output: 2

// In this example, we create a new RandomizedSet instance and use its methods to insert, remove, and get random elements. We also test some error cases, such as removing a non-existing element and inserting an existing element.



//08. Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

function isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const freq = new Map();
  
    for (let i = 0; i < s.length; i++) {
      freq.set(s[i], (freq.get(s[i]) || 0) + 1);
      freq.set(t[i], (freq.get(t[i]) || 0) - 1);
    }
  
    for (let count of freq.values()) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;
  }


//In this approach, we use a hash map to maintain the frequency count of the characters in the two input strings. We first check if the two strings have the same length, and return false if that's not the case. We then iterate through the strings and update the frequency count for each character, by incrementing the count for the character in the first string and decrementing the count for the character in the second string.

// After the iteration, we check if all the frequency counts in the hash map are 0, which indicates that the two strings have the same set of characters with the same frequency. If any of the counts are non-zero, we return false. Otherwise, we return true.

// Example usage:

console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

//This example produces the same output as the previous implementation, but uses a hash map to store the frequency counts of the characters in the input strings.

//09. Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
//Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

function findAnagrams(s, p) {
    const result = [];
    if (s.length < p.length) {
      return result;
    }
  
    const freq = new Map();
    for (let c of p) {
      freq.set(c, (freq.get(c) || 0) + 1);
    }
  
    let left = 0, right = 0, count = p.length;
    while (right < s.length) {
      const charRight = s[right];
      if (freq.has(charRight)) {
        freq.set(charRight, freq.get(charRight) - 1);
        if (freq.get(charRight) >= 0) {
          count--;
        }
      }
      right++;
  
      if (count === 0) {
        result.push(left);
      }
  
      if (right - left === p.length) {
        const charLeft = s[left];
        if (freq.has(charLeft)) {
          freq.set(charLeft, freq.get(charLeft) + 1);
          if (freq.get(charLeft) > 0) {
            count++;
          }
        }
        left++;
      }
    }
  
    return result;
  }

  //In this approach, we use a hash map to store the frequency counts of the characters in the pattern string p. We first check if the length of the input string s is less than the length of p, and return an empty array if that's the case. We then iterate through p and update the frequency count for each character.

// We then use a sliding window approach to find all the anagrams of p in s. We maintain a window of size p.length, and slide it from left to right over s. For each position of the window, we update the frequency count of the character that enters the window (if it's in the hash map), and decrement the count of the character that leaves the window (if it's in the hash map). We also update a count variable to keep track of the number of characters in the window that match the frequency count in p.

// If count becomes 0, we have found an anagram, and add the left index of the window to the result array. We then slide the window to the right, and update the count and frequency count accordingly. If the window reaches the end of s, we stop and return the result array.

// Example usage:

console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
console.log(findAnagrams("abab", "ab")); // Output: [0, 1, 2]

//10. Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board) {
    const rowMap = new Map();
    const colMap = new Map();
    const boxMap = new Map();
  
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        const num = board[row][col];
        if (num === '.') {
          continue;
        }
  
        const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        const rowKey = `${row}-${num}`;
        const colKey = `${col}-${num}`;
        const boxKey = `${boxIndex}-${num}`;
  
        if (rowMap.has(rowKey) || colMap.has(colKey) || boxMap.has(boxKey)) {
          return false;
        }
  
        rowMap.set(rowKey, true);
        colMap.set(colKey, true);
        boxMap.set(boxKey, true);
      }
    }
  
    return true;
  }

//   In this approach, we use three hash maps to keep track of the occurrence of each number in each row, column, and 3x3 box of the Sudoku board. We iterate through the board row by row, and for each cell with a non-empty number, we check if the number has already occurred in the same row, column, or box. We use the indices of the row, column, and box, as well as the number itself, to construct a unique key for each entry in the hash maps.

// If we encounter a number that has already occurred in the same row, column, or box, we return false, indicating that the Sudoku board is invalid. Otherwise, we add the current number to the hash maps.

// After iterating through the entire board, if we haven't found any duplicate numbers, we return true, indicating that the Sudoku board is valid.

// Example usage:

const board = [  
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board)); // Output: true

//In this example, we use the isValidSudoku function to check if the Sudoku board is valid. The function returns true, indicating that the board is valid.

//11. Given a dictionary of words and a pattern. Every character in the pattern is uniquely mapped to a character in the dictionary. Find all such words in the dictionary that match the given pattern using hashmap in javascript 

function findWordsWithPattern(dict, pattern) {
    const result = [];
  
    for (let i = 0; i < dict.length; i++) {
      const word = dict[i];
      if (word.length !== pattern.length) {
        continue;
      }
  
      const map = new Map();
      let isMatch = true;
  
      for (let j = 0; j < pattern.length; j++) {
        const char = word[j];
        if (!map.has(pattern[j])) {
          map.set(pattern[j], char);
        } else if (map.get(pattern[j]) !== char) {
          isMatch = false;
          break;
        }
      }
  
      if (isMatch) {
        result.push(word);
      }
    }
  
    return result;
  }

//In this approach, we iterate through the dictionary of words and check each word against the given pattern. If the length of the word does not match the length of the pattern, we skip the word.

// For each word, we create a new hash map to map each character in the pattern to the corresponding character in the word. We iterate through the characters of the pattern and the word in parallel, and for each character in the pattern, we check if it has already been mapped to a different character. If not, we add the mapping to the hash map. If the character has already been mapped to a different character, we conclude that the word does not match the pattern, and we move on to the next word.

// If the word matches the pattern, we add the word to the result array.

// Finally, we return the result array, which contains all the words that match the given pattern.

// Example usage:

const dict = ["foo", "bar", "baz", "qux"];
const pattern = "abb";
console.log(findWordsWithPattern(dict, pattern)); // Output: ["foo", "qux"]

//In this example, we use the findWordsWithPattern function to find all the words in the dict array that match the pattern "abb". The function returns an array containing the words "foo" and "qux". These are the only words in the dictionary that match the given pattern, because they have the same second and third characters and a different first character.

//12. Given a string S of lowercase alphabets, check if it is isogram or not. An Isogram is a string in which no letter occurs more than once in javascript using hashmap

function isIsogram(str) {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (map.has(char)) {
        return false;
      }
      map.set(char, true);
    }
    return true;
  }

//In this approach, we create a new hash map to keep track of the characters that we have seen so far. We iterate through each character in the string, and for each character, we check if it is already present in the hash map. If it is, we conclude that the string is not an isogram and return false. If the character is not in the hash map, we add it to the hash map with a value of true.

// If we reach the end of the string without finding any repeated characters, we conclude that the string is an isogram and return true.

// Example usage:

console.log(isIsogram("hello")); // Output: false
console.log(isIsogram("world")); // Output: true

// In this example, we use the isIsogram function to check if the strings "hello" and "world" are isograms. The function returns false for "hello" because it contains two "l" characters, while "world" is an isogram and the function returns true.

//13. Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

function frequencySort(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      map.set(num, (map.get(num) || 0) + 1);
    }
    
    return nums.sort((a, b) => {
      const freqA = map.get(a);
      const freqB = map.get(b);
      if (freqA === freqB) {
        return b - a;
      }
      return freqA - freqB;
    });
  }

  
//   In this approach, we first create a hash map to store the frequency of each value in the nums array. We iterate through each value in the array, and for each value, we increment the frequency count in the hash map.

//   Next, we sort the nums array based on the frequency of the values. We use the sort method of the array, with a comparator function that compares the frequency of the values. If two values have the same frequency, we sort them in decreasing order. If two values have different frequencies, we sort them in increasing order of frequency.
  
//   Finally, we return the sorted nums array.
  
//   Example usage:

console.log(frequencySort([1,1,2,2,2,3])); // Output: [3,1,1,2,2,2]
console.log(frequencySort([2,3,1,3,2])); // Output: [1,2,2,3,3]

//In these examples, we use the frequencySort function to sort two arrays of integers based on their frequency. The first example returns the array [3,1,1,2,2,2] because the value 3 has the lowest frequency of 1, while the values 1 and 2 have a frequency of 2, so they are sorted in decreasing order. The second example returns the array [1,2,2,3,3] because all values have the same frequency of 2, so they are sorted in decreasing order.

//14. Given an array with repeated elements, the task is to find the maximum distance between two occurrences of an element solution in javascript using hashmap

function maxDistance(arr) {
    const map = new Map();
    let maxDist = 0;
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      if (map.has(elem)) {
        const dist = i - map.get(elem);
        if (dist > maxDist) {
          maxDist = dist;
        }
      } else {
        map.set(elem, i);
      }
    }
    return maxDist;
  }

//In this approach, we create a hash map to keep track of the last index of each element in the array. We also keep track of the maximum distance seen so far.

// We iterate through each element in the array, and for each element, we check if it is already present in the hash map. If it is, we calculate the distance between the current index and the last index of the element in the hash map. If this distance is greater than the current maximum distance, we update the maximum distance.

// If the element is not present in the hash map, we add it to the hash map with its index as the value.

// Finally, we return the maximum distance that we have calculated.

// Example usage:

console.log(maxDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5])); // Output: 10
console.log(maxDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])); // Output: 9

//In these examples, we use the maxDistance function to find the maximum distance between two occurrences of an element in an array. The first example returns 10 because the element 5 appears twice, and the distance between the first and last occurrence is 10. The second example returns 9 because the element 1 appears twice, and the distance between the first and last occurrence is 9.

//leetcode 217. Contains Duplicate using hashmap in javascript

function containsDuplicate(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (map.has(num)) {
        return true;
      } else {
        map.set(num, true);
      }
    }
    return false;
  }

//   In this approach, we create a hash map to keep track of the elements we have seen so far in the input array nums. We iterate through each element in the array, and for each element, we check if it is already present in the hash map. If it is, we have found a duplicate element, and we can return true. If the element is not present in the hash map, we add it to the hash map with a value of true.

// If we iterate through the entire array without finding any duplicates, we can return false.

// Example usage:

console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

//In these examples, we use the containsDuplicate function to check if an array contains any duplicate elements. The first example returns true because the array contains the duplicate element 1. The second example returns false because the array does not contain any duplicate elements. The third example returns true because the array contains multiple instances of the elements 1, 3, and 4.

//leetcode 219. Contains Duplicate II solution in javascript using hashmap

function containsNearbyDuplicate(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (map.has(num) && i - map.get(num) <= k) {
        return true;
      } else {
        map.set(num, i);
      }
    }
    return false;
  }

//   In this approach, we create a hash map to keep track of the last index at which each element in the input array nums was seen. We iterate through each element in the array, and for each element, we check if it is already present in the hash map. If it is, we calculate the distance between the current index and the last index at which the element was seen. If this distance is less than or equal to k, we have found a pair of duplicate elements whose indices are at most k apart, and we can return true. If the distance is greater than k, we update the hash map with the current index.

// If we iterate through the entire array without finding any pairs of duplicate elements whose indices are at most k apart, we can return false.

// Example usage:

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false

//In these examples, we use the containsNearbyDuplicate function to check if an array contains any duplicate elements whose indices are at most k apart. The first example returns true because the array contains the pair of duplicate elements 1 whose indices are 3 apart. The second example returns true because the array contains the pair of duplicate elements 1 whose indices are 1 apart. The third example returns false because although the array contains duplicate elements, the minimum distance between any pair of duplicates is 3, which is greater than k=2.

//leetcode 49. Group Anagrams solution ion javascript using hashmap

function groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
      const key = str.split('').sort().join('');
      if (map.has(key)) {
        map.get(key).push(str);
      } else {
        map.set(key, [str]);
      }
    }
    return Array.from(map.values());
  }

//In this approach, we create a hash map to group the input strings by anagrams. We iterate through each string in the input array strs, and for each string, we sort its characters and use the sorted string as the key in the hash map. We then add the original string to the array of strings associated with that key in the hash map.

// At the end of the iteration, we return the array of arrays of strings associated with the values in the hash map.

// Example usage:

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// In this example, we use the groupAnagrams function to group anagrams in an input array of strings. The output is an array of arrays, where each inner array contains a group of strings that are anagrams of each other. In this case, there are three groups of anagrams: ["eat","tea","ate"], ["tan","nat"], and ["bat"].

//leetcode 1. Two Sum using hashmap in javascript

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
  }

//In this approach, we create a hash map to store the input array nums as we iterate through it. For each element in the array, we calculate the complement (i.e., the difference between the target and the current element), and check if it exists in the hash map. If it does, we return the indices of the two elements that add up to the target. If it doesn't, we add the current element and its index to the hash map and continue iterating through the array.

//Example usage:

console.log(twoSum([2, 7, 11, 15], 9));
// Output: [0, 1]

//In this example, we use the twoSum function to find the indices of two elements in an input array that add up to a target value. The output is an array of two indices that correspond to the two elements that add up to the target. In this case, the output is [0, 1], which means that the first and second elements in the input array (2 and 7) add up to the target value of 9.




