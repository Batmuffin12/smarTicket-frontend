import { colors, fonts, textSizes, sizes, zIndexes } from "./themeSettings";

const mainTheme = {
  colors: {
    main: colors.lightBlue,
    mainHover: colors.cyan,
    secondary: colors.darkerLightBlue,
    text: colors.black,
    background: colors.lightCream,
    secondaryBackground: colors.lightPink,
    buttonText: colors.black,
    avgColors: {
      main: {
        aboveAvg: colors.green,
        avg: colors.yellow,
        belowAvg: colors.red,
      },
      secondary: {
        aboveAvg: colors.lightYellow,
        avg: colors.lightOrange,
        belowAvg: colors.lightRed,
      },
    },
  },
  fonts,
  textSizes,
  sizes,
  zIndexes,
};

export default mainTheme;
