import {View, Text, Image, Pressable} from 'react-native';
import CustomModal from 'components/CustomModal';
import {getStyles} from './styles';
import React, {useState} from 'react';
import {ISelectIos} from '../Types/InputProps';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Picker} from '@react-native-picker/picker';

const IosSelect = ({
  value,
  onChange,
  placeholder,
  options,
  containerStyle,
  iconLeft,
  error,
  emptyVal,
}: ISelectIos) => {
  const styles = getStyles({error});
  const [isOpen, setIsOpen] = useState(false);
  const currLabel = options.filter(e => e.id === value)[0]?.label;
  return (
    <View>
      <View style={styles.iosMainCont}>
        <Pressable
          style={[styles.iosValue, containerStyle]}
          onPress={() => setIsOpen(true)}>
          <View style={styles.IosSubCont}>
            {iconLeft && (
              <Image
                source={iconLeft}
                resizeMode="contain"
                style={styles.IosIconLeft}
              />
            )}
            <Text>{currLabel || placeholder}</Text>
          </View>
          <AntDesign
            name="caretdown"
            size={13}
            color={'#494949'}
            style={styles.arrow}
          />
        </Pressable>
      </View>
      <CustomModal justifyContent="flex-end" isOpen={isOpen}>
        <View>
          <View style={styles.iosCont}>
            <Text style={styles.iosButton} onPress={() => setIsOpen(false)}>
              Confirm
            </Text>
          </View>

          <Picker
            mode="dropdown"
            style={styles.iosPicker}
            selectedValue={value}
            onValueChange={onChange}>
            {emptyVal && (
              <Picker.Item
                key=""
                label={placeholder}
                value={null}
                enabled={false}
              />
            )}
            {options.map(({id, label}) => (
              <Picker.Item label={label} value={id} key={id} />
            ))}
          </Picker>
        </View>
      </CustomModal>
    </View>
  );
};

export default IosSelect;
