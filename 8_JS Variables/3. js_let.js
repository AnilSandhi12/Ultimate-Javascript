  // Cannot be Redeclared

            // Variables defined with let cannot be redeclared.
            // You cannot accidentally redeclare a variable.
            // With let you can not do this:
       
          //    let x = "Anil";
         //   let x = 20;
        //   document.write(x); // We Will Getting Error.

          // With var We Can
          var y = "Anil";
          var y = 10;
          document.write(y + "<br>");


                //         Block Scope
                // Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

                // ES6 introduced two important new JavaScript keywords: let and const.

                // These two keywords provide Block Scope in JavaScript.

                // Variables declared inside a { } block cannot be accessed from outside the block:
         {
            let name = "Anil";
            document.write(name + "<br>");
         }       
         // X can Not be Used Here.
        
         {
            var name1 = "Anil";
        }
        // X can be Used Here.
        document.write(name1 + "<br>");

        // Redeclaring Variables
        // Using Var Keyword
//         Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:
        var fName = "Yatin<br>";
        {
            var fName = "Samandeep<br>";
        }
        document.write(fName);
        // Using Let Keyword
        let lName =  "Ravi Kumar<br>";  
        {
                let lName = "Anshu<br>";
                // document.write(lName);
        }
        document.write(lName);


                          // Let Hoisting
        //Variables defined with var are hoisted to the top and can be initialized at any time.
       // Meaning: You can use the variable before it is declared:
          
          carName = "Audi";
          document.write(carName);
          var carName; //    This is OK;

           fruitName = "Apple";
           document.write(fruitName);
           let fruitName;    // Check Error on Console.