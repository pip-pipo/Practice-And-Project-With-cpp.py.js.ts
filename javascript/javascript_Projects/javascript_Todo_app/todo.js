/** @format */

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
let itemCount = 0;

let mytodo = JSON.parse(localStorage.getItem('tood'));

form.addEventListener('submit', submitForm);

function submitForm(e) {
 e.preventDefault();

 addTodo();
}

function addTodo() {
 if (mytodo) {
  const data = mytodo.map((data) => {
   return `
        <li>${data.text}</li>
        `;
  });

  ul.innerHTML=  data.join('');

 }

 let InputValue = input.value;
 


 if (InputValue) {
  const li = document.createElement('li');

  li.addEventListener('click', () => {
   li.classList.toggle('compleate');
  });
  li.innerText = InputValue;
 
  ul.appendChild(li);
  InputValue = '';
 }

 let todos = [];

 const allLi = document.querySelectorAll('li');

 allLi.forEach((todo) => {
  todos.push({
   text: todo.innerText,
   compleate: todo.classList.contains('compleate')
  });
 });
 console.log(todos);

 localStorage.setItem('tood', JSON.stringify(todos));
}
