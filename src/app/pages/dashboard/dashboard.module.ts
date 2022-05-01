import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { EmployeTaskComponent } from './employees/employe-task/employe-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from "primeng/divider";


@NgModule({
  declarations: [
    EmployeTaskComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    RouterModule,
    SharedModule,
    InputNumberModule,
    InputTextModule,
    TableModule,
    MultiSelectModule,
    PanelModule,
    DialogModule,
    ButtonModule,
    DividerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {

}
