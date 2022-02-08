import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../../assets/static/falatu-logo.svg';
import {Container} from './styles';

const Header: React.FC = ({children}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Logo width={100} height={44} />
      </TouchableOpacity>
      {children}
    </Container>
  );
};
export default Header;
