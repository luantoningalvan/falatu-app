import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px;
  padding: 0px 16px;
`;

export const PlayArea = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 32px 16px;
`;

export const SkipButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const SkipButtonText = styled.Text`
  color: white;
  font-size: 20px;
  margin-right: 8px;
  font-family: 'Poppins-Regular';
`;
