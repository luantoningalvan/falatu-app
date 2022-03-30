import React from 'react';
import {IconButtonContainer, IconButtonIcon} from './styles';
import {IconButtonProps} from './types';

const IconButton: React.FC<IconButtonProps> = props => {
  const {icon, size = 'md', ...rest} = props;

  return (
    <IconButtonContainer size={size} {...rest}>
      <IconButtonIcon name={icon} size={28} color="#fff" />
    </IconButtonContainer>
  );
};

export default IconButton;
