import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<{ grow?: boolean }>`
  padding: 16px;
  border-radius: 24px;
  background-color: ${props => props.theme.palette.purple};
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.palette.grey};
  font-family: 'Comfortaa-Regular';
  font-size: 16px;
  width: 100%;
  text-align: center;
`;
