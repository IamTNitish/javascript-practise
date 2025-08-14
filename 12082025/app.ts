console.log("Start Data Types");
function add(num, n1: number, n2: number) {
  console.log(typeof n1);
  // if (typeof n1 !== "number") {
  //   throw new Error("Incorrect Input. Number n1 is not a Number");
  // }
  const result = n1 + n2 + num;
  if (addResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}
let num: number;
num = 3;
const num1 = 5;
const num2 = 8.3;
const addResult = true;
const phrase = "Result is: ";
add(num, num1, num2);
