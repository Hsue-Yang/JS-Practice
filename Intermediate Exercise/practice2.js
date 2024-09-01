//1. Write a function called "factorPrime" that takes an integer as input
//   , and returns the prime factorization of the input.
//   example: factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"
function factorPrime(n) {
  let result = n + " = ";
  let p = 2;
  while (p <= n) {
    if (n % p == 0) {
      result += p + " x ";
      n /= p;
    } else {
      p++;
    }
  }
  result = result.substring(0, result.length - 3);
  console.log(result);
}
// factorPrime(120);

//----------------------------------------------------------------------------------------------
//2. Write a function called "intersection" that takes 2 arrays
//   , and returns an array of elements that are in the intersection of 2 arrays.
function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = 0; j < arr2.length - 1; j++) {
      if (arr1[i] == arr2[j]) {
        let okay = true; //排除差集重複
        for (let k = 0; k < result.length; k++) {
          if (arr1[i] == result[k]) {
            okay = false;
          }
        }
        if (okay) {
          result.push(arr1[i]);
        }
      }
    }
  }
  console.log(result);
  return result;
}
// intersection(
//   [1, 3, 4, 6, 8, 8, 1, 2, 5, 10],
//   [5, 11, 13, 8, 8, 9, 4, 3, 100, 144, 0]
// );

//----------------------------------------------------------------------------------------------
//3. Write a function called "flatten" that flattens an array.
//   將陣列攤平
function flatten(arr) {
  let result = [];
  helper(arr);

  function helper(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        helper(arr1[i]);
      } else {
        result.push(arr1[i]);
      }
    }
  }
  console.log(result);
}

flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]);
