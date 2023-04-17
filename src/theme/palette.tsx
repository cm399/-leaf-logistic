/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */
import { CustomTypography } from '../types/ThemeMuiTypes';

export const themePalette = (theme: CustomTypography) => {
  return {
    common: {
      black: theme.colors.darkPaper as string,
    },
    primary: {
      main: theme.colors.primaryMain as string,
      dark: theme.colors.primaryDark as string,
    },
    secondary: {
      main: theme.colors.secondaryMain as string,
      dark: theme.colors.secondaryDark as string,
    },
    error: {
      light: theme.colors.errorLight as string,
      dark: theme.colors.errorDark as string,
    },
    warning: {
      main: theme.colors.warningMain as string,
      dark: theme.colors.warningDark as string,
    },
    success: {
      main: theme.colors.successMain as string,
      dark: theme.colors.successDark as string,
    },
    grey: {
      50: theme.colors.grey50! as string,
      100: theme.colors.grey100! as string,
      200: theme.colors.grey200! as string,
      300: theme.colors.grey300! as string,
      500: theme.darkTextSecondary!,
      600: theme.heading!,
      700: theme.darkTextPrimary!,
    },
    text: {
      primary: theme.darkTextPrimary!,
      secondary: theme.darkTextSecondary!,
      dark: theme.textDark!,
    },
    background: {
      paper: theme.paper!,
      default: theme.backgroundDefault!,
    },
  };
};
