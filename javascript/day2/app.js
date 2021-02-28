// magic number2
const SECONDS_IN_A_DAY = 86400;
for (let i = 0; i < SECONDS_IN_A_DAY; i++) {}

const arr = [[[["morsalin"]]]];

const d = arr.forEach((array) => {
  array.forEach((array2) => {
    array2.forEach((element) => {
      element.forEach((e) => {
        console.log(e);
      });
    });
  });
});


const arrowFun = (array) => {
    console.log(Array.isArray(array))
  if (Array.isArray(array))
   {arrowFun(array[0]);}
    return array;
};

console.log(arrowFun(arr))

const man = ""?"isMan"+'  ===':"" || "morsalin";

console.log(man);
