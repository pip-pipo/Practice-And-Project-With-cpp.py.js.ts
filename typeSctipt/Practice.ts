// interface User {
//     name: string,
//     id?:number,
// }

// var user:User ={
//     name:"morsalin",
//     id:3434,
// }


// console.log(user)


// interface MakeToggle {
//     isToggle:boolean,
//     htmlElement:string,
// }

// class MakeToggle{
//     isToggle:boolean;
//     htmlElement:string;

//     constructor(isToggle:boolean, htmlElement:string,){
//         this.isToggle = isToggle;
//         this.htmlElement=htmlElement;
//     }

//     MakeToggle(htmlElement:string,isToggle:boolean){
//         if(htmlElement){
//             if(isToggle) return false
//             else return true
//         }
//     }

// }

// var users:MakeToggle = new MakeToggle(true,"sting")


// console.log(users.MakeToggle("morsalin",false))



// type myBool = true | false;

// console.log()

// var foo = "morsalin";
// console.log(typeof foo)
// if(typeof foo === "number") console.log("foo is a number")

// const mains : Array<string> = ['morsalin','foo']

// interface BackendTypes  {
//     add : (obj:string) =>void;
// }

// interface Point {
//     x:number;
//     y:number;
// }

// function logPoint(p:Point){
//     return p.x + p.y;   
// }

// console.log(logPoint({x:34,y:45}));
// const rect = { x: 33, y: 3, width: 3, height: 80 };
// logPoint(rect);



// function max(...numbers:number[]):number{
//         let result = 0;
//         for(let isBig of numbers) {
//             if(isBig>result) result=isBig;
//         }
//         return result;
// }

// console.log(max(3,4,5,6))

// console.log(Math.PI)


// function randomPoint(radius){
//     let angle =  Math.random() * 2 * Math.PI
//     return {x:radius * Math.cos(angle), y:radius * Math.sin(angle)}
// }

// console.log(randomPoint(8))

// console.log(Math.floor(randomPoint(88).y))


// let count = 0 ,total = 0;
// while(count <= 10){
//   total+=count;
//   console.log(total)
//     count +=1;
// }

// function call(){
//     console.log('pinted call');
    
// }


// if(3%2 === 1){
//     call()
// }

type A=number

function add<A>(a:number = 3 ):number | A{
    return a*a
}

console.log(add(4))


interface Crazy { name:string};


function newS<Crazy>(a?:number){
    return {name:'morslain'}
}

console.log(newS())

let data:Crazy = {name:"morsalin"}