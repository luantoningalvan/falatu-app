import {TouchableOpacity} from 'react-native';
import {CommonStyle} from '../../utils/generateCommonStyles';

export type ButtonSizes = 'sm' | 'md';

export type IconButtonProps = Partial<TouchableOpacity> & {
  icon: string;
  ghost?: boolean;
  size?: ButtonSizes;
} & CommonStyle;

export type ButtonContainerProps = {
  size: ButtonSizes;
  ghost?: boolean;
};
