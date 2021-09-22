
//import { Todo, TodoList } from './classes';//Por defecto busca el index 
import { TodoList } from './classes/todo-list.class.js';
import { Todo } from './classes/todo.class.js'

import './style.css'


const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Aprender GO');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

todoList.eliminarTodo(1);

console.log(todoList);

