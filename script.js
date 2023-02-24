// Làm việc với string

let str1 = 'My name is:';
let name = 'Dylan';
let str2 = `${str1} ${name}`;
console.log(str2);

// Destructuring objects

let information = {
    firstName: 'Dylan',
    lastName : 'Israel'
};

let {firstName, lastName} = information;

console.log(firstName);
console.log(lastName);

// Object Literal


let str = 'hello';
for(let char of str){
    console.log(char);
}

// Spead syntax

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// 
function findLength(...args){
    console.log(args.length);
}

findLength();
findLength(1);
findLength(2,3,4);


// Arrow function

const square = (num) => num * num;

console.log(square(2));


// includes
let str10 = 'Hello world';
console.log(str10.includes('Hello'));

// Class
class Car{
    constructor(wheels, door){
        this.wheels = wheels;
        this.door = door;
    }
    describeMe(){
        console.log(`Door : ${this.door} and Wheels: ${this.wheels}`)
    }
}

// Promise, asyn
function takeLongTimeAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    const v = await takeLongTimeAsync();
    console.log(v);
}

test();