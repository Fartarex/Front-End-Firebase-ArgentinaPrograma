import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-contacto-editar',
  templateUrl: './contacto-editar.component.html',
  styleUrls: ['./contacto-editar.component.css']
})
export class ContactoEditarComponent implements OnInit {
  Persona: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data=>{      
      this.Persona = data[0];
    });
  }

}
