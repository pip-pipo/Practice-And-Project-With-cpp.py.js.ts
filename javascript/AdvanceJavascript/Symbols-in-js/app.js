// // premitives & reference data type 

// var a = 5;
// var b= a;

// a =6
// console.log(a)
// console.log(b)


// var obj = {name:"morsalin"};

// var obj2 = obj;

// obj.name="hero"

// console.log(obj)

// console.log(obj2)


// // primitives values
// // String,Number,Boolean,Null,undefined,Symbol
// // reference values
// // Object,Array,Function,Data,etc


// var arr = [1,23];

// var c = arr;
// // arr.push('helo') mutate or changeing
// // arr = []  assingment
// console.log(arr)
// console.log(c)



// var language = {
//     name:"javascript",
//     estd:"1995",
//     libraries:["react","vue","jquery"],
// }

// // var language2 = _.cloneDeep(language);

// language.libraries.push("angular")
// language.founder = "Brendan Eich";


// // console.log(language2)
// console.log(language)

// var c = 'morsalin';

// console.log(c.charAt(3))


// console.log('hello world')
// var a = 'morsalin'
// var b = new String(a);
// console.log(b)
// console.dir(b)

// let c = ['morsalin'];

// function change(a){
//    a[0] = []
// }

// change(c);
// console.log(c)


// let c = {name:'morsalin'}

// function change(a){
//    a.name= {}
// }

// console.log(c)
// change(c);
// console.log(c)

// symbols in javascript

// var symbol1 = Symbol();
// var symbol2 = Symbol("man");


// console.log(symbol1===symbol2)


// console.log(symbol2)
// console.log()

// var obj = {
//    name:'morsalin',
//    [symbol2]:"hero",
// };

// console.log(obj['name'])

function main(){
   var sym = Symbol('hero')
   return {
      modify(obj){
         obj[sym] = true;
         console.log(obj)
      },
      output(obj){
         return obj[sym]
      }
   }
}

var value = main();

let obj=  {a:5,b:6,c:6};

console.log(value.modify(obj))
console.log(value.output(obj))


console.log(obj)

delete obj["Symbol(hero)"]
console.log(obj)

// var p = {a:4,b:5};

// delete p["a"];

// console.log(p)

