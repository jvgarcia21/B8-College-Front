import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Empleado {
  id: number;
  nombre: string;
  cedula: string;
  telefono: string;
  correo: string;
  puesto: string;
  sueldo: number;
  horario: string;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent {
  empleados: Empleado[] = [];
  editingIndex: number | null = null;

  nuevo: Empleado = {
    id: 0,
    nombre: '',
    cedula: '',
    telefono: '',
    correo: '',
    puesto: '',
    sueldo: 0,
    horario: ''
  };

  agregarEmpleado() {
    if (this.editingIndex !== null) {
      this.empleados[this.editingIndex] = { ...this.nuevo };
      this.editingIndex = null;
    } else {
      this.nuevo.id = this.empleados.length + 1;
      this.empleados.push({ ...this.nuevo });
    }
    this.limpiar();
  }

  editarEmpleado(i: number) {
    this.nuevo = { ...this.empleados[i] };
    this.editingIndex = i;
  }

  limpiar() {
    this.nuevo = {
      id: 0,
      nombre: '',
      cedula: '',
      telefono: '',
      correo: '',
      puesto: '',
      sueldo: 0,
      horario: ''
    };
  }
}
