import {View} from 'react-native';
import {getStyles} from './styles';
import {Picker} from '@react-native-picker/picker';
import {ISelectAndroid} from '../Types/InputProps';
import React from 'react';

const AndroidSelect = ({
  value,
  onChange,
  placeholder,
  options,
  containerStyle,
  error,
  emptyVal,
}: ISelectAndroid) => {
  const styles = getStyles({error});
  return (
    <View style={styles.androidMainCont}>
      <View style={[styles.androidSubCont, containerStyle]}>
        <Picker
          mode="dropdown"
          selectedValue={value}
          onValueChange={onChange}
          placeholder={placeholder}>
          {emptyVal && (
            <Picker.Item
              key=""
              label={placeholder}
              value={null}
              enabled={false}
            />
          )}
          {options.map(e => {
            return <Picker.Item label={e.label} value={e.label} key={e.id} />;
          })}
        </Picker>
      </View>
    </View>
  );
};

export default AndroidSelect;
