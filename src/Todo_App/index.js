const input = document.querySelector('#input')
const btn = document.querySelector('.btn')
const todoListItem = document.querySelector('.todoListItem')

const getTodoList = () => {
    return JSON.parse(localStorage.getItem("todo_list"))
}

const add_todo_LocalStorage = (local_todo_list) => {
    return localStorage.setItem("todo_list", JSON.stringify(local_todo_list));
}

const addtodoDynamic = (Currelement) => {
    let pEle = document.createElement("div")
    pEle.classList.add('todo_list')
    pEle.innerHTML = `<li>${Currelement}</li>
    <button class='Deletebtn'>Delete</button>
    `
    todoListItem.appendChild(pEle)
}

let local_todo_list = getTodoList() || [];

const addTodo = () => {
    const todo_list_Value = input.value.trim()

    if (!local_todo_list.includes(todo_list_Value)) {
        local_todo_list.push(todo_list_Value)
        local_todo_list = [...new Set(local_todo_list)]
        localStorage.setItem('todo_list', JSON.stringify(local_todo_list))

        if (todo_list_Value === '') {
            alert('Please enter a todo')
            return;
        }
        addtodoDynamic(todo_list_Value)
        input.value = ''
    } else {
        alert('Todo already exists')
        input.value = ''
    }

}

const showList = () => {
    local_todo_list.forEach(Currelement => {
        addtodoDynamic(Currelement)
    });
}
showList()

const removeTodo = (e) => {
    const todotoRemove = e.target;
    let todolistContent = todotoRemove.previousElementSibling.innerHTML;
    let parentEle = todotoRemove.parentElement;
    local_todo_list = local_todo_list.filter(Currtodo => {
        return Currtodo !== todolistContent.toLowerCase()
    });
    add_todo_LocalStorage(local_todo_list)
    parentEle.remove()
}
todoListItem.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('Deletebtn')){
        removeTodo(e)
    }
})

btn.addEventListener('click', () => {
    addTodo()
});