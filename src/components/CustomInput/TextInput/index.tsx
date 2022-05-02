import {View} from 'react-native';
import React from 'react';
import {getStyles} from './styles';
import {TProps} from './types';
import {TextInput as Input} from 'react-native';

const TextInput = ({
  onChange,
  value,
  borderStyle = 'outlined',
  tip,
  error = false,
}: TProps) => {
  const styles = getStyles({borderStyle, error});
  return (
    <View style={styles.container}>
      <Input
        placeholder={tip}
        style={styles.input}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

export default TextInput;
