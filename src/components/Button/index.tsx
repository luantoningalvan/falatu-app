import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonText, ButtonIcon } from './styles';

const Button: React.ComponentType<
  TouchableOpacityProps & { grow?: boolean; icon?: string }
> = ({ children, icon, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      {icon && <ButtonIcon name={icon} size={20} color="#E5E5E5" />}
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
