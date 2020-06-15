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

const Written: React.ComponentType = ({ data }) => {
  return (
    <QuestionWrapper>
      <QuestionCard>
        <QuestionAvatar
          size="big"
          source={{
            uri:
              'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png',
          }}
        />
        <QuestionTitle>{data.title}</QuestionTitle>
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
