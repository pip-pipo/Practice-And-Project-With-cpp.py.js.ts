/** @format */

const input = document.querySelector("input")
const ol = document.querySelector("#ol")
const form = document.querySelector("form")

// make event
form.addEventListener("submit", submitForm)

// event handle
function submitForm(e) {
 e.preventDefault()
 let inputValue = input.value;
 let DataFromLocalStorage = localStorage.getItem("todos")

 let taskObj;
 if (DataFromLocalStorage == null) {
  taskObj = [];
 } else {
  taskObj = JSON.parse(DataFromLocalStorage)
 }

 if(inputValue.length <= 100){
       taskObj.push(inputValue)
 };



 localStorage.setItem("todos", JSON.stringify(taskObj))
 addItemInUl(taskObj);
}

// set data to ul or ol;
function addItemInUl(taskObj) {
 let allData = taskObj;
 
 if (allData) {
  const allTodoFromLocalStorage = allData.map((value, index) => {
   return  `<li data="${index}">${value}</li>`;
  })

  ol.innerHTML = allTodoFromLocalStorage.join("")
 };

const li = ol.querySelectorAll('li');

 li.forEach(item=>{
       item.addEventListener('click',()=>{
             item.classList.toggle('compleate');
             item.setAttribute('title',"Right click to delete")
       });
       item.addEventListener("contextmenu",(e)=>{
           
             item.remove();
       })
 })

}

// load all data from localstorage
window.addEventListener("load", () => {
 let DataFromLocalStorage = JSON.parse(localStorage.getItem("todos"))
 addItemInUl(DataFromLocalStorage)
});
