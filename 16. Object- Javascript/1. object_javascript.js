console.log("1. First Way To Create Object.");
      // Object Definition
      const course = {
        // Property      Prop Value
        lecture: 10,
        section: 3,
        title: "Javascript",
        notes: {
          introduction: "Welcome to JS Course",
        },
        enroll() {
          // Method
          console.log("You are Enrolled Sucessfully");
        },
      };

      course.enroll();
      console.log(course); // to print all Properties Value.
      console.log(course.lecture);
      console.log(course.section);
      console.log(course.title);
      console.log(course.notes);

      // Important Thing Related Object  => It's Dynamic in Nature. Means That At Run Time We can declare new Properties.
      //  But We cannot redeclre an Property Value like that : title : "HTML" <==  Getting Error.

      course.price = 9999; // We can Add Property in Course Object At Any Time
      console.log(course); //Our Property Added Sucessfully without Getting any Error :).

      /*
      Its not an Efficient Way to Create Object because if we want to Make Multiple Object in Our Program Then we copy above code and Paste it, Which Consumes so Much Line to Get Small Output.
      
      Coding Principle ==> DRY(Don't Repeat Yourself);
      */

      /*
     We can use Factory Function.
     */
      console.log("2. Second Way To Create Object.");
      function createCourse(uName,uAge,uAddress,uWantToBecome) {
          const introduction = {
              name: uName,
              age: uAge,
              address: uAddress,
              wantToBecome: uWantToBecome,
              enroll() {
            console.log("You Are Sucessfully To Crack This Interview ! YEAH :)");
          }
        };
        return introduction;
      }
      const introduction = createCourse("Anil Sandhi",20,"Nanak Nagri","FullStack Developer");
      introduction.enroll();
      console.log(introduction);
      console.log(createCourse("Anshu",20,"Phagwara","Game Builder")); // in One Line.
      
      console.log("3. Third Way To Create Object.");
      // Using Constructor Function.

      function Course(userName,userAge,userAddress,userWantToBocomes){
        // We use This Keyword. This Keyword Point this Function.In this Function Which Properties we Declared this Keyword Help Us to Print This Propertie's Values :)
          this.name = userName,
          this.age = userAge,
          this.address = userAddress,
          this.wantToBecomes = userWantToBocomes,
          this.enroll=function(){
            console.log("You Are Sucessfully Enrolled");
          } 
      }

      course.enroll();
      const newCourse = new Course("Anil",20,"Lovely Professional University","FullStack Developer");
      console.log(newCourse)
