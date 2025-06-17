import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export type EstadoOrden = 'pendiente' | 'en cocina' | 'servido' | 'pagado';

export interface ProductoPedido {
  nombre: string;
  precio: number;
  cantidad: number;
}

export interface Orden {
  id: number;
  productos: ProductoPedido[];
  estado: EstadoOrden;
  creadoPor: string;
  fecha: Date;
}

export interface Mesa {
  id: number;
  nombre: string;
  mesonero?: string;
  abierta: boolean;
  ordenes: Orden[];
}

@Injectable({ providedIn: 'root' })
export class RestauranteService {
  private mesas: Mesa[] = [
    { id: 1, nombre: 'Mesa 1', abierta: false, ordenes: [] },
    { id: 2, nombre: 'Mesa 2', abierta: false, ordenes: [] },
    { id: 3, nombre: 'Mesa 3', abierta: false, ordenes: [] },
    { id: 4, nombre: 'Mesa 4', abierta: false, ordenes: [] }
  ];

  private productos = [
    { nombre: 'Pizza', precio: 10 },
    { nombre: 'Hamburguesa', precio: 8 },
    { nombre: 'Refresco', precio: 2 }
  ];

  constructor(private auth: AuthService) {}

  getMesas(): Mesa[] {
    return this.mesas;
  }

  getMesa(id: number): Mesa | undefined {
    return this.mesas.find(m => m.id === id);
  }

  getProductos() {
    return this.productos;
  }

  agregarOrden(mesaId: number, productos: ProductoPedido[]): void {
    const mesa = this.getMesa(mesaId);
    if (!mesa) { return; }
    const orden: Orden = {
      id: mesa.ordenes.length + 1,
      productos,
      estado: 'pendiente',
      creadoPor: this.auth.userRole ? this.auth.userRole : 'desconocido',
      fecha: new Date()
    };
    mesa.ordenes.push(orden);
    mesa.abierta = true;
  }
}
