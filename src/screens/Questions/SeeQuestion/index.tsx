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
  YesOrNotAnswer,
  NegativeAnswer,
  NegativeAnswerText,
  PositiveAnswer,
  PositiveAnswerText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {QuestionResponse} from '../../../hooks/Question';
import defaultUserAvatar from '../../../../assets/static/default-profile-picture.png';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';
import {useQuestion} from '../../../hooks/Question';

interface Props {
  route: {
    params: {
      question: QuestionResponse;
    };
  };
}
const SeeQuestion: React.FC<Props> = ({route}) => {
  const {goBack} = useNavigation();
  const {_id, title, answers, type} = route.params.question;
  const {deleteQuestion} = useQuestion();

  const handleDeleteQuestion = async () => {
    await deleteQuestion(_id);
    goBack();
  };

  const getPercentage = () => {
    return route.params.question.answers.reduce(
      (acumulator: {yes: number; no: number}, currentValue) => {
        if (currentValue.index === 0) {
          return {
            yes: acumulator.yes,
            no: acumulator.no + 1,
          };
        } else {
          return {
            yes: acumulator.yes + 1,
            no: acumulator.no,
          };
        }
      },
      {yes: 0, no: 0},
    );
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

        {type === 'yesornot' && (
          <YesOrNotAnswer>
            <PositiveAnswer
              percentage={(getPercentage().yes * 100) / answers.length}>
              <PositiveAnswerText>
                {(getPercentage().yes * 100) / answers.length}%
              </PositiveAnswerText>
            </PositiveAnswer>
            <NegativeAnswer
              percentage={(getPercentage().no * 100) / answers.length}>
              <NegativeAnswerText>
                {(getPercentage().no * 100) / answers.length}%
              </NegativeAnswerText>
            </NegativeAnswer>
          </YesOrNotAnswer>
        )}
      </Content>
    </Container>
  );
};

export default SeeQuestion;
