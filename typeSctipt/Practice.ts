interface User {
    name: string,
    id?:number,
}

var user:User ={
    name:"morsalin",
    id:3434,
}


console.log(user)


interface MakeToggle {
    isToggle:boolean,
    htmlElement:string,
}

class MakeToggle{
    isToggle:boolean;
    htmlElement:string;

    constructor(isToggle:boolean, htmlElement:string,){
        this.isToggle = isToggle;
        this.htmlElement=htmlElement;
    }

    MakeToggle(htmlElement:string,isToggle:boolean){
        if(htmlElement){
            if(isToggle) return false
            else return true
        }
    }

}

var users:MakeToggle = new MakeToggle(true,"sting")


console.log(users.MakeToggle("morsalin",false))



type myBool = true | false;

console.log()

var foo = "morsalin";
console.log(typeof foo)
if(typeof foo === "number") console.log("foo is a number")

const mains : Array<string> = ['morsalin','foo']

interface BackendTypes  {
    add : (obj:string) =>void;
}

interface Point {
    x:number;
    y:number;
}

function logPoint(p:Point){
    return p.x + p.y;   
}

console.log(logPoint({x:34,y:45}));
const rect = { x: 33, y: 3, width: 3, height: 80 };
logPoint(rect);