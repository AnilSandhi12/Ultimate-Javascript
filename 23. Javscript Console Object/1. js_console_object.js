console.log("************* Javscript Console Object *******************");
/*
Console.log
Console.error
Console.warning
Console.time
Console.timeEnd

 */
//  Log
console.log("Name : Yatin");

//  Error
console.error("Hey,This is an Error");

//  Assert
// Simple Meaning of Assert : Agr Condion true Hogi Toh No Error Agr False Hai To Assertion Failed.
console.assert(5>54);//It is used to Assert a Condition.(Assertion Failed)
console.assert(29<30);// No Assertion Failed

// Console.clear
console.clear();// All Console Messages Cleared :)

//  Console.table : Vary useful
obj = {
    a:1,
    b:2,
    c:3,
    d:4
}
console.table(obj);

// console.warn
console.warn("This is Warning.");

// Console.info
console.info("This is An Important information");// Similar to Log.

// console.time
console.time("a");// a is the Label
console.timeEnd("a");

console.time("ForLoop");
for(let i=0;i<=5;i++){
    console.log(2048);
}
console.timeEnd("ForLoop");


console.time("WhileLoop");
let i=0;
while(i<=5){
    console.log(2304);
    i++;
}
console.timeEnd("WhileLoop");