
export class TodoList{

    constructor(){
        this.todos =[];
    }

    nuevoTodo(todo){

        this.todos.push(todo);

    }

    eliminarTodo(id){

        console.log(id);
        this.todos.splice(id,1);
        

    }

    marcaCompletado(id){

    }


    eliminarCompletados(){
        
    }
}