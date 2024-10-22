function registration(){
   let name = document.querySelector('#name').value;
   let email = document.querySelector('#email').value;
   let mobile = document.querySelector('#mobilenumber').value;
   let password = document.querySelector('#password').value;
   let confirmpassword = document.querySelector('#confirmpassword').value;

   console.log(name,email,mobilenumber,password,confirmpassword);
   
   if(name === ""){
      document.querySelector('#errorname').innerHTML = "please enter your name";

      let selectname = document.querySelector('#name');
      selectname.style.borderColor = "red"
      selectname.style.outlineColor = "red"
   

   return false; 
}      

else if(email === ""){
   document.querySelector('#email').innerHTML = "please enter your name";

   let selectemail = document.querySelector('#email');
   selectemail.style.borderColor = "red"
   selectemail.style.outlineColor = "red"

   return false;
}

}