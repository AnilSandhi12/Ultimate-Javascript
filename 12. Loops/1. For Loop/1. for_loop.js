for(let i=0;i<=10;i++){
    console.log(i);
}

// Program To Sum N Natural Number.
let sum=0;
let n=prompt("Enter The Value of N : ");
n= Number.parseInt(n);
for(let j=0;j<n;j++){
 sum += j;
}
console.log("Sum pf First " + n + " numbers is " + sum);
