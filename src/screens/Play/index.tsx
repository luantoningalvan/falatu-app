import React, { useState, useCallback } from 'react';
import {
  Container,
  ReportButton,
  ReportButtonText,
  SkipButton,
  SkipButtonText,
  PlayArea,
} from './styles';
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import YestOrNot from './templates/YesOrNo';
import ImageComparision from './templates/ImageComparision';
import MultiChoice from './templates/MultiChoice';
import Written from './templates/Written';
import Add from './templates/Add';

interface QuestionData {
  id: string;
  type: string;
  title: string;
  data?: object;
}

let data: QuestionData[] = [
  {
    id: '1',
    type: 'imagecomparision',
    title: 'Qual ficou melhor',
  },
  {
    id: '1',
    type: 'multi',
    title: 'Qual ficou melhor',
  },
  {
    id: '1',
    type: 'written',
    title: 'Qual ficou melhor',
  },
  {
    id: '1',
    type: 'yesornot',
    title: 'Qual ficou melhor',
  },
];

const Play: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [loading, setLoading] = useState(false);

  const templates = {
    yesornot: YestOrNot,
    imagecomparision: ImageComparision,
    multi: MultiChoice,
    written: Written,
  };

  const loadMore = useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      const newData = data;
      data = [...data, ...newData];
      setLoading(false);
      nextQuestion();
    }, 5000);
  }, []);

  const nextQuestion = useCallback(() => {
    if (position !== data.length - 1) {
      setPosition(position + 1);
    } else {
      loadMore();
    }
  }, [position, loadMore]);

  const Template = templates[data[position].type];

  return (
    <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
      <Container>
        <Header>
          <ReportButton>
            <ReportButtonText>DENUNCIAR</ReportButtonText>
            <Icon name="info" size={24} color="#fff" />
          </ReportButton>
        </Header>
        {!loading ? (
          <PlayArea>
            <Template />
            <SkipButton onPress={nextQuestion}>
              <SkipButtonText>Pular</SkipButtonText>
              <Icon size={28} name="skip-forward" color="white" />
            </SkipButton>
          </PlayArea>
        ) : (
          <Add />
        )}
      </Container>
    </LinearGradient>
  );
};

export default Play;
