//-------------------- Array in Javascript --------------------------------------- :)
console.log("---------------------- ARRAY --------------------");
let studentMarks = [82, 93, 84, 74, 94, 67, null, "Not Present"];

// Print Length of an Array:
console.log("Length of an Array is : ", studentMarks.length);

//  We can Access The Value of An Array By Using Array's Index :
console.log("Marks of Student 1 : ", studentMarks[0]);
console.log("Marks of Student 2 : ", studentMarks[1]);
console.log("Marks of Student 3 : ", studentMarks[2]);
console.log("Marks of Student 4 : ", studentMarks[3]);
console.log("Marks of Student 5 : ", studentMarks[4]);
console.log("Marks of Student 6 : ", studentMarks[5]);
console.log("Marks of Student 7 : ", studentMarks[6]);
console.log("Marks of Student 8 : ", studentMarks[7]);
// console.log("Marks of Student 8 : " , studentMarks[8]);// undefined b/c index doesn't Exist.

//  We can Print All The Value of An Array Using Variable of an Array.
console.log("Marks of Student 1", studentMarks);

//  We can Print All The Value of An Array Using Variable of an Array.
for (i = 0; i < studentMarks.length; i++) {
    console.log("Marks of Student ", i + 1, " is : ", studentMarks[i]);
}

studentMarks[8] = 97;  // We can Add the Value in Array.
studentMarks[3] = 45.97; // We can The Value of an Array using Index Value.

console.log(studentMarks);  

// What is type of an Array :
console.log(typeof(studentMarks)); //  Array's Type is Object Always.