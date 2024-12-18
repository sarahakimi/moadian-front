// ** MUI Imports
import Box from '@mui/material/Box'

// ** Icons Imports
import BellOutline from 'mdi-material-ui/BellOutline'
import ContentSaveOutline from 'mdi-material-ui/ContentSaveOutline'

// ** Custom Components Imports
import CustomAvatar from '@core/components/mui/avatar'

function AvatarsVariants() {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex' }}>
      <CustomAvatar variant='square'>
        <BellOutline />
      </CustomAvatar>
      <CustomAvatar color='success' variant='rounded'>
        <ContentSaveOutline />
      </CustomAvatar>
      <CustomAvatar skin='light' variant='square'>
        <BellOutline />
      </CustomAvatar>
      <CustomAvatar skin='light' color='success' variant='rounded'>
        <ContentSaveOutline />
      </CustomAvatar>
    </Box>
  )
}

export default AvatarsVariants
