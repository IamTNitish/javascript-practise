//Union Types
//It tells TypeScript that the variable can be one of several types.
//Example: A variable can be either a string or a number.
// function combine(input1: number, input2: number) {
//   const result = input1 + input2;
//   return result;
// }
function combine(input1, input2, resultConversion) {
    //added Literal Type
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        // If both inputs are numbers or resultConversion is 'as-number'
        // we perform addition and return a number
        return +input1 + +input2; // returns a number and uses the unary plus operator to convert inputs to numbers.
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        // return input1.toString() + input2.toString(); // returns a string by explicitly converting both inputs to strings
        var result = input1.toString() + input2.toString();
        return +result;
        console.log(result); // Here, we can also use the unary plus operator to convert the concatenated string back to a number if needed.
    }
    else if (resultConversion === "as-text") {
        // If inputs are not both numbers and resultConversion is 'as-text'
        // we perform concatenation and return a string
        return input1.toString() + input2.toString(); // returns a string by converting both inputs to strings
    }
    else {
        throw new Error("Invalid input types. Both inputs must be either numbers or strings.");
    }
}
var combinedResult = combine("5", "6", "as-number"); // Here, we can pass a number and a string, and specify the resultConversion as 'as-number'
// This will add the number and the string (after converting the string to a number)
console.log(combinedResult);
var combinedResultString = combine("3", "10", "as-text"); // Here, we can pass two strings and specify the resultConversion as 'as-text'
console.log(combinedResultString);
//const combinedResultString = combine("5", "10"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
