import React from 'react';
import { View } from 'react-native';
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
  BottomInfo,
  BottomInfoLink,
  BottomInfoLinkText,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import LinearGradient from 'react-native-linear-gradient';
// @ts-ignore
import Logo from '../../../assets/static/wdyt-logo.svg';

const SignIn: React.FC = () => {
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

export default SignIn;
