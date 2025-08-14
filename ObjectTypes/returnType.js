function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
var result = printResult(add(5, 10));
console.log(result); // The result is printed to the console, and the function returns the number.
//let combinedValues: Function;
var combinedValues;
// combinedValues is a function type that takes two numbers and returns a number.
//combinedValues = 5; // Now combinedValues is of type number. Therefore, it will throw an error if we try to assign funtion to it.
combinedValues = add; // combinedValues is assigned the function add. Function types can be assigned to variables.
console.log(combinedValues(8, 8)); // We can call the function using combined
//combinedValues = printResult;//It should throw an error because printResult does not return a value. It is void. SO we use arrows.
//callback function
function addAndHandle(n1, n2, cllbk) {
    var result = n1 + n2;
    cllbk(result); // cllbk is a callback function that takes a number as an argument and returns void.
}
addAndHandle(100, 200, function (result) {
    console.log(result);
});
// This code defines a function that can combine two inputs of type number or string, and return the result based on a specified conversion type.
