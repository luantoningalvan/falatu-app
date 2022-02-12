import {CSSObject} from 'styled-components';

export type CommonStyle = Partial<{
  mr: number;
  ml: number;
  mt: number;
  mb: number;
  mx: number;
  my: number;
  pr: number;
  pl: number;
  pt: number;
  pb: number;
  px: number;
  py: number;
  flex: number;
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}>;

export function generateCommonStyles(
  styles: CommonStyle & {[key: string]: any},
): CSSObject {
  return {
    marginTop: styles.mt || styles.my || undefined,
    marginBottom: styles.mb || styles.my || undefined,
    marginRight: styles.mr || styles.mx || undefined,
    marginLeft: styles.ml || styles.mx || undefined,
    flex: styles.flex || undefined,
    justifyContent: styles.justify || undefined,
    alignItems: styles.align || undefined,
    flexDirection: styles.direction || undefined,
  };
}
