import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px;
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
