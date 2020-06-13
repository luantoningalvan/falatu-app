import styled from 'styled-components/native';

export interface QuestionCardProps {
  showAvatar?: boolean;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: 16px;
  padding: 16px 8px;
`;

export const QuestionAvatar = styled.Image<QuestionAvatarProps>`
  border-radius: 100%;
  position: absolute;
  object-fit: cover;
  width: ${props => (props.size === 'big' ? '150px' : '72px')};
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
