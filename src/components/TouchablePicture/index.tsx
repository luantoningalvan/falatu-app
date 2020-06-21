import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { PhotoGridImage } from './styles';

interface TouchablePictureProps extends TouchableOpacityProps {
  uri: string;
}

export const TouchablePicture: React.ComponentType<TouchablePictureProps> = ({
  uri,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <PhotoGridImage source={{ uri }} />
    </TouchableOpacity>
  );
};
