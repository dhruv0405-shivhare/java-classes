// let ob = {
//     name : "dhruv",
//     age : 21,
// }
// console.log(ob)


// let ob = {
//     name : "dhruv",
//     age : 21,
// }
// for (k in ob) {
//     console.log(k)
// }

// for (k in ob) {
//     console.log(ob[k])
// }


let ob = {
    name : document.querySelector("#name").value,
    age : document.querySelector("#age").value
}        
  localStorage.setItem("data",ob)