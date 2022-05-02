import {Text, View} from 'react-native';
import React from 'react';
import CustomInput from 'components/CustomInput';
import {getStyles} from './styles';
import {Controller, useFormContext} from 'react-hook-form';
import {IControlledInput} from 'components/CustomInput/Types/types';
import ErrorMessage from 'components/ErrorMessage';

const ControlledInput = (props: IControlledInput) => {
  const {validation, name, type} = props;
  const styles = getStyles({type});
  const {
    register,
    formState: {errors},
  } = useFormContext();
  return (
    <View>
      <Controller
        {...register(name)}
        rules={validation}
        defaultValue={type === 'DATE' ? new Date() : ''}
        render={({field: {onChange, value}}) => (
          <View style={styles.renderCont}>
            <Text style={styles.title}>
              {name}
              {validation.required && '*'}
            </Text>
            <CustomInput
              {...props}
              error={Boolean(errors[name])}
              onChange={onChange}
              value={value}
            />
            <ErrorMessage
              state={Boolean(errors[name])}
              message={validation.errorMessage || ''}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ControlledInput;
