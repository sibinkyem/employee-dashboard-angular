import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './core';
import { AuthGuard } from './core/guards';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeTaskComponent } from './pages/dashboard/employees/employe-task/employe-task.component';
import { LogoutComponent } from './pages/logout/logout.component';

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
    path: AppRoutes.LogOut,
    component: LogoutComponent,
  },
  {
    path: AppRoutes.Login,
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
