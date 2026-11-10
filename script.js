const btn=document.getElementById("btn")
const outerdiv=document.getElementById("outerdiv")
outerdiv.style.backgroundColor = "white";

btn.addEventListener("click",()=>{
    if(outerdiv.style.backgroundColor==='white'){
        outerdiv.style.backgroundColor='black';
        btn.style.border="2px solid white";

    }
    else{
        outerdiv.style.backgroundColor='white'
        btn.style.border="2px solid black"
        
    }
})