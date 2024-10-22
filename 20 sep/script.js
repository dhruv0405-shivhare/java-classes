  function tax(){
    let salary = parseFloat(window.prompt("enter your annual package"));

    if(salary < 300000)
    {
       window.alert("you don't have to pay tax");
    }
    else if( salary >= 300000 && salary < 750000)
    {
        let p = salary*.1
        window.alert("you have to pay tax" +p)
    }
    else if( salary >= 750000) 
        {
            let q = salary*.17
            window.alert("you have to pay tax" +q)
        }
    else{
        window.alert("invalid option")
    }    
     }
   tax();
   