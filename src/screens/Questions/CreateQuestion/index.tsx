import React, { useState } from 'react';
import {
  Container,
  ScreenDescription,
  ChoiseType,
  Type,
  TypeTitle,
  TypeIcon,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface TemplateType {
  [key: string]: any;
}

const templates: TemplateType = {
  yesornot: <></>,
  imagecomparision: <></>,
  multi: <></>,
  written: <></>,
};

const Questions: React.FC = () => {
  const [type, setType] = useState('');
  const Template = templates[type];

  return (
    <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
      <Container>
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
      </Container>
    </LinearGradient>
  );
};

export default Questions;
