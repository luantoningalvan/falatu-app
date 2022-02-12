import styled from 'styled-components/native';

export const ToggleSwitchContainer = styled.View`
  height: 38px;
  width: 146px;
  border-radius: 73px;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  padding: 3px;
`;

export const ToggleSwitchOption = styled.TouchableOpacity<{
  active?: boolean;
}>`
  height: 32px;
  width: 50%;
  border-radius: 73px;
  background: ${props => (props.active ? '#fff' : 'transparent')};
  align-items: center;
  justify-content: center;
`;
