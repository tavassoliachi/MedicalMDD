import {IValidation} from 'components/ControlledInput/types';
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
