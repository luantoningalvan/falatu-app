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
  SectionTitle,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { QuestionResponse } from '../../../hooks/Question';
import defaultUserAvatar from '../../../../assets/static/default-profile-picture.png';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';
import { useQuestion } from '../../../hooks/Question';
interface Props {
  route: {
    params: {
      question: QuestionResponse;
    };
  };
}
const SeeQuestion: React.FC<Props> = ({ route }) => {
  const { goBack } = useNavigation();
  const { _id, title, answers, type } = route.params.question;
  const { deleteQuestion } = useQuestion();

  const handleDeleteQuestion = async () => {
    await deleteQuestion(_id);
    goBack();
  };

  return (
    <Container>
      <Header>
        <HeaderBackButton onPress={() => goBack()}>
          <HeaderBackIcon name="arrow-left" />
        </HeaderBackButton>
        <HeaderTitle>{title}</HeaderTitle>
        <Menu>
          <MenuTrigger>
            <Icon name="more-vertical" size={24} color="#fff" />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={handleDeleteQuestion} text="Excluir" />
          </MenuOptions>
        </Menu>
      </Header>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <Content>
          <SectionTitle>Respostas</SectionTitle>

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

export default SeeQuestion;
