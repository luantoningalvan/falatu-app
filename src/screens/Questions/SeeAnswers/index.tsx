import React from 'react';
import {
  Header,
  HeaderBackButton,
  HeaderBackIcon,
  HeaderTitle,
  Container,
  Content,
  Answer,
  AnswerText,
  AnswerAvatar,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { QuestionResponse } from '../../../hooks/Question';
import defaultUserAvatar from '../../../../assets/static/default-profile-picture.png';

interface Props {
  route: {
    params: {
      question: QuestionResponse;
    };
  };
}
const SeeAnswers: React.FC<Props> = ({ route }) => {
  const { goBack } = useNavigation();
  const { title, answers, type } = route.params.question;

  return (
    <Container>
      <Header>
        <HeaderBackButton onPress={() => goBack()}>
          <HeaderBackIcon name="arrow-left" />
        </HeaderBackButton>
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <Content>
          {type === 'written' && (
            <>
              {answers.map(answer => (
                <Answer index={answer._id}>
                  <AnswerAvatar source={defaultUserAvatar} />
                  <AnswerText>{answer.answer}</AnswerText>
                </Answer>
              ))}
            </>
          )}
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default SeeAnswers;
