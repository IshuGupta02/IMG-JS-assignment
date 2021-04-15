function funcSubmit(){
    

    let email=document.getElementById('mail_id').value;
    let password1=document.getElementById('pass').value;

     if (email.match(/[^\s@\W]+\.?_?\.?[a-z]?@[^\s@\W]+\.?[^\s@\W]+?\.?[^\s@\W]+?\.?(com|in|edu)/)) {

        // console.log("hello");
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password1);
    
        var ajaxObject=new XMLHttpRequest();   
    
        console.log(ajaxObject.readyState);
    
    
        ajaxObject.open("POST","https://reqres.in/api/login", true);
        console.log(ajaxObject.readyState);
    
        ajaxObject.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        console.log(ajaxObject.readyState);
    
        ajaxObject.send(`email=${email}&password=${password1}`);
        console.log(ajaxObject.readyState);
    
        ajaxObject.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(this.response);
                alert("Login successfull"+", response:" + response["token"]);
            }
            else if(this.readyState == 4 && this.status != 200){
                alert("login unsuccessfull");
            }
            
        
        }
      

     }

     else{
         alert("Enter valid email id");
     }

 

}

document.getElementById('mail_id').addEventListener('keyup', (e)=> {
   
    if (e.keyCode === 13) {
        e.preventDefault();
        funcSubmit();
        
    }
});

document.getElementById('pass').addEventListener('keyup', (e)=> {
   
    if (e.keyCode === 13) {
        e.preventDefault();
        funcSubmit();
        
    }
});
