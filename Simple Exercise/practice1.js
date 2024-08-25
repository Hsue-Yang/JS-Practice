//1. Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.
function printMany() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

//2. Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.
function printEvery3() {
  //   for (let i = 1; i <= 88; i += 3) {
  //     console.log(i);
  //   }
  let i = 1;
  while (i <= 88) {
    console.log(i);
    i += 3;
  }
}

//3. Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
function stars(int) {
  let result = "";
  for (let i = 1; i <= int; i++) {
    result += "*";
  }
  console.log(result);
}

//4. Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.
function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }
  //   if (str[0] == str[0].toUpperCase()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return str[0] == str[0].toUpperCase();
}

//5. Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }
  let allUpperCase = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      allUpperCase = false;
    }
  }
  return allUpperCase;
}

//6. Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.
function position(str) {
  if (str.length == 0) {
    return -1;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return str[i] + " " + i;
    }
  }
  return -1;
}

//7. Write a function called "findSmallCount" that takes one array of integers and one integer as input
//   , and returns an integer indicating how many elements in the array is smaller than the input integer.
function findSmallCount(arr, int) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (int > arr[i]) {
      counter += 1;
    }
  }
  return counter;
}

//8. Write a function called "findSmallerTotal" that takes one array of integers and one integer as input
//   , and returns the sum of all elements in the array that are smaller than the input integer.
function findSmallerTotal(arr, int) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < int) {
      sum += arr[i];
    }
  }
  return sum;
}

//9. Write a function called "findAllSmall" that takes one array of integers and another integer as input
//   , and returns an array of integers that contains all elements that are smaller than the input integer.
function findAllSmall(arr, int) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < int) {
      result.push(arr[i]);
    }
  }
  return result;
}

//10. Write a function called "sum" that takes one array of numbers, and return the sum of all elements in the input array.
function sum(arr) {
  let sum = 0;
  for (let z = 0; z < arr.length; z++) {
    sum += arr[z];
  }
  return sum;
}
