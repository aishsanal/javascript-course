const todoList = [];
renderTodoList();
function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const dateElement = document.querySelector(".js-date");
    const name = inputElement.value;
    const dueDate = dateElement.value;
    
    todoList.push({name, dueDate});
    inputElement.value = '';
    dateElement.value = '';
    renderTodoList();

}

function renderTodoList(){
    let todoListHtml = '';
    for(let i = 0; i < todoList.length; i++) {
        const todoElement = `
            <div>${todoList[i].name}</div>
            <div>${todoList[i].dueDate}</div>
            <button onclick="
                deleteItem(${i});
            " class="delete-button">Delete</button>
        `;
        todoListHtml+=todoElement;
    }
    document.querySelector('.js-todoList').innerHTML = todoListHtml;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    renderTodoList();
}