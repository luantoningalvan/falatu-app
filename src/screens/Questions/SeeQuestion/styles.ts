import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Header = styled.View`
  height: 64px;
  background: #581145;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
`;

export const HeaderBackButton = styled.TouchableOpacity``;
export const HeaderBackIcon = styled(Icon)`
  font-size: 22px;
  color: white;
  margin-right: 16px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: white;
  font-family: 'Comfortaa-Regular';
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: 32px;
  flex: 1;
  width: 100%;
`;

export const Answer = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
`;

export const AnswerAvatar = styled.Image`
  margin-right: 16px;
  border-radius: 27px;
  height: 54px;
  width: 54px;
`;

export const AnswerText = styled.Text`
  font-size: 16px;
  background: white;
  border-radius: 8px;
  padding: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  color: white;
  margin-bottom: 16px;
`;
