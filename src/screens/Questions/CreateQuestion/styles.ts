import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  margin: 32px;
  align-items: center;
  justify-content: center;
`;

export const ScreenDescription = styled.Text`
  color: white;
  text-align: center;
  font-size: 28px;
  font-family: 'Comfortaa-Regular';
  margin-top: 16px;
`;

export const ChoiseType = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Type = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  border-width: 1px;
  border-color: #400622;
  background: rgba(0, 0, 0, 0.2);
  margin: 8px;
  justify-content: center;
  align-items: center;
  width: 45%;
`;
export const TypeTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-family: 'Comfortaa-Regular';
`;
export const TypeIcon = styled(Icon)`
  color: white;
  font-size: 50px;
  margin-bottom: 16px;
`;
