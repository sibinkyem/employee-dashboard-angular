import { Filter } from './filter';

export interface Column {
  field: string;
  filter?: Filter;
  header: string;
  isSortable: boolean;
}
