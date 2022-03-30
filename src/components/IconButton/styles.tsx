import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ButtonContainerProps} from './types';
import {generateCommonStyles} from '../../utils/generateCommonStyles';

export const IconButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: ${props =>
    props.ghost ? 'transparent' : 'rgba(0,0,0,0.4)'},
  justify-content: center;
  align-items: center;
  ${props => generateCommonStyles(props)}
`;

export const IconButtonIcon = styled(MaterialIcons)``;
