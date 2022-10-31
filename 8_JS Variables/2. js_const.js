 //    Cannot be Reassigned
 const PI = 3.141592653589793;
 //   PI = 3.14;   // Getting An Error 
 document.write(PI + "<br>");

         //     Must be Assigned
         // JavaScript const variables must be assigned a value when they are declared:
   const Name = "Anil Sandhi";   // CORRECT
   document.write(Name + "<br>");      

 //   const fName; // INCORRECT
 //   fName = "Anshu";

 // Constant Objects and Arrays
 const  carName = ["Audi","Swift","Nano","Thar"];

    //We can change Element
    carName[0] =  "Pajero";
    document.write(carName + "<br>");

    // We can Push(Add) Element in Array
    carName.push("Audi");
    document.write(carName + "<br>");


    // Block Scope
       // Using Const
    const val = 20;
    {
     const val = 40;
     // Value is 40;
    }
    // Value is 20; 
    document.write(val + "<br>");

    // Using Var
    var val1 = 30;
    {
     var val1 = 50;
     // Value is 50;
    }
      // Value is 50 Also.
      document.write(val1 + "<br>");
      
/*
             Redeclaring

             Redeclaring a JavaScript var variable is allowed anywhere in a program:

         var x = 2;     // Allowed
         var x = 3;     // Allowed
         x = 4;         // Allowed

         Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

                     Example
                     var x = 2;     // Allowed
                     const x = 2;   // Not allowed

                     {
                     let x = 2;     // Allowed
                     const x = 2;   // Not allowed
                     }

                     {
                     const x = 2;   // Allowed
                     const x = 2;   // Not allowed
                     }

                     Reassigning an existing const variable, in the same scope, is not allowed:

                     Example
                     const x = 2;     // Allowed
                     x = 2;           // Not allowed
                     var x = 2;       // Not allowed
                     let x = 2;       // Not allowed
                     const x = 2;     // Not allowed

                     {
                     const x = 2;   // Allowed
                     x = 2;         // Not allowed
                     var x = 2;     // Not allowed
                     let x = 2;     // Not allowed
                     const x = 2;   // Not allowed
                     }

                     Redeclaring a variable with const, in another scope, or in another block, is allowed:

                     Example
                     const x = 2;       // Allowed

                     {
                     const x = 3;   // Allowed
                     }

                     {
                     const x = 4;   // Allowed
                     }

                     // Const Hoisting;    
*/

  // Const Hoisting;
  // Using Var
  var colorName;
  colorName = "Red";
  document.write(colorName + "<br>");

  // Using Const
  const mobile = "Samsung";
  document.write(mobile);
 