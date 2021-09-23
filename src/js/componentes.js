
import {Todo} from '../classes/todo.class'
import {todoList} from '../index'
//Referencias en el html 
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltro = document.querySelectorAll('.filtro')

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

    if(nombreElemento.includes('input')){//click en el check
        todoList.marcaCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){//click en el botton

        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    
    console.log(todoList);
});

btnBorrar.addEventListener('click', ()=>{

    
    todoList.eliminarCompletados();
    for(let i = divTodoList.children.length-1; i>=0; i--){
        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed') == true){
            divTodoList.removeChild(elemento);
        }
    }
    

})

ulFiltros.addEventListener('click',(event)=>{

    
    const filtro = event.target.text;

    anchorFiltro.forEach(elem => elem.classList.remove('selected'))
    event.target.classList.add('selected');

    if(!filtro){
        return;
    }

    for(const elemento of divTodoList.children){
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');//recordar que completado solo exite dento del scope {}

        switch(filtro){

                case 'Pendientes':
                    
                    if(completado){
        
                        elemento.classList.add('hidden');
                    }
                break;
                case 'Completados':
                    if(!completado){
                        elemento.classList.add('hidden');
                    }
                break;
        
            }
        
    }

    

})


