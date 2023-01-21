import { Component, OnInit } from '@angular/core';
import { ModeloAllEstudios } from 'src/app/modelos/modeloAllEstudios';
import { ModeloAllExperiencias } from 'src/app/modelos/modeloAllExperiencias';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloAllProyecto } from 'src/app/modelos/modeloAllProyecto';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-curriculum-editar',
  templateUrl: './curriculum-editar.component.html',
  styleUrls: ['./curriculum-editar.component.css']
})
export class CurriculumEditarComponent implements OnInit {
 
  EstudiosLista: ModeloAllEstudios[] = [];
  ExperienciaLista: ModeloAllExperiencias[] = [];
  ProyectoLista: ModeloAllProyecto[] = [];
  isLogged: boolean = false;

  constructor(private datosPortfolio:PortfolioService, private ruta: Router, private activatedRoute:ActivatedRoute, private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerTodosLosDatosEstudios().subscribe( data=>{      
      this.EstudiosLista = data;
      console.log(data)
    });

    this.datosPortfolio.obtenerTodosLosDatosExperiencia().subscribe( data=>{      
      this.ExperienciaLista = data;
      console.log(data)
    });

    this.datosPortfolio.obtenerTodosLosDatosProyecto().subscribe( data=>{      
      this.ProyectoLista = data;
      console.log(data)
    });

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  eliminarEstudio(id:string){
    this.datosPortfolio.eliminarEstudio(id).subscribe(data =>{
      alert('Estudio eliminado con éxito');
      window.location.reload();
    }, err => {
      alert('Se ha producido un error, intente nuevamente')
      console.log("Se ha producido un error, intente nuevamente");
    }); 
  }

  eliminarExperiencia(id:string){
    this.datosPortfolio.eliminarExperiencia(id).subscribe(data =>{
      alert('Experiencia eliminada con éxito');
      window.location.reload();
    }, err => {
      alert('Se ha producido un error, intente nuevamente')
      console.log("Se ha producido un error, intente nuevamente");
    }); 
  }

  eliminarProyecto(id:string){
    this.datosPortfolio.eliminarProyecto(id).subscribe(data =>{
      alert('Proyecto eliminado con éxito');
      window.location.reload();
    }, err => {
      alert('Se ha producido un error, intente nuevamente')
      console.log("Se ha producido un error, intente nuevamente");
    }); 
  }

  editarEstudio(id:string){
    this.ruta.navigate(['update-estudio', id])
  }

  editarExperiencia(id:string){
    this.ruta.navigate(['update-experiencia', id])
  }

  editarProyecto(id:string){
    this.ruta.navigate(['update-proyecto', id])
  }
}
