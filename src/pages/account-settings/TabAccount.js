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
import Button from '@mui/material/Button'
import PlusOutline from 'mdi-material-ui/PlusOutline'
import IconButton from '@mui/material/IconButton'
import { useAuth } from '../../hooks/useAuth'
import http from '../../services/http'

const schema = yup.object().shape({
  natural_code: yup
    .string()
    .required('کدملی  الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10)
    .typeError('به درستی وارد نمایید'),
  name: yup
    .string()
    .required('نام و نام خانوادگی الزامی است')
    .min(5, 'فیلد را به درستی پر کنید')
    .typeError('به درستی وارد نمایید'),
  phone: yup
    .string()
    .required('موبایل الزامی است')
    .matches(/d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11)
    .typeError('به درستی وارد نمایید'),
  username: yup
    .string()
    .required('نام کاربری الزامی است')
    .min(4, 'حداقل باید ع کاراکتر باشد')
    .typeError('به درستی وارد نمایید'),
  economic_code: yup.number().required('الزامی است').typeError('به درستی وارد نمایید').min(12, 'حداقل ۱۲ رقم '),
  unique_identifier: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'),
  branch_code: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'),
  private_key: yup.string().typeError('به درستی وارد نمایید'),
  public_key: yup.string().typeError('به درستی وارد نمایید'),
  cert_key: yup.string().typeError('به درستی وارد نمایید')
})

function TabAccount() {
  const { user } = useAuth()

  const [formData, setFormData] = useState({
    ...user,
    public_key: '',
    private_key: '',
    cert_key: '',
    public_key_info: user.public_key,
    private_key_info: user.private_key,
    cert_key_info: user.cert_key
  })

  const {
    control,
    reset,
    handleSubmit,
    setValue,
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
          reset({
            ...response.data,
            public_key: '',
            private_key: '',
            cert_key: '',
            public_key_info: response.data.public_key,
            private_key_info: response.data.private_key,
            cert_key_info: response.data.cert_key
          })
          setFormData({
            ...response.data,
            public_key: '',
            private_key: '',
            cert_key: '',
            public_key_info: response.data.public_key,
            private_key_info: response.data.private_key,
            cert_key_info: response.data.cert_key
          })
        }
        toast.dismiss(toastId)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        toast.dismiss(toastId)
      })
  }, [setFormData])

  const onSubmit = data => {
    toast.promise(
      http.put(`user/${formData.id}`, data, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      }),
      {
        loading: 'در حال ویرایش',
        success: ' ویرایش شد',
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  const handleCapture = (event, field) => {
    const reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        // this will then display a text file
        setValue(field, reader.result)
      },
      false
    )
    reader.readAsText(event?.target?.files[0])
  }

  const handleCapturepublic = (event, field) => {
    const reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        // this will then display a text file
        setValue(field, reader.result)
      },
      false
    )
    reader.readAsText(event?.target?.files[0])
  }

  const handleCapturecert = (event, field) => {
    const reader = new FileReader()
    reader.addEventListener(
      'load',
      () => {
        // this will then display a text file
        setValue(field, reader.result)
      },
      false
    )
    reader.readAsText(event?.target?.files[0])
  }

  return (
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                    label='کدملی/شناسه ملی'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.natural_code)}
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
                fullWidth
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='نام شرکت/نام شخص'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.name)}
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
                  />
                )}
              />
              {errors.phone && <FormHelperText sx={{ color: 'error.main' }}>{errors.phone.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                fullWidth
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
                  />
                )}
              />
              {errors.username && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>{' '}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                fullWidth
                name='economic_code'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='کد اقتصادی'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.economic_code)}
                  />
                )}
              />
              {errors.economic_code && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.economic_code.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                fullWidth
                name='unique_identifier'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='کد یکتا'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.unique_identifier)}
                  />
                )}
              />
              {errors.unique_identifier && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.unique_identifier.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                fullWidth
                name='branch_code'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='کد شعبه'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.branch_code)}
                  />
                )}
              />
              {errors.branch_code && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.branch_code.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12} sm={6}>
            <>
              <input
                accept='*'
                capture='camcorder'
                id='icon-button-video'
                onChange={event => handleCapture(event, 'private_key')}
                type='file'
                style={{ display: 'none' }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='icon-button-video'>
                <IconButton color='primary' component='span'>
                  افزودن کد خصوصی
                  <PlusOutline />
                </IconButton>
              </label>
            </>
            {formData.private_key_info ? (
              <FormHelperText sx={{ color: 'success.main', mb: 4 }}>
                قبلا در سیستم ثبت شده است.نیاز به ورود مجدد نیست
              </FormHelperText>
            ) : (
              <FormHelperText sx={{ color: 'error.main', mb: 4 }}>
                در سیستم ثبت نشده است.حتما وارد نمایید
              </FormHelperText>
            )}

            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                fullWidth
                name='private_key'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='کد خصوصی'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.private_key)}
                    multiline
                    rows={3}
                  />
                )}
              />
              <FormHelperText>فایل private key</FormHelperText>
              {errors.private_key && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.private_key.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <>
              <input
                accept='*'
                capture='camcorder'
                id='icon-button-video-1'
                onChange={event => handleCapturepublic(event, 'public_key')}
                type='file'
                style={{ display: 'none' }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='icon-button-video-1'>
                <IconButton color='primary' component='span'>
                  افزودن کد عمومی
                  <PlusOutline />
                </IconButton>
              </label>
            </>
            {formData.public_key_info ? (
              <FormHelperText sx={{ color: 'success.main', mb: 4 }}>
                قبلا در سیستم ثبت شده است.نیاز به ورود مجدد نیست
              </FormHelperText>
            ) : (
              <FormHelperText sx={{ color: 'error.main', mb: 4 }}>
                در سیستم ثبت نشده است.حتما وارد نمایید
              </FormHelperText>
            )}

            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                fullWidth
                name='public_key'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='کد عمومی'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.public_key)}
                    multiline
                    rows={3}
                  />
                )}
              />
              <FormHelperText>فایل public key</FormHelperText>
              {errors.public_key && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.public_key.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>{' '}
          <Grid item xs={12} sm={6}>
            <>
              <input
                accept='*'
                capture='camcorder'
                id='icon-button-video-2'
                onChange={event => handleCapturecert(event, 'cert_key')}
                type='file'
                style={{ display: 'none' }}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='icon-button-video-2'>
                <IconButton color='primary' component='span'>
                  افزودن امضای الکترونیک
                  <PlusOutline />
                </IconButton>
              </label>
            </>
            {formData.cert_key_info ? (
              <FormHelperText sx={{ color: 'success.main', mb: 4 }}>
                قبلا در سیستم ثبت شده است.نیاز به ورود مجدد نیست
              </FormHelperText>
            ) : (
              <FormHelperText sx={{ color: 'error.main', mb: 4 }}>
                در سیستم ثبت نشده است.حتما وارد نمایید
              </FormHelperText>
            )}

            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                fullWidth
                name='cert_key'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField
                    label='امضای الکترونیک'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.cert_key)}
                    multiline
                    rows={3}
                  />
                )}
              />
              <FormHelperText>فایل cert key</FormHelperText>
              {errors.cert_key && (
                <FormHelperText sx={{ color: 'error.main' }}>{errors.cert_key.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12} sm={6}>
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
              ذخیره
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
