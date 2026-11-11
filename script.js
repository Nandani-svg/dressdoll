const go = document.getElementById("letsgo");
const main = document.getElementById("main");
const arrow = document.getElementById("arrow");
const text = document.getElementById("h1");
const doll = document.getElementById("doll");
const head = document.getElementById("head");
const skincolor = document.getElementById("color");
const hairs = document.getElementById("hair");
const dresses = document.getElementById("clothes");
const d1 = document.getElementById("dress1");
const d2 = document.getElementById("dress2");
const d3 = document.getElementById("dress3");
const d4 = document.getElementById("dress4");
const d5 = document.getElementById("dress5");
const h1 = document.getElementById("hair1");
const h2 = document.getElementById("hair2");
const h3 = document.getElementById("hair3");
const h4 = document.getElementById("hair4");
const h5 = document.getElementById("hair5");
let a = false;
let h = false;
let c = false;
go.addEventListener("click", ()=>{
main.style.opacity = "1";
go.style.opacity = "0";
text.style.opacity = "0"
go.style.pointerEvents = "none";
text.style.pointerEvents = "none";
})
skincolor.addEventListener('input', (e)=>{
    head.style.backgroundColor = e.target.value;
})
dresses.addEventListener("click",()=> {
 c = true;
 h = false;
 dresses.disabled = true;
 hairs.disabled = false;
})
hairs.addEventListener("click", ()=>{
c = false;
h = true;
dresses.disabled = false;
hairs.disabled = true;
})