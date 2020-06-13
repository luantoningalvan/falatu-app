import React from 'react';
import { Container, Header } from './styles';
import { Text, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/Auth';
const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();
  return (
    <Container>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <Header>
          <Button title="Sair" onPress={() => signOut()} />
          <Button
            title="Configurações"
            onPress={() => navigation.navigate('Settings')}
          />
        </Header>
        <Text>Profile</Text>
      </LinearGradient>
    </Container>
  );
};

export default Profile;
