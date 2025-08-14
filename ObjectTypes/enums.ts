// const AdMIN = 0;
// const READ_ONLY = 1;
// const author = 2;
//Here numbers can be changed to any other value, so we can use enums instead.
enum Role {
  AdMIN,
  READ_ONLY,
  AUTHOR,
} //by default, enums start from 0 and increment by 1 for each member
//If we do not want to assign numbers automatically, we can assign them manually like this:
// enum Role {
//   AdMIN = 5,
//   READ_ONLY = 10,
//   AUTHOR = 15,
// } //Here we can assign any number we want, and it will not increment automatically

const person1 = {
  name: "Nitish",
  age: 30,
  hobbies: ["Sports", "Cooking"], //Array Type
  role: Role.AUTHOR, //Using enums for role
};

console.log("the person have role of", person1.role);
if (person1.role === Role.AUTHOR) {
  console.log("is author");
}
