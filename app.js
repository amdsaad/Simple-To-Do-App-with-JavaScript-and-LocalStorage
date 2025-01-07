const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => deleteTodo(index));
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function addTodo(e) {
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo === '') return;

    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

renderTodos();

todoForm.addEventListener('submit', addTodo);