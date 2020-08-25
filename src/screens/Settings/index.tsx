import React from 'react';
import { Container } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native';

const Settings: React.FC = () => {
  return (
    <Container>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <Text>Foda-sse</Text>
      </LinearGradient>
    </Container>
  );
};

export default Settings;
