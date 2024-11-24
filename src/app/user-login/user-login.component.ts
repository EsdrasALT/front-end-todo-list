import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para trabalhar com ngModel
import { CommonModule } from '@angular/common'; // Funcionalidades básicas do Angular

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa FormsModule e CommonModule
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  onLogin() {
    console.log('Tentativa de login:', this.credentials);
    // Aqui você pode futuramente integrar com o serviço do back-end
    // Exemplo:
    // this.authService.login(this.credentials).subscribe(...);
  }
}
