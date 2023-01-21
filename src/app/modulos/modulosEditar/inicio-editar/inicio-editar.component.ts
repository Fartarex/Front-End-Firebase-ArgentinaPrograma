import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-inicio-editar',
  templateUrl: './inicio-editar.component.html',
  styleUrls: ['./inicio-editar.component.css']
})
export class InicioEditarComponent implements OnInit {
  Persona: any;
  isLogged: boolean = false;
  constructor(private datosPortfolio:PortfolioService,private tokenService: TokenService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data=>{
      
      this.Persona = data[0];

    });

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

}
