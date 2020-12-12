//Select DOM
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
const tasksCounter = document.getElementById('tasks-counter');

let todos = [];

function addTodos(todos){
    const list = document.createElement('list');
    list.innerHTML = `<label for="${todos.id}">${todos.text}</label>
    <input type="checkbox" id="${todos.id}" ${todos.done?'checked':''} class="checkbox">
    <img src="bin.svg" class="delete" data-id="${task.id}"/>
    `;
    todoList.appendChild(list);
}