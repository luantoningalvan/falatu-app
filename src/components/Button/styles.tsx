import styled, { DefaultTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { ButtonContainerProps, ButtonTextProps, ButtonVariants } from "./types";
import { generateCommonStyles } from "../../utils/generateCommonStyles";

export function getVariantProps(variant: ButtonVariants, theme: DefaultTheme) {
  switch (variant) {
    case "filled":
      return {
        textColor: theme.palette.grey,
        backgrondColor: theme.palette.violet,
        border: "none",
      };
    case "outlined":
      return {
        textColor: theme.palette.violet,
        backgrondColor: "transparent",
        border: `1px solid ${theme.palette.violet}`,
      };
  }
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  padding: ${(props) => (props.size === "sm" ? 8 : 12)}px;
  border-radius: 8px;
  background-color: ${(props) =>
    getVariantProps(props.variant, props.theme).backgrondColor};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: ${(props) => getVariantProps(props.variant, props.theme).border};
  ${(props) => generateCommonStyles(props)}
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: "Poppins_400Regular";
  font-size: 16px;
  color: ${(props) => getVariantProps(props.variant, props.theme).textColor};
`;

export const ButtonIcon = styled(Feather)`
  margin-right: 16px;
`;
