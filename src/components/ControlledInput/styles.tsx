import {StyleSheet} from 'react-native';

export const getStyles = ({type}: any) => {
  return StyleSheet.create({
    renderCont: {
      flexDirection: type === 'CHECKBOX' ? 'row-reverse' : 'column',
      justifyContent: 'space-between',
      width: '100%',
    },
    title: {marginBottom: 5, width: '85%'},
  });
};
