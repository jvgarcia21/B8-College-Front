import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteService, Mesa } from '../../services/restaurante.service';

@Component({
  selector: 'app-mesa-detalle',
  standalone: false,
  templateUrl: './mesa-detalle.component.html'
})
export class MesaDetalleComponent implements OnInit {
  mesa?: Mesa;
  nuevoMesonero = '';
  mostrarPedido = false;
  mostrarTicket = false;

  constructor(private route: ActivatedRoute, private router: Router, private restaurante: RestauranteService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mesa = this.restaurante.getMesa(id);
  }

  asignarMesonero() {
    if (this.mesa) {
      this.mesa.mesonero = this.nuevoMesonero;
      this.nuevoMesonero = '';
    }
  }

  abrirMesa() {
    if (this.mesa) {
      this.mesa.abierta = true;
    }
  }
}
