import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AuthService } from '../services/auth.service'; // Asegúrate de que esta importación sea correcta
import { Router } from '@angular/router'; // Importar Router para la redirección
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar *ngIf y *ngFor

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule,CommonModule], // Incluir FormsModule aquí
})
export class RegisterComponent {
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  contrasena: string = '';
  confirmcontrasena: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    // Validar que las contraseñas coincidan
    if (this.contrasena !== this.confirmcontrasena) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    // Llamar al servicio de registro
    this.authService.register(this.nombre, this.apellidos, this.email, this.contrasena).subscribe({
      next: (response) => {
        this.successMessage = 'Usuario registrado con éxito';
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirigir al login después del registro
        }, 2000);
      },
      error: (err) => {
        console.error('Error al registrar usuario', err);
        this.errorMessage = 'Hubo un problema al registrar el usuario';
      },
    });
  }
}
