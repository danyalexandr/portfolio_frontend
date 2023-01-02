export class Persona {

    id?:number;
    nombre:string;
    apellido:string;
    puesto:string;
    acercaDe:string;

    constructor(nombre:string, apellido:string, puesto:string, acercaDe:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.acercaDe = acercaDe;
    }
}
