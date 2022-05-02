import {View} from 'react-native';
import React from 'react';
import {getStyles} from './styles';
import {ITextNumProps} from '../Types/InputProps';
import {TextInput as Input} from 'react-native';

const TextInput = ({
  onChange,
  value,
  borderStyle,
  tip,
  error = false,
}: ITextNumProps) => {
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
