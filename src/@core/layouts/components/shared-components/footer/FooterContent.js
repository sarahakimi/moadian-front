// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function FooterContent() {
  // ** Var

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
      <Typography sx={{mr: 2}}>
        {`© ${new Date().getFullYear()}, تهیه و تنظیم `}
        {` توسط `}
        <Link target='_blank' href='http://hesabrayaneh.com/'>
          شرکت حساب رایانه
        </Link>
      </Typography>

    </Box>
  )
}

export default FooterContent
