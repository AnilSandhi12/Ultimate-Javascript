var x,y,z; // Statement 1
var x = 5; // Statement 2
var y = 10; // Statement 3
var z = x + y; // Statement 4
document.getElementById('demo').innerHTML = z;

document.getElementById('name').innerHTML = "<h2><b>Hello Saman</b></h2>";
/*
 Semicolons ;

Semicolons separate JavaScript statements.
Add a semicolon at the end of each executable statement:
*/
var a,b,c;
var a = " Anil ";
var b = " Sandhi ";
var c = a + b
document.getElementById('name1').innerHTML =  c;

//   When separated by semicolons, multiple statements on one line are allowed:
var ab,bc,ca;  var ab = 20; var bc = 10; var ca = ab/bc;
document.getElementById('semi').innerHTML = ca;

//Click Me
  function myFunction(){
    document.getElementById('clickme1').innerHTML = "Hello Yatin";
    document.getElementById('clickme2').innerHTML = "Hello Anshu";
  }