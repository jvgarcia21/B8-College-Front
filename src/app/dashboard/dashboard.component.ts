import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../mock/mock-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  datos: any;
  constructor(private data: MockDataService) { }

  ngOnInit() {
    this.datos = this.data.getDashboardStats();
  }
}
