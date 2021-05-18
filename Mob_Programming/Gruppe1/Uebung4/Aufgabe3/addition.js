function add(a, b) {
  return a + b;
}

// console.log(add(5,2));

function concatTwoString(firstString, secondString) {
  // return firstString + ' ' + secondString;
  return `${firstString} ${secondString}`;
}

// console.log(concatTwoString('hello', 'world'));

function summe(n) {
  let sum = n;

  if (n >= 0) {
    if (n == 0) {
      return 0;
    }

    sum = sum + summe(n - 1);
    return sum;
  }
  return `keine gültige Eingabe`;
}

// console.log(summe(5));

// 5 * 4 * 3 * 2 * 1
function fakIter(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(fakIter(5));

function recursiveFac(n) {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    return "Keine gültige Eingabe";
  }
  return n * recursiveFac(n - 1);
}

console.log(recursiveFac(5));

function fakRec(n) {
  return n > 1 ? n * fakRec(n - 1) : 1;
}

console.log(fakRec(5));