/** @format */

document.addEventListener('DOMContentLoaded', () => {
 const form = document.querySelector('#form');
 const input = document.querySelector('#input');
 const ul = document.querySelector('#ul');

 const dataTodos = JSON.parse(localStorage.getItem('todos'));
 console.log();

 if (dataTodos) {
  addTodo(dataTodos);
 }

 form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
 });

 function addTodo(todoAll) {
  let inputValue = input.value;

  if (todoAll) {
   inputValue = todoAll.text;
   console.log(todoAll);
  }

  if (inputValue) {
   const li = document.createElement('li');
   if (todoAll && todoAll.completed) {
    li.classList.add('compleated');
   }

   li.innerText = inputValue;

   ul.appendChild(li);

   li.addEventListener('click', () => {
    li.classList.toggle('compleated');
    updateTodo();
   });

   li.addEventListener(
    'contextmenu',
    function (ev) {
     ev.preventDefault();
     li.remove();
     updateTodo();
    },
    false
   );

   input.value = '';
  }
 }

 function updateTodo() {
  const allTodosLi = document.querySelectorAll('li');
  const todo = [];

  allTodosLi.forEach((todos) => {
   todo.push({
    text: todos.innerText,
    completed: todos.classList.contains('compleated')
   });
  });

  localStorage.setItem('todos', JSON.stringify(todo));
 }
});
