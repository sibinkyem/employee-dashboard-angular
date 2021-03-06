import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { FileType, FilterType, HttpUserResponse } from 'src/app/core';
import { EmployeeService } from 'src/app/core/services';
import { Column } from 'src/app/shared/components/table/models';

@Component({
  selector: 'emp-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit, OnDestroy {
  cols: Column[];
  tableData: HttpUserResponse[];
  subscription!: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.cols = [
      {
        field: 'name',
        header: 'Employee Name',
        isSortable: true,
        filter: {
          filterType: FilterType.Text,
        },
      },
      {
        field: 'phone',
        header: 'Phone',
        isSortable: true,
        filter: {
          filterType: FilterType.Text,
        },
      },
      {
        field: 'email',
        header: 'Email',
        isSortable: true,
        filter: {
          filterType: FilterType.Text,
        },
      },
    ];
    this.tableData = [];
  }

  ngOnInit(): void {
    this.subscription = this.employeeService.getEmployees().subscribe((data) => {
      this.tableData = data;
    });
  }

  exportData(event: any): void {
    const fileType: FileType = event.fileType;
    const dt: Table = event.table;
    if (fileType === FileType.Csv) {
      dt.exportCSV();
    }
  }

  onSelectRow(rowData: HttpUserResponse): void {
    this.employeeService.selectedEmployee = rowData;
    this.router.navigate(['/employee']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
