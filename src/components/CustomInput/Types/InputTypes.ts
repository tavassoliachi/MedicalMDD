import {TFilteredFields} from './types';

export interface ITextInput extends TFilteredFields {
  type: 'TEXT';
  value: string;
}
export interface INumberInput extends TFilteredFields {
  type: 'NUMBER';
  value: any;
}
export interface IDateInput extends TFilteredFields {
  type: 'DATE';
  value: Date;
}
export interface ISelectInput extends TFilteredFields {
  type: 'ENUM';
  emptyVal: boolean;
  value: string;
  options: TSelectOptions[];
  iconLeft?: any;
  containerStyle?: any;
}
export interface ICheckboxInput extends TFilteredFields {
  type: 'CHECKBOX';
  value: boolean;
}

//-------------------//
export type TSelectOptions = {
  id: string;
  label: string;
};
