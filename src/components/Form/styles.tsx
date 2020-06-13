/* eslint-disable no-shadow */
import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused?: boolean;
  isErrored?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  background: #efefef;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 8px;
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
      color: ${props => props.theme.palette.purple};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #333;
  font-size: 16px;
  font-family: 'Comfortaa-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
