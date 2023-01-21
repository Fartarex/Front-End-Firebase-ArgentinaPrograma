import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css']
})
export class NuevoEstudioComponent implements OnInit {

  camposCompletos: FormGroup;

  constructor(public datosPortfolio: PortfolioService, private formBuilder: FormBuilder, private ruta: Router) { 
    this.camposCompletos = formBuilder.group({
      titulo:['', [Validators.required]],
      programa:['', [Validators.required]],
      fechas:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    }) 
  }

  ngOnInit(): void {
  }

  guardarNuevoEstudio(){
    this.datosPortfolio.nuevoEstudio(this.datosPortfolio.formEstudios).subscribe(data => {
      this.datosPortfolio.formEstudiosM = data;
      alert('Estudo agregado con éxito')
      this.ruta.navigate(['/portfolio']);
    }, err => {
      alert('Se ha producido un error, intente nuevamente')
      console.log("Se ha producido un error, intente nuevamente");
    });
  }

  get Titulo() {
    return this.camposCompletos.get('titulo');
  }
  get Programa() {
    return this.camposCompletos.get('programa');
  }
  get Fechas() {
    return this.camposCompletos.get('fechas');
  }
  get Descripcion() {
    return this.camposCompletos.get('descripcion');
  }

}
