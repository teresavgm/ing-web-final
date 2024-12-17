import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para usar [(ngModel)]
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
