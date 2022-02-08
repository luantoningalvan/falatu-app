import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused?: boolean;
  isErrored?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 48px;
  padding: 0 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #dbdbdb;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.palette.purple};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #333;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  line-height: 48px;
  height: 48px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 12px;
`;
