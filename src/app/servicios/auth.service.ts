import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../modelos/jwt-dto';
import { LoginUsuario } from '../modelos/login-usuario';
import { NuevoUsuario } from '../modelos/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'https://easy-atlanta-fartarex.koyeb.app/auth/';

  constructor(private httpClient: HttpClient) {}

  formRegister: NuevoUsuario = {
    nombre: '',
    nombreUsuario: '',
    email: '',
    password: '',
    authorities: ''
  }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario);
  }
}
