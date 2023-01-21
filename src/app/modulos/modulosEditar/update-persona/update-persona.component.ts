import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {

  camposCompletos: FormGroup;

  constructor(public datosPortfolio: PortfolioService, private formBuilder: FormBuilder, private ruta: Router) { 
    this.camposCompletos = formBuilder.group({
        nombre:['', [Validators.required]],
        apellido:['', [Validators.required]],
        domicilio:['', [Validators.required]],
        telefono:['', [Validators.required]],
        correo:['', [Validators.required, Validators.email]],
        sobre_mi:['', [Validators.required]],
        url_foto:['', [Validators.required]],
        titulo:['', [Validators.required]],
        edad:['', [Validators.required]],
        cumpleanos:['', [Validators.required]],
        nacionalidad:['', [Validators.required]],
        cv:['', [Validators.required]],
        certificado:['', [Validators.required]],
    }) 
  }

  ngOnInit(): void {
  }

  editarInfoPersona(){
    this.datosPortfolio.editarDatosPersona(this.datosPortfolio.formPersona).subscribe(data => {
      this.datosPortfolio.formPersona = data;
      alert('Persona guardada con éxito')
      this.ruta.navigate(['/portfolio']);
    }, err => {
      alert('Se ha producido un error, intente nuevamente')
      console.log("Se ha producido un error, intente nuevamente");
    });
  }

  get Nombre() {
    return this.camposCompletos.get('nombre');
  }
  get Apellido() {
    return this.camposCompletos.get('apellido');
  }
  get Domicilio() {
    return this.camposCompletos.get('domicilio');
  }
  get Telefono() {
    return this.camposCompletos.get('telefono');
  }
  get Correo() {
    return this.camposCompletos.get('correo');
  }
  get Sobre_mi() {
    return this.camposCompletos.get('sobre_mi');
  }
  get Url_foto() {
    return this.camposCompletos.get('url_foto');
  }
  get Titulo() {
    return this.camposCompletos.get('titulo');
  }
  get Edad() {
    return this.camposCompletos.get('edad');
  }
  get Cumpleanos() {
    return this.camposCompletos.get('cumpleanos');
  }
  get Nacionalidad() {
    return this.camposCompletos.get('nacionalidad');
  }
  get Cv() {
    return this.camposCompletos.get('cv');
  }
  get Certificado() {
    return this.camposCompletos.get('contrasena');
  }
}
