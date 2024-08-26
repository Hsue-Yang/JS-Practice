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
fib(3);
// for (let i = 0; i < 10; i++) {
//   console.log(fib(i));
// }

//7. Write a function called "reverse" that takes a string as input, and returns the reverse string.
