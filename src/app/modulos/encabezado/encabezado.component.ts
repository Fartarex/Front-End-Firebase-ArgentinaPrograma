import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  isLogged = false;
  Persona: any;
  constructor(private datosPortfolio:PortfolioService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    };

    this.datosPortfolio.obtenerDatos().subscribe( data=>{
      
      this.Persona = data[0];

    });
  }

  onLogOut():void{
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

}

