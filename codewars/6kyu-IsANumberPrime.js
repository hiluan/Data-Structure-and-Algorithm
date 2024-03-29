// Define a function that takes one integer argument and console.log(s) logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

// function isPrime(num) {
//   let arr = [];
//   if (num > 1) {
//     for (let i = 2; i < Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         arr.push(i);
//       }
//     }
//     if (arr.length > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
//   // console.log(arr);
// }

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  //  no need because sqrt(2) = 1.4xx % 2 !== 0 already
  //   if (num === 2 || num === 3) {
  //     return true;
  //   }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// another solution:
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
