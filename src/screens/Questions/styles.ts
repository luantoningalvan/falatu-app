import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacityProps } from 'react-native';
export const Container = styled.View`
  flex: 1;
`;

export const SectionTitle = styled.Text`
  color: white;
  font-family: 'Comfortaa-Bold';
  font-size: 24px;
  margin: 16px 32px;
`;

export const Answers = styled.View`
  padding: 0px 32px;
`;
export const Answer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px;
  border-radius: 4px;
  background: white;
  align-items: center;
  margin-bottom: 8px;
`;
export const AnswerIcon = styled(Icon)`
  color: #333;
  font-size: 16px;
`;
export const AnswerTitle = styled.Text`
  color: #333;
  flex: 1;
  font-size: 16px;
  margin: 0px 16px;
`;
export const AnswerTime = styled.Text`
  color: #333;
  font-size: 16px;
`;

export const TabsSwitcher = styled.View``;

interface TabProps extends TouchableOpacityProps {
  current?: boolean;
}

export const Tabs = styled.View`
  flex-direction: row;
  background: rgba(0, 0, 0, 0.2);
`;

export const Tab = styled.TouchableOpacity<TabProps>`
  flex: 1;
  padding: 16px;

  border-bottom-width: 2px;
  border-bottom-color: ${props => (props.current ? 'pink' : 'transparent')};
`;

export const TabTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  color: white;
  font-family: 'Comfortaa-Regular';
`;
export const TabContent = styled.View``;

export const Question = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px;
  border-radius: 4px;
  align-items: center;
  margin-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
`;

export const QuestionTitle = styled(AnswerTitle)`
  color: white;
`;
export const QuestionIcon = styled(AnswerIcon)`
  color: white;
`;
export const QuestionCount = styled.Text`
  color: white;
`;

export const CreateQuestionButton = styled.TouchableOpacity``;
