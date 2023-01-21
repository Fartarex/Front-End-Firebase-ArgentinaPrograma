import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-sobremi-editar',
  templateUrl: './sobremi-editar.component.html',
  styleUrls: ['./sobremi-editar.component.css']
})
export class SobremiEditarComponent implements OnInit {

  Persona: any;
  isLogged: boolean = false;
  constructor(public datosPortfolio: PortfolioService, private ruta: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerTodosLosDatosPersonas().subscribe( data=>{      
      this.Persona = data;
    });

    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.Persona = data[0];
    })

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  eliminarPersona(){
    this.datosPortfolio.eliminarPersona(this.datosPortfolio.formEliminarPersona).subscribe(data => {
      this.datosPortfolio.formEliminarPersona = data;
      console.log(data)
      alert('Persona eliminada con éxito')
      window.location.reload();
    }, err => {
      alert('Se ha producido un error, intente nuevamente')
      console.log("Se ha producido un error, intente nuevamente");
    }); 
  }

  volver(){
    this.ruta.navigate(['portfolio'])
  }
}
