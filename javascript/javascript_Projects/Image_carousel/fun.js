// console.log('hi')
// const BtnHero = document.querySelector('.MyBtn');
// BtnHero.textContent="hello"
// BtnHero.setAttribute('id','morsalin')

// document.querySelector('#morsalin').addEventListener('click',()=>{
//     console.log('hi')
// })
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelectorAll(".carouselDiv");
  let i = 1;
  const caousel_prevBtn = document.querySelector("#caousel_prev");
  const caousel_nextBtn = document.querySelector("#caousel_next");
  caousel_prevBtn.addEventListener("click", () => {
    const dataImg = carousel[0].querySelector("img");
    const dataImg3 = carousel[i].querySelector("img").getAttribute("src");
    console.log(dataImg.setAttribute("src", dataImg3));
    if (i === carousel.length ) {
      i = 1;
    } else {
      i++;
    }
    console.log(carousel.length);
  });
  caousel_nextBtn.addEventListener("click", () => {
    const dataImg = carousel[0].querySelector("img");
    const dataImg3 = carousel[i].querySelector("img").getAttribute("src");
    console.log(dataImg.setAttribute("src", dataImg3));
    if (i === carousel.length ) {
      i = 1;
    } else {
      i--;
    }
    console.log(carousel.length);
  });

const btnM = document.querySelector('#MyBtn');

console.log('i')
btnM.style.background='red'




});

// document.addEventListener("DOMContentLoaded", () => {
//   let i = 0;

//   const btn = document.querySelector(".MyBtn");

//   btn.addEventListener("click", () => {
//     console.log("click");
//   });
// });
