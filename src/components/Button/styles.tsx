import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const ButtonContainer = styled.TouchableOpacity<{grow?: boolean}>`
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.theme.palette.violet};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.palette.grey};
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

export const ButtonIcon = styled(FeatherIcon)`
  margin-right: 16px;
`;
