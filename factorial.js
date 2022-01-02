// factorial using recursion

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

// factorial using for loop

function fact(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(fact(5));
