// const myFun = (text) => {
//   return [0] * text;
// };

// console.log(myFun(59));

// a = [0 * 4] + 5464;
// console.log(a);

// const randomText = "djsdlfkdsmfkjfdjcidhjsdhf";

// const mekeRandom = (text) => {
//   let list = randomText.length;
//   let result = '';
//   console.log(result)
//   for (let i = 0; i < list; i++) {
//       result += randomText.charAt(Math.floor(Math.random() * list))
//   }
//   return result;
// };

// mekeRandom(58)

// console.log(randomText.charAt(5))

// for (let i = 0; i < randomText.length; i++) {
//     console.log(randomText.charAt(i).toString(36).substring())
// }

// const d = randomText.charCodeAt(1)
// console.log(d)

// var s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// // var d = s.split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); });
// // console.log(d)

// // btoa(Math.random()).slice(0, 5);
// // btoa(+new Date).slice(-7, -2);
// // btoa(+new Date).substr(-7, 5);

// console.log(Date.now(2021).toString().slice(0,5))

// // // Using Math.random and Base 36:
// // console.log(Math.random().toString(36).slice(-5));

// // // Using new Date and Base 36:
// // console.log((+new Date).toString(36).slice(-5));

// // // Using Math.random and Base 64 (btoa):
// // console.log(btoa(Math.random()).slice(0, 5));

// // // Using new Date and Base 64 (btoa):
// // console.log(btoa(+new Date).slice(-7, -2));
// // console.log(btoa(+new Date).substr(-7, 5));

// function randomString(len, charSet) {
//     charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var randomString = '';
//     for (var i = 0; i < len; i++) {
//         var randomPoz = Math.floor(Math.random() * charSet.length);
//         randomString += charSet.substring(randomPoz,randomPoz+1);
//     }
//     return randomString;
// }
// console.log(randomString(6))

// function randomstring(L) {
//   var s = '';
//   var randomchar = function() {
//     var n = Math.floor(Math.random() * 62);
//     if (n < 10) return n; //1-10
//     if (n < 36) return String.fromCharCode(n + 55); //A-Z
//     return String.fromCharCode(n + 61); //a-z
//   }
//   while (s.length < L) s += randomchar();
//   return s;
// }
// console.log(randomstring(5));

// function makeR(text){
//     const sl = s.length;
//     const results = "";
//     for (let i = 0; i < sl; i++) {
//         var randomPoz = Math.floor(Math.random() * sl.length);
//         results += charSet.substring(randomPoz,randomPoz+1);
//     }
//     return results;

// }
// console.log(makeR(5))

// const makeFun={
//   clg:function(text){console.log(text)}
// }

// window = makeFun;

// console.log(window)

// console.log(window.path)

// window.a = 5;

// window.obj = {
//   main: function(text){console.log([text])}
// };

// console.log(a)
// console.log(window)

// obj.main('morsalin')

// =================================================================================================
// canvas Learn here make man with context api

// const canvas = document.getElementById("canvas1");

// const context = canvas.getContext("2d");

// context.fill();
// context.stroke();

// context.font = "20px sans-serif";
// context.textAlign = "center";
// context.strokeStyle = "lightgray";
// context.fillStyle = "green";

// context.lineWidth = 3;

// context.rect(75, 75, canvas.width - 150, canvas.height - 150);
// let msg = "2D Drawing";

// context.fillText(msg, canvas.width / 2, 100);

// // context.strokeText(msg, canvas.width / 2, 100);

// context.strokeStyle = "#FFFFFF";
// context.lineWidth = 2;
// context.beginPath();
// context.arc(200, 140, 20, 0, Math.PI * 2);
// context.moveTo(200, 160);
// context.lineTo(200, 220);
// context.moveTo(180, 300);
// context.lineTo(185, 260);
// context.lineTo(200, 220);
// context.lineTo(215, 260);
// context.lineTo(220, 300);
// context.moveTo(240, 130);
// context.lineTo(225, 170);

