/**
 *  Multi-Line Comment in Javascript
 * 
 * -- variable declaration
 * -- primitive Types
 * strings, integers, booleans, floats, arrays, objects(dictionary in python)
 * -- Functions
 * -- Loops
 */

// Variable Declaration
// var, let, const
// var - lenient scope, we can reassign the variable

// var location = 'Chicago'

// var location = 'Boston'

// location = 'San Francisco'

// let - can reassign variable after initial declaration but not with let keywrod

let maximal = 'Cheetor'; //<---syntactical sugar

maximal = 'Rat Trap'

// let maximal = 'Optimus'

// arming a variable
let predicon;

let decepticon
decepticon = 'Waspinator';

decepticon = 'Black Widow'

// let location = 'Cincinatti';

// location = 'St Paul'

// let location = 'Alaska';

// const -- very strictly scoped. cannot reassign with keyword and cannot reassign variable
const pokemon = 'Bulbasaur'

// pokemon = 'charmander'
console.log(pokemon)


// string variable
let first_name = 'Bill';

// display our value to the JS console
console.log(first_name)


// integer variable 
let some_number = 31;
console.log(some_number)

//float variable
let some_float = 3.14
console.log(some_float)

// Array variable -- just a list
let some_array = [1, 2, 3, 4]
console.log(some_array)


// object variable == just a dictionary in python 
let someObject = {
    'test': 'Please Test Me!',
    'test2': 'still need testing'
};
console.log(someObject)

console.log(typeof (some_array))
console.log(typeof (someObject))

console.log(typeof (some_number))

// JavaScript Hoisting
// console.log(random_variable)
let random_variable = "This is a random string"
console.log(random_variable)


// The best way to declare variables is with const and let
// var can be confusing and ambigous
let fullName = first_name + 'The Pony'
console.log(fullName)

// const
const superHero = 'Iron Man';
console.log(superHero)
// superHero = 'Black Panther' // <-- throws an error saying Uncaught TypeError: Assign to constant variable

let nbaGoat = 'Michael Jordan';
console.log(nbaGoat)

// let nbaGoat = 'Kobe Bryant' // cannot redeclare block scoped variable

nbaGoat = 'Jay Cutler';
console.log(nbaGoat)

robot = 'Mega Man'
console.log(robot)


/**
 * 
 * Basic Math Operations in JS
 * 
 */

// addition
let sum = 5 + 5
console.log(sum)

// Subtraction
let diff = 10 - 5;
console.log(diff)
let sub = 10
sub -= 6
console.log(sub)

// Multiplacation
let product = 5;
product *= 5
console.log(product)
product = product * 10
console.log(product)

//Division
let divide = product / 100;
console.log(divide)

// Exponential
let squared = 6 ** 2;
console.log(squared)

// Modulo 
let mod = 5 % 2;
console.log(mod)

// More math operations
// finding the floor of a decimal
let findFloor = Math.floor(26.7)
console.log(findFloor)

//finding the ceiling of a decimal\
let findCell = Math.cell(15.6)
console.log(findCell)

/**
 * 
 *  ==== Javascript Functions ====
 * 
 */
// Regular Named Functions
function addNums() {
    let num = 4;
    let num2 = 5;
    console.log('This is a regular name fucntion')
    return num + num2
}
console.log(addNums())

// named function with parameters
function subNums(x, y) {
    return x - y
}
// call function with arguments
console.log(subNums(17, 6))



let addNums2 = function (num, num2) {
    console.log('This is a named function with parameters')
    return num + num2
}
// call our function and console.log
console.log(addNums2(23, 56))

//ES6+
/*

arrow functions
using an arrow function WITHOUT paratheses can only be done
in function with ONE parameter

*/

let cubed = num => {
    return num ** 3
}
console.log(cubed(9))


// more than one parameter requires  parentheses
const addNums3 = (num1, num2) => {
    return num1 + num2
}
console.log(addNums3(5, 47))

// self invoking function
//javascript closure

/*
    the console.log in the below example DOES NOT have to be provided
    we're only usning it to see the output in our console
*/

console.log((function (name) {
    let hello = 'Hello World,' + name;
    return hello
})('Lando'))

//javascript control flow 
// if statement
function determineAge(age) {
    if (age < 18) {
        return 'Minor'
    } else if (age >= 18 && age <= 65) {
        return 'adult Not Retired'
    } else if (age > 65 && age <= 106) {
        return 'elderly person = retired...hopefully'
    } else {
        return 'Maiar ,<-- thats what gandalf is'
    }
}


console.log(determineAge('31'))

console.log(determineAge(2000))

//Javascript Ternary Operator
function determineAge2(age) {
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65) ? 'adult not retired' : 'elderly retired'
};

console.log(determineAge2(17))



