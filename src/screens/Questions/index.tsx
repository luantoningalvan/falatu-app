import React from 'react';
import { Container } from './styles';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Questions: React.FC = () => {
  return (
    <Container>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <Text>Questions</Text>
      </LinearGradient>
    </Container>
  );
};

export default Questions;
