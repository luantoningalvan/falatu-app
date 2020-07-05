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
import defaultProfilePicture from '../../../../assets/static/default-profile-picture.png';

import { QuestionResponse, usePlay } from '../../../hooks/Play';

const MultiChoice: React.ComponentType<{ data: QuestionResponse }> = ({
  data,
}) => {
  const { answerQuestion } = usePlay();

  const handleAnswer = async (index: number) => {
    await answerQuestion({
      id: data._id,
      type: 'multi',
      optionIndex: index,
    });
  };

  return (
    <QuestionWrapper>
      <QuestionCard>
        <QuestionAvatar
          size="big"
          source={
            data.randomUserAvatar
              ? { uri: data.randomUserAvatar.url }
              : defaultProfilePicture
          }
        />
        <QuestionTitle>{data.title}</QuestionTitle>
        <Options multi>
          {data.options!.map((option, index) => (
            <Option grow onPress={() => handleAnswer(index)} key={option.title}>
              <OptionText>{option.title}</OptionText>
            </Option>
          ))}
        </Options>
      </QuestionCard>
    </QuestionWrapper>
  );
};

export default MultiChoice;
