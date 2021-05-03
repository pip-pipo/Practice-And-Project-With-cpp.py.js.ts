// window.addEventListener("load", () => {
//   interface ContentType {
//     id: number;
//     title: string;
//     subTitle: string;
//   }
//   const listOfContent:ContentType[] = [
//     {
//       id: 0,
//       title: "web Developer",
//       subTitle: "lorem ispsul",
//     },
//     {
//       id: 1,
//       title: "Android Developer",
//       subTitle: "lorem ispsul",
//     },
//     {
//       id: 2,
//       title: "Ios Developer",
//       subTitle: "lorem ispsul",
//     },
//     {
//       id: 3,
//       title: "Full-Stack Developer",
//       subTitle: "lorem ispsul",
//     },
//     {
//       id: 4,
//       title: "Custom Developer",
//       subTitle: "lorem ispsul",
//     },
//   ];
//  function makeSlide(listOfContent:ContentType[]):void{
//    var slide = document.getElementById("slide");
//   listOfContent.map((value,index)=>{
//       var newDiv = document.createElement("div");
//       newDiv.innerHTML =`
//       <h2>${value.id}</h2>
//       <h1>${value.title}</h1>
//       <span>${value.subTitle}</span>
//       `;
//       newDiv.setAttribute("class", "slideCss")
//       slide.appendChild(newDiv);
//   })
//  }
//  makeSlide(listOfContent);
// });
// type someThing = {
//   foo:number;
//   bar:string;  
// }
// function takeSomething(args:someThing):{name:string} {
// return {name:"morsalnin"}
// }
// function retuRnSting(){
//   return "some string"
// }
// console.log(takeSomething({foo:3, bar:retuRnSting()}))
// const arr:Array<any>= [
//   "morsalnin",3,"heo",3.54,33*43,"morsalin"
// ];
// console.log(arr)
// // const stringArr:string[] | number[] = ["mo4"]
// const stringArr:(string | number)[] = ["mo4",3,4,"morsalin"]
