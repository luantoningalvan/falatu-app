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
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../../../assets/static/wdyt-logo.svg';

const Play: React.FC = () => {
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
          <Text>Play</Text>
          <SkipButton>
            <Icon size={28} name="skip-forward" color="white" />
            <SkipButtonText>Pular</SkipButtonText>
          </SkipButton>
        </PlayArea>
      </Container>
    </LinearGradient>
  );
};

export default Play;
