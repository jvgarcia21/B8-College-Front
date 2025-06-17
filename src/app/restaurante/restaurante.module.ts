import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlanoVisualComponent } from './plano-visual/plano-visual.component';
import { MesaDetalleComponent } from './mesa-detalle/mesa-detalle.component';
import { PedidoComponent } from './pedido/pedido.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    PlanoVisualComponent,
    MesaDetalleComponent,
    PedidoComponent,
    TicketComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [PlanoVisualComponent, MesaDetalleComponent]
})
export class RestauranteModule {}
