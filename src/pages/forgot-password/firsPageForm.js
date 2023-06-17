import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import { styled } from '@mui/material/styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from 'react-hot-toast'
import FormHelperText from '@mui/material/FormHelperText'
import http from '../../services/http'

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const schema = yup.object().shape({
  phone: yup
    .string()
    .required('موبایل الزامی است')
    .matches(/d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11)
})

export default function FirstPageForm({ setPage, setFirstFormData }) {
  const defaultValues = {
    phone: ''
  }

  const {
    control,
    setError,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    toast.promise(
      http
        .post('auth/validate_phone', data, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          reset(defaultValues)
          setFirstFormData(data)
          setPage(2)
        })
        .catch(err => {
          setError('phone', { type: 'custom', message: err.response.data.message })
        }),
      {
        loading: 'در حال ثبت فرم',
        success: 'فرم ثبت شد',
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <>
      <Box sx={{ mb: 6 }}>
        <TypographyStyled variant='h5'>کلمه عبور را فراموش کردید ؟ 🔒</TypographyStyled>
        <Typography variant='body2'>بازیابی کلمه عبور</Typography>
      </Box>
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
            name='phone'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <TextField
                label='موبایل'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.phone)}
                inputProps={{ maxLength: 11 }}
                placeholder='09*********'
                dir='ltr'
              />
            )}
          />
          {errors.phone && <FormHelperText sx={{ color: 'error.main' }}>{errors.phone.message}</FormHelperText>}
        </FormControl>

        <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 5.25 }}>
          ارسال کد
        </Button>
        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link passHref href='/login'>
            <Typography
              component={MuiLink}
              sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', justifyContent: 'center' }}
            >
              <span>بازگشت به ورود</span>
              <ChevronLeft sx={{ mr: 1.5, fontSize: '2rem' }} />
            </Typography>
          </Link>
        </Typography>
      </form>
    </>
  )
}
