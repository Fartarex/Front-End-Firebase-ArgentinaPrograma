export class ModeloAllExperiencias {
    id:string;
    titulo:string;
    empresa:string;
    personaId:string = '1';
    fechas:string;
    descripcion:string;

    constructor(id:string,titulo:string,empresa:string,fechas:string,descripcion:string){     
         this.id = id;
         this.titulo = titulo;
         this.empresa = empresa;
         this.fechas = fechas;
         this.descripcion = descripcion;
    }
}