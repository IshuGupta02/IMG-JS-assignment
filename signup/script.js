function createprompt(message, id){

    document.getElementById(id).innerHTML=message;

}

function validateName(){
    let name1=document.getElementById("name").value;
    let name=name1.trim();

    if(name.length==0){
        createprompt("This field cannot be empty","name_validate");
        return false;
    }

    if(!name.match(/^[a-zA-Z\s\']+$/)){
        createprompt("Invalid name","name_validate");
        return false;
    }

    createprompt("valid!","name_validate");
    // console.log("valid");
    return true;

}

function validateCity(){

    let name1=document.getElementById("city").value;
    let name=name1.trim();

    if(name.length==0){
        createprompt("This field cannot be empty","city_validate");
        return false;
    }

    if(!name.match(/^[a-zA-Z\s\']+$/)){
        createprompt("Invalid name","city_validate");
        // console.log("invalid");
        return false;
    }

    createprompt("valid!","city_validate");
    return true;

}




function validatePassword1(){
    var pass1=document.getElementById("password1").value;



    if(pass1.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)){
        createprompt("Strong Password" , "password_validate_original" );
        return true;
    }
    if(pass1.length<=5){
        createprompt("Password must contain atleast 6 characters" , "password_validate_original" );
        return false;
    }
  
    if(pass1.match(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)){
        createprompt("Weak Password" , "password_validate_original");
        return true;
    }
    if(pass1.match(/^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])|(?=.*[!@#\$%\^&\*])|((?=.*[!@#\$%\^&\*])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.*[0-9]))|((?=.*[a-z])(?=.*[!@#\$%\^&\*])(?=.*[0-9])))(?=.{6,})/)){
        createprompt("Weak Password" , "password_validate_original" );
        return true;
    }




}


function validatePassword2(){
    var pass1=document.getElementById("password1").value;
    var pass2=document.getElementById("password2").value;

    if(pass1.length===0){
        createprompt("First enter password","password_validate");
        return false;

    }

    if(!(pass1===pass2)){
        createprompt("Password did not match","password_validate");
        return false;

    }

    createprompt("valid!","password_validate");
    return true;

}

function validateEmail(){
    var email=document.getElementById("mail_id").value;

    if(email.length==0){
        createprompt("This field cannot be empty","email_validate");
        return false;


    }

    if(!email.match(/[^\s@\W]+\.?_?\.?[a-z]?@[^\s@\W]*\.?[^\s@\W]*?\.?[^\s@\W]*?\.[a-zA-Z]+$/)){

        createprompt("Invalid email","email_validate");
        return false;

    }

    createprompt("valid!","email_validate");
    return true;

}

function validatePhone(){
    let phone1=document.getElementById("phone").value;
    let phone=phone1.trim();

    if(phone.length==0){
        createprompt("This field cannot be empty","phone_validate");
        return false;
    }
    if(!phone.match(/^(((\+91)?\s*(-)?\s*)|(0?)|((91)?\s*(-)\s*))[6789][0-9]{9}$/)){
        createprompt("invalid indian phone number","phone_validate");
        return false;

        
        // /^(\+91)?\s*(-)?\s*[6789][0-9]{9}$/

    }

    createprompt("valid!","phone_validate");
    return true;

    
}

function validateAge(){
    let age=document.getElementById("age").value;

    if(age.length===0){
        createprompt("This field cannot be empty","age_validate");
        return false;

    }

    if(age<0){
        createprompt("invalid age","age_validate");
        return false;

    }

    if(age<18){
        createprompt("cannot create an account for age<18","age_validate");
        return false;
    }

    createprompt("valid!","age_validate");
    return true;

}

function validateGender(){
    var gen=document.forms["myForm"]["gender"];
    if(gen[0].checked==false&&gen[1].checked==false&&gen[2].checked==false){
        createprompt("Please choose gender","gender_validate");
        return false;

    }
    createprompt("valid!","gender_validate");
    return true;
}

function validateQualification(){

    var qualification=document.getElementById("education").value;
    if(qualification=="Select qualification"){
        createprompt("Please choose qualification","education_validate");
        return false;

    }

    createprompt("valid!","education_validate");

    return true;

}




function checkall(){
    if(
    validateName()&&
    validateCity()&&
    validatePassword1()&&
    validatePassword2()&&
    validateEmail()&&
    validateGender()&&
    validateAge()&&
    validatePhone()&&
    validateQualification())
    {


    }
    else{


    }

  
    
    
}




