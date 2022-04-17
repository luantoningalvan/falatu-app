import React, { forwardRef } from "react";

import { PlayImage, PlayTextInput } from "../styles";
import { QuestionCard } from "../../../components/QuestionCard";
import Button from "../../../components/Button";
import { Question } from "../../../hooks/Play";

const TextQuestion = forwardRef(
  ({ question }: { question: Question }, parentRef: any) => {
    return (
      <>
        <PlayImage source={{ uri: question.media[0].url }} />

        <QuestionCard question={question.title}>
          <PlayTextInput
            placeholderTextColor="#b1b1b1"
            placeholder="Digite sua resposta"
          />
          <Button size="sm" icon="send">
            Enviar
          </Button>
        </QuestionCard>
      </>
    );
  }
);

export default TextQuestion;
