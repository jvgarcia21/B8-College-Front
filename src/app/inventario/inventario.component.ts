import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockDataService } from '../mock/mock-data.service';

interface Ingrediente {
  name: string;
  amount: number;
  unit: string;
}

interface Producto {
  id: number;
  nombre: string;
  unidad: string;
  cantidad: number;
  precioUnitario: number;
  fechaAdquisicion: string;
  fechaVencimiento: string;
  composicion?: Ingrediente[];
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html'
})
export class InventarioComponent implements OnInit {
  productos: Producto[] = [];
  search = '';
  page = 1;
  pageSize = 5;
  unidades = ['kg', 'g', 'L', 'unidad'];
  selected: Producto | null = null;

  newProducto: Producto = {
    id: 0,
    nombre: '',
    unidad: this.unidades[0],
    cantidad: 0,
    precioUnitario: 0,
    fechaAdquisicion: '',
    fechaVencimiento: '',
    composicion: []
  };

  constructor(private data: MockDataService) {}

  ngOnInit(): void {
    this.productos = this.data.getInventario();
  }

  get filtered(): Producto[] {
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  get paginated(): Producto[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }

  totalPages(): number {
    return Math.ceil(this.filtered.length / this.pageSize) || 1;
  }

  addIngrediente(): void {
    this.newProducto.composicion?.push({ name: '', amount: 0, unit: '' });
  }

  removeIngrediente(index: number): void {
    this.newProducto.composicion?.splice(index, 1);
  }

  crearProducto(): void {
    const nuevo = { ...this.newProducto, id: this.productos.length + 1 };
    this.productos.push(nuevo);
    this.newProducto = {
      id: 0,
      nombre: '',
      unidad: this.unidades[0],
      cantidad: 0,
      precioUnitario: 0,
      fechaAdquisicion: '',
      fechaVencimiento: '',
      composicion: []
    };
    this.page = this.totalPages();
  }
}
