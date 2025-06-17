import { Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';
import { LoginComponent } from './auth/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CostsComponent } from './costs/costs.component';
import { EmployeesComponent } from './employees/employees.component';
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
    component: InventoryComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'costos',
    component: CostsComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'empleados',
    component: EmployeesComponent,
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
