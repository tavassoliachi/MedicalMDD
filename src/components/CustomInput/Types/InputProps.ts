import {
  ICheckboxInput,
  IDateInput,
  ISelectInput,
  ITextInput,
  INumberInput,
} from '../Types/InputTypes';

type TBorderStyle = {
  borderStyle?: 'outlined' | 'underlined';
};
type TShape = {
  shape?: 'square' | 'circle';
};
type TPlaceholder = {
  placeholder: string;
};

export interface ICheckboxProps extends ICheckboxInput, TShape {}
export interface IDateProps extends IDateInput, TBorderStyle {}
export interface ISelectProps extends ISelectInput, TBorderStyle {}
export interface ISelectIos
  extends Omit<ISelectInput, 'type' | 'tip'>,
    TPlaceholder {}
export interface ISelectAndroid
  extends Omit<ISelectInput, 'type' | 'tip' | 'iconLeft'>,
    TPlaceholder {}

interface ITextInput1 extends ITextInput, TBorderStyle {}
interface INumberInput1 extends INumberInput, TBorderStyle {}

export type ITextNumProps = ITextInput1 | INumberInput1;
