console.log('hello');
// alert('practice');
// this is for writing a coment

// variables
var samsi = 'assyamsi';
console.log(samsi);
 var umur = 20;
console.log(umur); 

// var age = prompt('What is your age?');
// document.getElementById('text').innerHTML = age;

// Numbers in Javascript
var num1 = 9;

// Increment 
num1 = num1 + 2;
num1++;

// Decrement
num1 = num1 - 5;
num1--;
console.log(num1);
 
// You can use any operation
console.log(24 * 11); 

// Increment / decrement simple
num1 +=10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

//Create 
function fun(){
    console.log('This is a function');
}

// Call
fun();

/* Make the function for greeting to
who ever write the name on it.
*/
function greeting(){
    var name = prompt('What is your name?');
    var result = 'Hello' + ' ' + name; // String Concatenation
    console.log(result);
}
// greeting();

// How do arguments work in functions?
// How do we add 2 numbers or string together in a function?

function numbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
numbers(10, 9); // You can use string too

/* While loops

var num = 0;
while(num <= 10){
    num += 1;
    console.log(num);
}
*/

// For loop
for (let num = 0; num <= 10; num++){
    console.log(num);
}

// Data types
let age = 20; // Number
let name = 'assyamsi' // String
let namaLengkap = {first: 'samsi', last:'akang'}; // Object (dictionary)
let turth = false; // Boolean
let toko = ['Pen', 'Bag', 'Book']; // Array (list)
let random; // Undefined
let nothing = null; // Value null

// Strings in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple'; // New line
let buah = 'mangga, jeruk, pisang, apel';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(3, 5));
console.log(fruit.replace('ban','kang'));
console.log(fruit.toUpperCase());
console.log(fruit.toLocaleLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(buah.split(',')); // split by a comma
console.log(buah.split('')); // split by characters

// Array
let fruits = ['banana', 'apple', 'pineapples', 'orange'];
fruits = new Array ('banana', 'apple', 'pineapples', 'orange'); // same with above

console.log(fruits[2]); // access value at index 2nd

fruits[0] = 'pear'; // change the value at index 0
console.log(fruits);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); // remove last item
console.log(fruits.push('manggos'), fruits); // appends
console.log(fruits[4]);
fruits[fruits.length] = 'grape'; // same as push (you can use lenght or index number)
console.log(fruits);
console.log(fruits.shift(), fruits); // remove first element from an array
console.log(fruits.unshift('leci'), fruits); // add first element to an array

let vegerables = ['asparagus', 'tomato','broccoli'];
let allGroceries = fruits.concat(vegerables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(2, 6));
console.log(allGroceries.reverse()); // let the vegetables first
console.log(allGroceries.sort()); // sorting in alfabet

let someNumbers = [5, 1, 6, 3, 7, 10, 22, 212, 23131, 333];
console.log(someNumbers.sort(function(a, b){return a-b})); // sort ascending
console.log(someNumbers.sort(function(a, b){return b-a})); // sort discending

// Nambah / bikin array kosong
let emptyArray = new Array();
for (let num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

// objects in Javascript
// Dictionaries in Python

let student = {
    first: 'Assyamsi',
    last:'NH',
    age: 20,
    height: 171,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

/* common use
console.log(student.first);
console.log(student.last);
student.first = 'samsi'; // change value
student.age++; // increment
console.log(student.age);
*/

console.log(student.studentInfo());

// Conditionals, Control flows (if else)

/*
var umur = prompt('What is your age?'); // Mun jang prompt kitu mah mending pake var tong let
if ((umur >= 5) && (umur <=30 )) {
    hasil = 'Masih muda';
    console.log(hasil);
}
else {
    hasil = 'Sudah muda';
    console.log(hasil);
}

*/

// Switch 
// Weekday Vs Weekend
// 0->Sunday, 1-> Monday .... so on

switch (5) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);

