import React from 'react';
import {Image} from 'react-native';
import {AvatarContainer, UserInitialLetters} from './styles';

interface AvatarProps {
  src?: string;
  name?: string;
  size: 'sm' | 'md' | 'lg';
}

const Avatar = (props: AvatarProps) => {
  const {size, name, src} = props;

  const getIntialLetters = () => {
    if (name) {
      const splitName = name.split(' ');
      const firstLetter = splitName[0].charAt(0);
      const lastLetter = splitName[splitName.length - 1].charAt(0);
      return firstLetter + lastLetter;
    }

    return '';
  };

  return (
    <AvatarContainer size={size}>
      {src ? (
        <Image source={{uri: src}} />
      ) : (
        <UserInitialLetters>{getIntialLetters()}</UserInitialLetters>
      )}
    </AvatarContainer>
  );
};

export {Avatar};
