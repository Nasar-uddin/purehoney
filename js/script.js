var toggle = document.querySelector(".toggle");
var nav = document.querySelector(".navbar");
toggle.onclick = function(){
    if(nav.classList.contains("responsive")){
        nav.classList.remove("responsive");
    }else{
        nav.classList.add("responsive");
    }
}
var dropdown = document.querySelector(".dropdown");
dropdown.onclick = function(e){
    e.preventDefault;
}

//chat menu style

var chat_menu = document.querySelector(".chat-menu");
var chat_header = document.querySelector(".chat-menu .header");
chat_header.onclick = function(e){
    if(chat_menu.classList.contains("show-cm")){
        chat_menu.classList.remove("show-cm");
    }else{
        chat_menu.classList.add("show-cm");
    }
}