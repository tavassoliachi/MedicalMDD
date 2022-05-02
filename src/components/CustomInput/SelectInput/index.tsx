import {View, Platform} from 'react-native';
import {getStyles} from './styles';
import React from 'react';
import IosSelect from './ios';
import AndroidSelect from './android';
import {IProps} from './types';

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
}: IProps) => {
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
          iconLeft={iconLeft}
        />
      )}
    </View>
  );
};

export default SelectInput;
