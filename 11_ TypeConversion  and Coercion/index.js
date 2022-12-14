  //  Type Conversion.
             
            //integer
            let myVar1 , myVar2;
            myVar1 = 34;
            console.log(myVar1 , (typeof myVar1));
            
            myVar2 = String(34);
            console.log(myVar2 , (typeof myVar2));

            //  Boolean
            let booleanVar = String(true);
            console.log(booleanVar,(typeof booleanVar));

             //Date
            let date = String(new  Date());
            console.log(date , (typeof date));

            //  Array
            let myArr = [1,,3,4,5,6,7,8,9];
            console.log(myArr.length , (typeof  myArr));

            let arr = String([1,2,3,4,5,6,7]);
            console.log(arr.length , (typeof arr));

            // To String Method for Type Conversion
            let value = 30;
            console.log(value.toString());
            
            let  value1 = true;
            console.log(value1.toString());

            let  stri = Number("39568d");
              console.log(stri , (typeof stri)); //   NaN ->> Not a Number

            let value2 = Number(true);
            console.log(value2 ,(typeof  value2));
            
            let array  = Number([1,2,3,6,78,56,6,7,]);
            console.log(array , (typeof array));

            // ParseInt
            let val = parseInt("39.45");
            let val1  = Number(395.358);
            let val3 = parseFloat(35.2935);

            console.log(val , (typeof  val));
            console.log(val1 , (typeof  val1));
            console.log(val3 , (typeof val3));
            console.log(val.toFixed(4) , (typeof val)); // To Fixed

            //    Type Coercion
            let mySt = "395";
            let mySt1 = Number("295");
            let myNum = 49;
            myNum1 = 48;
            console.log(mySt + myNum);
            console.log(mySt1 + myNum1);