import styled from 'styled-components/native';

export const PickFromGallery = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  background: black;
`;

export const QuestionInput = styled.TextInput`
  background: white;
  padding: 16px;
  border-radius: 4px;
  text-align: center;
  width: 100%;
`;

export const ColorOption = styled.TouchableOpacity<{color: string}>`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: 1px solid white;
  background: ${props => props.color};
  margin-right: 8px;
`;
