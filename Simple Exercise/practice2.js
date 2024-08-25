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
function table9to9() {}
