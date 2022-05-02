import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {IProps} from './types';
import React from 'react';

const CheckboxInput = ({onChange, value, shape = 'square'}: IProps) => {
  return (
    <View>
      <CheckBox boxType={shape} onValueChange={onChange} value={value} />
    </View>
  );
};

export default CheckboxInput;
