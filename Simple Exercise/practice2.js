//1. Write a function called "stars" which prints out layers of stars in the following pattern:
function stars(int) {
  for (let i = 1; i <= int; i++) {
    let line = "";
    for (let k = 0; k < i; k++) {
      line += "*";
    }
    console.log(line);
  }
}

//2. Write a function called "makeStars" which prints out stars in the following pattern:
function makeStars(int) {
  let line = "*";
  for (let i = 2; i <= int; i++) {
    let s = "\n";
    for (let k = 0; k < i; k++) {
      s += "*";
    }
    line += s;
  }
  console.log(line);
}

//3. Write a function called "stars2" which prints out layers of stars in the following pattern:
function stars2(int) {
  for (let i = 1; i <= int; i++) {
    let line = "";
    for (let k = 0; k < i; k++) {
      line += "*";
    }
    console.log(line);
  }
  for (let j = int - 1; j > 0; j--) {
    let line = "";
    for (let z = 0; z < j; z++) {
      line += "*";
    }
    console.log(line);
  }
}

//4. Write a function called "table" which takes an input n, and prints out n x 1 to n x 9
function table(int) {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += int + "x" + i + "=" + int * i;
    result += "\n";
  }
  console.log(result);
}

//5. Write a function called "table9to9" that prints out the multiplication table:
function table9to9() {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    for (let k = 1; k <= 9; k++) {
      result += i + "x" + k + "=" + k * i;
      result += "\n";
    }
  }
  console.log(result);
}

//6. 1. Write a function called "fib" that takes an integer $n$ as input
//   , and returns the $n$th element of the Fibonacci Sequence.
//   If you never hear about Fibonacci Sequence, read about it from:
function fib(n) {
  // if (n == 0) {
  //   return 0;
  // } else if (n == 1) {
  //   return 1;
  // } else {
  //   return fib(n - 1) + fib(n - 2);
  // }
  // ----上式時間複雜度太高----
  let arr = [0, 1];
  let i = 0;
  while (arr.length <= n) {
    arr.push(arr[i] + arr[i + 1]); //每push一次array就加一項
    i++;
  }
  console.log(arr);
  console.log(arr[n]);
}
// for (let i = 0; i < 10; i++) {
//   console.log(fib(i));
// }

//7. Write a function called "reverse" that takes a string as input, and returns the reverse string.
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  console.log(result);
}

//8. Write a function called "swap" that takes a string as input
//   , and returns a new string with lowercase changed to uppercase, uppercase changed to lowercase.
function swap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  console.log(result);
}

//9. Write a function called "findMin" which takes an array as input
//   , and returns the minimum element in the input array.
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
}

//10. Write a function called "findNthMin", which takes an array of integers and another integer n
//    , and returns the nth smallest number in the given array.
//  利用i,j遍歷array，設i為底數、j往後跑者，當arr[i]<arr[j]時，counter++去確認arr[i]比全部的數字是第幾小
function findNthMin(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        counter++; //如counter=2時，有兩個數比它小代表它是第三小
      }
      if (counter == n - 1) {
        return arr[i];
      }
    }
  }
}
console.log(findNthMin([1, 3, 5, 7, 9], 3));
