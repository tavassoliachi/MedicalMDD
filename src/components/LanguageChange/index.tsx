import {View} from 'react-native';
import React from 'react';

import {getStyles} from './styles';
import CustomInput from 'components/CustomInput';
import {IProps} from './types';
import {useTranslation} from 'react-i18next';

const LanguageChange = ({options, icon}: IProps) => {
  const styles = getStyles();

  const {
    i18n: {language, changeLanguage},
  } = useTranslation();

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
