import { Component } from '@angular/core';
import { PacienteService, Paciente } from '../services/paciente.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule], // Importar FormsModule para usar [(ngModel)]
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
  nuevoPaciente: Paciente = {
    numeroTarjeta: '',
    nombre: '',
    apellido: ''
  };

  constructor(private pacienteService: PacienteService) {}

  agregarPaciente() {
    this.pacienteService.agregarPaciente(this.nuevoPaciente).subscribe({
      next: (response) => {
        console.log('Paciente agregado con éxito', response);
        // Limpiar formulario después de agregar
        this.nuevoPaciente = { numeroTarjeta: '', nombre: '',apellido:' ' };
      },
      error: (err) => console.error('Error al agregar paciente', err),
    });
  }
}
