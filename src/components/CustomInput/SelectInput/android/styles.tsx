import {StyleSheet} from 'react-native';

export const getStyles = ({error, iconLeft}: any) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    subContainer: {
      width: '100%',
      borderWidth: 1,
      borderColor: error ? 'red' : 'rgba(0, 0, 0,0.36)',
    },

    icon: {
      width: 45,
      height: 27,
      position: 'absolute',
      top: '25%',
      left: 5,
    },
    value: iconLeft && {marginLeft: 35},
  });
};
