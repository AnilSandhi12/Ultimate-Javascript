console.log("------------- Map Filter Reduce -----------------");

let Arr = [43,54,67,87,98,92];

// Map() : Creates a New Array by Participating some Operation on Each Array Element.
let a=Arr.map((value , index,array)=>{
    console.log(value,index,array);
    // return value;
    return value+index;
})
console.log(a);

// Filter() : Filter is An Array with Value that Passes a test.Create a New Array.
let filterArr = [543,74,92,87,28,72];
let a2 = filterArr.filter((a)=>{
    return a>100;
});
console.log(a2);

// Reduce() : 
let reduceArr = [1,2,3,4,5,6,7,2,3];
let newReduceArr=reduceArr.reduce((h1,h2)=>{
       return h1+h2;
})
console.log(newReduceArr);

// Also Use Reduce method in This way :
const reduce_function=(h1,h2)=>{
       return h1+h2;
}
let newArr3=  reduceArr.reduce(reduce_function)
console.log(newArr3);