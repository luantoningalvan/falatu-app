import React from 'react';
import {
  ImageComparisionContainer,
  ImageOptions,
  ImageOption,
  ImageOptionImage,
  ImageComparisionQuestion,
} from './styles';
import { QuestionResponse } from 'src/hooks/Play';

const YesOrNo: React.ComponentType<{ data: QuestionResponse }> = ({ data }) => {
  return (
    <ImageComparisionContainer>
      <ImageComparisionQuestion>{data.title}</ImageComparisionQuestion>

      <ImageOptions>
        <ImageOption>
          <ImageOptionImage
            width={200}
            source={{
              uri: data.options![0].url,
            }}
          />
        </ImageOption>
        <ImageOption>
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
