import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Video from 'react-native-video';

export const PlayContainer = styled.View`
  flex: 1;
`;

export const PlayHeader = styled.View`
  height: 38px;
  width: ${Dimensions.get('window').width - 48}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 100;
  margin: 24px;
`;

export const PlayImage = styled.Image`
  flex: 1;
`;

export const PlayTextInput = styled.TextInput`
  border-radius: 8px;
  border: 1px solid #cacaca;
  height: 40px;
  padding: 12px 16px;
  margin-bottom: 8px;
`;

export const QuestionOption = styled.TouchableOpacity<{selected: boolean}>`
  padding: 8px 16px;
  height: 36px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.selected ? props.theme.palette.violet : 'transparent'};
  flex-direction: row;
  border: ${props => `1px solid ${props.theme.palette.violet}`};
  margin-bottom: 8px;
  justify-content: space-between;
`;

export const QuestionOptionText = styled.Text<{selected: boolean}>`
  color: ${props => (props.selected ? '#fff' : props.theme.palette.violet)};
`;

export const VideoPlayer = styled(Video)`
  flex: 1;
`;

export const VideoQuestionCard = styled.View`
  width: ${Dimensions.get('window').width - 48}px;
  margin: 24px;
  position: absolute;
  bottom: 0px;
  z-index: 2;
`;

export const VideoThumb = styled.Image<{selected?: boolean}>`
  height: 60px;
  width: 100px;
  border-radius: 4px;
  margin-right: 8px;
  opacity: ${props => (props.selected ? 1 : 0.6)};
  border: ${props =>
    props.selected ? `2px solid ${props.theme.palette.violet}` : 'transparent'};
`;
