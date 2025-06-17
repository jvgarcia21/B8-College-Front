import { Component, Input } from '@angular/core';
import { RestauranteService, Mesa, ProductoPedido } from '../../services/restaurante.service';

@Component({
  selector: 'app-pedido',
  standalone: false,
  templateUrl: './pedido.component.html'
})
export class PedidoComponent {
  @Input() mesa!: Mesa;
  productosDisponibles: { nombre: string; precio: number }[] = [];
  items: ProductoPedido[] = [];
  seleccionado: { nombre: string; precio: number } | undefined;
  cantidad = 1;
  dividirEntre = 1;

  constructor(private restaurante: RestauranteService) {
    this.productosDisponibles = this.restaurante.getProductos();
    this.seleccionado = this.productosDisponibles[0];
  }

  agregar() {
    if (!this.seleccionado) return;
    this.items.push({ nombre: this.seleccionado.nombre, precio: this.seleccionado.precio, cantidad: this.cantidad });
    this.cantidad = 1;
  }

  guardar() {
    this.restaurante.agregarOrden(this.mesa.id, this.items);
    this.items = [];
  }

  get total(): number {
    return this.items.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  }

  get porPersona(): number {
    return this.dividirEntre > 0 ? this.total / this.dividirEntre : this.total;
  }
}
