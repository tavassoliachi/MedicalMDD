import {StyleSheet} from 'react-native';

export const getStyles = ({}: any) => {
  return StyleSheet.create({
    container: {alignItems: 'center'},
    mainCont: {},
    input: {
      width: '80%',
      padding: 20,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0,0.36)',
    },
  });
};
