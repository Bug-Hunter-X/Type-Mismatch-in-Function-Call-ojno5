function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: both arguments are numbers.
console.log(result); // Output: 3

//Alternative Solution (using type guards or unions)
function add2(a: number, b: number | string): number | string {
  if (typeof b === 'string') {
    return a.toString() + b; 
  } else {
    return a + b;
  }
}

let result2 = add2(1, '2'); //Correct
console.log(result2); //Output: "12"
let result3 = add2(1,2) //Correct
console.log(result3); //Output: 3