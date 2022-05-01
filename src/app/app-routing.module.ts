import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './core';
import { AuthGuard } from './core/guards';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeTaskComponent } from './pages/dashboard/employees/employe-task/employe-task.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: AppRoutes.Dashboard,
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: AppRoutes.Employee,
    component: EmployeTaskComponent,
    canActivate: [AuthGuard],
  },
  {
    path: AppRoutes.Login,
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  { path: '**', redirectTo: AppRoutes.PageNotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
