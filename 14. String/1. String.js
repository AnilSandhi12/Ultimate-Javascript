//  Important : Alt + Shift + BottomArrow == Duplicate;

      //  String using Double Quote
      let name = "Anil";
      console.log(name);
      // Length of My String is :
      console.log(name.length);

      //  String using Single Quote
      let myName = "Anil Sandhi";
      // let myName = "Anil Sandhi';    Don't Do This
      console.log(myName);
      // Length of My String is :
      console.log(myName.length);

      // Template Literals =>
      let boy1 = "Pramod";
      let boy2 = "Nikhil";
      // Print Nikhil is a Friend of Pramod.              ' ` ' is Back tick.
      // We Can insert Variable directly in Template Literal.This is Called String InterPolation.
      let sentance = `${boy2} is Friend of ${boy1}`;
      console.log(sentance); 

      //  Escape Sequence Character.
      let stName = 'Student\'s Name is : Anil.';
      console.log(stName);
      /*
        Other Escape Sequence Character is :
        \' => Single Quote
        \" => Double Quote
        \n => Newline
        \t => Tab
        \r => Carriage Return
      */