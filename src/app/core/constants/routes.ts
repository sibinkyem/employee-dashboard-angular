
import {MenuItem} from 'primeng/api';

export enum AppRoutes {
  Home = '',
  Dashboard = 'dashboard',
  Employee = 'employee',
  Login = 'login',
  LogOut = 'log-out',
  PageNotFound = 'page-not-found'
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'pi pi-fw pi-home',
    routerLink: [`/${AppRoutes.Dashboard}/`]
  },
  {
    label:'Logout',
    icon:'pi pi-fw pi-power-off',
    routerLink: [`/${AppRoutes.LogOut}/`],
  }
];
