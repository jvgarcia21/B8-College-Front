import { Component, Input } from '@angular/core';
import { Mesa } from '../../services/restaurante.service';

@Component({
  selector: 'app-ticket',
  standalone: false,
  templateUrl: './ticket.component.html'
})
export class TicketComponent {
  @Input() mesa!: Mesa;

  get total(): number {
    return this.mesa.ordenes.reduce((sum, o) =>
      sum + o.productos.reduce((s, p) => s + p.precio * p.cantidad, 0)
    , 0);
  }
}
