// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//PSEUDOCODE
//This function take the number and  finds the fiboncci numbers ,
// creates an array of the lengt number and adds them to array and return the array

function fibonacci(number)
{
    //initialize
    var fibonacciNumbers = [];
    //initalize the fibbonacci increments values
		let n1 = 1, n2 = 1, nextTerm;


// /looop through the range
for (let i = 1; i <= number; i++) {
    //push the number to array
     fibonacciNumbers .push(n1)
//next fiboncci base start
    nextTerm = n1 + n2;
    // increment n1 to  n2 i.e + 1
    n1 = n2;
    // increment n2 to nextTerm i.e +1
    n2 = nextTerm;

}
    //retunr the array in  json to match the other from test beacuse of serialzation problem
    return JSON.stringify(fibonacciNumbers);
}
 module.exports = fibonacci;

// b) Create the function that makes the test pass.

const fibonacci = require('./fibonacci');//import the script
//declaring and intializing

var firstInput = 6
var secondInput = 10
//test fot the length 6 array fibonacci
test('index of the first vowel', () => {
  //expect the array of the numbers to be 
        expect(fibonacci(firstInput)).toBe(JSON.stringify([1, 1, 2, 3, 5, 8])); 
     
});
//test for array lenght 10
test('index of the first vowel', () => {
  //check ig the return match the expected
        expect(fibonacci(secondInput)).toBe(JSON.stringify([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])); 
    
});

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//PSEUDOCODE
//this program take the array  of items/
// filter the array and bool values
//push the items to new arrat items 
// filters  the new array to remove the even numbers
//sorts the array in ascendig
//return the array of ord numbers

function odd(myArray)
{
    //declare and initialize

    var items = [];
    //loop throught hte array to remove the strings and boolean
    for (let i = 0; i <= myArray.length; i++) {
	if(typeof myArray[i] != "string" && typeof myArray[i] !== "boolean"){
//push to new array
		items.push(myArray[i]);
 
	}
       

    }
    //declare and set new array to be the odd numbers from items array
	let oddNumbersArray = items.filter(n => n%2)
	//looop throught to sort thre array
    for (var i = 0; i < oddNumbersArray.length - 1; i++) {
        // declare and initialize the min
        var min = i;
        // loop  again //innner loop to compare the numbers and sort 
        for (var j = i + 1; j < oddNumbersArray.length; j++) {
        //if number at i is less than the number at j then is the min
            if (oddNumbersArray[j] < oddNumbersArray[min]) {
            
            min = j;
        }
        }
        // if mean is not equal to number at i the min is the number at i which is target
    if (min != i) {
        var target = oddNumbersArray[i];
        oddNumbersArray[i] = oddNumbersArray[min];
        oddNumbersArray[min] = target;
    }
}
   
    
//retunr sorted array in json to match the test
   
    return JSON.stringify(oddNumbersArray);
   



}
 module.exports = odd;


// b) Create the function that makes the test pass.

const odd = require('./odd');
//arrays 
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// test/ for array one
test('odd numbers', () => {
        // if matcth the its a pass
  
        expect(odd(fullArr1)).toBe(JSON.stringify([-9, 7, 9, 199])); 
    
 
});
//test fot array 2  
test('odd numbers', () => {
//   match is a pass/
        expect(odd(fullArr2)).toBe(JSON.stringify([-823, 7, 23])); 
    
 
}); 



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

//PSEUDOCODE
//fuction takes array and sums  the items in "factorial";
//using the reduce we can loop and sun the previous number that is added to the new value frome the array
function odd(myArray)
{
    //new aray to hold the sum
    let sumArray = [];
    //loop and sum the previous withe current index value
    myArray.reduce( (prev, curr,i) =>  sumArray[i] = prev + curr , 0 )
    
    //return thr array in json to match the test beacuse os serialization
    return JSON.stringify(sumArray);

}
 module.exports = odd;


// b) Create the function that makes the test pass.

const sum = require('./sum');
//declare and intilization
var numbersToAdd1 = [2, 4, 45, 9];
var numbersToAdd2 = [0, 7, -8, 12];
var numbersToAdd3 = []
// test // for array 1
//these test can be looped []
test('sum accumulated', () => {
  
        expect(sum(numbersToAdd1)).toBe(JSON.stringify([2, 6, 51, 60])); 
    
 
});
// test for array 2

test('sum accumulated', () => {
  
        expect(sum(numbersToAdd2)).toBe(JSON.stringify([0, 7, -1, 11])); 
    
 
});
//test for array 3
test('sum accumulated', () => {
  
        expect(sum(numbersToAdd3)).toBe(JSON.stringify([])); 
    
 
}); 