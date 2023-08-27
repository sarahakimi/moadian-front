// ** React Imports
import Button from '@mui/material/Button'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { useState } from 'react'
import toast from 'react-hot-toast'
import * as tus from 'tus-js-client'
import { styled } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import http from '../../services/http'

const schema = yup.object().shape({
  unique_tax_number: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'),
  invoice_type: yup.number().required('الزامی است').typeError('به درستی وارد نمایید'),
  invoice_subject: yup.number().required('الزامی است').typeError('به درستی وارد نمایید'),
  unique_tax_number_of_the_reference_invoice: yup.string().required('الزامی است').typeError('به درستی وارد نمایید')
})

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

// const fields_general = (name, id) => {
//   if (id === 0)
//     return { type: 'int', yup: yup.number().required('الزامی است').typeError('به درستی وارد نمایید'), default: 0, name }
//   if (id === 1)
//     return {
//       type: 'string',
//       yup: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'),
//       default: '',
//       name
//     }
//   if (id === 2)
//     return {
//       type: 'double',
//       yup: yup.number().required('الزامی است').typeError('به درستی وارد نمایید'),
//       default: '',
//       name
//     }
//
//   return { file: '', yup: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'), default: '', name }
// }

function ACLPage() {
  const defaultValues = {
    // riz: '',
    // sanad: '',
    // taraf_hesab_anbar: '',
    unique_tax_number: '',
    invoice_type: 0,
    invoice_subject: 0,
    unique_tax_number_of_the_reference_invoice: ''
  }

  // useEffect(() => {
  //   const toastId = toast.loading('در حال دریافت اطلاعات')
  //   http
  //     .get(
  //       'invoice/fields',
  //       {},
  //       {
  //         Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  //       }
  //     )
  //     .then(async response => {
  //       if (response.data !== null) {
  //         const res = [
  //           { Name: 'فایل ریز جزئیات', Type: 3 },
  //           { Name: 'فایل سند', Type: 3 },
  //           { Name: 'فایل طرف حساب انبار', Type: 3 },
  //           { Name: 'شماره منحصر به فرد مالیاتی', Type: 2 },
  //           { Name: 'نوع صورت حساب', Type: 1 },
  //           { Name: 'موضوع صورت حساب', Type: 2 },
  //           { Name: 'شماره منحصر به فرد مالیاتی صورتحساب مرجع', Type: 2 }
  //         ]
  //         setFields
  //
  //         console.log(response.data)
  //         toast.dismiss(toastId)
  //       }
  //     })
  //     .catch(err => {
  //       const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : 'خطایی رخ داده است'
  //       toast.error(errorMessage)
  //       toast.dismiss(toastId)
  //     })
  // }, [])

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const [riz, setRiz] = useState('')
  const [sanad, setSanad] = useState('')
  const [tarafHesab, setTarafhesab] = useState('')

  const onSubmit = data => {
    toast.promise(
      http
        .post(
          `invoice`,
          { ...data, riz, sanad, taraf_hesab_anbar: tarafHesab },
          {
            Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
          }
        )
        .then(() => {
          reset(defaultValues)
          setRiz(null)
          setTarafhesab(null)
          setSanad(null)
        }),
      {
        loading: 'در حال ثبت',
        success: ' ثبت شد',
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  const handleSetUpload = (event, uploadFunction) => {
    const uploadFile = event.target.files[0]
    if (!uploadFile) {
      return
    }
    const toastId = toast.loading('در حال بارگذاری فایل')

    const upload = new tus.Upload(uploadFile, {
      endpoint: 'https://api.zaminbar.ir/files/',
      retryDelays: [0],
      metadata: {
        filename: uploadFile.name,
        filetype: uploadFile.type
      },
      onError() {
        toast.dismiss(toastId)
        toast.error('خطا در بارگذاری فایل')
      },
      onSuccess() {
        uploadFunction(upload.url)
        toast.dismiss(toastId)
        toast.success('با موفقیت بارگذاری شد')
      }
    })
    upload.start()
  }

  return (
    <Card>
      <CardHeader title='افزودن گزارش جدید' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={6}>
            <Grid item xs={12} xl={6}>
              <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                بارگذاری فایل ریز جزئیات
                <input
                  hidden
                  type='file'
                  onChange={event => handleSetUpload(event, setRiz)}
                  accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                  id='account-settings-upload-image'
                  name='image'
                />
              </ButtonStyled>
              {riz}
            </Grid>{' '}
            <Grid item xs={12} xl={6}>
              <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image1'>
                بارگذاری فایل سند
                <input
                  hidden
                  type='file'
                  onChange={event => handleSetUpload(event, setSanad)}
                  accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                  id='account-settings-upload-image1'
                  name='image'
                />
              </ButtonStyled>
              {sanad}
            </Grid>{' '}
            <Grid item xs={12}>
              <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image2'>
                بارگذاری فایل طرف حساب انبار
                <input
                  hidden
                  type='file'
                  onChange={event => handleSetUpload(event, setTarafhesab)}
                  accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                  id='account-settings-upload-image2'
                  name='image'
                />
              </ButtonStyled>
              {tarafHesab}
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='unique_tax_number'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شماره منحصر به فرد مالیاتی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.unique_tax_number)}
                    />
                  )}
                />
                {errors.unique_tax_number && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.unique_tax_number.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>{' '}
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='invoice_type'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <InputLabel id='demo-multiple-name-label'>نوع صورت حساب</InputLabel>
                      <Select
                        onBlur={onBlur}
                        labelId='demo-multiple-name-label'
                        id='demo-multiple-name'
                        onChange={onChange}
                        error={Boolean(errors.invoice_type)}
                        input={<OutlinedInput label='Name' />}
                      >
                        <MenuItem value={1}>نوع اول</MenuItem>
                        <MenuItem value={2}>نوع دوم</MenuItem>
                        <MenuItem value={3}>نوع سوم</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.invoice_type && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.invoice_type.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>{' '}
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='invoice_subject'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <>
                      <InputLabel id='demo-multiple-name-label'>موضوع صورت حساب</InputLabel>
                      <Select
                        onBlur={onBlur}
                        labelId='demo-multiple-name-label'
                        id='demo-multiple-name'
                        onChange={onChange}
                        error={Boolean(errors.invoice_type)}
                        input={<OutlinedInput label='Name' />}
                      >
                        <MenuItem value={1}>اصلی</MenuItem>
                        <MenuItem value={2}>اصلاحی</MenuItem>
                        <MenuItem value={3}>ابطالی</MenuItem>
                        <MenuItem value={4}>برگشت از فروش</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.invoice_subject && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.invoice_subject.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='unique_tax_number_of_the_reference_invoice'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='شماره منحصر به فرد مالیاتی صورتحساب مرجع'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.unique_tax_number_of_the_reference_invoice)}
                    />
                  )}
                />
                {errors.unique_tax_number_of_the_reference_invoice && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.unique_tax_number_of_the_reference_invoice.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Button size='large' type='submit' variant='contained' sx={{ m: 1 }} color='success'>
                ثبت صورت حساب
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
