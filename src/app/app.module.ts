import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SkillsComponent } from './modulos/skills/skills.component';
import { EncabezadoComponent } from './modulos/encabezado/encabezado.component';
import { LoginComponent } from './modulos/iniciar-sesion/login.component';
import { PortfolioComponent } from './modulos/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortfolioService } from './servicios/portfolio.service';
import { interceptorProvider, InterceptorService } from './servicios/interceptor.service';
import { FormsModule } from '@angular/forms';
import { ContactoEditarComponent } from './modulos/modulosEditar/contacto-editar/contacto-editar.component';
import { CurriculumEditarComponent } from './modulos/modulosEditar/curriculum-editar/curriculum-editar.component';
import { InicioEditarComponent } from './modulos/modulosEditar/inicio-editar/inicio-editar.component';
import { SobremiEditarComponent } from './modulos/modulosEditar/sobremi-editar/sobremi-editar.component';
import { FooterComponent } from './modulos/footer/footer.component';
import { NuevoEstudioComponent } from './modulos/modulosEditar/nuevo-estudio/nuevo-estudio.component';
import { NuevaExperienciaComponent } from './modulos/modulosEditar/nueva-experiencia/nueva-experiencia.component';
import { UpdatePersonaComponent } from './modulos/modulosEditar/update-persona/update-persona.component';
import { UpdateExperienciaComponent } from './modulos/modulosEditar/update-experiencia/update-experiencia.component';
import { UpdateEstudioComponent } from './modulos/modulosEditar/update-estudio/update-estudio.component';
import { UpdateProyectoComponent } from './modulos/modulosEditar/update-proyecto/update-proyecto.component';
import { NuevoProyectoComponent } from './modulos/modulosEditar/nuevo-proyecto/nuevo-proyecto.component';
import { FooterFormsComponent } from './modulos/footer-forms/footer-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    EncabezadoComponent,
    LoginComponent,
    PortfolioComponent,
    ContactoEditarComponent,
    CurriculumEditarComponent,
    InicioEditarComponent,
    SobremiEditarComponent,
    FooterComponent,
    NuevoEstudioComponent,
    NuevaExperienciaComponent,
    UpdatePersonaComponent,
    UpdateExperienciaComponent,
    UpdateEstudioComponent,
    UpdateProyectoComponent,
    NuevoProyectoComponent,
    FooterFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PortfolioService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }