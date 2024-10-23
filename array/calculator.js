// let a = {
// "name":"dhruv",
// "age":21,
// "course":"fsd"
// }

// a.name;

// let{name , age , course} = a;
// console.log(name);
// console.log(age);
// console.log(course);
// // when we create function inside the object then it is known as method .
// let b = {
//     "sum":function(){

//     }
// }
// b.sum()


//function are of 4 types
// regular function 
// function show(){

// }

//arrow function 
// const run = () =>{

// }
// run();

//IIFE --> (imediatly invoked function expression)

// (function(){

// })();

//higher order function 

// setInterval,setTimeout,map,fil



// calculator
let store = ' '

function cal (arg){
    store = store + arg
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = store
}

function calculator(){
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = eval(store)
    store = eval(store)
    store.tostring();
}