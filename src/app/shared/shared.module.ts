import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableComponent } from './components/table/table.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableHeaderComponent } from './components/table/table-header/table-header.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';



@NgModule({
  declarations: [
    TableComponent,
    TableHeaderComponent,
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule,
    ToggleButtonModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    TableComponent,
    TableHeaderComponent,
    MultiSelectComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
