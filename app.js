//Select DOM
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
const todoCounter = document.getElementById('tasks-counter');

//List array
let todos = [];

//Event Listeners function
function initializeTodoList() {

    //Todo button
    todoButton.addEventListener('click',function(){
        const text = todoInput.value;
    
        const todo = {
            text: text,
            id: Date.now(),
            done: false
        }
        addTodo(todo);
        todoInput.value="";
    });

    //delete button
    document.addEventListener('click', handleOnClick);

    //Keyboard Enter
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

//create todo
function todoDOM(todo) {

    const list = document.createElement('list');
    list.innerHTML = `<label for="${todo.id}">${todo.text}</label>
    <input type="checkbox" id="${todo.id}" ${todo.done ? 'checked' : ''} class="checkbox">
    <button data-id="${todo.id}" class="delete">Delete</button>
    `;

    todoList.appendChild(list);
}

//Display Todo
function renderTodo() {
    todoList.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        todoDOM(todos[i]);
    }

    todoCounter.innerHTML = todos.length;
}

//Add Todo
function addTodo(todo) {
    if (todo) {
        todos.push(todo)
        renderTodo();
        return;
    }
}

//Delete todo
function deleteTodo(e) {
    const filterTask = todos.filter(todo => todo.id !== e);

    todos = filterTask;
    renderTodo();
}

//Check Todo
function checkTodo(id) {
    const index = todos.findIndex(function (todo) {
        return todo.id === id
    });
    todos[index].done = !todos[index].done;
}

//Delete todo button
function handleOnClick(e) {
    if (e.target.className === 'delete') {
        const id = Number(e.target.dataset.id);
        deleteTodo(id);
    }
}

initializeTodoList();


