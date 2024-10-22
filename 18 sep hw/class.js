function threenumber(){
    let num1 = parseInt (window.prompt("enter num 1"));
    let num2 = parseInt (window.prompt("enter num 2"));
    let num3 = parseInt (window.prompt("enter num 3"));

    if(num1>num2 && num1>num3){
        window.alert("number one is greater");
    } else if(num2>num1 && num2>num3){
        window.alert("number two is greater");
    }else {
        window.alert("number three is greater");
    }
}

threenumber();