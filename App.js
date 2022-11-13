/** Global **/
const holdUpdate = document.getElementById('holdUpdate');
const btnUpdate = document.getElementById('btnUpdate');
const inputUpdate = document.getElementById('inputUpdate');
const holdAdd = document.getElementById('holdAdd');
const btnAdd = document.getElementById('btnAdd');
const inputAdd = document.getElementById('inputAdd');
const form = document.getElementById('form');
const todoApp = document.querySelector('.todo-app');



window.onload = function(){
    form.addEventListener('submit', function(e){ e.preventDefault(); });
    holdUpdate.style.display = 'none';
    btnAdd.addEventListener('click', addTodo);
    inputUpdate.addEventListener('change', (e) => {
        inputUpdate.value = e.target.value;
    });
    // btnUpdate.addEventListener('click', saveUpdateTodo());
}

// addTodo
function addTodo(){
    let inputVal = inputAdd.value;
    let id = Math.floor( Math.random() * 10000 );

    const todo = document.createElement('div');
    todo.setAttribute('id', id);
    todo.classList.add('todo-row');
    todo.innerHTML = `
        <div class='todo todo${id}'> ${inputVal}</div>
        <div class='icons'>
            <button class='edit-icon' id='update${id}' onClick='updateTodo(${id})'>Edit</button>
            <button class='delete-icon' id='delete${id}' >Delete</button>
        </div>
    `;
    todo.querySelector('.delete-icon').onclick = () => {
        todo.remove();
    }
    if( inputVal.length >= 5 ){
        todoApp.appendChild(todo);
        inputAdd.value = '';
    }
}

// updateTodo
function updateTodo(id){
    holdAdd.style.display = 'none';
    holdUpdate.style.display = 'block';
    let idTodo = `.todo${id}`;
    let updateVal = document.querySelector(idTodo).textContent;
    inputUpdate.value = updateVal;
    inputUpdate.setAttribute('data-todo', id);
    btnUpdate.addEventListener('click', saveUpdateTodo);
}

function updateInput(newVal){
    inputUpdate.value = newVal;
}

// saveUpdateTodo
function saveUpdateTodo(){
    let getTodo = inputUpdate.getAttribute('data-todo');
    console.log(getTodo);
    if( inputUpdate.value !== '' ){
        let editTodo = `.todo${getTodo}`;
        let todoUpdateVal = document.querySelector(editTodo);
        todoUpdateVal.textContent = inputUpdate.value;
        holdUpdate.style.display = 'none';
        holdAdd.style.display = 'block';
    }
}








