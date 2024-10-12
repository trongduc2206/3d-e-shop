import { createTheme } from '@mui/material';

export const palette = {
  primary: {
    main: '#FFFFFF',
    blue: '#443AD8',
    red: '#f00a0a',
    green: '#39d49b',
    contrastText: '#000000'
  },
  secondary: {
    main: '#1e1c3c'
  },
  error: {
    main: '#E20613',
    dark: '#722F37',
    light: '#8E595F'
  },
  success: {
    main: '#009E10'
  },
  warning: {
    main: '#FFA500'
  },
  info: {
    main: '#000000'
  },
  common: {
    white: '#FFFFFF',
    black: '#000000'
  },
  background: {
    default: '#000000',
    paper: '#F6F8FA'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#ccc6c6'
  },
  grey: {
    600: '#151515',
    500: '#444444',
    400: '#636363',
    300: '#888888',
    200: '#CFCFCF',
    100: '#D8D8D8',
    50: '#F6F6F6'
  }
};

const shadows = [
  'none',
  '0px 1px 8px rgba(46, 46, 46, 0.04)',
  '0px 4px 12px rgba(46, 46, 46, 0.08)',
  '0px 8px 16px rgba(46, 46, 46, 0.12)',
  '0px 12px 16px rgba(46, 46, 46, 0.16)',
  'inset -1px -3px 4px rgba(46, 46, 46, 0.15)',
  ...Array(19).fill('none')
];

export const theme = createTheme({
  palette,
  shadows,
  typography: {
    h1: {
      fontWeight: 300,
      fontSize: '38px',
      lineHeight: '37.5px',
      fontFamily: 'Montserrat'
    },
    h2: {
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: '32.81px',
      fontFamily: 'Montserrat'
    },
    h3: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '28.13px',
      fontFamily: 'Montserrat'
    },
    h4: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '23.44px',
      fontFamily: 'Montserrat'
    },
    h5: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '21.09px',
      fontFamily: 'Montserrat'
    },
    h6: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '18.75px',
      fontFamily: 'Montserrat',
      color: 'white'
    },
    body1: {
      fontSize: '16px',
      lineHeight: '18.75px',
      fontFamily: 'Montserrat'
    },
    title: {
      fontWeight: 200,
      fontSize: '25px',
      fontFamily: 'Montserrat'
    }
  }
});