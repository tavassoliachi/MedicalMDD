import {TBorderStyle} from '../Types/CommonTypes';
import {TFilteredFields} from '../Types/types';
type TSelectOptions = {
  id: string;
  label: string;
};
export interface ISelectInput extends TFilteredFields {
  type: 'ENUM';
  emptyVal: boolean;
  value: string;
  options: TSelectOptions[];
  iconLeft?: any;
  containerStyle?: any;
}
export interface IProps extends ISelectInput, TBorderStyle {}
