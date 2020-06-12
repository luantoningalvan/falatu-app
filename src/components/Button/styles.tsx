import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<{ grow?: boolean }>`
  padding: 16px;
  border-radius: 24px;
  background-color: #0a82c6;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.palette.grey};
  font-size: 16px;
  width: 100%;
  text-align: center;
`;
