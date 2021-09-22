
//Referencias en el html 
const divTodoList = document.querySelector('.todo-list');

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