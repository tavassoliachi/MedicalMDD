import {View, SafeAreaView, ViewStyle} from 'react-native';
import {getStyles} from './styles';
import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  screenStyles?: ViewStyle;
};
const styles = getStyles();
const Screen = ({children, screenStyles}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, screenStyles]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
