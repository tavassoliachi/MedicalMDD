import {StyleSheet} from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    container: {marginHorizontal: '10%'},
    titleCont: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    title: {
      width: '50%',
      fontWeight: '300',
      textAlign: 'center',
      fontSize: 25,
    },
    inputCont: {
      marginVertical: 10,
    },
    button: {
      backgroundColor: '#2196F3',
      width: 100,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      alignSelf: 'flex-end',
      marginTop: 10,
    },
    btnText: {
      color: 'white',
      fontWeight: '500',
    },
  });
};
