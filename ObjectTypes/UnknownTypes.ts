let Input: unknown;
let Input2: String;

Input = 5;
Input = "Hello";
Input = true;
Input = { name: "John" };
Input = [1, 2, 3];
//Input2 = Input; // This will cause an error because Input is of type unknown. If I use any, it would work.
//to avoid this arror, we can use if statement to check the type of Input
if (typeof Input === "string") {
  Input2 = Input; // Now this is safe because we checked the type
}

//Never Type
function errorThrower(message, code) {
  throw { message: message, code: code };
}
errorThrower("This is an error", 500);
// This function will never return a value, it will always throw an error.
const result = errorThrower("This is an error", 500);
console.log(result); // This will not be reached because the function throws an error
// The type of result is inferred as never, meaning it will never have a value.
