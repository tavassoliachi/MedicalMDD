import TextInput from './TextInput';
import DateInput from './DateInput';
import SelectInput from './SelectInput';
import React from 'react';
import {
  ITextInput,
  IDateInput,
  ISelectInput,
  ICheckboxInput,
  INumberInput,
} from './Types/InputTypes';
import CheckboxInput from './CheckboxInput';

type Props =
  | ITextInput
  | INumberInput
  | IDateInput
  | ISelectInput
  | ICheckboxInput;

const CustomInput = (props: Props) => {
  switch (props.type) {
    case 'TEXT':
      return <TextInput {...props} />;
    case 'NUMBER':
      return <TextInput {...props} />;
    case 'DATE':
      return <DateInput {...props} />;
    case 'ENUM':
      return <SelectInput {...props} />;
    case 'CHECKBOX':
      return <CheckboxInput {...props} />;

    default:
      return <></>;
  }
};

export default CustomInput;
