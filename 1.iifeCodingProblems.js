/* 1. Print odd numbers in an array */
(function () {
  const arr = [10, 1, 3, 199, 2, 4, 31, 77];

  const oddNums = arr.filter((num) => num % 2 !== 0);
  console.log(oddNums);
})();

/* 2. Convert all strings to CAPS */
(function () {
  const strs = ["hari", "om", "satyam", "shivam"];
  const capsStr = strs.map((str) => {
    return str.toUpperCase();
  });

  console.log(capsStr);
})();

/* 3. Sum of all numbers in an array */
(function () {
  const arr = [10, 1, 3, 199, 2, 4, 31, 77];
  const sum = arr.reduce((num, accumlator) => {
    return accumlator + num;
  }, 0);

  console.log("Sum of all numbers: ", sum);
})();

/* 4. Return all prime numbers */
(function () {
  const nums = [10, 2, 3, 110, 5, 7, 19, 200];
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

  console.log("Prime numbers: ", res);
})();

/* 5. Palindromes in an array */
(function () {
  const strs = ["madam", "laptop", "hello", "kayak", "drown", "abccba"];
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

  console.log("All palindrome strings", res);
})();

/* 6. Return median of 2 sorted arrays */
(function () {
  let arr1 = [1, 12, 15, 26, 38];
  let arr2 = [2, 13, 17, 30, 45];

  let i = 0, j = 0, k;
  let n1 = -1, n2 = -1;
  let n = arr1.length;

  for (k = 0; k <= n; k++) {
    if (i == n) {
      n1 = n2;
      n2 = arr2[0];
      break;
    } else if (j == n) {
      n1 = n2;
      n2 = ar1[0];
      break;
    }
    
    if (arr1[i] <= arr2[j]) {
      n1 = n2;
      n2 = arr1[i];
      i++;
    } else {
      n1 = n2;
      n2 = arr2[j];
      j++;
    }
  }

  console.log("Median of the 2 arrays:", (n1 + n2) / 2);
})();

/* 7. Remove duplicates from an array */
(function () {
  const arr = [10, 20, 20, 30, 30, 30];
  let n = arr.length;
  let counter = 1;
  const res = [];

  for (let i=1; i<n; i++) {
    if (arr[i] != arr[counter - 1]) {
      arr[counter] = arr[i];
      counter++;
    }
  }

  for (let i=0; i<counter; i++) {
    res.push(arr[i]);
  }

  console.log("Array w/o duplicates:", res);
})();

/* Rotate array k times */
(function() {
  const arr = [1,2,3,4,5];
  let k = 3;
  let n = arr.length;

  while (k > 0) {
    let temp = arr[0];
    for (let i=1; i<n; i++) {
      arr[i-1] = arr[i];
    }
    arr[n-1] = temp;
    k--;
  }

  console.log("Rotated array:", arr)
})();