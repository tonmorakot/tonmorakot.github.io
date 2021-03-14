let x = "morakot";
let y = [
  [11, 22, 33],
  [33, 44, 55],
];
let z = [
  {
    name: "Morakot",
    lastname: "Thongprom",
    age: 3,
  },
  {
    name: "Anothai",
    lastname: "dddddddd",
    age: 30,
  },
];

for (const i in z) {
  console.log(z[i].name + " " + z[i].lastname)
//   for (const j in z[i]) {
//     console.log();
//   }
}

// for (const i in y) {
//     for (const j in y[i]) {
//         console.log(y[i][j])
//     }
// }

// for (const key in z) {
//   console.log(z[key].name);
//   console.log(z[key].lastname);
//   console.log(z[key].age)
// }

// for (const data of y) {
//   console.log(data);
// }
