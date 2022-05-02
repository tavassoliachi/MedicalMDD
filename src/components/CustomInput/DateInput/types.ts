import {TFilteredFields} from '../Types/types';
import {TBorderStyle} from '../Types/CommonTypes';

export interface IDateInput extends TFilteredFields {
  type: 'DATE';
  value: Date;
}

export interface IProps extends IDateInput, TBorderStyle {}
