import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-update-experiencia',
  templateUrl: './update-experiencia.component.html',
  styleUrls: ['./update-experiencia.component.css']
})
export class UpdateExperienciaComponent implements OnInit {

  camposCompletos: FormGroup;
  idExperiencia: any;

  constructor(public datosPortfolio: PortfolioService, private formBuilder: FormBuilder, private ruta: Router, private activatedRoute:ActivatedRoute) { 
    this.camposCompletos = formBuilder.group({
      titulo:['', [Validators.required]],
      empresa:['', [Validators.required]],
      fechas:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    }) 
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idExperiencia = id
    console.log(id);
  }

  editarExperiencia(){
    this.datosPortfolio.editarDatosExperiencia(this.datosPortfolio.formExperiencia, this.idExperiencia).subscribe(data => {
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