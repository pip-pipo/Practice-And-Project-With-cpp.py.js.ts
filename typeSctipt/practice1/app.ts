/** @format */

// let width: number = 0;
// const el: HTMLElement = document.querySelector('.border');
// el.addEventListener('mousemove',mouseOver);

// function mouseOver(){
//     el.style.cursor = 'ew-resize';
//     const heigth:number =(el.clientHeight  * 2);
//     const width:number = (el.clientWidth  * 2);
//     el.style.width = `${width}px`;
//     el.style.height = `${heigth}px`
//     console.log('mouseover')

// }

// click whit mouse
// el.addEventListener('mousedown',()=>{
//     // el.removeEventListener('mouseover',mouseOver,false);
//     console.log('mousedown')
// })

// single mouse event triger with html element

// el.addEventListener('mouseover', () => {
//  // el.removeEventListener('mouseover',mouseOver,false);
//  console.log('mouseover');
// });

// every single move capture the triger in dom element
// el.addEventListener('mousemove', () => {
//  // el.removeEventListener('mouseover',mouseOver,false);
//  console.log('mousemove');
// });

// when mouse is leave from the dom element
// el.addEventListener('mouseleave', () => {
//  // el.removeEventListener('mouseover',mouseOver,false);
//  console.log('mouseleave');
// });

// when click in dom target element it's triger
// same like mousedown;

// el.addEventListener('mouseup', () => {
//  // el.removeEventListener('mouseover',mouseOver,false);
//  console.log('mouseup');
// });

// el.addEventListener('resize', () => {
//  // el.removeEventListener('mouseover',mouseOver,false);
//  console.log('mouseleft');
// });

// window.addEventListener('load', () => {
//  let hello: HTMLElement = document.querySelector('#overlay');
//  hello.style.display="none";
// });

// var overlay:HTMLElement = document.getElementById("overlay");

// window.addEventListener('load', function(){
//     setTimeout(()=>{

//         overlay.style.display = 'none';
//     },500)
// })

// interface Hero  {
//     name:string,
//     data:Array<string>,
// }

// function takeDataHero(Hero:Hero){
//     console.log(Hero.name.concat(" salin"))
// }

// takeDataHero({name:"morsalin",data:["morsalin","hero"]})
interface T {
  id: number;
  name?: string;
}

// const data = fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(json=>console.log(json))

const get = (data: T) => {
  setTimeout(() => {
    console.log(data);
    if (data) return data;
    else return console.error("please add some value");
  }, 1000);
};

const allData = get({ id: 3, name: "morsalin" });

console.log(allData);
