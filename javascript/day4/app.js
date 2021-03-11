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