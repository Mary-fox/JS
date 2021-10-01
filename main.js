//document.write ("<h1>Hello from JS</h1>");
//let num = 0;
//let age = prompt("Сколько вам лет?")
//while (true) {
//   if (age > 0 && age < 100) {
//      break;
 //  }
  // age = prompt("Некорректный вод. Сколько вам лет?")
// }
//for (let i = 0; i < 10; i++) {
// document.write(`<h4>${i}</h4>`);
//}
// const person = {
//   firstName: "Mikhail",
//   lastName: "Nepomnyashchiy",
//   age:35,
//   city: "Moscow"
// };
// person.age=36;
// console.log(person.age);

//console.log(person.firstName);

//for (let key in person) {
//  console.log(key, person[key]);
//}

// const nums = [1, 2, 3, 4];
// //console.log(nums[0]);
// // nums.push(5)
//  console.log(nums);
//  console.log(nums.length);

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum (1, 6);
// sum (8, 22);

// const sum = (a, b) => a + b;
// const c = sum(8, 6);
// console.log(c);
// console.log(sum(4, 10));

const age = prompt("Сколько Вам лет?");
function isOldEnough(age) {
  if (age >= 18) {
    return true
  }
  return false;
}

const message = isOldEnough(age) ? "Welcome" : "Bye";
alert(message);