export class ModeloAllProyecto {
    id: string;
    titulo:string;
    programa:string;
    fechas:string;
    descripcion:string;
    url_imagen:string;
    url:string;
    personaId:string;
    
    constructor(id: string, titulo:string, programa:string, fechas:string, descripcion:string, url_imagen:string, url:string, personaId:string){
    this.id= id;
    this.titulo = titulo;        
    this.programa = programa;
    this.fechas = fechas;
    this.descripcion = descripcion;
    this.url_imagen = url_imagen;
    this.url = url;
    this.personaId = personaId;      
    }
    }