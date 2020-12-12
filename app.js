//Select DOM
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
const todoCounter = document.getElementById('tasks-counter');

//List array
let todos = [];

function initializeTodoList() {


    todoButton.addEventListener('click',function(event){
        const text = todoInput.value;
    
        const todo = {
            text: text,
            id: Date.now(),
            done: false
        }
        addTodo(todo);
        todoInput.value="";
    });

    document.addEventListener('click', handleOnClick);
    
    document.addEventListener('keyup', function (event) {
        const text = event.target.value;
        if (event.key === 'Enter') {
            const todo = {
                text: text,
                id: Date.now(),
                done: false
            }

            addTodo(todo);
            todoInput.value="";
        }
        
    });
    renderTodo();
}

function todoDOM(todo) {

    const list = document.createElement('list');
    list.innerHTML = `<label for="${todo.id}">${todo.text}</label>
    <input type="checkbox" id="${todo.id}" ${todo.done ? 'checked' : ''} class="checkbox">
    <button data-id="${todo.id}" class="delete">Delete</button>
    `;

    todoList.appendChild(list);
}


function renderTodo() {
    todoList.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        todoDOM(todos[i]);
    }

    todoCounter.innerHTML = todos.length;
}


function addTodo(todo) {
    if (todo) {
        todos.push(todo)
        renderTodo();
        return;
    }
}

function deleteTodo(e) {
    const filterTask = todos.filter(todo => todo.id !== e);

    todos = filterTask;
    renderTodo();
}

function checkTodo(id) {
    const index = todos.findIndex(function (todo) {
        return todo.id === id
    });
    todos[index].done = !todos[index].done;
}

function handleOnClick(e) {
    if (e.target.className === 'delete') {
        const id = Number(e.target.dataset.id);
        deleteTodo(id);
    }
}




initializeTodoList();
