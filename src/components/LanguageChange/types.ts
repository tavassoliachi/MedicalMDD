import {ImageSourcePropType} from 'react-native';
export interface IProps {
  options: lang[];
  icon?: ImageSourcePropType;
}
type lang = {
  id: string;
  label: string;
  icon: ImageSourcePropType;
};
