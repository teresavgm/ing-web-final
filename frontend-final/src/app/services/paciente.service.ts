import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define la interfaz para un Paciente
export interface Paciente {
  numeroTarjeta: string;
  nombre: string;
  apellido:string;
}

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private apiUrl = 'http://localhost:8080/api/pacientes';

  constructor(private http: HttpClient) {}

  // Método para agregar un paciente
  agregarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.apiUrl + "/register", paciente);
  }

  // Método para obtener la lista de pacientes
  obtenerPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl + "/all");
  }
}

