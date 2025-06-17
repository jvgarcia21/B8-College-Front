import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Costo {
  categoria: string;
  descripcion: string;
  monto: number;
  productoId?: number;
  fecha: string;
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-costos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './costos.component.html'
})
export class CostosComponent implements OnInit {
  productos: Producto[] = [
    { id: 1, nombre: 'Pizza', precio: 15 },
    { id: 2, nombre: 'Hamburguesa', precio: 8 }
  ];

  costos: Costo[] = [];
  nuevo: Costo = { categoria: '', descripcion: '', monto: 0, fecha: new Date().toISOString().split('T')[0] };

  graficaDatos: { labels: string[]; data: number[] } = { labels: [], data: [] };

  ngOnInit(): void {
    this.actualizarGrafica();
  }

  agregarCosto() {
    this.costos.push({ ...this.nuevo });
    this.nuevo = { categoria: '', descripcion: '', monto: 0, fecha: new Date().toISOString().split('T')[0] };
    this.actualizarGrafica();
  }

  costosPorCategoria(categoria: string): number {
    return this.costos
      .filter(c => c.categoria === categoria)
      .reduce((sum, c) => sum + c.monto, 0);
  }

  actualizarGrafica() {
    const productos = this.productos;
    const labels: string[] = [];
    const data: number[] = [];

    for (const p of productos) {
      const costosProducto = this.costos
        .filter(c => c.productoId === p.id)
        .reduce((sum, c) => sum + c.monto, 0);
      const margen = p.precio > 0 ? ((p.precio - costosProducto) / p.precio) * 100 : 0;
      labels.push(p.nombre);
      data.push(parseFloat(margen.toFixed(2)));
    }

    this.graficaDatos = { labels, data };
    setTimeout(() => this.dibujarGrafica(), 0);
  }

  dibujarGrafica() {
    const canvas = document.getElementById('margenChart') as HTMLCanvasElement;
    if (!canvas || !(window as any).Chart) return;
    const Chart = (window as any).Chart;
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: this.graficaDatos.labels,
        datasets: [
          { label: 'Margen %', data: this.graficaDatos.data, backgroundColor: '#60a5fa' }
        ]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    });
  }
}
