function display(){
    let aa = 'ABC';
    {
        let aa = '123';
        console.log('inner', aa);
    }
    console.log('outer', aa);
}

display();

//Increment/Decrement
let i = 1;
// console.log('before', i)
i++;
// console.log('after', i)

// UNDEFINED, NaN, NULL
let undef;
let aNum = 1;
let aStr = 'two';

let anObj = {
    name: 'Jon',
    age: null,
};