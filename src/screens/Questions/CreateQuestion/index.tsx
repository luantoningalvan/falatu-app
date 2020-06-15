import React, { useState } from 'react';
import {
  Header,
  HeaderBackButton,
  HeaderBackIcon,
  HeaderTitle,
  Container,
  Content,
  ScreenDescription,
  ChoiseType,
  Type,
  TypeTitle,
  TypeIcon,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Written from './forms/Written';

interface TemplateType {
  [key: string]: any;
}

const templates: TemplateType = {
  yesornot: <></>,
  imagecomparision: <></>,
  multi: <></>,
  written: Written,
};

const Questions: React.FC = () => {
  const [type, setType] = useState('');
  const Template = templates[type];
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header>
        {type === '' ? (
          <HeaderBackButton onPress={() => goBack()}>
            <HeaderBackIcon name="arrow-left" />
          </HeaderBackButton>
        ) : (
          <HeaderBackButton onPress={() => setType('')}>
            <HeaderBackIcon name="x" />
          </HeaderBackButton>
        )}

        <HeaderTitle>Criar Pergunta</HeaderTitle>
      </Header>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <Content>
          {type === '' ? (
            <>
              <ScreenDescription>Escolha um tipo</ScreenDescription>

              <ChoiseType>
                <Type onPress={() => setType('written')}>
                  <TypeIcon name="message-circle" />
                  <TypeTitle>Texto</TypeTitle>
                </Type>
                <Type onPress={() => setType('imagecomparision')}>
                  <TypeIcon name="image" />
                  <TypeTitle>Imagem</TypeTitle>
                </Type>
                <Type onPress={() => setType('multi')}>
                  <TypeIcon name="bar-chart" />
                  <TypeTitle>Enquete</TypeTitle>
                </Type>
                <Type onPress={() => setType('yesornot')}>
                  <TypeIcon name="toggle-left" />
                  <TypeTitle>Sim/Não</TypeTitle>
                </Type>
              </ChoiseType>
            </>
          ) : (
            <Template />
          )}
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Questions;
