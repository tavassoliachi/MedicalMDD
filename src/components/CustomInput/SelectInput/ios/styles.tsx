import {StyleSheet} from 'react-native';

export const getStyles = ({error}: any) => {
  return StyleSheet.create({
    container: {alignItems: 'center'},
    value: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: error ? 'red' : 'rgba(0, 0, 0,0.36)',
      width: '100%',
      padding: 15,
    },
    btnCont: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: '#c4c4c4',
      padding: 10,
    },
    button: {
      color: 'blue',
    },
    picker: {
      backgroundColor: '#c4c4c4',
    },

    icon: {width: 45, height: 27, marginRight: 15},

    arrow: {position: 'absolute', right: 7},
    subCont: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
