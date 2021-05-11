// import {fetchFunction,fetch} from './fun.js'
// console.log(fetchFunction());
// console.log(fetch());

// const fetchFunctionClass = fetchFunction(); 

// fetchFunctionClass.then((data) => {
//     console.log(data);
// }).catch((err) => {console.log(err);})


// let numbers = [1,2,3,4,5,6,7,8]
// let reverseData = []
// // console.log(numbers.slice().reverse());
// // let datas = [...numbers].sort().reverse();

// // console.log(datas);
// // console.log(numbers);

// for (let i = numbers.length -1; i >= 0; i--) {
//     // console.log(numbers[i]);
//     reverseData.push(numbers[i]);

// }

// console.log(reverseData);


// const makeRecursive = (originArray)=>{
//     let leftIndex = 0;
//     let rightIndex = originArray.length -1;

//     while (leftIndex < rightIndex){
//         console.log(originArray[leftIndex]);
//         let temp = originArray[leftIndex];
//         originArray[leftIndex] = originArray[rightIndex];
//         originArray[rightIndex] = temp;
        
//         leftIndex--;
//         rightIndex--;

//     }
// }

// makeRecursive(numbers)


//  function customReverse(originalArray) {

//   let leftIndex = 0;
//   let rightIndex = originalArray.length - 1;

//   while (leftIndex < rightIndex) {

//     // Swap the elements with temp variable
//     let temp = originalArray[leftIndex];
//     originalArray[leftIndex] = originalArray[rightIndex];
//     originalArray[rightIndex] = temp;

//     // Move indices to the middle
//     leftIndex++;
//     rightIndex--;
//   }
// }

// console.log(customReverse(numbers));


const usePromises =()=> {
   const data = setTimeout(()=>{

        return 'morsalin'
    },200);
    return data+"moralin";
};

console.log(usePromises());


const data = [{moralin:'morsalin'}]

const Promise = async()=> {
    if(data)
        return setTimeout(() => {    data},200)
    else
     return new Error("Error")
}
console.log(Promise());



const findData = ['morsalin','hi','what are you doing','hi morsalin','what are you doing','man',0,1,2,3,4,5,6,7,8,9]

// const filterData =findData.filter((value,index,arr)=>{
   
//     if(arr.includes("morsalin") == 'morsalin'){
//         console.log("yes"+value);
//     }
// })


function promise(cb ){

    return cb;
}

function resolve(value){
   
        if (value) {
            return value;
        }
   
}


console.log(promise(resolve('moralin')))

const o = Symbol('o')

const obj={

    void:(name)=> {return Symbol(name)},
    [o]:"man", 
}
console.log(obj['Symbol(void)']);
console.log(obj[o]);
console.log(obj.void('morsalin'));

const man = obj.void('man');

const sameobj = {
    man: 'morsslai '
}
console.log(sameobj.man);
console.log(man);