import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import themeConfig from 'configs/themeConfig'
import BlankLayout from '@core/layouts/BlankLayout'
import { useSettings } from '@core/hooks/useSettings'
import FooterIllustrationsV2 from 'views/pages/auth/FooterIllustrationsV2'
import { useState } from 'react'
import FirstPageForm from './firsPageForm'
import SecondPageForm from './secondPageForm'

// Styled Components
const ForgotPasswordIllustrationWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

function ForgotPassword() {
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()

  // ** Vars
  const { skin } = settings
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const [page, setPage] = useState(1)
  const [firstFormData, setFirstFormData] = useState({})

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <ForgotPasswordIllustrationWrapper>
            <ForgotPasswordIllustration alt='forgot-password-illustration' src='/images/pages/forget.png' />
          </ForgotPasswordIllustrationWrapper>
          {/* <FooterIllustrationsV2 image={`/images/pages/auth-v2-forgot-password-mask-${theme.palette.mode}.png`}/> */}
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            p: 7,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img width={60} height={60} src='/images/favicon.png' />
              <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            {page === 1 && <FirstPageForm setPage={setPage} setFirstFormData={setFirstFormData} />}
            {page === 2 && <SecondPageForm setPage={setPage} firstFormData={firstFormData} />}
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}

ForgotPassword.guestGuard = true
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ForgotPassword
