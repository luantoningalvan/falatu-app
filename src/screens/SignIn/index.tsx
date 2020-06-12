import React from 'react';
import Button from '../../components/Button';
import { Input } from '../../components/Form';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { Container } from './styles';

const SignIn: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null);

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
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
      </Form>
    </Container>
  );
};

export default SignIn;
