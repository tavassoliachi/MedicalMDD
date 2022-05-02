import {StyleSheet} from 'react-native';

type Props = {
  borderStyle: 'outlined' | 'underlined';
  error: boolean;
};
export const getStyles = ({borderStyle, error}: Props) => {
  const borderW = borderStyle === 'outlined' ? 1 : 0;
  return StyleSheet.create({
    container: {alignItems: 'center'},
    input: {
      width: '100%',
      padding: 20,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: error ? 'red' : 'rgba(0, 0, 0,0.36)',
      borderTopWidth: borderW,
      borderLeftWidth: borderW,
      borderRightWidth: borderW,
    },
  });
};
