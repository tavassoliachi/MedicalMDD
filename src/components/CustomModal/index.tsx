import {View, Modal} from 'react-native';
import {getStyles} from './styles';
import {Props} from './types';
import React from 'react';

const CustomModal = ({children, justifyContent, isOpen}: Props) => {
  const styles = getStyles({justifyContent});
  return (
    <Modal transparent={true} visible={isOpen}>
      <View style={styles.modalView}>{children}</View>
    </Modal>
  );
};

export default CustomModal;
