// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, نهیه و تنظیم `}
        {` توسط `}
        <Link target='_blank' href=''>
          شرکت حساب رایانه
        </Link>
      </Typography>
     
    </Box>
  )
}

export default FooterContent
