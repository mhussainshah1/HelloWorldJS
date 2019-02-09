console.log('loaded')
// how do you find elements on the page?

//Function Defination
function change(){
  console.log("Change function ran")
  //this get hold of p tag
  document.querySelector('p').style = 'background-color: gray ; font-family: "Courier New";font-style: Italic';
}
function sayHello(){
  console.log("Hello")
}
//change the background color
function changeBackground(){
  document.querySelector('body').style ='background-color: gray'
}
//Change the background back
function resetBackground(){
  document.querySelector('body').style ='background-color: default'
}
//Function Invocation / Call back
//change()
sayHello()
//
document.querySelector('img').addEventListener('click', change);

//when mouse go over the image 
document.querySelector('img').addEventListener('mouseenter',changeBackground);

// when mouse leaves the image
document.querySelector('img').addEventListener('mouseleave',resetBackground);


// how do you change them?
// how do add elements to the page?
// What other things do you think js _can_ do?

////////////////////////////////
//    Afternoon               //
////////////////////////////////

// Goal: add 1000 of the above image
// Plan
// data types

/**
 * primitive datatypes
 * -------------------
 * string (all text)
 * numbers (all types of number)
 * boolean (true or false)
      boolean logic (AND OR)
  undefined
  null (empty)
    objects
    array    
    datetime
 */

// variables
let myString = "My String A little longer"

// console.log(z);
console.log(myString)

// functions



// loops
for(let count = 0; count <10 ; count++ ){
  console.log(count)
  console.log('did a loop')
}

let i = 0
while(i<10){
  console.log(i)
  i++;
}

i=0
do{
  console.log(i)
  i++;
}while(i<10)



// conditions
if(myString.length > 10){
  console.log(myString)
}