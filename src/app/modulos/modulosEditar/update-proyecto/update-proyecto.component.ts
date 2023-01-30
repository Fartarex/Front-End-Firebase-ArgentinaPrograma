import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit {

  camposCompletos: FormGroup;
  idProyecto: any;

  constructor(public datosPortfolio: PortfolioService, private formBuilder: FormBuilder, private ruta: Router, private activatedRoute:ActivatedRoute) { 
    this.camposCompletos = formBuilder.group({
      titulo:['', [Validators.required]],
      programa:['', [Validators.required]],
      fechas:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      url_imagen:['', [Validators.required]],
      url:['', [Validators.required]]
    }) 
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idProyecto = id
    console.log(id);
  }

  editarProyecto(){
    this.datosPortfolio.editarDatosProyecto(this.datosPortfolio.formProyecto, this.idProyecto).subscribe(data => {
      this.datosPortfolio.formProyecto = data;
      alert('Proyecto guardado con éxito')
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
  get Url_imagen() {
    return this.camposCompletos.get('url_imagen');
  }
  get Url() {
    return this.camposCompletos.get('url');
  }
}
