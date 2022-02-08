import React, {useState} from 'react';
import {
  QuestionWrapper,
  QuestionCard,
  QuestionAvatar,
  Options,
  QuestionTitle,
} from './styles';
import {usePlay, QuestionResponse} from '../../../hooks/Play';
import {TextInput, Container} from '../../../components/Form/styles';
import Button from '../../../components/Button';
import defaultProfilePicture from '../../../../assets/static/default-profile-picture.png';

interface WrittenProps {
  data: QuestionResponse;
}
const Written: React.FC<WrittenProps> = ({data}) => {
  const {answerQuestion} = usePlay();
  const [answer, setAnswer] = useState<string>('');

  const handleAnswer = async () => {
    if (answer !== '') {
      await answerQuestion({answer, id: data._id, type: 'written'});
    }
  };

  return (
    <QuestionWrapper>
      <QuestionCard>
        <QuestionAvatar
          size="big"
          source={
            data.randomUserAvatar
              ? {uri: data.randomUserAvatar.url}
              : defaultProfilePicture
          }
        />
        <QuestionTitle>{data.title}</QuestionTitle>
        <Options multi>
          <Container>
            <TextInput
              value={answer}
              onChangeText={txt => setAnswer(txt)}
              placeholder="Escreva sua resposta..."
            />
          </Container>
        </Options>
      </QuestionCard>
      <Button icon="send" style={{marginTop: 16}} onPress={handleAnswer}>
        Enviar
      </Button>
    </QuestionWrapper>
  );
};

export default Written;
