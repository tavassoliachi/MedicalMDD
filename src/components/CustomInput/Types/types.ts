import {
  ITextInput,
  INumberInput,
  IDateInput,
  ICheckboxInput,
  ISelectInput,
} from './InputTypes';

export interface IFieldProps {
  name: string;
  description?: string;
  path?: string;
  tip: string;
  validation: IValidation;
}

export type TFilteredFields = Omit<
  IInputProps,
  'name' | 'description' | 'validation'
>;

export interface IInputProps extends IFieldProps {
  onChange: (e?: any) => void;
  error?: boolean;
}

export interface IValidation {
  required: boolean;
  maxLength?: number | undefined;
  min?: string | number | undefined;
  max?: string | number | undefined;
  errorMessage: string;
}

// CustomInput Props
export type IControlledInput = IFieldProps & TFilteredInputs;

// Part of CustomInput Props, with removed props of ControlledInput
type TFilteredInputs =
  | Omit<
      ITextInput | INumberInput | IDateInput | ICheckboxInput,
      'value' | 'onChange' | 'error'
    >
  | Omit<
      ISelectInput,
      'value' | 'containerStyle' | 'iconLeft' | 'onChange' | 'error'
    >;
