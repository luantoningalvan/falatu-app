import React, { forwardRef } from "react";

import { QuestionCard } from "../../../components/QuestionCard";
import Button from "../../../components/Button";
import { StyledView } from "../../../components/StyledView";
import { Question } from "../../../hooks/Play";
import { PlayImage } from "../styles";

export const BinaryQuestion = forwardRef(
  ({ question }: { question: Question }, parentRef: any) => {
    return (
      <>
        <PlayImage source={{ uri: question.media[0].url }} />

        <QuestionCard question={question.title}>
          <StyledView direction="row">
            <Button variant="outlined" size="sm" icon="check-circle" flex={1}>
              Sim
            </Button>
            <Button
              variant="outlined"
              size="sm"
              icon="x-circle"
              ml={8}
              flex={1}
            >
              Não
            </Button>
          </StyledView>
        </QuestionCard>
      </>
    );
  }
);

export default BinaryQuestion;
