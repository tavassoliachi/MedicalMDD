import {View, Platform} from 'react-native';
import {getStyles} from './styles';
import React from 'react';
import IosSelect from './IosSelect';
import {ISelectProps} from '../Types/InputProps';

import AndroidSelect from './AndroidSelect';

const SelectInput = ({
  onChange,
  value,
  borderStyle = 'outlined',
  tip,
  options,
  containerStyle,
  iconLeft,
  emptyVal = true,
  error = false,
}: ISelectProps) => {
  const styles = getStyles({error});
  borderStyle && {};
  return (
    <View style={styles.mainCont}>
      {Platform.OS === 'ios' ? (
        <IosSelect
          error={error}
          value={value}
          onChange={onChange}
          placeholder={tip}
          options={options}
          containerStyle={containerStyle}
          iconLeft={iconLeft}
          emptyVal={emptyVal}
        />
      ) : (
        <AndroidSelect
          error={error}
          value={value}
          onChange={onChange}
          placeholder={tip}
          options={options}
          containerStyle={containerStyle}
          emptyVal={emptyVal}
          // iconLeft={iconLeft}
        />
      )}
    </View>
  );
};

export default SelectInput;
