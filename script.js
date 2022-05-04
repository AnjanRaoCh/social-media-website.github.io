var settingsMenu = document.querySelector(".settings-menu");
var settingsMenuBtn  = document.getElementById("dark-btn");
function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height")
}

settingsMenuBtn.onclick = function () {
    settingsMenuBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme")=='light') {
        localStorage.setItem("theme","dark");
    }
    else {
        localStorage.setItem("theme","light");
    }
}
if(localStorage.getItem("theme")=='light') {
    settingsMenuBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=='dark') {
    settingsMenuBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme","light")
}
// localStorage.setItem("theme","dark");
// localStorage.getItem("theme");
function loadcontent(){
    var BreakPoint = 480; // pixcel
 
    if($(window).width() < BreakPoint){
        file = "phone.html";
    }else{
        file = "index.html";
    }
    $("#content").load(file);
 }
 
 loadcontent();
 
 $(window).resize(function () {
     loadcontent();
 });


