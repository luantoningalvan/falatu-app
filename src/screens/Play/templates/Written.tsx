import React from 'react';
import {
  QuestionWrapper,
  QuestionCard,
  QuestionAvatar,
  Options,
  QuestionTitle,
} from './styles';

import { TextInput, Container } from '../../../components/Form/styles';
import Button from '../../../components/Button';

const Written: React.ComponentType = () => {
  return (
    <QuestionWrapper>
      <QuestionCard>
        <QuestionAvatar
          size="big"
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1263694342247583744/I6oEWdq__400x400.jpg',
          }}
        />
        <QuestionTitle>O quanto você me acha bonitão?</QuestionTitle>
        <Options multi>
          <Container>
            <TextInput placeholder="Escreva sua resposta..." />
          </Container>
        </Options>
      </QuestionCard>
      <Button icon="send" style={{ marginTop: 16 }}>
        Enviar
      </Button>
    </QuestionWrapper>
  );
};

export default Written;
