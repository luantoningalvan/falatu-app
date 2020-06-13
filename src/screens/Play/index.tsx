import React from 'react';
import {
  Container,
  ReportButton,
  ReportButtonText,
  SkipButton,
  SkipButtonText,
  Header,
  PlayArea,
} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../../../assets/static/wdyt-logo.svg';

import YestOrNot from './templates/YesOrNo';
import ImageComparision from './templates/ImageComparision';

const Play: React.FC = () => {
  const templates = {
    yesornot: YestOrNot,
    imagecomparision: ImageComparision,
  };

  const Template = templates.imagecomparision;

  return (
    <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
      <Container>
        <Header>
          <Logo width={100} height={44} />
          <ReportButton>
            <ReportButtonText>DENUNCIAR</ReportButtonText>
            <Icon size={20} name="info" color="white" />
          </ReportButton>
        </Header>

        <PlayArea>
          <Template />
          <SkipButton>
            <SkipButtonText>Pular</SkipButtonText>
            <Icon size={28} name="skip-forward" color="white" />
          </SkipButton>
        </PlayArea>
      </Container>
    </LinearGradient>
  );
};

export default Play;
