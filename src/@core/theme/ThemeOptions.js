// ** MUI Theme Provider
// eslint-disable-next-line import/no-extraneous-dependencies
import {deepmerge} from '@mui/utils'

// ** User Theme Options
import UserThemeOptions from 'layouts/UserThemeOptions'

// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'

const themeOptions = settings => {
  // ** Vars
  const {skin, mode, direction, themeColor} = settings

  // ** Create New object before removing user component overrides and typography objects from userThemeOptions
  const userThemeConfig = {...UserThemeOptions()}
  const userFontFamily = userThemeConfig.typography?.fontFamily

  // ** Remove component overrides and typography objects from userThemeOptions
  delete userThemeConfig.components
  delete userThemeConfig.typography

  const mergedThemeConfig = deepmerge(
    {
      direction,
      palette: palette(mode, skin),
      typography: {
        fontFamily:
          userFontFamily ||
          [
            'IranSans',
          ].join(',')
      },
      shadows: shadows(mode),
      ...spacing,
      breakpoints: breakpoints(),
      shape: {
        borderRadius: 10
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      }
    },
    userThemeConfig
  )

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...mergedThemeConfig.palette[themeColor]
      }
    }
  })
}

export default themeOptions
