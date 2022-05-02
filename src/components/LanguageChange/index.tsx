import {View} from 'react-native';
import React, {useMemo} from 'react';

import {getStyles} from './styles';
import CustomInput from 'components/CustomInput';
import {IProps} from './types';
import {useTranslation} from 'react-i18next';

const LanguageChange = ({options}: IProps) => {
  const styles = getStyles();

  const {
    i18n: {language, changeLanguage},
  } = useTranslation();

  const icon = useMemo(() => {
    return options.filter((e: {id: string}) => e.id === language)[0]?.icon;
  }, [language, options]);

  return (
    <View>
      <CustomInput
        type="ENUM"
        tip="Language"
        emptyVal={false}
        options={options}
        iconLeft={icon}
        value={language}
        onChange={(e: string) => changeLanguage(e)}
        containerStyle={styles.languageInput}
      />
    </View>
  );
};

export default LanguageChange;
