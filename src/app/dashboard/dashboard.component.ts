import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../mock/mock-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  resumen = this.data.getVentasResumen();
  constructor(private data: MockDataService) {}
}
