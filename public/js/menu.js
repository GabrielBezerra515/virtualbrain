let icone = document.querySelector("#menuIcone");
let corpoMenu = document.querySelector(".itemMenu");


function abreMenu(){
corpoMenu.classList.toggle("displayNone");
console.log("aalo")
}

icone.addEventListener("click",abreMenu);

