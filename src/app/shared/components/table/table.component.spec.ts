import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterService, LazyLoadEvent, OverlayService, SortEvent } from 'primeng/api';
import { Table, TableService } from 'primeng/table';
import { FileType } from 'src/app/core';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  // tslint:disable: prefer-const
  let elRef: ElementRef;
  let zone: NgZone;
  let tService: TableService;
  let cDetector: ChangeDetectorRef;
  let fService: FilterService;
  let oService: OverlayService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component input default values', () => {
    it('should default the bodyTemplate property to null', () => {
      expect(component.bodyTemplate).toEqual(null);
    });

    it('should default the columns property to an empty array', () => {
      expect(component.columns).toEqual([]);
    });

    it('should default the columnHeaderTemplate property to null', () => {
      expect(component.columnHeaderTemplate).toEqual(null);
    });

    it('should default the data property to an empty array', () => {
      expect(component.data).toEqual([]);
    });

    it('should default the dataKey property to an empty string', () => {
      expect(component.dataKey).toEqual('');
    });

    it('should default the disableRowSelection property to false', () => {
      expect(component.disableRowSelection).toEqual(false);
    });

    it('should default the disableToolBarExportButtons property to false', () => {
      expect(component.disableToolBarExportButtons).toEqual(false);
    });

    it('should default the editMode property to "row"', () => {
      expect(component.editMode).toEqual('row');
    });

    it('should default the first property to 0', () => {
      expect(component.first).toEqual(0);
    });

    it('should default the groupRowsBy property to an empty string', () => {
      expect(component.groupRowsBy).toEqual('');
    });

    it('should default the isLazyLoading property to false', () => {
      expect(component.isLazyLoading).toEqual(false);
    });

    it('should default the isLoading property to false', () => {
      expect(component.isLoading).toEqual(false);
    });

    it('should default the isRedirectMode property to false', () => {
      expect(component.isRedirectMode).toEqual(false);
    });

    it('should default the rowsPerPage property to 10', () => {
      expect(component.rowsPerPage).toEqual(10);
    });

    it('should default the rowsPerPageOptions property to 10, 25, 50', () => {
      expect(component.rowsPerPageOptions).toEqual([10, 25, 50]);
    });

    it('should default the selectionMode property to "single"', () => {
      expect(component.selectionMode).toEqual('single');
    });

    it('should default the showActionColumn property to true', () => {
      expect(component.showActionColumn).toEqual(true);
    });

    it('should default the showToolBar property to true', () => {
      expect(component.showToolBar).toEqual(true);
    });

    it('should default the showToolbarCreateIcon property to true', () => {
      expect(component.showToolbarCreateIcon).toEqual(true);
    });

    it('should default the showToolbarCustomizedIcon property to false', () => {
      expect(component.showToolbarCustomizedIcon).toEqual(false);
    });

    it('should default the showToolbarColumnSelectionDropDown property to true', () => {
      expect(component.showToolbarColumnSelectionDropDown).toEqual(true);
    });

    it('should default the showPaginator property to true', () => {
      expect(component.showPaginator).toEqual(true);
    });

    it('should default the sortField property to an empty string', () => {
      expect(component.sortField).toEqual('');
    });

    it('should default the sortMode property to "multiple"', () => {
      expect(component.sortMode).toEqual('multiple');
    });

    it('should default the sortOrder property to -1', () => {
      expect(component.sortOrder).toEqual(-1);
    });
  });

  describe('handleColumnSelectionChange function', () => {
    it('should emit the columnsSelected event when called', () => {
      const spy = spyOn(component.columnsSelected, 'emit');
      component.handleColumnSelectionChange([]);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith([]);
    });
  });

  describe('handleCreate function', () => {
    it('should emit the create event when called', () => {
      const spy = spyOn(component.create, 'emit');
      component.handleCreate();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleExport function', () => {
    it('should emit the export event when called', () => {
      const table = new Table(
        elRef,
        zone,
        tService,
        cDetector,
        fService,
        oService
      );
      const spy = spyOn(component.export, 'emit');
      component.handleExport(FileType.Csv, table);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith({ fileType: FileType.Csv, table });
    });
  });

  describe('handleFilter function', () => {
    it('should emit the filter event when called', () => {
      const event = {
        filters: {
          myfield: { value: null },
        },
      };
      const spy = spyOn(component.filter, 'emit');
      component.handleFilter(event);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(event);
    });
  });

  describe('handleLazyLoad function', () => {
    it('should emit the lazyLoad event when called', () => {
      const event: LazyLoadEvent = {};
      const spy = spyOn(component.lazyLoad, 'emit');
      component.handleLazyLoad(event);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(event);
    });
  });

  describe('handleRowSelect function', () => {
    it('should emit the selectRow event when called', () => {
      const event = {
        data: {},
      };
      const spy = spyOn(component.selectRow, 'emit');
      component.handleRowSelect(event);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(event.data);
    });
  });

  describe('handleSort function', () => {
    it('should emit the sort event when called', () => {
      const event: SortEvent = {};
      const spy = spyOn(component.sort, 'emit');
      component.handleSort(event);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(event);
    });
  });

  describe('handlePagination function', () => {
    it('should emit the page event when called', () => {
      const spy = spyOn(component.page, 'emit');
      component.handlePagination({});
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith({});
    });
  });
});
