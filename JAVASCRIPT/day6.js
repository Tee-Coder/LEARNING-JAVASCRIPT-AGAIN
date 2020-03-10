alert ('helloworld');

/**
 * Lets see how scope works
 */

 var myVariable =3;
 function myFunction()
 {
     console.log(myVariable);//can we see myVariable in the function!?
 
     var myFunctionScopeVariable = 64;//Declared in a local (function) scope)
     console.log (myFunctionScopeVariable);//WE can see this in the function.
     
     function myNestedFunction()
     {
         var myNestedFunctionVariable = 'I am very nested';
         console.log(myNestedFunctionVariable);

         console.log ('Accessing function scope in nested function:' + myFunctionScopeVariable);//we can access variables from parent function but not the reverse.

         function myDoubleNestedFunction()
         {
             var doublenestedvar = 'Double nested var, here!';
             console.log(doublenestedvar);
         }
         myDoubleNestedFunction();//This works.

     }


 myNestedFunction()

 }

 myFunction(); //Lets run it and see
 //console.log(myFunctionScopeVariable); //CAN WE ACCESS THIS, NO, COS IT IS A LOCAL VARIABLE AND CANT BE CALLED OUTSIDE, IT GIES IN THE FUNCTION//


 function addNums (x,y){
    return (Number(x) + Number (y));
 }

 function SubsNums (x,y){
    return (Number(x) - Number (y));
 }

 function MultiNums (x,y){
    return (Number(x) * Number (y));
 }

 function divideNums (x,y){
    return (Number(x) / Number (y));
 }
 function myMath (operation, x, y){
     switch(operation)
     {
         case "add":
             return addNums;
         case "subtract":
             return SubsNums;
         case "multiply":
             return MultiNums;
         case "divide":
             return divideNums;
         default:
             return'inavalid operation';
     }
    }


     var result=myMath('divide') (9,3);
     console.log(result);//returns 3
     var newResult = myMath('multiply') (2, result);//returns 5
     console.log(newResult);

     /**
      * Now lets try with... anonymous functions.
      */

      function newTestFunction (myString)
      {
          myString = 'Entered string is:' +myString;
          return function (additionalString)
          {
              if (additionalString !=undefined)
              {
                  myString +=','+ additionalString;
              }
              return function (yetAnotherString)
              {
                  if (yetAnotherString !=undefined)
                  {
                      myString +=',' + yetAnotherString + '!!!';
                  }
                  return myString;
              }
          }
      }

      console.log (newTestFunction('A,B,C,D,E,F,G') ('K,I,J,K,L,M,N,O,P')('Q,R,S,T,U,V,W,X,Y,Z'));



   
 

