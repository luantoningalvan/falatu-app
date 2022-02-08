import React from 'react';
import {
  ImageComparisionContainer,
  ImageOptions,
  ImageOption,
  ImageOptionImage,
  ImageComparisionQuestion,
} from './styles';
import {QuestionResponse, usePlay} from '../../../hooks/Play';

const YesOrNo: React.ComponentType<{data: QuestionResponse}> = ({data}) => {
  const {answerQuestion} = usePlay();

  const handleAnswer = async (index: number) => {
    await answerQuestion({
      id: data._id,
      type: 'photocomp',
      optionIndex: index,
    });
  };

  return (
    <ImageComparisionContainer>
      <ImageComparisionQuestion>{data.title}</ImageComparisionQuestion>

      <ImageOptions>
        <ImageOption onPress={() => handleAnswer(0)}>
          <ImageOptionImage
            width={200}
            source={{
              uri: data.options![0].url,
            }}
          />
        </ImageOption>
        <ImageOption onPress={() => handleAnswer(1)}>
          <ImageOptionImage
            source={{
              uri: data.options![1].url,
            }}
          />
        </ImageOption>
      </ImageOptions>
    </ImageComparisionContainer>
  );
};

export default YesOrNo;
