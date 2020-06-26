import styled from 'styled-components/native';

export const QuestionCard = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 64px;
`;

export const QuestionAvatar = styled.Image`
  border-radius: 75px;
  width: 150px;
  height: 150px;
  margin-top: -80px;
  margin-bottom: 16px;
`;

export const Options = styled.View`
  align-items: center;
  margin-top: 16px;
  width: 100%;
`;

export const Option = styled.View`
  margin-bottom: 8px;
  border-radius: 32px;
  background-color: #ececec;
  flex-direction: row;
  padding: 4px 8px;
  align-items: center;
  justify-content: space-between;
`;

export const AddMoreButton = styled.TouchableOpacity`
  margin-top: 8px;
  flex-direction: row;
`;

export const AddMoreText = styled.Text`
  font-size: 18px;
  margin-left: 8px;
`;

export const Content = styled.View``;

export const RemoveButton = styled.TouchableOpacity`
  margin: 8px;
`;
