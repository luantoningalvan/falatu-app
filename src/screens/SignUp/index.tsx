import React from 'react';
import { View } from 'react-native';
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
  BottomInfo,
  BottomInfoLink,
  BottomInfoLinkText,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import LinearGradient from 'react-native-linear-gradient';
// @ts-ignore
import Logo from '../../../assets/static/wdyt-logo.svg';

const SignUp: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null);
  const navigation = useNavigation();
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Header>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Logo width={150} height={150} />
        </View>
        <LinearGradient colors={['#D90368', '#543A6A']} style={{ flex: 1 }} />
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

          <Button grow onPress={() => formRef.current!.submitForm()}>
            CRIAR CONTA
          </Button>

          <SignIn onPress={() => navigation.navigate('SignIn')}>
            <SignInText>já tem uma conta? </SignInText>
            <SignInTextHighlighted>ENTRAR</SignInTextHighlighted>
          </SignIn>
        </Form>
      </FormContainer>
      <BottomInfo>
        <BottomInfoLink>
          <BottomInfoLinkText>Política de privacidade</BottomInfoLinkText>
        </BottomInfoLink>
        <BottomInfoLink>
          <BottomInfoLinkText>Ajuda e suporte</BottomInfoLinkText>
        </BottomInfoLink>
      </BottomInfo>
    </Container>
  );
};

export default SignUp;
