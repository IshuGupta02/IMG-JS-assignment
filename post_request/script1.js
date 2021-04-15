function funcSubmit(){
    let email=document.getElementById('mail_id');
    let password=document.getElementById('pass');

    let xhr=new XMLHttpRequest();
    console.log(xhr.readystate);
    xhr.onreadystatechange=function(){

        console.log(xhr.readystate);
        if(this.readyState==4&&this.status==200){
            let response=JSON.parse(this.response);
            alert("YOUR JSON token is:"+response["token"]);
        }
    }

    xhr.open("POST", "https://reqres.in/api/login", true);
    console.log(xhr.readystate);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    console.log(xhr.readystate);
    xhr.send(`email=${email.value}&password=${password.value}`);
    // console.log("this.readystate");


}