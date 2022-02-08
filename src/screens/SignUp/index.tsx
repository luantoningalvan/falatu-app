import React, {useCallback, useRef} from 'react';
import {Alert} from 'react-native';
import Button from '../../components/Button';
import {Input} from '../../components/Form';
import {FormHandles} from '@unform/core';
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
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';
import getValidationErrros from '../../utils/getValidationErrors';
import api from '../../services/apiClient';
import Logo from '../../../assets/static/falatu-logo.svg';

interface SignupFormData {
  email: string;
  username: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSubmit = useCallback(
    async (data: SignupFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('O nome é obrigatório'),
          email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('E-mail inválido'),
          password: Yup.string()
            .required()
            .min(6, 'Sua senha precisa ter no mínimo 6 letras'),
        });

        await schema.validate(data, {abortEarly: false});
        await api.post('/users/signup', data);
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrros(err);
          return formRef.current?.setErrors(errors);
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao realizar seu cadastro',
        );
      }
    },
    [navigation],
  );

  return (
    <Container>
      <Header>
        <Logo width={150} height={150} />
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
