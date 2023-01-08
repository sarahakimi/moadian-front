import Link from 'next/link'
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import {styled, useTheme} from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import * as yup from 'yup'
import DialogContentText from "@mui/material/DialogContentText";
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useAuth} from 'hooks/useAuth'
import {useSettings} from '@core/hooks/useSettings'
import {useState} from 'react'
import themeConfig from 'configs/themeConfig'
import BlankLayout from '@core/layouts/BlankLayout'
import FooterIllustrationsV2 from 'views/pages/auth/FooterIllustrationsV2'
import Loading from "pages/components/loading/loading";
import {Dialog, DialogActions, DialogContent, DialogTitle, Select} from "@mui/material";


const LoginIllustrationWrapper = styled(Box)(({theme}) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const LoginIllustration = styled('img')(({theme}) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const RightWrapper = styled(Box)(({theme}) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)(({theme}) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({theme}) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: {marginTop: theme.spacing(8)}
}))

const schema = yup.object().shape({
  username: yup.string()
    .required('نام کاربری الزامی است')
    .min(4, 'نام کاربری باید حداقل ۴ کاراکتر باشد')
    .max(50, 'نام کاربری باید حداکثر 50 کاراکتر باشد.'),
  password: yup.string()
    .required('رمز عبور الزامی است')
    .min(4, 'رمز عبور باید حداقل ۴زکاراکتر باشد.')
    .max(32, 'مز عبور باید حداکثر 32 کاراکتر باشد.'),
  hub_id: yup.number(),
})


function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const auth = useAuth()
  const theme = useTheme()
  const {settings} = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const {skin} = settings
  const [companies, setCompanies] = useState([])
  const [isDuplicate, setIsDuplicate] = useState(false)
  const [prevForm, setPrevForm] = useState({})

  const emptyForm = {
    password: '',
    username: '',
    company_id: -1,
  }

  const defaultValues = isDuplicate ? {
    company_id: -1,
    ...prevForm,
  } : emptyForm


  const {
    control,
    setError,
    handleSubmit,
    formState: {errors}
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    setIsDuplicate(false);
  };


  const onSubmit = data => {
    setLoading(true)
    if (isDuplicate) {
      auth.login({
        username: data.username,
        password: data.password,
        company_id: companies[data.company_id].companyId.companyId,
        hub_id: companies[data.company_id].hubId.hubId
      }, err => {
        setLoading(false)
        setError('username', {
          type: 'manual',
          message: err.response?.data?.message
        })
      }, () => {
        setLoading(false)
        setIsDuplicate(false)
      })
    } else {
      const {username, password} = data

      setPrevForm(data)
      auth.login({username, password}, err => {
        setLoading(false)
        setError('username', {
          type: 'manual',
          message: err.response?.data?.message
        })
        if (err.response.data.messageCode === 413) {
          const {data} = err.response.data
          setCompanies(data)
          setIsDuplicate(true)
        }
      }, () => setLoading(false))
    }
  }

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
          <LoginIllustrationWrapper>
            <LoginIllustration alt='login-illustration' src='/images/pages/login-illus.png'/>
          </LoginIllustrationWrapper>
          <FooterIllustrationsV2/>
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? {borderLeft: `1px solid ${theme.palette.divider}`} : {}}>
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
              <img width={60} height={60} src='/images/favicon.png'/>
              <Typography variant='h6' sx={{ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important'}}>
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Box sx={{mb: 6}}>
              <TypographyStyled variant='h5'>{`ورود به ${themeConfig.templateName}`}</TypographyStyled>
              <Typography variant='body2'>لطفا برای شروع ، وارد حساب کاربری خود شوید</Typography>
            </Box>
            {/* <Alert icon={false} sx={{ py: 3, mb: 6, ...bgClasses.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='caption' sx={{ mb: 2, display: 'block', color: 'primary.main' }}>
                Admin: <strong>admin@materialize.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='caption' sx={{ display: 'block', color: 'primary.main' }}>
                Client: <strong>client@materialize.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert> */}
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{mb: 4}}>
                <Controller
                  name='username'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='نام کاربری'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.username)}
                    />
                  )}
                />
                {errors.username && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.username.message}</FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth sx={{mb: 4}}>
                <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                  کلمه عبور
                </InputLabel>
                <Controller
                  name='password'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label='Password'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOutline/> : <EyeOffOutline/>}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{color: 'error.main'}} id=''>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              {isDuplicate && <Dialog open={isDuplicate} onClose={handleClose}>
                <DialogTitle>انتخاب هاب</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    لطفا شرکت و هاب خود را از بین گزینه های زیر انتخاب کنبد.
                  </DialogContentText>

                  <FormControl fullWidth sx={{mt: 4}}>
                    <Controller
                      type="number"
                      name="company_id"
                      control={control}
                      render={({field: {onChange, onBlur}}) => (
                        <>
                          <InputLabel>شرکت</InputLabel>
                          <Select
                            label="شرکت"
                            type="number"
                            onBlur={onBlur}
                            onChange={onChange}
                            input={<OutlinedInput/>}
                            error={Boolean(errors.comapny_id)}

                          >
                            {companies.map((company, idx) => (
                              <MenuItem key={idx}
                                        value={idx}>
                                شرکت {company.companyId.companyName} ,هاب {company.hubId.hubName}
                              </MenuItem>
                            ))}
                          </Select>
                        </>
                      )}
                    />
                    {errors.comapny_id &&
                      <FormHelperText sx={{color: 'error.main'}}>{errors.comapny_id.message}</FormHelperText>}
                  </FormControl>
                </DialogContent><DialogActions>
                <Button fullWidth size='large' type='submit' variant='contained' sx={{mb: 7}}
                        onClick={handleSubmit(onSubmit)}>
                  ورود
                </Button>
              </DialogActions></Dialog>}
              <Box
                sx={{
                  mb: 4,
                  mt: 4,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between'
                }}
              >
                <Link passHref href='/forgot-password'>
                  <Typography component={MuiLink} variant='body2' sx={{color: 'primary.main'}}>
                    کلمه عبور را فراموش کردید؟
                  </Typography>
                </Link>
              </Box>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{mb: 7}}>
                ورود
              </Button>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
      <Loading open={loading}/>
    </Box>
  )
}

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
