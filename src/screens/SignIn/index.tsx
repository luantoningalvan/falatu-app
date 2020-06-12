import React from 'react';
import Button from '../../components/Button';
import { Input } from '../../components/Form';
import { FormHandles } from '@unform/core';
import {
  Container,
  SignUp,
  SignUpText,
  SignUpTextHighlighted,
  Header,
  FormContainer,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import LinearGradient from 'react-native-linear-gradient';

const SignIn: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null);
  const navigation = useNavigation();
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Header>
        <LinearGradient colors={['#0a82c6', '#00A3FF']} style={{ flex: 1 }} />
      </Header>
      <FormContainer>
        <Title>ENTRAR</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            icon="user"
            name="email"
            keyboardType="email-address"
            placeholder="voce@email.com"
          />

          <Input
            icon="lock"
            name="password"
            secureTextEntry={true}
            placeholder="Senha"
          />

          <Button grow onPress={() => (formRef.current as any).submitForm()}>
            Entrar
          </Button>

          <SignUp onPress={() => navigation.navigate('SignUp')}>
            <SignUpText>ainda não tem uma conta? </SignUpText>
            <SignUpTextHighlighted>CADASTRE-SE</SignUpTextHighlighted>
          </SignUp>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
