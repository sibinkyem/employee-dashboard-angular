import { FilterType } from 'src/app/core';

export interface DropdownOption {
  label: string;
  value: any;
}

export interface Filter {
  filterType: FilterType;
  options?: DropdownOption[];
}
