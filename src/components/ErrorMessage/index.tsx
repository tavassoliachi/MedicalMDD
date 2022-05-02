import {Text, View} from 'react-native';
import {getStyles} from './styles';
import {Props} from './types';
import React from 'react';

const ErrorMessage = ({state, message}: Props): JSX.Element | null => {
  if (!state || !message) {
    return null;
  }
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;
