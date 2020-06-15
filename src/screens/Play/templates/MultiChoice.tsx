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

const MultiChoice: React.ComponentType = ({ data }) => {
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
        <QuestionTitle>{data.title}</QuestionTitle>
        <Options multi>
          {data.options.map(option => (
            <Option grow>
              <OptionText>{option.title}</OptionText>
            </Option>
          ))}
        </Options>
      </QuestionCard>
    </QuestionWrapper>
  );
};

export default MultiChoice;
