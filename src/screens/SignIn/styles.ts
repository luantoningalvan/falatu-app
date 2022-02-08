import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  background: ${props => props.theme.palette.violet};
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
  font-family: 'Poppins-Regular';
  font-size: 24px;
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
  color: ${props => props.theme.palette.violet};
  font-weight: bold;
  margin-left: 4px;
`;

export const BottomInfo = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BottomInfoLink = styled.TouchableOpacity`
  padding: 8px;
`;

export const BottomInfoLinkText = styled.Text`
  color: ${props => props.theme.palette.dark};
  font-size: 14px;
`;
