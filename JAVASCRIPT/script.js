/**
 * Let's try JavaScript, again!
 * Multi-line comment.
 */

 //single line, comment!

 //Basic assignment:
 var myVariable = '38.9587';
 console.log(myVariable +5); //oop, one of this is a a string so plus is the concantenation.

 myVariable = parseFloat(myVariable);//floating point number, decimal maintained.
 console.log(myVariable);//is now a numerical value

 myVariable = parseInt(myVariable);//converted to integer
 console.log(myVariable);


 myVariable= Number(myVariable); //converted to any number type it can
    console.log (myVariable);//no change here

    myVariable=myVariable+5;//beware of the + as it can add or concatenate, depending on if it it is an operand or string.
    console.log(myVariable);

    myVariable = myVariable.toString();//convert back to a string.
    console.log(myVariable);


    var myArrayofDataTypes =
    [
        //Booleans:
        true,
        false,

        //Null:
        null,
        //Number (float/integer):
        34,
        168.793,

        //string:
        'Hello, World',
        //value not defined:
        undefined,
        //not a number:
        NaN,
        //An array in an array!?
        [1,2,3,4,5]
    ];

/**
 * Creating elements for a webpage
 */

 //create datalist
var myDataList = document.createElement('DL');//Wont show yet! We didnt tell it where to go.

//DLis like unordered list in html, DT is the title and DD is the data

//Let's loop through the array so we dont have to type out each item!
for(var i =0; i<myArrayofDataTypes.length; i++)
{
    // (Assignment; termination condition; iteraTION)
    //Create datalist title.

    var dataListTitle = document.createElement('DT');
    dataListTitle.textContent = typeof myArrayofDataTypes[i]; //output the datatype.

    //create datalist data.


//create datalist title.
var dataListData= document.createElement('DD');
dataListData.textContent = myArrayofDataTypes[i];

//Add our new documents to our datalist.
myDataList.appendChild(dataListTitle);
myDataList.appendChild(dataListData);

}
var myHeadingText = 'Our Data-Type Test:';
//This is adding html to the end of our body.
document.body.innerHTML += `<!--Back ticks are used in JS for multi-line strings.-->
<h2>
    `+myHeadingText/*Concatenating strings!*/+`
</h2>
`;

//Add All of that to the body! Yay! We should be able to see it now
document.body.appendChild(myDataList);

/**Collecting elements */

//Get by ID:
var myHeading = document.getElementById('my-heading');
myHeading.title = 'This is a heading.';//Tooltip attribute.
//myHeading.style.color = 'darkgray'; //PLEASE AVOID USING INLINE STYLES...this is the CSS file's job!!!
myHeading.className = 'gray-text'; //Use classes instaed

//We can add event listeners to

myHeading.addEventListener('mouseover',  /* Here we say which event we are targetting*/ function(event) /*We can capture info about the event */
{
    this.className= 'salmon-text'; /* In an event, the 'this'keyword represents our element (myHeading)*/
}
);

myHeading.addEventListener('mouseleave', function(event)
{
    this.className= 'indigo-text';
}
);


myHeading.addEventListener('click', function(event)

{
    var bigClass ="big-text";
    
        if(!this.className.includes(bigClass))
        {
            this.className +=' big-text';
        }
    

    
}
);

function addTwoNumbers()
{
    x=Number(x);
    y=Number(y);
    return(x+y);
}

//Return current date as a string (2020.03.06)
function currentDayString()
{
    //New date object.
    var date =new Date();
    //Declare a string we can store data info in.
    var dateString ='';
    dateString += date.getFullYear();
    dateString +='.';
    dateString +=date.getMonth();
    dateString +='.';
    dateString += date.getDay();
    return dateString;
}
console.log('The current date is :/r/n' + currentDayString());