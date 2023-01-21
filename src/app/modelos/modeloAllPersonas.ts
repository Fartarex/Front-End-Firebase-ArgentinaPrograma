export class ModeloAllPersonas {
id?:string;
nombre:string;
apellido:string;
domicilio:string;
telefono:string;
correo:string;
sobre_mi:string;
url_foto:string;
contrasena:string;
titulo:string;
edad:string;
cumpleanos:string;
nacionalidad:string;
cv:string;

constructor(nombre:string,apellido:string,domicilio:string,telefono:string,correo:string,sobre_mi:string,url_foto:string,contrasena:string,titulo:string,edad:string,cumpleanos:string,nacionalidad:string,cv:string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.domicilio = domicilio;
    this.telefono = telefono;
    this.correo = correo;
    this.sobre_mi = sobre_mi;
    this.url_foto = url_foto;
    this.contrasena = contrasena;
    this.titulo = titulo;
    this.edad = edad;
    this.cumpleanos = cumpleanos;
    this.nacionalidad = nacionalidad;
    this.cv = cv;
}
}