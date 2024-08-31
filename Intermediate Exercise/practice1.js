//1. Write a function called "mySort" that takes an array of integers as input
//   , and returns the sorted version of the input array.
function mySort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}
// console.time("myFunction");
// console.log(mySort([17, 0, -3, 2, 1, 0.5]));
// console.timeEnd("myFunction");

//----------------------------------------------------------------------------------------------
//2. Write a function called "isPrime" that takes an integer as input
//   , and returns a boolean value that indicates if the input number is prime.
function isPrime(n) {
  if (n == 1) {
    return false;
  }
  let starter = 2;
  while (starter < n) {
    if (n % starter == 0) {
      return false;
    }
    starter++;
  }
  return true;
}
// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(91));
// console.log(isPrime(1000000));

//----------------------------------------------------------------------------------------------
//3. Write a function called "confirmEnding" that takes 2 strings as input
//   , and returns a boolean value that indicates if the first input ends with the second input.
function confirmEnding(str1, str2) {
  let k = str1.length - 1;
  for (let i = str2.length - 1; i >= 0; i--) {
    if (str2[i] != str1[k]) {
      return false;
    } else {
      k--;
    }
  }
  return true;
}
// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Open sesame", "same"));

//----------------------------------------------------------------------------------------------
//4. Write a function called "findDuplicate" that an array of integers as inputs
//   , and check if there's any duplicate values in the array.
function findDuplicate(arr) {
  if (arr.length <= 1) {
    console.log(false);
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
}
// findDuplicate([1, 3, 5, 7, 9, 3]);
// findDuplicate([]);
// findDuplicate([3, 4, 5, 6, 7, 10000, 0]);

//5. Write a function called "palindrome" that checks if the input string is a palindrome.
//   (Search on google if you don't know what a palindrome is.)
function palindrome(str) {
  let starter = str.length - 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] != str[starter]) {
      console.log(false);
      return false;
    }
    starter--;
  }
  console.log(true);
  return true;
}
// palindrome("bearaeb"); // true
// palindrome("Whatever revetahW"); // true
// palindrome("Aloha, how are you today?"); // false

//----------------------------------------------------------------------------------------------
//6. Write a function called "pyramid" that takes an integer as input
//   , and prints a pyramid in the following pattern:
//   n presented n layer, and each layer
// function pyramid(n) {
//   let result = "";
//   if (n == 1) {
//     result += "*";
//     console.log(result);
//     return result;
//   }
//   for (let i = 1; i <= n; i++) {
//     for (let j = n; j > i; j--) {
//       result += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       //let i to odd num, be 1,3,5...
//       result += "*";
//     }
//     result += "\n";
//   }
//   console.log(result);
//   return result;
// }

function drawRow(space, star) {
  let result = "";
  for (let i = 0; i < space; i++) {
    result += " ";
  }
  for (let j = 0; j < star; j++) {
    result += "*";
  }
  console.log(result);
}
// drawRow(0, 7);
// drawRow(1, 5);
// drawRow(2, 3);
//find pattern -> n layer, n-1 space, += 2 star
function pyramid(n) {
  let i = n - 1; //space
  let j = 1;
  for (let k = 1; k <= n; k++) {
    drawRow(i, j);
    i--;
    j += 2;
  }
}
// pyramid(8)

//----------------------------------------------------------------------------------------------
//7. Write a function called "inversePyramid" that draws pyramid upside down.
function inversePyramid(n) {
  let i = 0;
  let j = 2 * n - 1;
  for (let k = 1; k <= n; k++) {
    drawRow(i, j);
    i++;
    j -= 2;
  }
}
// inversePyramid(8);
