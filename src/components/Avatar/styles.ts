import styled from 'styled-components/native';

const mapSizes = {
  sm: 38,
  md: 64,
  lg: 128,
};

export const AvatarContainer = styled.View<{size: 'sm' | 'md' | 'lg'}>`
  height: ${props => mapSizes[props.size]}px;
  width: ${props => mapSizes[props.size]}px;
  border-radius: ${props => mapSizes[props.size] / 2}px;
  background: #ccc;
  align-items: center;
  justify-content: center;
`;

export const UserInitialLetters = styled.Text``;
