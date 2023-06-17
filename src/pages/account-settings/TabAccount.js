// ** React Imports
import { useEffect, useMemo, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import { Controller, useForm } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useAuth } from '../../hooks/useAuth'
import http from '../../services/http'

const schema = yup.object().shape({
  natural_code: yup
    .string()
    .required('کدملی  الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  name: yup.string().required('نام و نام خانوادگی الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  phone: yup
    .string()
    .required('موبایل الزامی است')
    .matches(/d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  hub_id: yup.number().required('هاب الزامی است'),
  username: yup.string().required('نام کاربری الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  password: yup.string().required('رمز عبور الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  roles: yup.array().required(' الزامی است').min(1, 'حداقل 1 دسترسی انتخاب کنید')
})

function TabAccount() {
  const { user } = useAuth()

  const [formData, setFormData] = useState(user)

  const {
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: useMemo(() => formData, [setFormData]),
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    const toastId = toast.loading('در حال دریافت اطلاعات')
    http
      .get(
        'user/me',
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(async response => {
        if (!response.data === null) {
          reset(response.data)
        }
        toast.dismiss(toastId)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        toast.dismiss(toastId)
      })
  }, [setFormData])

  return (
    <CardContent>
      <form>
        <Grid
          container
          spacing={6}
          sx={{
            '& .MuiInputBase-input.Mui-disabled': {
              WebkitTextFillColor: 'rgba(76,78,100,0.87)'
            },
            '& 	.MuiInputLabel-root.Mui-disabled': {
              WebkitTextFillColor: 'rgba(76,78,100,0.87)'
            }
          }}
        >
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                fullWidth
                name='natural_code'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='کدملی'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.natural_code)}
                    inputProps={{ maxLength: 10 }}
                    dir='ltr'
                    disabled
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
              {errors.natural_code && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.natural_code.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='نام و نام خانوادگی'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.name)}
                    disabled
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
              {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
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
                    disabled
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
              {errors.phone && <FormHelperText sx={{ color: 'error.main' }}>{errors.phone.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name='username'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='نام کاربری'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.username)}
                    disabled
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
              {errors.username && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
