/** @format */

// Question 1: Array Sort Comparison1

// const arr1 = [1,2,3,4,5,6];
// const arr2 = [ 7,8,9,10,11];

// console.log(
//     arr1.sort() === arr1,
//     arr2.sort() == arr2,
//     arr1.sort() === arr2.sort()
// );
// const total  = Number(arr1.sort().join('+'));
// console.log(typeof(total));
// console.log(total+1);

// Question 2: A Set of Objects

// const myset = new Set([{a:1},{b:1},{a:3},{b:4,a:3,a:5}]);
// const result = [...myset];
// const meObj = [{a:3,a:5},{a:6}]
// console.log(result);
// console.log(meObj);

// Question 3: Deep Object Mutability

// const user = {
//     name: 'Joe',
//     age: 25,
//     pet: {
//         type: 'dog',
//         name: 'Buttercup',
//     },
// };

// for (keys in user) {
//     console.log(keys);
//     console.log(typeof(keys));
//     if (typeof(keys) === 'object') {
//         console.log('yes');
//     } else {
//         console.log('not');
//     }
// }

// const data = [];
// data.push(user)

// for(let i = 0; i<data.length;i++){
//     data.map((value,index,arr)=>{
//         console.log(value[i]);
//     })
// }

// Object.freeze(user);
// Object.freeze(user.pet)

// user.pet = 'pipo';
// user.pet.name = 'pipo-mutable nested'

// console.log(user.pet);
// console.log(user.pet.name);

// Question 4: Prototypal Inheritance

// function Dog(name){
//     this.name=name;
//     this.speak =function(){
//         return 'woof'
//     }
// }
// const dog = new Dog('Pogo');

// Dog.prototype.speak=function(){
//     return 'arf'
// }

// console.log(dog.speak());

// Question 5: Promise.all Resolve Order

// const all = Promise.all([timer('first'),timer])

// const timer = a => {
//   return new Promise(res =>
//     setTimeout(() => {
//       res(a);
//     }, Math.random() * 100)
//   );
// };

// const all  = Promise.all([timer('first'),timer('seconde')]).then(data=>{
//     console.log(data);
// })

// timer("morsalin").then(data=>console.log(data))

// console.log(Math.random()*100);
// console.log(all);

// Question 6: Reduce Math

// const arr = [x => x * 1, x => x * 2, x => x * 3, x => x * 4];

// console.log(x=>x*1);

// console.log(arr[0](20));

// const myArray = [x=>x*1,x=>x*2,x=>x*3];

// const b = myArray.reduce((agg,v,i,arr)=>agg+v(agg),1);
// console.log(b);

// const arr = [x => x * 1, x => x * 2, x => x * 3, x => x * 4];

// console.log(arr.reduce((agg, el) => agg + el(agg), 1));

// 1 + 1 * 1 = 2 (value of aggregator in next iteration)
// 2 + 2 * 2 = 6 (value of aggregator in next iteration)
// 6 + 6 * 3 = 24 (value of aggregator in next iteration)
// 24 + 24 * 4 = 120 (final value)

// const func = [
//  function () {
//   return 'hi how are you i am function 1';
//  },
//  function () {
//   return 'hi how are you i am function 2';
//  }
// ];

// console.log(func[1]());

// Question 7: Short-Circuit Notification(s)

// const notification = 1;
// console.log(`You have ${notification} notification${notification !== 1 && 's'}`)

// const arr1 = [{firstname:'hell'}];
// const arr2 = [...arr1];
// arr2[0].firstname = 'me'
// console.log(arr2);

// const obj = {id:{morsalin:'morsalin'}};
// const obj1 = {...obj};
// console.log(obj1);

// 01608431378
// Tonima!%100

// Question 9: Array Method Binding

// const map = ['a','b','c',',df,','df'].map.bind([1,23,4,5,6,3]);
// map(el => console.log(el));

