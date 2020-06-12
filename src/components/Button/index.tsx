import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

const Button: React.ComponentType<
  TouchableOpacityProps & { grow?: boolean }
> = ({ children, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
