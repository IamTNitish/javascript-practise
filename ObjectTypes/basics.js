// const person: {
//   Name: String;
//   age: number;   //explicitly assigning types. Not a good practice
// } = {
//   age: 30,
//   Name: "Nitish",
// };
var person = {
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
var Array1;
Array1 = ["Sports", "Name", 5];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
