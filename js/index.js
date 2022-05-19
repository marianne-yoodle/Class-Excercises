// var ourFirstVariable
let ourFirstVariable;
ourFirstVariable = 'test';
console.log(ourFirstVariable);

const ourSecondVariable = 'Huzzah';

ourFirstVariable = 'have';
ourFirstVariable = `Edison said "I ${ourFirstVariable} seen him."`;

let ourFirstNum = 2;
let ourSecondNum = 5;

const sumOfNums = ourFirstNum + ourSecondNum;

let ourBoolean = false;

let nameArray = ['Jon', 'Ray', 'Rodrick'];

let car = {
    color: 'black',
    wheels: 5,
    doors: 4,
    engine: 6,
    make: 'Ford',
    model: 'Mustang'
};

let classObj = [
    {
        name: {
            first: 'Jon',
            last: 'Wright',
        },
        title: 'Instructor'
    },
    {
        name: {
            first: 'Ray',
            last: 'Barbosa',
        },
        title: 'Student'
    },
    {
        name: {
            first: 'Rodrick',
            last: 'Cotton',
        },
        title: 'Student'
    }
]

let ourFirstArray = ['a string', 'another string', 123, true, nameArray, car, classObj];

let aSentence = classObj[0].name.first + ' ' + classObj[0].name.last;
let anotherSentence = 'this that';