import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Usuario {
  idUsuario: number;
  nombreCompleto: string;
  usuario: string;
  contrasena: string;
  rol: string;
  correo: string;
  estado: boolean;
  fechaCreacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'https://localhost:PUERTO/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  updateUsuario(usuario: Usuario): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${usuario.idUsuario}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
