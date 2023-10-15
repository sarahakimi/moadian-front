import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import Close from 'mdi-material-ui/Close'
import toast from 'react-hot-toast'
import { editUser, registerUser } from './requests'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  name: yup.string().required(' الزامی است'),
  code: yup.number().required(' الزامی است').typeError('باید عدد باشد'),
  tax_code: yup
    .number()
    .required(' الزامی است')
    .min(1000000000000, 'باید ۱۳ رقم باشد')
    .max(9999999999999, 'باید ۱۳ رقم باشد')
    .typeError('باید عدد باشد')
})

function SidebarAddCourier({ open, toggle, setChange, user, edit, showUser }) {
  const emptyForm = {
    mame: '',
    code: 0,
    tax_code: 0
  }

  const defaultValues = user
    ? {
        name: user.name,
        code: user.code,
        tax_code: user.tax_code
      }
    : emptyForm

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    toggle()
    reset(emptyForm)
  }

  const onSubmit = data => {
    if (edit) {
      toast.promise(
        editUser(user.id, data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ویرایش کالا/خدمت',
          success: 'کالا/خدمت ویرایش شد',
          error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    } else {
      toast.promise(
        registerUser(data).then(() => {
          setChange(true)
          handleClose()
        }),
        {
          loading: 'در حال ایجاد کالا/خدمت',
          success: 'کالا/خدمت ایجاد شد',
          error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
        }
      )
    }
  }

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>اطلاعات کالا/خدمت</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{ cursor: 'pointer' }} />
      </Header>
      <Box
        sx={{
          p: 5,
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          },
          '& 	.MuiInputLabel-root.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          }
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              fullWidth
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='نام'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
          </FormControl>{' '}
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              fullWidth
              name='code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='کد کالا'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.code)}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.code && <FormHelperText sx={{ color: 'error.main' }}>{errors.code.message}</FormHelperText>}
          </FormControl>{' '}
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              fullWidth
              name='tax_code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='کد ۱۳ رقمی کالا'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.tax_code)}
                  inputProps={{ maxLength: 13 }}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.tax_code && <FormHelperText sx={{ color: 'error.main' }}>{errors.tax_code.message}</FormHelperText>}
          </FormControl>
          {!showUser && (
            <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
              ذخیره
            </Button>
          )}
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddCourier
