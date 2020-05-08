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

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 1,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Kamil",
  age: 29,
  hobbies: ["gardening", "cycling"],
  role: Role.ADMIN,
};

// person.role.push('admin') to zadziała, push jest wyjątkiem ale musimy pushować dobry typ
// person.role[1] = 444

console.log(person.name);

let favouriteActivities: any[];
favouriteActivities = ["cooking", 1];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) błąd - bo map nie działa na string'ach
}

person.role === Role.ADMIN && console.log("is admin");