// Mind Bender
let crazyStuff = some_float = '4'
//undefined, 7, 14, 3.14+4 3.144

console.log(crazyStuff)
console.log(typeof (crazyStuff))

let num = 4
let crazytuff2 = num + '4'
console.log(crazyStuff2)

let num2 = '5'
let crazyStuff3 = num2 + 4 
console.log(crazyStuff3)

// int(), float(), str(), list()
let insaneInTheMembrane = some_float + parseFloat('4')
console.log(insaneInTheMembrane.toFixed(2))

// brother may i have some loops 
//loops in javascript
function countByOne() {
    // for loop
    // (index counter; condition to break the for loop, incrementation)
    for (let i = 0; i < 20; i++) {
        console.log(i)
    }
}

//countByOne()
let my_names = ['swan', 'Joe', 'Alex', 'Chuck']

function printNames(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        }
}

//printNames(my_names)

function decreaseByOne() {
    for (let i = 20; i > 0; i--) {
        console.log(i)
    }
    return 'Decrementation has stopped'
}

//console.log(decreaseByOne())

//while Loops
function countWithWhile() {
    let i = 0;
    let text = ''

    //while loop
    while (i < 10) {
        text += 'This number is .....${i}'
        i++
    }
    return text
}
console.log(countWithWhile())

function countWithDoWhile() {
    let i = 0;
    let text = '';

    // do or do not, there is no try
    do {
        text += 'the number above is... ${i}'
        i++
    }

    while (i < 10)
    return text
}

console.log(coundWithDoWhile())

//for ... of
let myNames = ['swan', 'Joe', 'Alex', 'Chuck']

function printMoreNames(arr) {
    for (let name of arr) {
        console.log(name)
    }
}

printMoreNames(myNames)

let groupOfNames = ['Gary', 'Ash', 'Misty', 'Brock', 'Jenny']
// index for the first position -- gary
console.log(groupOfNames[0])

//deconstruction of an array
let gary, ash, misty;

[gary, ash, misty, ...lovers] = groupOfNames
//gary = groupOfName[0]
//ash = groupOfName[1]
//misty = groupOfName[2]

console.log(gary, ash, misty)

// for each loop
function showEachName(arr) {
    arr.forEach(
        name => console.log(name)
    )
}

showEachName(groupOfNames)

// javascript string methods
console.log(groupOfNames)
console.log(groupOfNames.toString())
console.log(typeof(groupOfNames.toString()))

let groupOfNamesString = groupOfNames.toString()

console.log(groupOfNamesString)
console.log(typeof(groupOfNamesString))



groupOfNames = ['Gary', 'Ash', 'Misty', 'Brock', 'Jenny']
//javascript array methods  //.map return the list back except the one starts with B
let bNames = groupOfNames.map(element => {
    if (element[0] == 'B') {
        return element
    } else {
        return 'gotta catch em all'
    }
})
console.log(bNames)

//.push will add to a list
let moreBNames = function(arr) {
    b_array = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] == 'B') {
            bArray.push(arr[i])
        } 
        else {
            bArray.push('Gotta catch em all')
        }
    }
    return bArray
}
console.log(moreBNames(groupOfNames))
    



let my_nums = [1, 2, 3, 4]

let biggerNums = myNums.map(num => {
    return num + 5
})
console.log(biggerNums)


// .reduce()
const nums = [2, 4, 6, 8, 10]
let numReduced = nums.reduce((accumulator, currentNum)=> {
    return accumulator + currentNum
})

console.log(numsReduced)

//filter()

let longishNames = groupOfNames.filter(name => name.length > 4)
console.log(longishNames)

// array methods for arrays with strings .join(), .slice(), .splice

//.join()
console.log(groupOfNames.join('shooby dooby'))

//.slice()
console.log(groupOfNames.slice(0, 3))

//.splice()
let newName = groupOfNames.splice(0, 0, 'Freddie')
console.log(groupOfNames)


let removedNames = groupOfNames(1, 2)
console.log(removedNames)

groupOfNames.splice(1, 0 .toExponential.apply.removedNames)
console.log(groupOfNames)

function replaceNames(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, 'goku')
        };
    };
    return arr;
};

console.log(replaceNames(groupOfNames))

//.search in a string == searching for letter 6
//and returning the index of that letter
console.log(groupOfNames[0].search('6'))

//.includes
console.log(groupOfNames[0].includes('goku'))

let numslist = [2, 4, 6, 8, 10]
if (numslist.includes(4)) {
    console.log('its here, the four you were looking for')
} else {
    console.log('its not here')
}
console.log(groupOfNames.filter(name => name.toLowerCase().includes('g')))

//string.slice
console.log(group[1].slice(0, groupOfNames[1].length))
console.log(groupOfNames[1])

console.log(groupOfNames)

console.log(groupOfNames['length'])