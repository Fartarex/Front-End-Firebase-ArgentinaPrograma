import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/modeloPersona';
import { ModeloAllPersonas } from 'src/app/modelos/modeloAllPersonas';
import { ModeloAllEstudios } from '../modelos/modeloAllEstudios';
import { ModeloAllExperiencias } from 'src/app/modelos/modeloAllExperiencias';
import { ModeloEstudios } from '../modelos/modeloEstudios.interface';
import { ModeloExperiencias } from '../modelos/modeloExperiencias.interface';
import { ModeloProyecto } from '../modelos/modeloProyecto.interface';
import { ModeloAllProyecto } from '../modelos/modeloAllProyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  URL = 'https://easy-atlanta-fartarex.koyeb.app';

  constructor(private http:HttpClient) { }

  formEliminarPersona: ModeloAllPersonas = {
    nombre:'Removed',
    apellido:'Removed',
    domicilio:'Removed',
    telefono:'Removed',
    correo:'Removed',
    sobre_mi:'Removed',
    url_foto:'https://i.postimg.cc/05Fh1rwk/photo-5062310083454675871-x.jpg',
    contrasena:'https://i.postimg.cc/05Fh1rwk/photo-5062310083454675871-x.jpg',
    titulo:'Removed',
    edad:'Removed',
    cumpleanos:'Removed',
    nacionalidad:'Removed',
    cv:'https://i.postimg.cc/05Fh1rwk/photo-5062310083454675871-x.jpg',
  }

  formPersona: ModeloAllPersonas = {
    nombre: '',
    apellido: '',
    domicilio: '',
    telefono: '',
    correo: '',
    sobre_mi: '',
    url_foto: '',
    contrasena: '',
    titulo: '',
    edad: '',
    cumpleanos: '',
    nacionalidad: '',
    cv: ''
  }

  formExperiencia: ModeloExperiencias = {
    titulo:'',
    empresa:'',
    personaId:'1',
    fechas:'',
    descripcion:''
  }

  formProyecto: ModeloProyecto = {
    titulo:'',
    programa:'',
    fechas:'',
    descripcion:'',
    url_imagen:'',
    url:'',
    personaId:'1'
  }

  formEstudios: ModeloAllEstudios = {
    id:'',
    titulo: '',
    programa: '',
    fechas: '',
    descripcion: '',
    personaId: '1'
  }

  formEstudiosM: ModeloEstudios = {
    titulo: '',
    programa: '',
    fechas: '',
    descripcion: '',
    personaId: '1'
  }
  

  /* Editar, Mostrar y Eliminar PERSONA */
  obtenerTodosLosDatosPersonas(): Observable<ModeloAllPersonas[]>{
    return this.http.get<ModeloAllPersonas[]>(this.URL + '/ver/personas');
  }
  //Como genera problemas eliminar la info. de "persona", prefiero hacer un put y guardarlo.
  eliminarPersona(formEliminarPersona: ModeloAllPersonas): Observable<ModeloAllPersonas>{
    return this.http.put<ModeloAllPersonas>(this.URL + '/update/persona/1', formEliminarPersona)
  }
  editarDatosPersona(formPersona: ModeloAllPersonas): Observable<ModeloAllPersonas>{
    return this.http.put<ModeloAllPersonas>(this.URL + '/update/persona/1', formPersona)
  }


 


  /* Editar, Mostrar, Crear y Eliminar ESTUDIO */
  obtenerTodosLosDatosEstudios(): Observable<ModeloAllEstudios[]>{
    return this.http.get<ModeloAllEstudios[]>(this.URL + '/ver/estudios');
  }
  eliminarEstudio(id: string){
    return this.http.delete<any>(this.URL + '/delete/estudio/' + id)
  }
  nuevoEstudio(formEstudios: ModeloEstudios): Observable<ModeloEstudios>{
    return this.http.post<ModeloEstudios>(this.URL + '/new/estudio', formEstudios)
  }
  editarDatosEstudio(formEstudios: ModeloAllEstudios, id:string): Observable<ModeloAllEstudios>{
    return this.http.put<ModeloAllEstudios>(this.URL + '/update/estudio/' + id, formEstudios)
  }



  

  /* Editar, Mostrar, Crear y Eliminar EXPERIENCIA */
  obtenerTodosLosDatosExperiencia(): Observable<ModeloAllExperiencias[]>{
    return this.http.get<ModeloAllExperiencias[]>(this.URL + '/ver/experiencias');
  }
  eliminarExperiencia(id: string){
    return this.http.delete<any>(this.URL + '/delete/experiencia/' + id)
  }
  nuevaExperiencia(formExperiencia: ModeloExperiencias): Observable<ModeloExperiencias>{
    return this.http.post<ModeloExperiencias>(this.URL + '/new/experiencia', formExperiencia)
  }
  editarDatosExperiencia(formExperiencia: ModeloExperiencias, id:string): Observable<ModeloExperiencias>{
    return this.http.put<ModeloExperiencias>(this.URL + '/update/experiencias/' + id, formExperiencia)
  }




  /* Editar, Mostrar, Crear y Eliminar PROYECTO */
  obtenerTodosLosDatosProyecto(): Observable<ModeloAllProyecto[]>{
    return this.http.get<ModeloAllProyecto[]>(this.URL + '/ver/proyectos');
  }
  eliminarProyecto(id: string){
    return this.http.delete<any>(this.URL + '/delete/proyecto/' + id)
  }
  nuevoProyecto(formProyecto: ModeloProyecto): Observable<ModeloProyecto>{
    return this.http.post<ModeloProyecto>(this.URL + '/new/proyecto', formProyecto)
  }
  editarDatosProyecto(formProyecto: ModeloProyecto, id:string): Observable<ModeloProyecto>{
    return this.http.put<ModeloProyecto>(this.URL + '/update/proyecto/' + id, formProyecto)
  }




  obtenerDatos(): Observable<any>{
    return this.http.get<any>(this.URL + '/ver/personas');

  }

  obtenerDatosEstudios(): Observable<any>{
    return this.http.get<any>(this.URL + '/ver/estudios');

  }

  obtenerDatosExperiencias(): Observable<any>{
    return this.http.get<any>(this.URL + '/ver/experiencias');

  }

  public obtenerDatosPersona(id:string){
    return this.http.get<ModeloPersona>(this.URL + '/buscar/persona/' + id);

  }
  
}
