import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../mock/mock-data.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  empleados: any;
  constructor(private data: MockDataService) { }

  ngOnInit() {
    this.empleados = this.data.getEmpleados();
  }
}
