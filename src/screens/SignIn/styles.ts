import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
  background: #ececec;
`;

export const Header = styled(LinearGradient)`
  background: ${props => props.theme.palette.pink};
  width: 100%;
  flex: 1;
  height: 200px;
  align-items: center;
`;

export const FormContainer = styled.View`
  background: white;
  margin: 24px;
  padding: 24px;
  border-radius: 16px;
  margin-top: -64px;
`;

export const Title = styled.Text`
  font-family: 'Comfortaa-Bold';
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;
`;

export const SignUp = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const SignUpText = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
`;

export const SignUpTextHighlighted = styled(SignUpText)`
  color: ${props => props.theme.palette.pink};
  font-weight: bold;
  margin-left: 4px;
`;

export const BottomInfo = styled.View`
  margin-top: 16px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BottomInfoLink = styled.TouchableOpacity`
  padding: 4px;
`;

export const BottomInfoLinkText = styled.Text`
  color: ${props => props.theme.palette.dark};
`;
