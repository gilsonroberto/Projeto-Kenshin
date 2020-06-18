
var close = 0;

function menuToggle()
{
    
    if(close == 0){
        document.getElementById("nav3").style.display = "";
        var nav = document.getElementById("nav3");
        nav.classList.toggle("active");
        var toggle = document.getElementById("toggle");
        toggle.classList.toggle("active");
        close = 1;
    }else{
        document.getElementById("nav3").style.display = "none";
        var toggle = document.getElementById("toggle");
        toggle.classList.toggle("active");
        var nav = document.getElementById("nav3");
        nav.classList.toggle("active");
        close = 0;
    }
}

$("#menu").load('menu.html');