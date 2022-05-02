import {View, Image} from 'react-native';
import {getStyles} from './styles';
import {Picker} from '@react-native-picker/picker';
import {IProps} from './types';
import React from 'react';

const AndroidSelect = ({
  value,
  onChange,
  placeholder,
  options,
  containerStyle,
  error,
  emptyVal,
  iconLeft,
}: IProps) => {
  const styles = getStyles({error, iconLeft});
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, containerStyle]}>
        {iconLeft && (
          <Image source={iconLeft} resizeMode="contain" style={styles.icon} />
        )}
        <Picker
          mode="dropdown"
          selectedValue={value}
          onValueChange={onChange}
          placeholder={placeholder}
          style={styles.value}>
          {emptyVal && (
            <Picker.Item
              key=""
              label={placeholder}
              value={null}
              enabled={false}
            />
          )}
          {options.map(e => {
            return <Picker.Item label={e.label} value={e.id} key={e.id} />;
          })}
        </Picker>
      </View>
    </View>
  );
};

export default AndroidSelect;
