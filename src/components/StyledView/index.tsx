import {
  CommonStyle,
  generateCommonStyles,
} from '../../utils/generateCommonStyles';
import styled from 'styled-components/native';

export const StyledView = styled.View<CommonStyle>`
  ${props => generateCommonStyles(props)}
`;
