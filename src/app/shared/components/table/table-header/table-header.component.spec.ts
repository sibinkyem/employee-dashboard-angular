import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileType, FilterType } from 'src/app/core';

import { TableHeaderComponent } from './table-header.component';

describe('TableHeaderComponent', () => {
  let component: TableHeaderComponent;
  let fixture: ComponentFixture<TableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component input default values', () => {
    it('should set the columns property to an empty array', () => {
      expect(component.columns).toEqual([]);
    });

    it('should set the disableExportButtons property to false', () => {
      expect(component.disableExportButtons).toEqual(false);
    });

    it('should set the selectedColumns property to an empty array', () => {
      expect(component.selectedColumns).toEqual([]);
    });

    it('should set the showColumnSelectionDropDown property to true', () => {
      expect(component.showColumnSelectionDropDown).toEqual(true);
    });

    it('should set the showCreateIcon property to true', () => {
      expect(component.showCreateIcon).toEqual(true);
    });

  });

  describe('hasFilters getter', () => {
    it('should return true if some of the columns contain a filter', () => {
      component.columns = [
        {
          header: '',
          field: '',
          filter: {
            filterType: FilterType.Text,
          },
          isSortable: false,
        },
        {
          header: '',
          field: '',
          isSortable: false,
        },
      ];
      expect(component.hasFilters).toEqual(true);
    });

    it('should return false if none of the columns contain a filter', () => {
      component.columns = [
        {
          header: '',
          field: '',
          isSortable: false,
        },
        {
          header: '',
          field: '',
          isSortable: false,
        },
      ];
      expect(component.hasFilters).toEqual(false);
    });
  });

  describe('handleColumnSelectionChange function', () => {
    it('should emit the columnSelectionChange event when called', () => {
      const spy = spyOn(component.columnSelectionChange, 'emit');
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
    it('should emit the export event when called if the export button is not disabled', () => {
      const spy = spyOn(component.export, 'emit');
      component.handleExport(FileType.Csv);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(FileType.Csv);
    });

    it('should not emit the export event when called if the export button is disabled', () => {
      component.disableExportButtons = true;
      const spy = spyOn(component.export, 'emit');
      component.handleExport(FileType.Csv);
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });

  describe('handleFilterReset function', () => {
    it('should emit the resetFilter event when called', () => {
      const spy = spyOn(component.resetFilter, 'emit');
      component.handleFilterReset();
      expect(spy).toHaveBeenCalled();
    });
  });
});
