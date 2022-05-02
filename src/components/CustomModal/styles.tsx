import {StyleSheet} from 'react-native';

type Props = {
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
};
export const getStyles = ({justifyContent}: Props) => {
  return StyleSheet.create({
    modalView: {
      backgroundColor: 'rgba(0, 0, 0,0.5)',
      flex: 1,
      justifyContent: justifyContent,
    },
  });
};
