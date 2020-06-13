import styled from 'styled-components/native';

export interface QuestionCardProps {
  showAvatar?: boolean;
  noPadding?: boolean;
}

export interface OptionsProps {
  multi?: boolean;
}

export interface OptionProps {
  grow?: boolean;
}

export interface QuestionAvatarProps {
  size?: 'small' | 'big';
}

export interface QuestionButtonTextProps {
  size?: 'small' | 'big';
  weight?: 'normal' | 'bold';
}

export interface SmallQuestionButtonProps {
  side?: 'left' | 'right';
  icon?: string;
}

export const QuestionCard = styled.View<QuestionCardProps>`
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 16px;
  padding: ${props => (props.noPadding ? '0px' : '16px 8px')};
`;

export const QuestionAvatar = styled.Image<QuestionAvatarProps>`
  border-radius: ${props => (props.size === 'big' ? '75px' : '36px')};
  width: ${props => (props.size === 'big' ? '150px' : '72px')};
  height: ${props => (props.size === 'big' ? '150px' : '72px')};
  margin-top: -80px;
`;

export const SmallQuestionButton = styled.TouchableOpacity<
  SmallQuestionButtonProps
>`
  flex-direction: ${props => (props.side === 'right' ? 'row' : 'row-reverse')};
  border-radius: 16px;
  background-color: ${props => props.theme.palette.grey};
  padding: 8px;
`;

export const QuestionButtonText = styled.Text<QuestionButtonTextProps>`
  font-family: ${props =>
    props.weight === 'bold' ? 'Comfortaa-Bold' : 'Comfortaa-Regular'};
  color: ${props => props.theme.palette.dark};
  font-size: ${props => (props.size === 'big' ? '24px' : '14px')};
`;

export const QuestionWrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 36px;
  justify-content: center;
`;

export const Options = styled.View<OptionsProps>`
  flex-direction: ${props => (props.multi ? 'column' : 'row')};
  align-items: center;
  justify-content: ${props => (props.multi ? 'center' : 'space-between')};
  margin-top: 16px;
  width: 90%;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  margin: 8px 8px;
  padding: 16px;
  border-radius: 32px;
  background-color: #ececec;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.grow ? 'center' : 'space-between')};
  width: ${props => (props.grow ? '100%' : 'auto')};
`;

export const OptionText = styled.Text`
  font-size: 24px;
  font-family: 'Comfortaa-Regular';
  line-height: 24px;
`;

export const QuestionTitle = styled.Text`
  font-size: 18px;
  font-family: 'Comfortaa-Regular';
  line-height: 18px;
  margin-top: 24px;
`;

export const ImageComparisionContainer = styled.View`
  flex: 1;
  width: 100%;
  overflow: hidden;
  margin-bottom: 16px;
  background: white;
  border-radius: 16px;
`;

export const ImageComparisionQuestion = styled.Text`
  padding: 16px;
  font-size: 18px;
  font-family: 'Comfortaa-Regular';
  line-height: 18px;
  text-align: center;
`;

export const ImageOptions = styled.View`
  flex-direction: row;
  overflow: hidden;
`;
export const ImageOption = styled.TouchableOpacity`
  flex: 1;
`;

export const ImageOptionImage = styled.Image`
  height: 100%;
  width: 100%;
`;
