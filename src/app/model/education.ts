export class Education {

    id?:number;
    institucion:string;
    carrera:string;
    fechaInicio:string;
    fechaFin:string;

    constructor(institucion:string, carrera:string, fechaInicio:string, fechaFin:string){

        this.institucion = institucion;
        this.carrera = carrera;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
