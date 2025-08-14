// const AdMIN = 0;
// const READ_ONLY = 1;
// const author = 2;
//Here numbers can be changed to any other value, so we can use enums instead.
var Role;
(function (Role) {
    Role[Role["AdMIN"] = 0] = "AdMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); //by default, enums start from 0 and increment by 1 for each member
var person1 = {
    name: "Nitish",
    age: 30,
    hobbies: ["Sports", "Cooking"], //Array Type
    role: Role.AUTHOR, //Using enums for role
};
console.log("the person have role of", person1.role);
if (person1.role === Role.AUTHOR) {
    console.log("is author");
}
