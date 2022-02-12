import React from 'react';
import {QuestionCardContainer, QuestionCardText} from './styles';

export const QuestionCard: React.FC<{question: string}> = ({
  children,
  question,
}) => {
  return (
    <QuestionCardContainer>
      <QuestionCardText>{question}</QuestionCardText>
      {children}
    </QuestionCardContainer>
  );
};
