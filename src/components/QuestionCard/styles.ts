import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const QuestionCardContainer = styled.View`
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  padding: 16px;
  width: ${Dimensions.get('window').width - 48}px;
  margin: 24px;
  position: absolute;
  bottom: 0px;
  z-index: 2;
`;

export const QuestionCardText = styled.Text`
  color: black;
  text-align: center;
  font-size: 16px;
  margin-bottom: 16px;
`;
