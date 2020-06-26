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
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  width: 100%;
`;

export const Option = styled.View`
  margin: 8px 8px;
  padding: 16px;
  border-radius: 32px;
  background-color: #ececec;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionText = styled.Text`
  font-size: 24px;
  font-family: 'Comfortaa-Regular';
  line-height: 24px;
`;
