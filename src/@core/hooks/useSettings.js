import { useContext } from 'react'
import { SettingsContext } from '@core/context/settingsContext'

// eslint-disable-next-line import/prefer-default-export
export const useSettings = () => useContext(SettingsContext)
