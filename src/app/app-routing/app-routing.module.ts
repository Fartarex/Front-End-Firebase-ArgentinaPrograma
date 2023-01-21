import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../modulos/iniciar-sesion/login.component';
import { PortfolioComponent } from '../modulos/portfolio/portfolio.component';
import { NuevoEstudioComponent } from '../modulos/modulosEditar/nuevo-estudio/nuevo-estudio.component';
import { NuevaExperienciaComponent } from '../modulos/modulosEditar/nueva-experiencia/nueva-experiencia.component';
import { NuevoProyectoComponent } from '../modulos/modulosEditar/nuevo-proyecto/nuevo-proyecto.component';
import { UpdatePersonaComponent } from '../modulos/modulosEditar/update-persona/update-persona.component';
import { UpdateExperienciaComponent } from '../modulos/modulosEditar/update-experiencia/update-experiencia.component';
import { UpdateEstudioComponent } from '../modulos/modulosEditar/update-estudio/update-estudio.component';
import { UpdateProyectoComponent } from '../modulos/modulosEditar/update-proyecto/update-proyecto.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevo-estudio', component: NuevoEstudioComponent },
  { path: 'nueva-experiencia', component: NuevaExperienciaComponent },
  { path: 'nuevo-proyecto', component: NuevoProyectoComponent },
  { path: 'update-persona', component: UpdatePersonaComponent },
  { path: 'update-experiencia/:id', component: UpdateExperienciaComponent },
  { path: 'update-estudio/:id', component: UpdateEstudioComponent },
  { path: 'update-proyecto/:id', component: UpdateProyectoComponent },
  { path: '',redirectTo: 'portfolio',pathMatch:'full'}
];
   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
