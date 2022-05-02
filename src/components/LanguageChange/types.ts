import {ImageSourcePropType} from 'react-native';
export interface IProps {
  options: lang[];
}
type lang = {
  id: string;
  label: string;
  icon: ImageSourcePropType;
};
