import { PaletteMode, Theme } from '@mui/material';
import { Color } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Property } from 'csstype';

export interface CustomizationProps {
  fontFamily: Property.FontFamily;
  borderRadius?: number;
  navType: PaletteMode;
  presetColor?: string;
  rtlLayout?: boolean;
  outlinedFilled?: boolean;
}
export type ThemeOverrideFunc = (s: CustomTypography) => CustomTheme;
export type CustomTheme = Theme;

export interface CustomTypography extends TypographyOptions {
  customInput?: {
    marginTop: number;
    marginBottom: number;
    '& > label': {
      top: string;
      left: number;
      color?: Color | (Color | undefined)[] | Color[];
      '&[data-shrink="false"]': {
        top: string;
      };
    };
    '& > div > input': {
      padding: string;
    };
    '& legend': {
      display: string;
    };
    '& fieldset': {
      top: number;
    };
  };
  mainContent?: {
    backgroundColor?: string;
    width: string;
    minHeight: string;
    flexGrow: number;
    padding: string;
    marginTop: string;
    marginRight: string;
    borderRadius: string;
  };
  menuCaption?: {
    fontSize: string;
    fontWeight: number;
    color?: Color | (Color | undefined)[] | Color[];
    padding: string;
    textTransform: 'uppercase' | 'lowercase' | 'capitalize' | undefined;
    marginTop: string;
  };
  subMenuCaption?: {
    fontSize: string;
    fontWeight: number;
    color: Color | (Color | undefined)[] | Color[];
    textTransform: 'uppercase' | 'lowercase' | 'capitalize' | undefined;
  };
  commonAvatar?: {
    cursor: string;
    borderRadius: string;
  };
  smallAvatar?: {
    width: string;
    height: string;
    fontSize: string;
  };
  mediumAvatar?: {
    width: string;
    height: string;
    fontSize: string;
  };
  largeAvatar?: {
    width: string;
    height: string;
    fontSize: string;
  };
  heading?: string;
  textDark?: string;
  grey500?: string;
  background?: string;
  darkTextPrimary?: string;
  darkTextSecondary?: string;
  darkBackground?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors?: string | any;
  paper?: string;
  backgroundDefault?: string;
  menuSelected?: string;
  menuSelectedBack?: string;
  divider?: string;
  customization?: CustomizationProps;
  z1?: string;
  z8?: string;
  z12?: string;
  z16?: string;
  z20?: string;
  z24?: string;
  primary?: string;
  secondary?: string;
  orange?: string;
  peach?: string;
  success?: string;
  warning?: string;
  error?: string;
}
