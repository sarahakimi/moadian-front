// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Layout Import
import BlankLayout from '@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrations from 'views/pages/misc/FooterIllustrations'

// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  marginTop: theme.spacing(15),
  marginBottom: theme.spacing(15),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  }
}))

function Error404() {
  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h1' sx={{ mb: 2.5 }}>
            404
          </Typography>
          <Typography variant='h5' sx={{ mb: 2.5, letterSpacing: '0.18px', fontSize: '1.5rem !important' }}>
            صفحه مورد نظر پیدا نشد ⚠️
          </Typography>
          <Typography variant='body2'>متاسفانه صفحه مورد نظر شما را پیدا نکردیم</Typography>
        </BoxWrapper>
        <Img alt='error-illustration' src='/images/pages/404.png' />
        <Link passHref href='/'>
          <Button component='a' variant='contained' sx={{ px: 5.5 }}>
            بازگشت به صفحه اصلی
          </Button>
        </Link>
      </Box>
      <FooterIllustrations image='/images/pages/misc-404-object.png' />
    </Box>
  )
}
Error404.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Error404
