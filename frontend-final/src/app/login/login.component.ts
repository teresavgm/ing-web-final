import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar *ngIf y *ngFor

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, 
    RouterModule,
    CommonModule] // Importa FormsModule y RouterModule
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null; // Para mostrar errores

  constructor(private authService: AuthService, private router: Router) {}

  // Método para manejar el submit del formulario
  onSubmit(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {
          // Al recibir la respuesta con el token, lo guardamos
          this.authService.setToken(response.token);
          this.router.navigate(['/dashboard']); // Redirigir a otra página después del login
        },
        error: (err) => {
          console.error('Error al iniciar sesión', err);
          this.errorMessage = 'Correo o contraseña incorrectos'; // Mensaje de error
        },
      });
    }
  }
}

