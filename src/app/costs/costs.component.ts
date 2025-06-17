import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../mock/mock-data.service';

@Component({
  selector: 'app-costs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './costs.component.html'
})
export class CostsComponent implements OnInit {
  costos: any;
  constructor(private data: MockDataService) { }

  ngOnInit() {
    this.costos = this.data.getCostos();
  }
}
