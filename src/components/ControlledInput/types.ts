import {ITextInput, INumberInput} from 'components/CustomInput/TextInput/types';
import {IDateInput} from 'components/CustomInput/DateInput/types';
import {ICheckboxInput} from 'components/CustomInput/CheckboxInput/types';
import {ISelectInput} from 'components/CustomInput/SelectInput/types';
import {IFieldProps} from 'components/CustomInput/Types/types';

type TFilteredInputs =
  | Omit<
      ITextInput | INumberInput | IDateInput | ICheckboxInput,
      'value' | 'onChange' | 'error'
    >
  | Omit<
      ISelectInput,
      'value' | 'containerStyle' | 'iconLeft' | 'onChange' | 'error'
    >;

export interface IValidation {
  required: boolean;
  maxLength?: number | undefined;
  min?: string | number | undefined;
  max?: string | number | undefined;
  errorMessage: string;
}
export type IControlledInput = IFieldProps & TFilteredInputs;
