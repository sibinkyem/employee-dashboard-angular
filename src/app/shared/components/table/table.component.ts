import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { LazyLoadEvent, SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { FileType, FilterType } from 'src/app/core';
import { Column } from './models';

enum EditMode {
  Cell = 'cell',
  Row = 'row',
}

enum SelectionMode {
  Multiple = 'multiple',
  Single = 'single',
}

enum SortMode {
  Multiple = 'multiple',
  Single = 'single',
}

@Component({
  selector: 'emp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() bodyTemplate: TemplateRef<any> | null = null;
  @Input() columns: Column[] = [];
  @Input() columnHeaderTemplate: TemplateRef<any> | null = null;
  @Input() data: any[] = [];
  @Input() dataKey = '';
  @Input() disableRowSelection = false;
  @Input() disableToolBarExportButtons = false;
  @Input() editMode: string = EditMode.Row;
  @Input() first = 0;
  @Input() groupRowsBy = '';
  @Input() isLazyLoading = false;
  @Input() isLoading = false;
  @Input() isRedirectMode = false;
  @Input() rowsPerPage = 10;
  @Input() rowsPerPageOptions = [10, 25, 50];
  @Input() selectionMode: string = SelectionMode.Single;
  @Input() showActionColumn = true;
  @Input() showToolBar = true;
  @Input() showToolbarCreateIcon = true;
  @Input() showToolbarCustomizedIcon = false;
  @Input() showToolbarColumnSelectionDropDown = true;
  @Input() showPaginator = true;
  @Input() sortField = '';
  @Input() sortMode: string = SortMode.Multiple;
  @Input() sortOrder = -1;
  @Input() showFilter = false;
  @Output() create = new EventEmitter();
  @Output() columnsSelected = new EventEmitter<string[]>();
  @Output() export = new EventEmitter<{ fileType: FileType; table: Table }>();
  @Output() filter = new EventEmitter<any>();
  @Output() lazyLoad = new EventEmitter<LazyLoadEvent>();
  @Output() selectRow = new EventEmitter<any>();
  @Output() sort = new EventEmitter<SortEvent>();
  @Output() page = new EventEmitter<any>();
  @ViewChild('dt') public table!: Table;
  booleanFilterValues: boolean[] = [];
  dateFilterValues: string[] = [];
  filterType = FilterType;
  // tslint:disable-next-line: variable-name
  private _selectedCols: Column[] = [];
  selectedData: any[] = [];
  textFilterValues: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    /*if (
      changes.datapreviousValue &&
      changes.data.currentValue !== changes.data.previousValue &&
      !this.isRedirectMode
    ) {
      this.reset();
    } */
    this.selectedColumns = this.columns;
    this.selectedData = this.data.map((x) => Object.assign({}, x));
  }

  get hasFilters(): boolean {
    return this.columns.some((col) => col.filter);
  }

  @Input() get selectedColumns(): Column[] {
    return this._selectedCols;
  }

  // To restore original order
  set selectedColumns(val: Column[]) {
    this._selectedCols = this.columns.filter((col) => val.includes(col));
  }

  handleColumnSelectionChange(selectedColumns: string[]): void {
    if (selectedColumns.length === 0) {
      this.selectedColumns = this.columns;
      this.selectedData = this.data;
    } else {
      this.selectedColumns = this.columns.filter((col) =>
        selectedColumns.includes(col.field)
      );
      const unSelectedCols: Column[] = this.columns.filter(
        (col) => !selectedColumns.includes(col.field)
      );
      this.selectedData = this.data.map((x) => Object.assign({}, x));
      this.selectedData.forEach((d) => {
        const keys = Object.keys(d);
        keys.forEach((key) => {
          if (unSelectedCols.find((col) => col.field === key)) {
            delete d[key];
          }
        });
      });
    }
    this.columnsSelected.emit(selectedColumns);
  }

  handleCreate(): void {
    this.create.emit();
  }

  handleExport(fileType: FileType, table: Table): void {
    this.export.emit({ fileType, table });
  }

  handleFilter(event: any): void {
    const filterArray = Object.values(event.filters);
    const activeFilters = filterArray.filter(
      (data: any) => data.value !== null
    );
    if (activeFilters.length === 0) {
      this.resetFilters();
    }
    this.filter.emit(event);
  }

  handleLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  handleRowSelect(event: any): void {
    this.selectRow.emit(event.data);
  }

  handleSort(event: SortEvent): void {
    this.sort.emit(event);
  }

  handlePagination(pageObject: any): void {
    this.page.emit(pageObject);
  }

  resetFilter(): void {
    this.showFilter = !this.showFilter;
    this.table.reset();
    this.resetFilters();
  }

  // To reset sort, filter, and paginator state and toggle the display of the filter row
  private reset(): void {
    this.table.reset();
    this.resetFilters();
    this.showFilter = false;
  }

  private resetFilters(): void {
    this.booleanFilterValues = this.columns
      .filter((col) => col.filter?.filterType === FilterType.Boolean)
      .map(() => false);

    this.dateFilterValues = this.columns
      .filter((col) => col.filter?.filterType === FilterType.Date)
      .map(() => '');

    this.textFilterValues = this.columns
      .filter((col) => col.filter?.filterType === FilterType.Text)
      .map(() => '');
  }

}
