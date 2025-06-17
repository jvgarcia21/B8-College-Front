import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestauranteService, Mesa } from '../../services/restaurante.service';

@Component({
  selector: 'app-plano-visual',
  standalone: false,
  templateUrl: './plano-visual.component.html'
})
export class PlanoVisualComponent implements OnInit {
  mesas: Mesa[] = [];
  constructor(private restaurante: RestauranteService, private router: Router) {}

  ngOnInit(): void {
    this.mesas = this.restaurante.getMesas();
  }

  detalle(id: number) {
    this.router.navigate(['/restaurante/mesa', id]);
  }
}
