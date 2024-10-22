// let arr = [87,45.4,46,435,78,45,464];
// let newarr = arr.map((items)=>{return items*2});
// console.log(newarr);

function run(){
    let arr1 = [
'.ani.jpg',
    ];


let output = document.querySelector('#answer');
 outout.innerHTml = arr1.map((imgurl)=>`
 <img style="width:400px;height:400px" src="${imgurl}" alt="not found"
 `).join(" ")
}