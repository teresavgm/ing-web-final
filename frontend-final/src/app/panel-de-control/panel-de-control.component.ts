import { Component, OnInit } from '@angular/core';
import { PacienteService, Paciente } from '../services/paciente.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule


@Component({
  standalone: true,
  selector: 'app-panel-de-control',
  imports: [CommonModule], 
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css'],
})
export class PanelDeControlComponent implements OnInit {
  pacientes: Paciente[] = []; // Lista de pacientes
  cargando: boolean = true; // Indicador de carga
  error: string | null = null; // Mensaje de error

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    // Cargar la lista de pacientes
    this.pacienteService.obtenerPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener pacientes:', err);
        this.error = 'Hubo un problema al cargar los pacientes.';
        this.cargando = false;
      },
    });
  }
}
