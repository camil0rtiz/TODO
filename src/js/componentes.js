
import {Todo} from '../classes/todo.class'
import {todoList} from '../index'
//Referencias en el html 
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {
    //backtick nos permite insertar como un string en multilinea
    const htmlTodo = `<li class="${(todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : '' }>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;
    //creamos el elemento html
    //necesitamos crear un elemento que contenga lo que esta dentro del html

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

//eventos

txtInput.addEventListener('keyup', (event)=>{

    if(event.keyCode === 13 && txtInput.value.length > 0){

        const nuevoTodo = new Todo(txtInput.value);
        
        todoList.nuevoTodo(nuevoTodo);

        console.log(todoList);

        crearTodoHtml(nuevoTodo);

        txtInput.value = '';
    }

});

divTodoList.addEventListener('click',(event)=>{

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){
        todoList.marcaCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
    
    console.log(todoList);
})