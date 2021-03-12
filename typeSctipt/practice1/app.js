/** @format */
var width = 0;
var el = document.querySelector('.border');
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
var overlay = document.getElementById("overlay");
window.addEventListener('load', function () {
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 500);
});
