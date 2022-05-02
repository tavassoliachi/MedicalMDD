import {View, Text, Image, Pressable} from 'react-native';
import CustomModal from 'components/CustomModal';
import {getStyles} from './styles';
import React, {useEffect, useState} from 'react';
import {IProps} from './types';
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
}: IProps) => {
  useEffect(() => {
    AntDesign.loadFont();
  }, []);
  const styles = getStyles({error});
  const [isOpen, setIsOpen] = useState(false);
  const currLabel = options.filter(e => e.id === value)[0]?.label;
  return (
    <View>
      <View style={styles.container}>
        <Pressable
          style={[styles.value, containerStyle]}
          onPress={() => setIsOpen(true)}>
          <View style={styles.subCont}>
            {iconLeft && (
              <Image
                source={iconLeft}
                resizeMode="contain"
                style={styles.icon}
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
          <View style={styles.btnCont}>
            <Text style={styles.button} onPress={() => setIsOpen(false)}>
              Confirm
            </Text>
          </View>

          <Picker
            mode="dropdown"
            style={styles.picker}
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
