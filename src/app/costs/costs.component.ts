import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../mock/mock-data.service';

@Component({
  selector: 'app-costs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './costs.component.html'
})
export class CostsComponent {
  costos = this.data.getCostos();
  constructor(private data: MockDataService) {}
}
