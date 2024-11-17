var mob = document.querySelector(".mobile")
var icon = document.querySelector("i")

mob.addEventListener("dblclick",function(){
    icon.style.transform = "translate(-50% ,-50%) scale(2)";
    icon.style.color = "#d62976";
    icon.style.opacity = "1"

    setTimeout(function(){
        icon.style.transform = "translate(-50% ,-50%) scale(0)";
      
    
    },3000);

});

