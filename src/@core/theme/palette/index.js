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
      light: 'rgb(133, 125, 115)',
      main: '#675D50',
      dark: 'rgb(72, 65, 56)',
      contrastText: '#FFF'
    },

    secondary: {
      light: 'rgb(182, 151, 98)',
      main: '#A47E3B',
      dark: 'rgb(114, 88, 41)',
      contrastText: '#fff'
    },
    success: {
      light: 'rgb(135, 155, 135)',
      main: '#698269',
      dark: 'rgb(73, 91, 73)',
      contrastText: '#FFF'
    },
    error: {
      light: 'rgb(187, 119, 119)',
      main: '#AA5656',
      dark: 'rgb(118, 60, 60)',
      contrastText: '#FFF'
    },
    warning: {
      light: 'rgb(239, 185, 135)',
      main: '#ECA869',
      dark: 'rgb(165, 117, 73)',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      light: 'rgb(117, 141, 159)',
      main: '#537188',
      dark: 'rgb(58, 79, 95)',
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
