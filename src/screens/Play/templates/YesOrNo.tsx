import React from 'react';
import {
  QuestionWrapper,
  QuestionCard,
  QuestionAvatar,
  Options,
  Option,
  OptionText,
  QuestionTitle,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {usePlay, QuestionResponse} from '../../../hooks/Play';
import defaultProfilePicture from '../../../../assets/static/default-profile-picture.png';

interface YesOrNoProps {
  data: QuestionResponse;
}

const YesOrNo: React.FC<YesOrNoProps> = ({data}) => {
  const {answerQuestion} = usePlay();

  const handleAnswer = async (choice: number) => {
    await answerQuestion({
      id: data._id,
      optionIndex: choice,
      type: 'multi',
    });
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
        <Options>
          <Option onPress={() => handleAnswer(0)}>
            <OptionText>Sim</OptionText>
            <Icon name="check" size={22} />
          </Option>
          <Option onPress={() => handleAnswer(1)}>
            <Icon name="x" size={22} />
            <OptionText>Não</OptionText>
          </Option>
        </Options>
      </QuestionCard>
    </QuestionWrapper>
  );
};

export default YesOrNo;
