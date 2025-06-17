import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  getVentasResumen() {
    return {
      total: 15000,
      mesasOcupadas: 10,
      pedidosPendientes: 4,
    };
  }

  getInventario() {
    return [
      { id: 1, nombre: 'Producto A', cantidad: 20 },
      { id: 2, nombre: 'Producto B', cantidad: 15 },
    ];
  }

  getCostos() {
    return [
      { id: 1, concepto: 'Alquiler', monto: 1000 },
      { id: 2, concepto: 'Servicios', monto: 500 },
    ];
  }

  getEmpleados() {
    return [
      { id: 1, nombre: 'Juan Perez', rol: 'Cajero' },
      { id: 2, nombre: 'Maria Gomez', rol: 'Mesero' },
    ];
  }
}
