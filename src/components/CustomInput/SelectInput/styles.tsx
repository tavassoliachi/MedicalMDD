import {StyleSheet} from 'react-native';

export const getStyles = ({error}: any) => {
  return StyleSheet.create({
    container: {alignItems: 'center'},

    input: {
      width: '80%',
      padding: 20,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0,0.36)',
    },
    iosCont: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: '#c4c4c4',
      padding: 10,
    },
    iosButton: {
      color: 'blue',
    },
    iosPicker: {
      backgroundColor: '#c4c4c4',
    },
    androidSubCont: {
      width: '100%',
      borderWidth: 1,
      borderColor: error ? 'red' : 'rgba(0, 0, 0,0.36)',
    },
    androidMainCont: {
      alignItems: 'center',
    },
    iosMainCont: {alignItems: 'center'},
    iosValue: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: error ? 'red' : 'rgba(0, 0, 0,0.36)',
      width: '100%',
      padding: 15,
    },
    IosIconLeft: {width: 45, height: 27, marginRight: 15},
    arrow: {position: 'absolute', right: 7},
    IosSubCont: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
