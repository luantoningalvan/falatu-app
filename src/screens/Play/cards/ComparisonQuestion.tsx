import React from 'react';

import {QuestionCard} from '../../../components/QuestionCard';
import {Question} from '../../../hooks/Play';
import Compare, {
  Before,
  After,
  DefaultDragger,
} from 'react-native-before-after-slider-v2';
import {Dimensions, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

const TextQuestion = ({question}: {question: Question}) => {
  return (
    <>
      <Compare
        height={height}
        initial={width / 2}
        draggerWidth={50}
        width={width}>
        <Before>
          <Image
            source={{uri: question.media[0].url}}
            style={{width: width, height: height}}
          />
        </Before>
        <After>
          <Image
            source={{uri: question.media[1].url}}
            style={{width: width, height: height}}
          />
        </After>
        <DefaultDragger />
      </Compare>
      <QuestionCard question={question.title} />
    </>
  );
};

export default TextQuestion;
