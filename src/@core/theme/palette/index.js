const DefaultPalette = (mode, skin) => {
  // ** Vars
  const lightColor = '76, 78, 100'
  const darkColor = '234, 234, 255'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return '#FFF'
    }
    if (skin === 'bordered' && mode === 'dark') {
      return '#30334E'
    }
    if (mode === 'light') {
      return '#F7F7F9'
    }

    return '#282A42'
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: '#282A42',
      lightBg: '#F7F7F9',
      bodyBg: mode === 'light' ? '#F7F7F9' : '#282A42',
      tooltipBg: mode === 'light' ? '#262732' : '#464A65',
      tableHeaderBg: mode === 'light' ? '#F5F5F7' : '#3A3E5B'
    },
    common: {
      black: '#000',
      white: '#FFF'
    },
    mode,
    primary: {
      light: 'rgb(51, 202, 202)',
      main: '#00bdbd',
      dark: 'rgb(0, 132, 132)',
      contrastText: '#FFF'
    },

    secondary: {
      light: 'rgb(243, 118, 118)',
      main: '#F05454',
      dark: 'rgb(168, 58, 58)',
      contrastText: '#fff'
    },
    success: {
      light: 'rgb(125, 175, 122)',
      main: '#5D9C59',
      dark: 'rgb(65, 109, 62)',
      contrastText: '#FFF'
    },
    error: {
      light: 'rgb(229, 87, 95)',
      main: '#DF2E38',
      dark: 'rgb(156, 32, 39)',
      contrastText: '#FFF'
    },
    warning: {
      light: 'rgb(255, 234, 135)',
      main: '#FFE569',
      dark: 'rgb(178, 160, 73)',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      light: 'rgb(199, 223, 237)',
      main: '#BAD7E9',
      dark: 'rgb(130, 150, 163)',
      contrastText: '#FFF'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#30334E',
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
  }
}

export default DefaultPalette
