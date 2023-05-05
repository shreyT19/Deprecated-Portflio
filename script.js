const theme = document.getElementById("icon");

theme.onclick = function(){
    
    document.body.style.transition="0.4s ease-in-out";
    document.body.classList.toggle('toggle-theme')
    if(document.body.classList.contains("toggle-theme")){
        theme.src = "./assets/moon.png";
    }else{
        theme.src = "./assets/sun.png";
    }
}