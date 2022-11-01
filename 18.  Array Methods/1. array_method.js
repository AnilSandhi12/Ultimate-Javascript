console.log(
  "------------------------- Array Methods in Javascript -------------------------"
);

//Array Methods Help us to the Value of Array or Push The Elements in Array and Array values ko Bahr Nikal Skte Hain
// and We can Chack how many Element in our Array  ,Etc. :)

let num = [29, 34, 65, 76, 87, 48, 78];

console.log(num);
console.log(num[3]);

// convert into String :
let b = num.toString();
console.log(b, typeof b);

// Join Method : Join All the Array Elements Using Seperator.
let c = num.join("_");
console.log(c, typeof c);

// Pop Metohd : Delete The Last Element of an Array.
let r = num.pop();
console.log(num, r); // 78 Removed.  r return the Poped Element i.e 78.

// Push Method : Modify The Origional Array and Return The New Array Length.
let p = num.push(56);
console.log(num); // 56 is Added At Last in Existing Array.

// Shift Method : Remove First Element and Return;
let s = num.shift();
console.log(num);

// Unshift Method : Add Element At First and Return.
let u = num.unshift(40);
console.log(u, num);

// Delete Operator :
let arr = [34, 56, 76, 87, 98, 87];
delete arr[0];
console.log(arr, arr.length); // Array Length will Not be Changed.

// Concat Method : Used to Join Array to The Given Array.
let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];
let a3 = [11, 9, 12, 10];

let newArray = a1.concat(a2, a3);
console.log(a1); // Origional array is Not Changed
console.log(newArray);

// Sort Method :
a3.sort(); // Remember, it Modifies Our Origional Array.
console.log(a3); // Sort Alphabatically.
                      
// Ascending Order
let compareab = (a, b) => {
  return a - b;
};
a3.sort(compareab);
console.log(a3);

// Ascending Order
let compareba = (a, b) => {
  return b-a;
};
a3.sort(compareba);
console.log(a3);

//Reverse Method :
a3.reverse();
console.log(a3);

// Splice and Slice:
// Splice can Be Used to Add Neww item to An Array.
//  Slice out of Pieces from an Array it Create a New Array.

let spliceArr = [12,34,65,87,92,43];
let deletedArr=spliceArr.splice(2,3,21,22,23);
console.log(spliceArr);
console.log(deletedArr);


let sliceArr = [82,44,95,77,22,53];
let sliceArray=sliceArr.slice(2);
console.log(sliceArray );
let sliceArr25=sliceArr.slice(2,5);
console.log(sliceArr25);//5 is Not Included;