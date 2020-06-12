import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ececec;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  background: #0a82c6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
`;

export const FormContainer = styled.View`
  background: white;
  margin: 16px;
  padding: 24px;
  border-radius: 16px;
  margin-top: 64px;
`;

export const Title = styled.Text`
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
  color: #0a82c6;
  font-weight: bold;
  margin-left: 4px;
`;

export const BottomInfo = styled.View`
  margin-top: 16px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomInfoLink = styled.TouchableOpacity`
  padding: 4px;
`;

export const BottomInfoLinkText = styled.Text`
  color: ${props => props.theme.palette.grey};
`;
