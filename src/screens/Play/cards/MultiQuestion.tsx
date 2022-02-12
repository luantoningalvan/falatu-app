import React, {useState} from 'react';

import {QuestionCard} from '../../../components/QuestionCard';
import {Question} from '../../../hooks/Play';
import {PlayImage, QuestionOption, QuestionOptionText} from '../styles';
import Icon from 'react-native-vector-icons/Feather';

const BinaryQuestion = ({question}: {question: Question}) => {
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  return (
    <>
      <PlayImage source={{uri: question.media[0].url}} />

      <QuestionCard question={question.title}>
        {question.options?.map(opt => (
          <QuestionOption
            disabled={!!selectedOpt}
            selected={selectedOpt === opt.number}
            onPress={() => setSelectedOpt(opt.number)}>
            <QuestionOptionText selected={selectedOpt === opt.number}>
              {opt.text}
            </QuestionOptionText>
            {selectedOpt === opt.number && (
              <Icon size={18} color="#fff" name="check-circle" />
            )}
          </QuestionOption>
        ))}
      </QuestionCard>
    </>
  );
};

export default BinaryQuestion;
