import {fetchFunction,fetch} from './fun.js'
console.log(fetchFunction());
console.log(fetch());

const fetchFunctionClass = fetchFunction(); 

fetchFunctionClass.then((data) => {
    console.log(data);
}).catch((err) => {console.log(err);})


let numbers = [1,2,3,4,5,6,7,8]
let reverseData = []
// console.log(numbers.slice().reverse());
// let datas = [...numbers].sort().reverse();

// console.log(datas);
// console.log(numbers);

for (let i = numbers.length -1; i >= 0; i--) {
    // console.log(numbers[i]);
    reverseData.push(numbers[i]);

}

console.log(reverseData);


const makeRecursive = (originArray)=>{
    let leftIndex = 0;
    let rightIndex = originArray.length -1;

    while (leftIndex < rightIndex){
        console.log(originArray[leftIndex]);
        let temp = originArray[leftIndex];
        originArray[leftIndex] = originArray[rightIndex];
        originArray[rightIndex] = temp;
        
        leftIndex--;
        rightIndex--;

    }
}

makeRecursive(numbers)


 function customReverse(originalArray) {

  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {

    // Swap the elements with temp variable
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    // Move indices to the middle
    leftIndex++;
    rightIndex--;
  }
}

console.log(customReverse(numbers));