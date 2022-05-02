import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CustomInput from 'components/CustomInput';
import {getStyles} from './styles';
import {Controller, useFormContext} from 'react-hook-form';
import {IControlledInput} from 'components/CustomInput/Types/types';
import ErrorMessage from 'components/ErrorMessage';

const ControlledInput = (props: IControlledInput) => {
  const {
    validation,
    validation: {errorMessage, required},
    name,
    type,
  } = props;
  const styles = getStyles({type});
  const {
    register,
    unregister,
    formState: {errors},
  } = useFormContext();
  useEffect(() => {
    return () => unregister(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
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
              {required && '*'}
            </Text>
            <CustomInput
              {...props}
              error={Boolean(errors[name])}
              onChange={onChange}
              value={value}
            />
            <ErrorMessage
              state={Boolean(errors[name])}
              message={errorMessage || ''}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ControlledInput;
