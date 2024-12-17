import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
}

interface RegisterResponse {
  message: string;  // Respuesta de registro, puede variar según tu backend
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';  // Asegúrate de que esta es la URL correcta

  constructor(private http: HttpClient) {}

  // Método para autenticar el usuario
  login(email: string, contrasena: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email, contrasena });
  }
  

  // Método para registrar un nuevo usuario
  register(nombre: string, apellidos: string, email: string, contrasena: string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, { nombre, apellidos, email, contrasena });
  }

  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
