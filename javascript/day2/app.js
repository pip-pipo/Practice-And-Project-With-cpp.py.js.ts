// magic number2
// const SECONDS_IN_A_DAY = 86400;
// for (let i = 0; i < SECONDS_IN_A_DAY; i++) {}

// const arr = [[[["morsalin"]]]];

// const d = arr.forEach((array) => {
//   array.forEach((array2) => {
//     array2.forEach((element) => {
//       element.forEach((e) => {
//         console.log(e);
//       });
//     });
//   });
// });

// const arrowFun = (array) => {
//     console.log(Array.isArray(array))
//   if (Array.isArray(array))
//    {arrowFun(array[0]);}
//     return array;
// };

// console.log(arrowFun(arr))

// const man = ""?"isMan"+'  ===':"" || "morsalin";

// console.log(man);

// const s = 43E4;
// console.log(s)

// max previuse javascript integet value

// console.log(Math.pow(2,53) -1)

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum)

// console.log(--oldNum)

// console.log(oldNum)

// let eNum = 34983957439n;
// console.log(eNum)
// console.log(++eNum)

// import myfun from './export.js';

// console.log(myfun(19,39))
// Access-Control-Allow-Origin;

// const array = ['morslain','fdf','hello'];
// console.log(array)

// const obj = {
//     'name':6
// }

// console.log(obj?.me())

// const regexp = /[a-c]/g;

// const str = "abacdsabfsdsfd";

// const result = str.matchAll(regexp);

// const val = Array.from(result, (data) => {
//   console.log(data);
//   return data;
// });
// console.log(val);

// for (let i = 0; i < val.length; i++) {
//   const mapfun = val[i].map((value,index) => {
//     return value[index +1];
//   });

//   console.log(mapfun);
// }

// const regx = /(a-c)/g;

// const str = "abc";

// const result = regx.test(str);
// console.log(result)

// const globalD = globalThis.setTimeout(()=>{
//     console.log('morslain')
// },2000)

// console.log(globalD)

// import { myfun,jsonData } from "./export.js";

// console.log(myfun(25, 39));

// const obj = new jsonData();

// const allData = obj.fetchData()

// // console.log(allData[0])

// const dataSelector = document.querySelector('#data');

// const fun =  allData.map((v,i,arr)=>{
//     return `
//     <div>
//     <h1>${v.userId}</h1>
//     <h2>${v.title}</h2>
//     <article>${v.body}</article>
//     </div>
//     `
// })

// dataSelector.innerHTML = fun.join('');

// console.log(import.meta)

// const result = void(1 + 1);
// console.log(result);
// // undefined

// let str = 'morsalin';
// console.log(str.replace('orsa','=,nlea'))

// let whatName = Symbol('showValue');
// console.log(whatName)

// // const whatName =()=>{

// // }

//     var multiplyIt = function(num1, num2) {

//         // So we are returning num1 times num2
//         return (num1 * num2);
//     };

//     /* Now lets see what happens if we call the
//     above function without passing anything in*/
//     console.log(multiplyIt());

//     var multiplyIt = function(num1 = 2, num2 = 5)
//         {
//             return (num1 * num2);
//         };
//     console.log(multiplyIt(30,40));

// const func=(isTrue = false,cb = ()=>'m')=>{
//     return cb(isTrue);
// }

// func()
// console.log(func(true,()=>{}))

// const returns = (a) => {
//   return a+2;
// };

// const main=(data,cb)=>{
//   return  cb(data);
// }


// main(39,(a)=>{
//     return a*4
// })


// console.log(main(40,returns))

// const fs = require('fs');

// const init=(router,cb)=>{
//     const routerMain = router;
//     fs.writeFileSync(__dirname,routerMain)

//    return cb();
// }

// console.log(init('day2',(a)=>{return 'morsalin'}))







