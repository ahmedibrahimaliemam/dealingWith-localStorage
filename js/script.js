let div=document.querySelector(".back-ground") ;
let divs=document.querySelectorAll(".colors div") ;
if(window.localStorage.getItem("color")!=""){
    div.style.backgroundColor=window.localStorage.getItem("color");
    divs.forEach(function(e){
        e.classList.remove("active") ;
    })
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}
divs.forEach(function(li){
    li.addEventListener("click",function(e){
        divs.forEach(function(li){
        li.classList.remove("active") ;

        })
        //add active
        e.currentTarget.classList.add("active") ;
        //add color to the local storage
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        div.style.backgroundColor=e.currentTarget.dataset.color;

    })
})