import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {

  camposCompletos: FormGroup;

  constructor(public datosPortfolio: PortfolioService, private formBuilder: FormBuilder, private ruta: Router) { 
    this.camposCompletos = formBuilder.group({
      titulo:['', [Validators.required]],
      empresa:['', [Validators.required]],
      fechas:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    }) 
  }

  ngOnInit(): void {
  }

  guardarNuevaExperiencia(){
    this.datosPortfolio.nuevaExperiencia(this.datosPortfolio.formExperiencia).subscribe(data => {
      this.datosPortfolio.formExperiencia = data;
      alert('Experiencia agregada con éxito')
      this.ruta.navigate(['/portfolio']);
    }, err => {
      alert('Se ha producido un error, intente nuevamente')
      console.log("Se ha producido un error, intente nuevamente");
    });
  }

  get Titulo() {
    return this.camposCompletos.get('titulo');
  }
  get Empresa() {
    return this.camposCompletos.get('empresa');
  }
  get Fechas() {
    return this.camposCompletos.get('fechas');
  }
  get Descripcion() {
    return this.camposCompletos.get('descripcion');
  }

}
