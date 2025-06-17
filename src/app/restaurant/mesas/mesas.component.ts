import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mesas.component.html'
})
export class MesasComponent {
  mesas = [
    { id: 1, nombre: 'Mesa 1', disponible: false },
    { id: 2, nombre: 'Mesa 2', disponible: true },
  ];
}