// context.lineTo(200, 170);
// context.lineTo(175, 180);
// context.lineTo(170, 220);
// context.stroke();

// let msg2 = "its quite easy";
// context.font = "24px Arial";
// context.fillText(msg2, canvas.width / 2, 330);
// // context.strokeText(msg2, canvas.width / 2, 330);

// let myText = "Pip-Pipo";
// context.fillText(myText, canvas.width / 2, 50);

// ===============================================================
// make grid with context
// const canvas = document.getElementById("canvas1");

// const context = canvas.getContext("2d");
// context.fill();
// context.stroke();

// context.font = "30px sans-serif";
// context.fillStyle = "black";
// context.rect(70, 70, canvas.width - 150, canvas.height - 150);

// context.lineWidth = 10;
// context.strokeStyle = "gray";

// // context.strokeStyle = "#00FF00";
// // context.lineWidth = 0.25;

// context.strokeStyle = "#00FF00";

// for (var x = 0; x < canvas.width; x += 10) {
//   context.beginPath();
//   context.moveTo(x, 0);
//   context.lineTo(x, canvas.height);
//   context.lineWidth = x % 50 == 0 ? 0.5 : 0.25;
//   context.stroke();
// }
// for (var y = 0; y < canvas.height; y += 10) {
//   context.beginPath();
//   context.moveTo(0, y);
//   context.lineTo(canvas.width, y);
//   context.lineWidth = y % 50 == 0 ? 0.5 : 0.25;
//   context.stroke();
// }

// console.log(Math.PI)
// console.log(Math.random());
// console.log(Math.cos(Math.PI *8))
// console.log(Math.sin(Math.PI * 545656))

// toggle
// const button = document.querySelector('button');

// function fun(){
//     const div1 = document.querySelector('.div1');
//     if(toggle===false){
//         toggle = true;
//         div1.classList.add('div1_toggle')

//     }
//     else{
//         toggle = false;
//         div1.classList.remove('div1_toggle')
//     }
// }
// button.addEventListener('click',fun);

// let toggle =false;

// random text generator;

// function GetText(how_long){
//     var temp = '' , i = 0 ;
//     var list_list = randomText.length;
//     for(i = 0;i<how_long;i++){
//       temp+=randomText.charAt(Math.floor(Math.random()* list_list));
//     }
//     return temp;
// }

// console.log(GetText(49))

// random text generator

// const randomText = "k#df<ji@ejkmc,lk$aj^r.leiCdkfVjdlkfG_jd.s_jf$kd@sj!fr";
// const input = document.querySelector('.input')
// const result_div = document.querySelector('.result');

// input.addEventListener('change', (e) =>{
//     console.log(e.target.value)
//      const data = main(e.target.value)
//      console.log(data);
//      result_div.textContent=data;

// })

// function main(count) {
//   let value = "";
//   for (i = 0;i < count;i++) {
//     value+=randomText.charAt(Math.floor(Math.random()*randomText.length))
//   }
//   return value;
// }

// localStorage;

// localStorage.setItem('name','john');
// sessionStorage.setItem('name','jhon')
// const is_person = localStorage.getItem('name')

// const person = localStorage.getItem('name');

// if(person === is_person){
//   console.log('you are allowed')
// }else{
//   console.log('you are not allowed')
// }

// const datas_id = ['1','2','3','4','5']


// fetch data and show from api
class FetchData {
  constructor(url, selector) {
    this.url = url;
    this.selector = selector;
  }
 async showData() {
    const container = document.querySelector(this.selector);

    const url = this.url;

  await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const mapData = data.map((data, id) => {
          return `
            <div class="title">
            ${data.title}
            </div>
        `;
        });
        container.innerHTML = mapData.join("");
      })
      .catch((err) => err.message);
  }
}

// make a object of fetchData class
fetchDataFromApi = new FetchData("https://jsonplaceholder.typicode.com/posts",".container");

// show the result
fetchDataFromApi.showData()


