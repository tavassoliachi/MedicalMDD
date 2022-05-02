import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ICheckboxProps} from '../Types/InputProps';
import React from 'react';

const CheckboxInput = ({onChange, value, shape}: ICheckboxProps) => {
  return (
    <View>
      <CheckBox boxType={shape} onValueChange={onChange} value={value} />
    </View>
  );
};

export default CheckboxInput;
