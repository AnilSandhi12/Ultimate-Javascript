console.log("----------------  Array Using Loop  -------------------------");

let Arr = [12, 2, 4, 56, 77, 89, 23];
console.log("-------- Printing Array's Values --------------");
console.log(Arr);

//Print Value of An Array Using For Loop :
console.log("-------- Printing Array's Values Using For Loop --------------");
for (let i = 0; i < Arr.length; i++) {
  console.log(Arr[i]);
}

//Print arr[i]*Arr[i] :- Use forEach Loop
console.log(
  "-------- Printing Array's Values Using forEach Loop --------------"
);
Arr.forEach((element) => {
  console.log(element * element);
});

// Array From : Used To Create an Array From Any Other Object.
console.log("-------- Printing Create object Using Object --------------");
let name = "Anil";
let arr = Array.from(name);
console.log(arr);

// For Of Loop :
console.log(
  "-------- Printing Array's Values Using For Of Loop(Perfect Way or Very Useful Way) --------------"
);
for (let item of Arr) {
  console.log(item);
}
// For In Loop
console.log(
  "-------- Printing Array's Values Using For In Loop --------------"
);
for (let i in Arr) {
  console.log(Arr[i]);
}
