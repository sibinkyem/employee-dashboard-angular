import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import {
  FileType,
  FilterType,
  HttpEmployeeTaskResponse,
  TaskStatus,
} from 'src/app/core';
import { EmployeeService } from 'src/app/core/services';
import { Column, DropdownOption } from 'src/app/shared/components/table/models';

@Component({
  selector: 'emp-employe-task',
  templateUrl: './employe-task.component.html',
  styleUrls: ['./employe-task.component.scss'],
})
export class EmployeTaskComponent implements OnInit, OnDestroy {
  title = 'Employee Tasks';
  selectedEmployee!: string;
  cols: Column[];
  taskData!: HttpEmployeeTaskResponse[];
  subscription!: Subscription;
  isLoading = false;
  displayModal!: boolean;
  selectedUserId!: number;
  addTaskForm!: FormGroup;
  serialIdMaximum = 0;
  constructor(
    private employeeService: EmployeeService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder
  ) {
    this.cols = [
      {
        field: 'id',
        header: '#',
        isSortable: true,
        filter: {
          filterType: FilterType.Text,
        },
      },
      {
        field: 'title',
        header: 'title',
        isSortable: true,
        filter: {
          filterType: FilterType.Text,
        },
      },
      {
        field: 'completed',
        header: 'Status',
        isSortable: true,
        filter: {
          filterType: FilterType.Dropdown,
          options: this.getStatusOption(),
        },
      },
    ];
    this.taskData = [];
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.selectedEmployee = this.employeeService.selectedEmployee.name;
    this.selectedUserId = this.employeeService.selectedEmployee.id;
    this.fetchEmployeeTask();
    this.addTaskForm = this.formBuilder.group({
      taskName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  get taskName(): AbstractControl | null {
    return this.addTaskForm.get('taskName');
  }

  private fetchEmployeeTask(): void {
    this.isLoading = true;
    this.subscription = this.employeeService
      .getTasksByEmployee(this.selectedUserId)
      .subscribe((data) => {
        if (data.length > 0) {
          this.taskData = data.sort((a, b) => (a.id > b.id ? -1 : 1));
          this.serialIdMaximum = Number(this.taskData[0].id) + 1;
          this.isLoading = false;
        } else {
          this.taskData = [];
          this.isLoading = false;
          this.serialIdMaximum = 0;
        }
      });
  }

  private getStatusOption(): DropdownOption[] {
    const options: DropdownOption[] = [];
    for (const [Key, Value] of Object.entries(TaskStatus)) {
      options.push({ label: Key, value: Value });
    }
    return options;
  }

  exportData(event: any): void {
    const fileType: FileType = event.fileType;
    const dt: Table = event.table;
    if (fileType === FileType.Csv) {
      dt.exportCSV();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openModal() {
    this.displayModal = true;
  }

  addNewTask(): void {
    if (this.addTaskForm.invalid) {
      return;
    }
    const addObj: HttpEmployeeTaskResponse = {
      userId: this.selectedUserId,
      id: this.serialIdMaximum,
      title: this.taskName?.value,
      completed: false,
    };
    this.taskData = [...this.taskData, addObj];
    this.taskData.sort((a, b) => (a.id > b.id ? -1 : 1));
    this.displayModal = false;
  }
}
