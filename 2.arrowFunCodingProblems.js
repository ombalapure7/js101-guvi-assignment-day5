/* 1. Print odd numbers in an array */
const oddNumbers = (arr) => {
  return oddNums = arr.filter((num) => num % 2 !== 0);
};

console.log(oddNumbers([10, 1, 3, 199, 2, 4, 31, 77]));

/* 2. Convert all strings to CAPS */
const capsStr = (strs) => {
  return strs.map((str) => str.toUpperCase());
}

console.log(capsStr(["hari", "om", "satyam", "shivam"]));

/* 3. Sum of all numbers in an array */
const sumArr = (arr) => {
  return arr.reduce((num, accumlator) => accumlator + num, 0);
}

console.log(sumArr([10, 1, 3, 199, 2, 4, 31, 77]));

/* 4. Return prime numbers in an array */
const primeNums = (nums) => {
  const res = [];
  let isPrime = false;

  for (num of nums) {
    if (num === 2) {
      res.push(2);
    }

    if (num === 3) {
      res.push(3);
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }

    if (isPrime) {
      res.push(num);
    }
  }

  return res;
}

console.log(primeNums([10, 2, 3, 110, 5, 7, 19, 200]));

/* 5. Palindromes in an array */
const palindromeStrs = (strs) => {
  const res = [];
  let isPalindrome = false;

  for (let str of strs) {
    let si = 0,
      ei = str.length - 1;
    while (si < ei) {
      if (str.charAt(si) === str.charAt(ei)) {
        si++;
        ei--;
        isPalindrome = true;
      } else {
        isPalindrome = false;
        break;
      }
    }

    if (isPalindrome) {
      res.push(str);
    }
  }

  return res;
}

console.log(palindromeStrs(["madam", "laptop", "hello", "kayak", "drown", "abccba"]))