import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

export let theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
      variants: [],
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: 'black',
          transition: 'all 0.2s ease-in-out',
          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
    MuiListItemButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease-in-out',
          '&:hover, &.active': {
            color: '#fff',
            backgroundColor: '#FF6464',
          },
        },
      },
    },
    MuiListItemIcon: {
      defaultProps: {},
      styleOverrides: {
        root: {
          '&.active': {
            color: '#fff',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
  },
})

theme = responsiveFontSizes(theme)

// theme.typography.h3 = {
//   fontSize: '2rem',

//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem',
//   },
// }
