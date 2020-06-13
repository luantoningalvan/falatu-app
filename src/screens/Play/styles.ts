import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  padding: 16px;
`;

export const PlayArea = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  padding: 32px;
`;

export const ReportButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const ReportButtonText = styled.Text`
  color: white;
  font-size: 16px;
  margin-right: 8px;
  font-family: 'Comfortaa-Regular';
`;

export const SkipButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const SkipButtonText = styled.Text`
  color: white;
  font-size: 20px;
  margin-left: 8px;
  font-family: 'Comfortaa-Regular';
`;
