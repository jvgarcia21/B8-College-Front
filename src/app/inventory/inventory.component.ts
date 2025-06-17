import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../mock/mock-data.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html'
})
export class InventoryComponent {
  items = this.data.getInventario();
  constructor(private data: MockDataService) {}
}
