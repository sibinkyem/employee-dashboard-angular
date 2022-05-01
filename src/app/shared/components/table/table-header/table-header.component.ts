import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FileType } from 'src/app/core';
import { Column } from '../models';

@Component({
  selector: 'emp-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {
  @Input() columns: Column[] = [];
  @Input() disableExportButtons = false;
  @Input() selectedColumns: any[] = [];
  @Input() showColumnSelectionDropDown = true;
  @Input() showCreateIcon = true;
  @Output() columnSelectionChange = new EventEmitter<string[]>();
  @Output() create = new EventEmitter();
  @Output() export = new EventEmitter<FileType>();
  @Output() resetFilter = new EventEmitter();
  fileType = FileType;

  get hasFilters(): boolean {
    return this.columns.some((col) => col.filter);
  }

  handleColumnSelectionChange(selectedColumns: string[]): void {
    this.columnSelectionChange.emit(selectedColumns);
  }

  handleCreate(): void {
    this.create.emit();
  }

  handleExport(fileType: FileType): void {
    if (!this.disableExportButtons) {
      this.export.emit(fileType);
    }
  }

  handleFilterReset(): void {
    this.resetFilter.emit();
  }
}
