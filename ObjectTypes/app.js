//Union Types
//It tells TypeScript that the variable can be one of several types.
//Example: A variable can be either a string or a number.
// function combine(input1: number, input2: number) {
//   const result = input1 + input2;
//   return result;
// }
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2; // returns a number
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.toString() + input2.toString(); // returns a string by explicitly converting both inputs to strings
    }
    else {
        console.log("Invalid input types. Both inputs must be either numbers or strings.");
    }
}
var combinedResult = combine(5, "Max");
console.log(combinedResult);
//const combinedResultString = combine("5", "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
