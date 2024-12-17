import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PanelDeControlComponent } from './panel-de-control/panel-de-control.component';
import { RegisterComponent } from './register/register.component';
//import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Página inicial: Login
  { path: 'home', component: HomeComponent},
  { path: 'paciente', component: PacienteComponent },
  { path: 'panel-de-control', component: PanelDeControlComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Ruta de registro
  { path: '**', redirectTo: '' }, // Redirige cualquier ruta no definida al login
];
