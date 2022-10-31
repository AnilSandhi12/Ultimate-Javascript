console.log("******************* Primitive Data Type *****************");
            // String Data Type
            var name = "Anil Sandhi";
            console.log("My Name is",name);  //  Using Concatenation
            console.log('My name is '+name);   // Using Concatenation
            console.log("Data Type is: "+(typeof name));

            // integer Data Type
            let number = 34;
            console.log("The Value is "+number);
            console.log("Data tpye is: "+(typeof number));

            // Boolean Data Type
            let x = true;
            let y = false;
            console.log("This is: "+x);
            console.log("This is: "+y);
            console.log("Data Type is: "+(typeof x));

            // Null Data Type
            let nullVar= null;
            console.log(nullVar);
            console.log("Data type is: "+(typeof nullVar));
                  
            //  Undefined DataType
            let b;
            console.log(b);

            console.log("*******************Reference Data Type ********************");
              // Array Data Type
            myarr = [1,2,3,4,5,6,7,8];
            console.log(myarr);
            console.log("Data Type is: "+(typeof myarr));

            // Object Literals
            let student = {
                   Anil : 89,
                   Yatin: 91,
                   Anshu : 88 
            }
            console.log(student);
            console.log("Data Type is: "+(typeof student));

            //functions Data Type
            function findName(){
                console.log("Ellias");
            }
            findName();
            console.log("Data Type is: "+(typeof findName));

            // Date Function in Data Type
            let date = new Date();
            console.log(date);
            console.log("Data Type is: "+(typeof date));