const ins=document.getElementById('input-box');
//const btn=document.getElementsByTagName("button");
const container=document.getElementById("list-container");

function add(){
    if(ins.value===' '){
        alert("You must write something");
    }else{
        let li=document.createElement('li');
        li.innerHTML=ins.value;
        container.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
   ins.value= " ";
   save();
}

container.addEventListener("click",function(r){
    if(r.target.tagName === "LI"){
        r.target.classList.toggle("checked");
    }else if(r.target.tagName === "SPAN"){
        r.target.parentElement.remove();
    }
},false);

function save(){
    localStorage.setItem("data",container.innerHTML);
}

function show(){
    container.innerHTML=localStorage.getItem("data");
}show();