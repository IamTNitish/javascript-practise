// const person: {
//   Name: String;
//   age: number;   //explicitly assigning types. Not a good practice
// } = {
//   age: 30,
//   Name: "Nitish",
// };
const person: {
  name: String;
  age: number;
  hobbies: string[];
  role: readonly [number, string]; //Tuples while in readonly - pushing is not allowed
  // role: [number, string]; //Tuples while not in readonly - pushing is allowed
  // role: [number, string, ...string[]]; //Tuples with rest elements
} = {
  name: "Nitish",
  age: 30,
  hobbies: ["Sports", "Cooking"], //Array Type
  role: [2, "author"],
};
//person.role.push("admin"); //This will not give an error at runtime, but it breaks the tuple's intended structure
// console.log(person.role); // Output: [2, "author", "admin"]
console.log(person);
person.role = [1, "natural"]; //Here we can change the whole tuple as we want. So we can use Tuple.
//person.role[0] = 10; //Here we can change the elements inside the role array as we want. So we can use Tuple.

//let Array1: String[];
let Array1: any[];
Array1 = ["Sports", "Name", 5];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
