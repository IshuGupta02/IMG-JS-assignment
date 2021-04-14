function load(id, url){

    // console.log("started executing");

    var ajaxObject=null;
    if(window.XMLHttpRequest){
        // console.log("entered if");
        ajaxObject=new XMLHttpRequest();

    }
        

    else if(window.ActiveXObject){
        ajaxObject=new ActiveXObject("Microsoft.XMLHTTP");
        // console.log("entered else");
    }
        
    
    if(ajaxObject!=null){
        ajaxObject.open("GET", url, true);
        ajaxObject.send();
        // console.log("not null");

    }
    else{
        alert("null");
        // console.log("null");
    }

    // console.log(ajaxObject.readyState);


    ajaxObject.onreadystatechange=function(){
        // console.log("onreadystatechange");

        if(ajaxObject.readyState==4&&ajaxObject.status==200){
            document.getElementById(id).innerHTML=ajaxObject.responseText;
            // console.log("onreadystatechange==4");
        }
        

    };




}