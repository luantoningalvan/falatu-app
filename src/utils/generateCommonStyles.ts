import {CSSObject} from 'styled-components';

export type CommonStyle = Partial<{
  bg: string;
  m: number;
  mr: number;
  ml: number;
  mt: number;
  mb: number;
  mx: number;
  my: number;
  pr: number;
  p: number;
  pl: number;
  pt: number;
  pb: number;
  px: number;
  py: number;
  flex: number;
  h: number | string;
  w: number | string;
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
    background: styles.bg,
    width: styles.w,
    height: styles.h,

    margin: styles.m,
    marginTop: styles.mt || styles.my || undefined,
    marginBottom: styles.mb || styles.my || undefined,
    marginRight: styles.mr || styles.mx || undefined,
    marginLeft: styles.ml || styles.mx || undefined,

    padding: styles.p,
    paddingTop: styles.pt || styles.py || undefined,
    paddingBottom: styles.pb || styles.py || undefined,
    paddingRight: styles.pr || styles.px || undefined,
    paddingLeft: styles.pl || styles.px || undefined,

    flex: styles.flex || undefined,
    justifyContent: styles.justify || undefined,
    alignItems: styles.align || undefined,
    flexDirection: styles.direction || undefined,
  };
}
