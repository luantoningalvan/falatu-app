import 'styled-components';
import 'react-native-svg';

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      [key: string]: string;
    };
  }
}
