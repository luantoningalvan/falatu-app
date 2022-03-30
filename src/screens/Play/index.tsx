import React from 'react';
import {StatusBar} from 'react-native';

import {PlayContainer, PlayHeader} from './styles';
import LogoSmall from '../../../assets/static/falatu-logo-small.svg';
import {Avatar} from '../../components/Avatar';
import {ToggleNavigationMode} from '../../components/ToggleNavigationMode';

import TextQuestion from './cards/TextQuestion';
import BinaryQuestion from './cards/BinaryQuestion';
import ComparisonQuestion from './cards/ComparisonQuestion';
import MultiQuestion from './cards/MultiQuestion';
import VideoQuestion from './cards/VideoQuestion';

import {Question, usePlay} from '../../hooks/Play';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';

const Play: React.FC = () => {
  const {questions} = usePlay();

  const cards: {[key: string]: any} = {
    text: TextQuestion,
    binary: BinaryQuestion,
    comparison: ComparisonQuestion,
    multi: MultiQuestion,
    video: VideoQuestion,
  };

  const Template = ({question}: {question: Question}) => {
    const PickCard = cards[question.mode];
    return <PickCard question={question} />;
  };

  return (
    <PlayContainer>
      <StatusBar backgroundColor="white" />

      <PlayHeader>
        <LogoSmall width={32} height={38} />
        <ToggleNavigationMode />
        <Avatar size="sm" name="Cassandra Luiza" />
      </PlayHeader>
    </PlayContainer>
  );
};

export default Play;
