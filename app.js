function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

let x = "morakot";
let y = [[11, 22, 33], [33, 44, 55]];
let z = [
  {
    time: "19/03/21",
    name: "Morakot",
    lastname: "Thongprom",
    age: 3,
  },
  {
    time: "11/04/2020",
    name: "Anothai",
    lastname: "dddddddd",
    age: 30,
  },
  {
    time: "11/02/2021",
    name: "Anothai",
    lastname: "dddddddd",
    age: 30,
  },
  {
    time: "11/03/21",
    name: "Anothai",
    lastname: "dddddddd",
    age: 30,
  },
];

let DD = z[3].time.substring(0, 2);
let MM = z[3].time.substring(5, 3);
let YY = parseInt(z[3].time.substring(z[3].time.length - 2, z[3].time.length));

console.log(DD);
console.log(MM);
console.log(YY);

//console.log(z.sort(dynamicSort("-time")));
//for (const i in z) {
//console.log(z[i].name + " " + z[i].lastname)
//   for (const j in z[i]) {
//     console.log();
//   }
//}

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
