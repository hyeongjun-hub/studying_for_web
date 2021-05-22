const title = document.querySelector(".title-js");

const COLOR_CN = "color",
    WHITE_CN = "white";

function clickhandler(){
    if(!title.classList.contains(COLOR_CN)){
        title.classList.add(COLOR_CN);
        title.classList.add(WHITE_CN);
    }
    else{
        title.classList.remove(COLOR_CN);
        title.classList.remove(WHITE_CN);
    }
}

function init(){
    title.addEventListener("click",clickhandler);
}

init();