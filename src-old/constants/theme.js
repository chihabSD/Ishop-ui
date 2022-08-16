

export const COLORS = {
  // base colors
//   error :"#F65A83",  // errors, 
  primary: '#24C16B', // green
  secondary: '#0C381F', // dark green
  green: '#4CAF50',
  lightGreen: '#C5E1A5',

  lime: '#00BA63',
  emerald: '#2BC978',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightpurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#FCFBFC',
  gray: '#C1C3C5',
  darkgray: '#C3C6C7',

  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

 
};
export const FONTS = {
  //   largeTitle: {fontFamily: 'NotoNaskhArabic-Medium', fontSize: SIZES.largeTitle},
  h1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  largeTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: SIZES.largeTitle,
  },
  h3: {fontFamily: 'Montserrat-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Montserrat-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Montserrat-Bold', fontSize: SIZES.h5, lineHeight: 22},
  thin: {
    fontFamily: 'Montserrat-ExtraLight',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body1: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Montserrat-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;