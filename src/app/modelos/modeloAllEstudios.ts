export class ModeloAllEstudios {
id:string;
titulo:string;
programa:string;
fechas:string;
descripcion:string;
personaId:string;

constructor(id:string,titulo:string,programa:string,fechas:string,descripcion:string,personaId:string){
    this.id = id;
    this.titulo = titulo;
    this.programa = programa;
    this.fechas = fechas;
    this.descripcion = descripcion;
    this.personaId = personaId;
 }
} 