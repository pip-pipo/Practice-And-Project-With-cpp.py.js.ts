// var i = 0;
// let i = 0;
// const i = 0;


// let isUserWriting = true;
// while(isUserWriting){
//         let data  = window.prompt("what is user name");
//         console.log(data);
// }
let object =new Object();

object.constructor=function(){
    this.name = 'moresalin'
}

object.man = 'helo';
object.hi =function(){
    return this.name
}

console.log(object.hi());