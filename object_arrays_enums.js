"use strict";
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string] //tuple!
// } = {
//   name: "Kamil",
//   age: 29,
//   hobbies: ['gardening', 'cycling'],
//   role: [2, 'author']
// }
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Kamil",
    age: 29,
    hobbies: ["gardening", "cycling"],
    role: Role.ADMIN,
};
// person.role.push('admin') to zadziała, push jest wyjątkiem ale musimy pushować dobry typ
// person.role[1] = 444
console.log(person.name);
var favouriteActivities;
favouriteActivities = ["cooking", 1];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) błąd - bo map nie działa na string'ach
}
person.role === Role.ADMIN && console.log("is admin");
