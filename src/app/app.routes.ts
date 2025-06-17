import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CostosComponent } from './costos/costos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MesasComponent } from './restaurant/mesas/mesas.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin', 'empleado'] }
  },
  {
    path: 'inventario',
    component: InventarioComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'costos',
    component: CostosComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'empleados',
    component: EmpleadosComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'mesas',
    component: MesasComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin', 'empleado'] }
  },
  { path: '**', redirectTo: '' }
];
