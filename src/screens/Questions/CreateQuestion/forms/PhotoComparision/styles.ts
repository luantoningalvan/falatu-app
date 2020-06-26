import styled from 'styled-components/native';

export const QuestionCard = styled.View`
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  flex: 1;
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  width: 100%;
  flex: 1;
`;

export const Option = styled.View`
  margin: 8px 8px;
  border-radius: 8px;
  border-style: dashed;
  border-color: #333;
  border-width: 2px;
  flex: 1;
  height: 280px;
  justify-content: center;
  align-items: center;
`;
