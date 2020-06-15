import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Header = styled.View`
  height: 64px;
  background: #581145;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
`;

export const HeaderBackButton = styled.TouchableOpacity``;
export const HeaderBackIcon = styled(Icon)`
  font-size: 22px;
  color: white;
  margin-right: 16px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: white;
  font-family: 'Comfortaa-Regular';
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  padding: 32px;
  flex: 1;
  width: 100%;
`;

export const ScreenDescription = styled.Text`
  color: white;
  text-align: center;
  font-size: 28px;
  font-family: 'Comfortaa-Regular';
  margin-bottom: 16px;
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
