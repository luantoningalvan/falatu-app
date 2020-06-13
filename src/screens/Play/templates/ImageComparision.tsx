import React from 'react';
import {
  ImageComparisionContainer,
  ImageOptions,
  ImageOption,
  ImageOptionImage,
  ImageComparisionQuestion,
} from './styles';

const YesOrNo: React.FC = () => {
  return (
    <ImageComparisionContainer>
      <ImageComparisionQuestion>Qual é mais feio?</ImageComparisionQuestion>

      <ImageOptions>
        <ImageOption>
          <ImageOptionImage
            width={200}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1263694342247583744/I6oEWdq__400x400.jpg',
            }}
          />
        </ImageOption>
        <ImageOption>
          <ImageOptionImage
            source={{
              uri:
                'https://scontent.fcxj1-1.fna.fbcdn.net/v/t31.0-8/25488261_575029886167546_7683339864791926275_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=Pb8jMC777jQAX9sSzGf&_nc_ht=scontent.fcxj1-1.fna&oh=a31fd0fac66c1269f39656c6e3a9584b&oe=5F0B3728',
            }}
          />
        </ImageOption>
      </ImageOptions>
    </ImageComparisionContainer>
  );
};

export default YesOrNo;
