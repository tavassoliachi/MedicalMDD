import {View, Text, Pressable} from 'react-native';
import ControlledInput from 'components/ControlledInput';
import {useForm, FormProvider} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import LanguageChange from 'components/LanguageChange';
import React, {useMemo} from 'react';
import {getStyles} from './styles';
import {IControlledInput} from 'components/ControlledInput/types';
import en from '../../assets/en.png';
import ru from '../../assets/ru.png';

const Appointments = () => {
  const {
    t,
    i18n: {language},
  } = useTranslation();
  const methods = useForm();
  const {handleSubmit} = methods;
  const fields: IControlledInput[] = t('fields', {returnObjects: true});
  const styles = getStyles();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  let languages = useMemo(() => {
    return [
      {id: 'en', label: 'EN', icon: en},
      {id: 'ru', label: 'RU', icon: ru},
    ];
  }, []);
  const icon = useMemo(() => {
    return languages.filter((e: {id: string}) => e.id === language)[0]?.icon;
  }, [language, languages]);

  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>Observation</Text>
        <LanguageChange options={languages} icon={icon} />
      </View>

      <FormProvider {...methods}>
        {fields.map((props: IControlledInput) => (
          <View style={styles.inputCont} key={props.name}>
            <ControlledInput {...props} />
          </View>
        ))}

        <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
          <Text style={styles.btnText}>
            {language === 'en' ? 'Save' : 'сохранять'}
          </Text>
        </Pressable>
      </FormProvider>
    </View>
  );
};

export default Appointments;
