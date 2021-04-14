function loadData(){
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
        ajaxObject.open("GET","https://reqres.in/api/users", true);
        ajaxObject.send();
        // console.log("not null");

    }
    else{
        alert("object is null");
        // console.log("null");
    }


    ajaxObject.onreadystatechange=function(){
        // console.log("onreadystatechange");

        if(ajaxObject.readyState==4&&ajaxObject.status==200){
            var res=JSON.parse(ajaxObject.responseText);
            // console.log(res);

            var res_data=res.data;
            // console.log(res_data);

            for(let i=0;i<res_data.length;i++){
              let child=document.createElement("div");
             
              let innerchild1=document.createElement("div");
              innerchild1.innerHTML=res_data[i].first_name;
              child.appendChild(innerchild1);

              let innerchild2=document.createElement("div");
              innerchild2.innerHTML=res_data[i].last_name
              child.appendChild(innerchild2);

              let innerchild3=document.createElement("div");
              innerchild3.innerHTML=res_data[i].id;
              child.appendChild(innerchild3);

              let innerchild4=document.createElement("div");
              innerchild4.innerHTML=res_data[i].email;
              child.appendChild(innerchild4);

              let innerchild5=document.createElement("div");
              let avatar=document.createElement("img");
              // innerchild5.innerHTML=res_data[i].avatar
              avatar.src=res_data[i].avatar;
              innerchild5.appendChild(avatar);
              child.appendChild(innerchild5);


              document.getElementById("load_here").appendChild(child);
              
              

             



            }





        }
        

    };

}