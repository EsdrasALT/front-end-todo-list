import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';  // Importando o DatePipe

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],  // Importando o CommonModule
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [DatePipe],  // Registrando o DatePipe como provedor
})
export class TaskListComponent {
  tarefas = [
    { nome: 'Comprar o livro', status: 'Nova', previsao: new Date(2022, 9, 20) },
    { nome: 'Iniciar leitura do livro', status: 'Em andamento', previsao: new Date(2022, 9, 10) },
  ];

  editarTarefa(tarefa: any) {
    console.log('Editar tarefa:', tarefa);
    // Lógica para edição da tarefa
  }

  deletarTarefa(tarefa: any) {
    console.log('Deletar tarefa:', tarefa);
    // Lógica para exclusão da tarefa
  }
}
