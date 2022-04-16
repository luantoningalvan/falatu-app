import { TouchableOpacityProps } from "react-native";
import { CommonStyle } from "../../utils/generateCommonStyles";

export type ButtonVariants = "filled" | "outlined";
export type ButtonSizes = "sm" | "md";

export type ButtonProps = TouchableOpacityProps & {
  grow?: boolean;
  icon?: string;
  size?: ButtonSizes;
  variant?: ButtonVariants;
} & CommonStyle;

export type ButtonContainerProps = {
  grow?: boolean;
  size: ButtonSizes;
  variant: ButtonVariants;
};

export type ButtonTextProps = {
  variant: ButtonVariants;
};
