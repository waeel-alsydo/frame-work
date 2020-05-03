var menuTrigger = document.getElementById("menu-trigger"),
    container = document.getElementById("container");

    menuTrigger.addEventListener("click", openNav);

 function openNav(){
    container.classList.toggle("change");
};