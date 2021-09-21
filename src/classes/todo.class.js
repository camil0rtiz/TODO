export class Todo {

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();//Represneta dia y hora completa
        this.completado = false;
        this.creado = new Date()
    }
}