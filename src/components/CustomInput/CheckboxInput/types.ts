import {TFilteredFields} from '../Types/types';

type TShape = {
  shape?: 'square' | 'circle';
};
export interface ICheckboxInput extends TFilteredFields {
  type: 'CHECKBOX';
  value: boolean;
}
export interface IProps extends ICheckboxInput, TShape {}
