import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      [key: string]: string;
    };
  }
}
