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

    if(!name.match(/^[a-zA-Z\s]+$/)){
        createprompt("Invalid name","name_validate");
        return false;
    }

    createprompt("Hi!, Welcome "+name,"name_validate");
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

    if(!name.match(/^[a-zA-Z]+$/)){
        createprompt("Invalid name","city_validate");
        // console.log("invalid");
        return false;
    }

    createprompt("Correct name,  "+name,"city_validate");
    return true;

}




function validatePassword1(){
    var pass1=document.getElementById("password1").value;

    if(pass1.length==0){
        createprompt("Please enter password","password_validate_original");
        return false;
        
    }

    if(pass1.length<6){
        createprompt("length of password should atleast be 6","password_validate_original");
        return false;
    }

    if(!pass1.match(/[A-Z]/)){

        createprompt("should contain atleast one uppercase letter","password_validate_original");
        return false;
    }

    if(!pass1.match(/[a-z]/)){

        createprompt("should contain atleast one lowercase letter","password_validate_original");
        return false;
    }

    if(!pass1.match(/[0-9]/)){

        createprompt("should contain atleast one digit","password_validate_original");
        return false;
    }

    if(!pass1.match(/[*&@]/)){

        createprompt("should contain atleast special character(*/&/@)","password_validate_original");
        return false;
    }

    createprompt("Correct Passoword","password_validate_original");
    return true;


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

    createprompt("Correct Passoword","password_validate");
    return true;

}

function validateEmail(){
    var email=document.getElementById("mail_id").value;

    if(!email.match(/^[\w]+@[A-Za-z]+(\.com)$/)){
        createprompt("Invalid email","email_validate");
        return false;

    }

    createprompt("valid email","email_validate");
    return true;

}

function validatePhone(){
    let phone1=document.getElementById("phone").value;
    let phone=phone1.trim();


    if(!phone.match(/^(\+91)?\s*(-)?\s*[6789][0-9]{9}$/)){
        createprompt("invalid indian phone number","phone_validate");
        return false;

    }

    createprompt("valid, entered"+ phone,"phone_validate");
    return true;

    
}

function validateAge(){
    let age=document.getElementById("age").value;

    if(age.length===0){
        createprompt("Please enter age","age_validate");
        return false;

    }

    if(age<0){
        createprompt("invalid number","age_validate");
        return false;

    }

    if(age<18){
        createprompt("cannot create an account for age<18","age_validate");
        return false;
    }

    createprompt("valid age","age_validate");
    return true;

}

function validateGender(){
    var gen=document.forms["myForm"]["gender"];
    if(gen[0].checked==false&&gen[1].checked==false&&gen[2].checked==false){
        createprompt("Please choose gender","gender_validate");
        return false;

    }

    return true;
}

function validateQualification(){

    var qualification=document.getElementById("education").value;
    if(qualification=="Select qualification"){
        createprompt("Please choose qualification","education_validate");
        return false;

    }

    return true;

}




function checkall(){
    // validateGender();
    // validateName();
    // validateAge();
    // validatePhone();
    // validateEmail();
    // validatePassword2();
    // validatePassword1();
    // validateCity();
    // validateQualification();


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




