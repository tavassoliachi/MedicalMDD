import {Text} from 'react-native';
import React from 'react';
import Screen from 'components/screen';
import {getStyles} from './styles';
// type Props = {};

const Loading = () => {
  const styles = getStyles();
  return (
    <Screen screenStyles={styles.container}>
      <Text>Loading</Text>
    </Screen>
  );
};

export default Loading;
