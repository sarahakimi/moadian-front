import React, { useState } from 'react'
import { Grid } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import toast from 'react-hot-toast'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styled } from '@mui/material/styles'
import Loading from '../../@core/components/loading/loading'

const schema = yup.object().shape({
  unique_tax_number: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'),
  invoice_type: yup.number().required('الزامی است').typeError('به درستی وارد نمایید'),
  invoice_subject: yup.number().required('الزامی است').typeError('به درستی وارد نمایید'),
  unique_tax_number_of_the_reference_invoice: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'),
  riz: yup.mixed().required('الزامی است'),
  sanad: yup.mixed().required('الزامی است'),
  taraf_hesab_anbar: yup.mixed().required('الزامی است')
})

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

function FirstForn({ setRows, handleNext }) {
  const [riz, setRiz] = useState('')
  const [sanad, setSanad] = useState('')
  const [tarafHesab, setTarafhesab] = useState('')
  const [LoadingOpen, setLoadingOpen] = useState(false)

  const defaultValues = {
    riz: '',
    sanad: '',
    taraf_hesab_anbar: '',
    unique_tax_number: '',
    invoice_type: 0,
    invoice_subject: 0,
    unique_tax_number_of_the_reference_invoice: ''
  }

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

  const onSubmit = data => {
    setLoadingOpen(true)
    const formDataValue = new FormData()

    formDataValue.append('riz', data.riz)

    formDataValue.append('sanad', data.sanad)
    formDataValue.append('taraf_hesab_anbar', data.taraf_hesab_anbar)
    formDataValue.append('invoice_subject', data.invoice_subject)
    formDataValue.append('invoice_type', data.invoice_type)
    formDataValue.append('unique_tax_number', data.unique_tax_number)
    formDataValue.append('unique_tax_number_of_the_reference_invoice', data.unique_tax_number_of_the_reference_invoice)

    toast.promise(
      axios
        .post(`https://tax.api.havabaar.com/invoice/new`, formDataValue, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`,
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': '*'
          }
        })
        .then(response => {
          reset(defaultValues)
          setRiz(null)
          setTarafhesab(null)
          setSanad(null)
          setRows(
            response.data.flatMap((element, index) => ({
              ...element.body,
              ...element.header,
              id: index
            }))
          )
          setLoadingOpen(false)
          handleNext()
        }),
      {
        loading: 'در حال ثبت',
        success: ' ثبت شد',
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6}>
          <Grid item xs={12} xl={6}>
            <FormControl sx={{ mb: 4 }}>
              <Controller
                name='riz'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                    بارگذاری فایل ریز جزئیات
                    <input
                      hidden
                      type='file'
                      onChange={e => {
                        field.onChange(e.target.files[0])
                        setRiz(e.target.files[0].name)
                      }}
                      accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                      id='account-settings-upload-image'
                      name='image'
                    />
                  </ButtonStyled>
                )}
              />
            </FormControl>
            {riz}
          </Grid>{' '}
          <Grid item xs={12} xl={6}>
            <FormControl sx={{ mb: 4 }}>
              <Controller
                name='sanad'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image1'>
                    بارگذاری فایل سند
                    <input
                      hidden
                      type='file'
                      onChange={e => {
                        field.onChange(e.target.files[0])
                        setSanad(e.target.files[0].name)
                      }}
                      accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                      id='account-settings-upload-image1'
                      name='image'
                    />
                  </ButtonStyled>
                )}
              />
            </FormControl>

            {sanad}
          </Grid>{' '}
          <Grid item xs={12}>
            <FormControl sx={{ mb: 4 }}>
              <Controller
                name='taraf_hesab_anbar'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image2'>
                    بارگذاری فایل طرف حساب انبار
                    <input
                      hidden
                      type='file'
                      onChange={e => {
                        field.onChange(e.target.files[0])
                        setTarafhesab(e.target.files[0].name)
                      }}
                      accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                      id='account-settings-upload-image2'
                      name='image'
                    />
                  </ButtonStyled>
                )}
              />
            </FormControl>

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
      <Loading open={LoadingOpen} />
    </div>
  )
}

export default FirstForn
