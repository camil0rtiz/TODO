
export class TodoList{

    constructor(){
        //this.todos =[];//ya no necesita esta linea puesto que la llamamos con le método cargarLocalStorge cuando es se va al else
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){

        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcaCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){//nombre del local storage, y lo que le queremos pasar al local storage
        localStorage.setItem('todo',JSON.stringify(this.todos));//Estoy diciendo que transforme mi arreglo de de todos en un json perfecto
    }
    
    cargarLocalStorage(){

        if(localStorage.getItem('todo')){//Siempre revisar si el localStorage no este vacio

            this.todos = JSON.parse(localStorage.getItem('todo'));//si exite inicializamo el objeto con el valor que tiene el localStorage
            //toma un json y lo transforma a su objeto original, es el caso contrario a jason.stringify
        }else{
            this.todos = [];//si no tiene nada crea un array vacio
        }
        
    }
}