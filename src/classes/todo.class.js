export class Todo{

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();//Representa dia y hora completa
        this.completado = false;
        this.creado = new Date()
    }

    
}