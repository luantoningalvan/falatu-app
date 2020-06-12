import React from 'react';
import Button from '../../components/Button';
import { Input } from '../../components/Form';
import { FormHandles } from '@unform/core';
import {
  Container,
  SignIn,
  SignInText,
  SignInTextHighlighted,
  Header,
  FormContainer,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import LinearGradient from 'react-native-linear-gradient';

const SignUp: React.FC = () => {
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
        <Title>CADASTRO</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input icon="at-sign" name="username" placeholder="Nome de usuário" />

          <Input
            icon="user"
            name="email"
            keyboardType="email-address"
            placeholder="Seu e-mail"
          />

          <Input
            icon="lock"
            name="password"
            secureTextEntry={true}
            placeholder="Senha"
          />

          <Button grow onPress={() => (formRef.current as any).submitForm()}>
            CRIAR CONTA
          </Button>

          <SignIn onPress={() => navigation.navigate('SignIn')}>
            <SignInText>já tem uma conta? </SignInText>
            <SignInTextHighlighted>ENTRAR</SignInTextHighlighted>
          </SignIn>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignUp;
