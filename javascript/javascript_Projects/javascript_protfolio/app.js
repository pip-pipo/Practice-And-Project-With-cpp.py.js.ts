function createHart(){
    const div = document.createElement("div");
    div.classList.add("heart");
    div.style.left = Math.random()*100 + "vw";
   
    div.innerText="\u{1F49A}";
    document.body.appendChild(div);
}
setInterval(createHart,200)