// Question 10: Set Uniqueness and Ordering

// const arr = [...new Set([3, 1, 2, 3, 4])];
// console.log(arr.length, arr[2]);

// function  sum(a,b,c) {
//    return a+b+c;
// }
// console.log(sum(29,4,5))

// let data = {
//     name:undefined,
//     roll:null,
//     class:'10',
// };

// console.log(data?.name);
// console.log(data?.roll);
// console.log(data?.class);

// function sum(x){
//     return(y)=>{
//         console.log(y+x);
//         return(z)=>{
//             console.log(z+y);

//             return x+y+z;
//         }
//     }
// }

// console.log(sum(2)(3)(4));

// function fx(x){
//   return (y) => {
//     return (z) => {
//       return (c) => {
//         return x+y+z+c;
//       }
//     }
//   }
// }

// const simplifyFX = fx(25);
// simplifyFX(1)(2)(3)
// >31

// const student = {
//     name: "Rahul",
//     showName: function(friend1, friend2){
//         console.log(this.name);
//         console.log(this.hero);
//         console.log(friend1);
//         console.log(friend2);
//     },
//     main:function(){
//       console.log(this.name);
//     }
// }
// student.main()
// student.showName.call({name: "Rahfgful",hero:"hello" },"John", "Jane");
// Rahul
// John
// Jane

// const student = {
//     name: "Rahul",
//     showName: function(){
//         console.log(this.name);
//     }
// }
// const greetStudent = student.showName.bind({
//     name: "Rahul from Bind"
// })
//  greetStudent(); // Rahul from Bind)

// class MakeRandom {
//   constructor() {
//     this.randomFirstNumber = 0;
//     this.randomSecondNumber = 0;
//     this.randomTherdNumber = 0;
//     this.randomLastNumber = 0;
//     this.executiontimes = 0;
//   }
//   makeRandom(table) {
//     return (
//       (table[3] * table[0] - table[2] * table[1]) /
//       Math.sqrt(
//         (table[2] + table[3]) *
//           (table[0] + table[1]) *
//           (table[1] + table[3]) *
//           (table[0] + table[2])
//       )
//     );
//   }

//   Random(intNumber, lastIntNumber) {
//     if (intNumber && lastIntNumber) {
//       return Math.floor(this.makeRandom([lastIntNumber,intNumber,lastIntNumber,lastIntNumber]));
//     } else {
//       let execution;
//       if (this.executiontimes !== 0) {
//         execution = this.executiontimes;
//         this.randomSecondNumber++;
//         this.randomFirstNumber++;
//         this.randomLastNumber++;
//       } else {
//         const executiontimesRandom = this.executiontimes;
//         execution = 1;
//         this.randomSecondNumber++;
//         this.randomFirstNumber++;
//         this.randomLastNumber++;
//       }
//       return this.makeRandom([
//         execution,
//         this.randomFirstNumber,
//         this.randomLastNumber,
//         this.randomSecondNumber,
//       ]);
//     }
//   }
// }

// const Random = new MakeRandom();
// console.log(Random.makeRandom([34, 43, 34, 34]));
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random());
// console.log(Random.Random(0,6));
// console.log(Random.Random(0,6));
// console.log(Random.Random(0,6));
// console.log(Random.Random(0,6));
// console.log(Random.Random(0,6));
// console.log(Random.Random(0,6));



function removeSpecificArrayIndex(array,index){
    return array.slice(0,index).concat(array.slice(index+1))
}

console.log(removeSpecificArrayIndex(['a','4','c','v'],1));

console.log('6'.padStart(5,'0'));
let data  = [];
let datas = "Secretarybirds specialize in stomping".split(" ");

console.log(data.push(datas));
console.log(data);


console.log(-Infinity);

console.log(Math.max(3,4,2,5));



function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if(number > result) result = number;
    }
    return result;
}

console.log(max(333332,44444444,5,6,333));