 const text = "yarr I Like you more than I have ever found a way to say to you.🥰🤩 Don't take seriously chill 😎😜 yar  am sorry i have'nt taken permission from you for using your pic 👤";

let index = 0;
let time = 300;

function writeText(){
    const write = document.querySelector('.write');
  write.innerHTML = text.slice(0,index);
  index++;
  if(index>text.length -1){
    index = 0;
    time = 100
  }
}

setInterval(writeText,time)