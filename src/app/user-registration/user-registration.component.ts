import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para standalone
import { CommonModule } from '@angular/common'; // Importar CommonModule para funcionalidades básicas do Angular

@Component({
  selector: 'app-user-registration',
  standalone: true, // Declaração standalone
  imports: [CommonModule, FormsModule], // Adiciona os módulos necessários
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Usuário cadastrado:', this.user);
    // Integração futura com o back-end aqui
  }
}
