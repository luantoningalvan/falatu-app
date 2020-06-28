import React, { useEffect, useCallback } from 'react';
import { Container, SkipButton, SkipButtonText, PlayArea } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import { usePlay } from '../../hooks/Play';
import { Text } from 'react-native';
import ReportButton from '../../components/ReportButton';

import Error from './templates/Error';
import YestOrNot from './templates/YesOrNo';
import ImageComparision from './templates/ImageComparision';
import MultiChoice from './templates/MultiChoice';
import Written from './templates/Written';

const Play: React.FC = () => {
  const { questions, loading, getRandomQuestions, skipQuestion } = usePlay();

  useEffect(() => {
    async function getQuestions() {
      await getRandomQuestions();
    }

    getQuestions();
  }, [getRandomQuestions]);

  interface TemplateType {
    [key: string]: any;
  }

  const templates: TemplateType = {
    yesornot: YestOrNot,
    photocomp: ImageComparision,
    multi: MultiChoice,
    written: Written,
    undefined: Error,
  };

  const nextQuestion = useCallback(async () => {
    await skipQuestion();
  }, [skipQuestion]);

  const Template = templates[questions[0]?.type];

  return (
    <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
      <Container>
        <Header>{!loading && <ReportButton question={questions[0]} />}</Header>
        {!loading ? (
          <PlayArea>
            <Template data={questions[0]} />
            <SkipButton onPress={nextQuestion}>
              <SkipButtonText>Pular</SkipButtonText>
              <Icon size={28} name="skip-forward" color="white" />
            </SkipButton>
          </PlayArea>
        ) : (
          <Text>Carrregando</Text>
        )}
      </Container>
    </LinearGradient>
  );
};

export default Play;
