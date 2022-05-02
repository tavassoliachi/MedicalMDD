import {ISelectInput} from '../types';
import {TPlaceholder} from 'components/CustomInput/Types/CommonTypes';
export interface IProps
  extends Omit<ISelectInput, 'type' | 'tip'>,
    TPlaceholder {}
