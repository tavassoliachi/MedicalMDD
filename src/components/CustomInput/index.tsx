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
      return <TextInput {...props} borderStyle="outlined" />;
    case 'NUMBER':
      return <TextInput {...props} borderStyle="outlined" />;
    case 'DATE':
      return <DateInput {...props} borderStyle="underlined" />;
    case 'ENUM':
      return <SelectInput {...props} borderStyle="outlined" />;
    case 'CHECKBOX':
      return <CheckboxInput {...props} shape="square" />;

    default:
      return <></>;
  }
};

export default CustomInput;
