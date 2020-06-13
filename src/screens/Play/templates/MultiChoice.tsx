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

const MultiChoice: React.ComponentType = () => {
  return (
    <QuestionWrapper>
      <QuestionCard>
        <QuestionAvatar
          size="big"
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1263694342247583744/I6oEWdq__400x400.jpg',
          }}
        />
        <QuestionTitle>O quanto você me acha bonitão?</QuestionTitle>
        <Options multi>
          <Option grow>
            <OptionText>Bastante</OptionText>
          </Option>
          <Option grow>
            <OptionText>Mais ou menos</OptionText>
          </Option>
          <Option grow>
            <OptionText>Não te acho bonito</OptionText>
          </Option>
        </Options>
      </QuestionCard>
    </QuestionWrapper>
  );
};

export default MultiChoice;
