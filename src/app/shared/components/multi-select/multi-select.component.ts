import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'emp-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],

})
export class MultiSelectComponent implements OnChanges {
  @Input() background = '';
  @Input() border = '';
  @Input() borderRadius = '';
  @Input() clearSelection = false;
  @Input() height = '';
  @Input() maxSelectedLabels = 2;
  @Input() minWidth = '400px';
  @Input() options: any[] = [];
  @Input() optionLabel = '';
  @Input() optionValue = '';
  @Input() placeholder = '';
  @Input() selectedItemsLabel = 'items';
  @Output() changeSelection = new EventEmitter<string[]>();
  selectedOptions: any[] = [];
  onChange = () => {};
  onTouched = () => {};

  ngOnChanges(): void {
    if (this.clearSelection) {
      this.selectedOptions = [];
    }
  }

  handleChange(event: any): void {
    this.changeSelection.emit(event.value);
  }



}
