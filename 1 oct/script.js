function s(arg){
    console.log(arg);
    let selectinput = document.querySelector(`#${arg}`);
    console.log(selectinput);
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "black";
    return false;
    
}