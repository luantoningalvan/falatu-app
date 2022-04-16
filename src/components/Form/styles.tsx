import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

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

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.theme.palette.violet};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #333;
  font-size: 16px;
  font-family: "Poppins_400Regular";
`;

export const Icon = styled(Feather)`
  margin-right: 12px;
`;
