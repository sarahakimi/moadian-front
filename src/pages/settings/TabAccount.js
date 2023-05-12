// ** React Imports
import { useEffect, useMemo, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Icons Imports
import { Controller, useForm } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { Autocomplete, Typography } from '@mui/material'
import { ostan, shahr } from 'iran-cities-json'
import * as tus from 'tus-js-client'
import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../hooks/useAuth'
import { editHub, fetchData } from './requests'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const schema = yup.object().shape({
  image: yup.string(),
  name: yup.string().required('نام الزامی است'),
  fax: yup
    .string()
    .required('فگس الزامی است')
    .matches(/^[0-9]*$/, ' باید عدد باشد'),
  provence: yup.string().required('استان الزامی است').typeError('یک مورد را انتخاب کنید'),
  city: yup.string().required('شهر الزامی است').typeError('یک مورد را انتخاب کنید'),
  telephone: yup
    .string()
    .required('تلفن الزامی است')
    .matches(/^[0-9]*$/, ' باید عدد باشد')
})

function TabAccount() {
  const imgSrc = ''
  const [hasHub, setHasHub] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [resetImageUrl, setResetImageUrl] = useState('')
  const hub = useAuth().user.hub_id

  const [formData, setFormData] = useState({
    image: '',
    name: '',
    fax: '',
    telephone: '',
    provence: '',
    city: ''
  })
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  const emptyForm = {
    image: '',
    name: '',
    fax: '',
    telephone: '',
    provence: '',
    city: ''
  }

  const {
    control,
    reset,

    // setValue,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: useMemo(() => formData, [setFormData]),
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    fetchData()
      .then(response => {
        if (response.data === null) {
          setHasHub(false)
          reset(emptyForm)
        } else {
          reset(response.data)
          setImageUrl(response.data.image)
          setResetImageUrl(response.data.image)
          setSelectedSenderOstan(response.data.provence)
          setHasHub(true)
        }
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [setFormData, setSelectedSenderOstan])

  const onSubmit = data => {
    toast.promise(editHub(hub, data), {
      loading: 'در حال ویرایش هاب',
      success: 'هاب ویرایش شد',
      error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
    })
  }

  const handleSetUpload = event => {
    const uploadFile = event.target.files[0]
    if (!uploadFile) {
      return
    }
    const toastId = toast.loading('در حال بارگذاری لوگو')

    const upload = new tus.Upload(uploadFile, {
      endpoint: 'https://api.zaminbar.ir/files/',
      retryDelays: [0],
      metadata: {
        filename: uploadFile.name,
        filetype: uploadFile.type
      },
      onError() {
        setError('hub_id', { type: 'custom', message: 'مشکل در بارگذای عکس. مجدد تلاش کنید' })
        toast.dismiss(toastId)
        toast.error('خطا در بارگذاری لوگو')
      },
      onSuccess() {
        setImageUrl(upload.url)
        toast.dismiss(toastId)
        toast.success('با موفقیت بارگذاری شد')
      }
    })
    upload.start()
  }

  return (
    <CardContent>
      {hasHub ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item xs={12} sx={{ my: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ImgStyled src={imageUrl === '' ? imgSrc : imageUrl} alt='Profile Pic' />
                <Box>
                  <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                    بارگذاری عکس
                    <input
                      hidden
                      type='file'
                      onChange={handleSetUpload}
                      accept='image/png, image/jpeg'
                      id='account-settings-upload-image'
                      name='image'
                    />
                  </ButtonStyled>
                  <ResetButtonStyled
                    color='error'
                    variant='outlined'
                    onClick={() => setImageUrl(resetImageUrl === '' ? imgSrc : resetImageUrl)}
                  >
                    انصراف
                  </ResetButtonStyled>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='نام هاب'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.name)}
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
                  name='fax'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='فکس'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.fax)}
                      inputProps={{ maxLength: 12 }}
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
                {errors.fax && <FormHelperText sx={{ color: 'error.main' }}>{errors.fax.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='telephone'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='تلفن'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.telephone)}
                      inputProps={{ maxLength: 11 }}
                      placeholder='021*******'
                      dir='ltr'
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
                {errors.telephone && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.telephone.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {' '}
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  fullWidth
                  name='provence'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={ostan.map(element => element.name)}
                      onChange={(event, values, value) => onChangeSenderOstan(event, onChange, values, value)}
                      value={value}
                      inputValue={value}
                      disableClearable
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='استان'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.provence)}
                        />
                      )}
                    />
                  )}
                />
                {errors.provence && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.provence.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {' '}
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='city'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      disableClearable
                      options={shahr
                        .filter(element => element.ostan === selectedSenderOstan)
                        .map(element => element.name)}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      noOptionsText='چیزی پیدا نشد'
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='شهر'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.city)}
                        />
                      )}
                    />
                  )}
                />
                {errors.city && <FormHelperText sx={{ color: 'error.main' }}>{errors.city.message}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant='contained' type='submit' sx={{ mr: 4 }}>
                ذخیره تغییرات
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <Typography variant='p'>
          شما در هاب عضو نیستید. در صورتی که از عوضیت خود در هاب اطمینان دارید مجدد تلاش کنید.
        </Typography>
      )}
    </CardContent>
  )
}

export default TabAccount
