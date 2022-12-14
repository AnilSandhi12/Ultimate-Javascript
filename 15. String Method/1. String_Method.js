 //      Hilighted :  Origional String Naver Be Changed.

 let name = "Harry";
 let myName = "'Harry'"; // Note \' is a One character not Two.

 // Length Of String :
 console.log(name + " " + name.length);
 console.log(myName + " " + myName.length);

 // Print String into UpperCase & LowerCase Using Built in Function :
 console.log(name.toUpperCase()); // toUpperCase is function which Converts our String into UpperCase.
 console.log(name.toLowerCase()); // toLowerCase is function which Converts our String into LowerCase.

 // .Slice Method
 let friendName = "Manish";
 console.log(friendName.slice(2, 4));
 console.log(friendName.slice(2));

 //.Replace Method
 let fName = "Anshu Kumar";
 console.log("Previous Name : " + fName);
 console.log("Updated Name : " + fName.replace("Kumar", "Kaler"));

 let frName = "Anshu";
 console.log("Previous Name : " + frName);
 console.log("Updated Name : " + frName.replace("Anshu", "Anish"));

 // Concat Method :
 let fAddress = "Jammu";
 let lAddress = " Kashmir";

 console.log("Address is : " + fAddress.concat(lAddress));
 console.log(friendName.concat(" is a Friend of ", frName));

 //Trim Method :
 let dost = "       Samandeep        ";
 console.log(dost, dost.length);
 console.log(dost.trim(), dost.length); // RemoveWhite Spaces

 //  Print Char of String
 let fr = "Shivika";
 console.log(fr[0]); // 0123456 Are Index.
 console.log(fr[1]); // 0 1 2 3 4 5 6
 console.log(fr[2]); // S h i v i k a
 console.log(fr[3]);
 // fr[4]=o;   Can't Do This.
 console.log(fr[4]);
 console.log(fr[5]);
 console.log(fr[6]);

 // Print String Using For Loop.
 for (let j = 0; j <= 6; j++) {
   console.log(fr[j]);
 }