// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      pink: string;
      dark: string;
      purple: string;
      grey: string;
    };
  }
}
