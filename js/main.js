console.log('JS Logic Loops');
if('foo' === 'foo'){
  console.log('Of course these strings are equal!');
}

if(5 > 10){
  console.log('You will NEVER see this');
} else {
  console.log('You will ALWAYS see this');
}

//write new if statement
//that checks if a number
//stored in a var is
//greater than 100

var x = 59;
var y = 101;

if(y > 100){
  console.log('This is working');
}

if(x > 100){
  console.log('this will not appear');

} else{
  console.log(x + ' is not > 100');
}

//the else if statement

if(5 < 4){
  console.log('You will not end up here');
} else if(5 >= 5){
  console.log('You will end up here');
} else [
  console.log('you will not end up here')
]

//a function that returns something
function topSpeed(){
  return (75 + 5); //return 80
}

console.log(topSpeed());

//write a function that accepts arguments
//this means that we are required to
//provide values for those arguments
//when we invoke the function
function addNumbers(num1, num2){
  return (num1 + num2); //the values of the arguments are now used as variable inside the function
}
console.log(addNumbers(584, 211));

if(addNumbers(50, 50) === 100){
  console.log('congrats!')
}
