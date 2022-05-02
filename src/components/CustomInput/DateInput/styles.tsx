import {StyleSheet} from 'react-native';

export const getStyles = ({borderStyle, error}: any) => {
  const borderW = borderStyle === 'outlined' ? 1 : 0;
  return StyleSheet.create({
    container: {alignItems: 'center'},
    input: {width: '100%'},
    dateToggle: {
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderColor: error ? 'red' : 'black',
      borderWidth: 1,
      borderTopWidth: borderW,
      borderLeftWidth: borderW,
      borderRightWidth: borderW,
    },
    dateText: {color: 'rgba(0, 0, 0,0.54)'},
  });
};
