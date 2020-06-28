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

import { QuestionResponse } from '../../../hooks/Play';

const MultiChoice: React.ComponentType<{ data: QuestionResponse }> = ({
  data,
}) => {
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
          {data.options!.map(option => (
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
