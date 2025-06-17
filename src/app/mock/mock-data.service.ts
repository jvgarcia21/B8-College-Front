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
      {
        id: 1,
        nombre: 'Queso',
        unidad: 'kg',
        cantidad: 5,
        precioUnitario: 10,
        fechaAdquisicion: '2024-01-01',
        fechaVencimiento: '2024-06-01'
      },
      {
        id: 2,
        nombre: 'Masa para pizza',
        unidad: 'kg',
        cantidad: 8,
        precioUnitario: 2,
        fechaAdquisicion: '2024-01-10',
        fechaVencimiento: '2024-02-10'
      },
      {
        id: 3,
        nombre: 'Salsa de tomate',
        unidad: 'L',
        cantidad: 3,
        precioUnitario: 3,
        fechaAdquisicion: '2024-01-05',
        fechaVencimiento: '2024-03-05'
      },
      {
        id: 4,
        nombre: 'Pizza',
        unidad: 'unidad',
        cantidad: 10,
        precioUnitario: 15,
        fechaAdquisicion: '2024-01-15',
        fechaVencimiento: '2024-01-20',
        composicion: [
          { name: 'Queso', amount: 0.2, unit: 'kg' },
          { name: 'Masa para pizza', amount: 0.3, unit: 'kg' },
          { name: 'Salsa de tomate', amount: 0.05, unit: 'L' }
        ]
      }
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
