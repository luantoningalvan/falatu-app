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

const YesOrNo: React.FC = ({ data }) => {
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
        <Options>
          <Option>
            <OptionText>Sim</OptionText>
            <Icon name="check" size={22} />
          </Option>
          <Option>
            <Icon name="x" size={22} />
            <OptionText>Não</OptionText>
          </Option>
        </Options>
      </QuestionCard>
    </QuestionWrapper>
  );
};

export default YesOrNo;
