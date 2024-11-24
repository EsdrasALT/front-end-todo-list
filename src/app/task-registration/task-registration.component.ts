import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Para o [(ngModel)]
import { CommonModule } from '@angular/common'; // Funcionalidades básicas

@Component({
  selector: 'app-task-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-registration.component.html',
  styleUrls: ['./task-registration.component.css'],
})
export class TaskRegistrationComponent {
  task = {
    title: '',
    description: '',
    startAt: '',
    endAt: '',
    priority: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Enviar a tarefa para o endpoint de criação no back-end
    this.http.post('http://localhost:8080/tasks/', this.task).subscribe({
      next: (response) => {
        console.log('Tarefa cadastrada:', response);
        alert('Tarefa cadastrada com sucesso!');
        this.resetForm();
      },
      error: (error) => {
        console.error('Erro ao cadastrar a tarefa:', error);
        alert('Erro ao cadastrar a tarefa. Verifique os dados.');
      },
    });
  }

  resetForm() {
    this.task = {
      title: '',
      description: '',
      startAt: '',
      endAt: '',
      priority: '',
    };
  }
}
