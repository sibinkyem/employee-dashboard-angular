import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/core';
import { AuthGuard } from 'src/app/core/guards';
import { EmployeTaskComponent } from './employees/employe-task/employe-task.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'employee',
    component: EmployeTaskComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
