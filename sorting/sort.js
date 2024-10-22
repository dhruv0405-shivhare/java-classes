let arrstr = ["fr" , "rth" , "dfg" , "grf"];
arrstr.sort();
console.log(arrstr);

let arr = [54,65,76,87,98];
arr.sort(function(a,b){return a-b})
console.log(arr);

let arr1 = [54,65,76,87,98];
arr.sort(function(a,b){return b-a})
console.log(arr1);

let output = arr1.reduce(function(a,b){return a+b});
console.log(output)

let answerstr = arr1.toString()
console.log(answerstr);

let answerjoin = arr1.join(" ")
console.log(answerjoin);