import React from 'react';
import {useTheme} from 'styled-components';
import {
  ButtonContainer,
  ButtonText,
  ButtonIcon,
  getVariantProps,
} from './styles';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = props => {
  const {children, icon, size = 'md', variant = 'filled', ...rest} = props;
  const theme = useTheme();

  return (
    <ButtonContainer size={size} variant={variant} {...rest}>
      {icon && (
        <ButtonIcon
          name={icon}
          size={20}
          color={getVariantProps(variant, theme).textColor}
        />
      )}
      <ButtonText variant={variant}>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
