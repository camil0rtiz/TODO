
//import { Todo, TodoList } from './classes';//Por defecto busca el index 
import { TodoList } from './classes/todo-list.class.js';
import { Todo } from './classes/todo.class.js'
import { crearTodoHtml } from './js/componentes.js';

import './style.css'


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

todoList.todos.array.forEach(todo => crearTodoHtml(todo));