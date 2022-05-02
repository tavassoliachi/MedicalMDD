import {TFilteredFields} from '../Types/types';
import {TBorderStyle} from '../Types/CommonTypes';

interface ITextInput1 extends ITextInput, TBorderStyle {}
interface INumberInput1 extends INumberInput, TBorderStyle {}
export interface ITextInput extends TFilteredFields {
  type: 'TEXT';
  value: string;
}
export interface INumberInput extends TFilteredFields {
  type: 'NUMBER';
  value: any;
}

export type TProps = ITextInput1 | INumberInput1;
