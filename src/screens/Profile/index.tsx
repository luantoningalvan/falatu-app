import React from 'react';
import { Container, Header } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/Auth';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../../../assets/static/wdyt-logo.svg';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();
  return (
    <Container>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <Header>
          <Logo width={100} height={44} />
          <Menu>
            <MenuTrigger>
              <Icon name="settings" size={30} color="#fff" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption
                onSelect={() => navigation.navigate('Settings')}
                text="Configurações"
              />
              <MenuOption onSelect={() => signOut()} text="Sair" />
            </MenuOptions>
          </Menu>
        </Header>
      </LinearGradient>
    </Container>
  );
};

export default Profile;
