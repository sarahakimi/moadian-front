import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Button, Card, CardHeader } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { editData, fetchData } from './requests'

const schema = yup.object().shape({
  rent_level_code: yup.number().typeError('به درستی وارد نمایید'),
  tax_level_code: yup.number().typeError('به درستی وارد نمایید'),
  adding_price_level_code: yup.number().typeError('به درستی وارد نمایید'),
  discount_level_code: yup.number().typeError('به درستی وارد نمایید'),
  packaging_price_level_code: yup.number().typeError('به درستی وارد نمایید'),
  movement_price_level_code: yup.number().typeError('به درستی وارد نمایید'),
  product_loading_level_code: yup.number().typeError('به درستی وارد نمایید'),
  product_unloading_level_code: yup.number().typeError('به درستی وارد نمایید'),
  rent_header_code: yup.number().typeError('به درستی وارد نمایید'),
  tax_header_code: yup.number().typeError('به درستی وارد نمایید'),
  adding_price_header_code: yup.number().typeError('به درستی وارد نمایید'),
  discount_header_code: yup.number().typeError('به درستی وارد نمایید'),
  packaging_price_header_code: yup.number().typeError('به درستی وارد نمایید'),
  movement_price_header_code: yup.number().typeError('به درستی وارد نمایید'),
  product_loading_header_code: yup.number().typeError('به درستی وارد نمایید'),
  product_unloading_header_code: yup.number().typeError('به درستی وارد نمایید'),
  toll_level_code: yup.number().typeError('به درستی وارد نمایید'),
  toll_header_code: yup.number().typeError('به درستی وارد نمایید')
})

function ACLPage() {
  const [change, setChange] = useState(false)

  const defaultValues = {
    rent_level_code: 0,
    tax_level_code: 0,
    adding_price_level_code: 0,
    discount_level_code: 0,
    packaging_price_level_code: 0,
    movement_price_level_code: 0,
    product_loading_level_code: 0,
    product_unloading_level_code: 0,
    rent_header_code: 0,
    tax_header_code: 0,
    adding_price_header_code: 0,
    discount_header_code: 0,
    packaging_price_header_code: 0,
    movement_price_header_code: 0,
    product_loading_header_code: 0,
    product_unloading_header_code: 0,
    toll_level_code: 0,
    toll_header_code: 0
  }

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    fetchData()
      .then(response => {
        if (response.data === null) {
          const errorMessage = 'خطایی رخ داده است'
          toast.error(errorMessage)
        } else reset(response.data)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
    setChange(false)
  }, [change])

  const onSubmit = data => {
    toast.promise(
      editData(data).then(() => {
        setChange(true)
      }),
      {
        loading: 'در حال ذخیره',
        success: 'ذخیره شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <form
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: '100% ', padding: 0, margin: 0 }}
    >
      <Card sx={{ width: '100%', mb: 4 }}>
        <CardHeader title='حداکثر وزن و حجم' />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center', backgroundColor: '#EEEEEE' }} />
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center', backgroundColor: '#EEEEEE' }}>
              کد سطح
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center', backgroundColor: '#EEEEEE' }}>
              کد سرفصل
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              ارزش افزوده
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='adding_price_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.adding_price_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.adding_price_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.adding_price_level_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='adding_price_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.adding_price_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.adding_price_header_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.adding_price_header_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              تخفیف
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='discount_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.discount_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.discount_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.discount_level_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='discount_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.discount_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.savariVazn && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.savariVazn.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              جابجایی
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='movement_price_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.movement_price_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.movement_price_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.movement_price_level_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='movement_price_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.movement_price_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.movement_price_header_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.movement_price_header_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              بسته بندی
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='packaging_price_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.packaging_price_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.packaging_price_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.packaging_price_level_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='packaging_price_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.packaging_price_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.packaging_price_header_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.packaging_price_header_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              بارگیری
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='product_loading_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.product_loading_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.product_loading_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.product_loading_level_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='product_loading_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.product_loading_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.product_loading_header_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.product_loading_header_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              تخلیه
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='product_unloading_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.product_unloading_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.product_unloading_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.product_unloading_level_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='product_unloading_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.product_unloading_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.product_unloading_header_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.product_unloading_header_code.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              کرایه
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='rent_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.rent_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.rent_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.rent_level_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='rent_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.rent_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.rent_header_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.rent_header_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              مالیات
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='tax_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.tax_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.tax_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.tax_level_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='tax_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.tax_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.tax_header_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.tax_header_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{ textAlign: 'center' }}>
              عوارض
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='toll_level_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.toll_level_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.toll_level_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.toll_level_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{ textAlign: 'center' }}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='toll_header_code'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.toll_header_code)}
                      inputProps={{ maxLength: 10 }}
                      dir='ltr'
                    />
                  )}
                />
                {errors.toll_header_code && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.toll_header_code.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Button type='submit' variant='contained' sx={{ width: '100%', mt: 2 }}>
              ذخیره تغییرات
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </form>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
