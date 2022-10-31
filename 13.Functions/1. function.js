
        // Basic Function
        function onePlusAvg(x,y){
            return 1+(x+y)/2;
        }

        // Arrow Function
        const Sum = (p,q) => {
            return p+q;
        }

        //  Simple Function
        const hello = () =>{
            console.log("Hi,How are You");
            return "Hi";
        }

        let a=1;
        let b=2;
        let c=3;
        console.log("One Plus Average of A and B is : " , onePlusAvg(a,b));
        console.log("One Plus Average of B and C is : " , onePlusAvg(b,c));  
        console.log("One Plus Average of C and A is : " , onePlusAvg(c,a));  
        console.log("Sum of P and Q is : " , Sum(9,5));
        console.log(hello());