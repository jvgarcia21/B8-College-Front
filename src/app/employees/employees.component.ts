import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../mock/mock-data.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html'
})
export class EmployeesComponent {
  empleados = this.data.getEmpleados();
  constructor(private data: MockDataService) {}
}
