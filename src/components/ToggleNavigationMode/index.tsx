import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Feather';
import {ToggleSwitchContainer, ToggleSwitchOption} from './styles';

import {useTheme} from 'styled-components';

export const ToggleNavigationMode: React.FC = () => {
  const [active, setActive] = useState(0);
  const theme = useTheme();

  return (
    <ToggleSwitchContainer>
      <ToggleSwitchOption active={active === 0} onPress={() => setActive(0)}>
        <Icon
          name="users"
          size={24}
          color={active === 0 ? theme.palette.violet : '#fff'}
        />
      </ToggleSwitchOption>
      <ToggleSwitchOption active={active === 1} onPress={() => setActive(1)}>
        <Icon
          name="globe"
          size={24}
          color={active === 1 ? theme.palette.violet : '#fff'}
        />
      </ToggleSwitchOption>
    </ToggleSwitchContainer>
  );
};
