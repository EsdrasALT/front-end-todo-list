import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-objective-registration',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './objective-registration.component.html',
  styleUrls: ['./objective-registration.component.css'],
})
export class ObjectiveRegistrationComponent {
  objetivos: { id: string; nome: string }[] = [];

  addObjective(nome: string): void {
    const novoObjetivo = { id: crypto.randomUUID(), nome };
    this.objetivos.push(novoObjetivo);
  }
}
