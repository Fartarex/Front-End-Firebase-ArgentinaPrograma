import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ModeloAllEstudios } from 'src/app/modelos/modeloAllEstudios';


@Component({
  selector: 'app-update-estudio',
  templateUrl: './update-estudio.component.html',
  styleUrls: ['./update-estudio.component.css']
})
export class UpdateEstudioComponent implements OnInit {

  camposCompletos: FormGroup;
  idEstudio: any;

  constructor(public datosPortfolio: PortfolioService, private formBuilder: FormBuilder, private ruta: Router, private activatedRoute:ActivatedRoute) { 
    this.camposCompletos = formBuilder.group({
      titulo:['', [Validators.required]],
      programa:['', [Validators.required]],
      fechas:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    }) 
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idEstudio = id
    console.log(id);
  }

  editarEstudio(){
    this.datosPortfolio.editarDatosEstudio(this.datosPortfolio.formEstudios,  this.idEstudio).subscribe(data => {
      this.datosPortfolio.formEstudios = data;
      alert('Estudo guardado con éxito')
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
