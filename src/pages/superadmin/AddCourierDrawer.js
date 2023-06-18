import { useEffect, useState } from 'react'
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
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import toast from 'react-hot-toast'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { registerCompany } from './requests'
import http from '../../services/http'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  natural_code: yup
    .string()
    .required('کدملی  الزامی است')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10)
    .matches(/d*/, 'کدملی باید عدد باشد'),
  phone: yup
    .string()
    .required('موبایل الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  name: yup.string().required('نام شرکت الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  username: yup.string().required('نام کاربری الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  password: yup.string().required('رمز عبور الزامی است').min(8, 'حداقل باید 8 کاراکتر باشد'),
  duration_of_activity: yup.number().required(' الزامی است').min(1, 'حداقل 1 روز').typeError('باید عدد باشد'),
  economic_code: yup.number().typeError('به درستی وارد نمایید').min(1, 'الزامی است'),
  branch_code: yup.string().typeError('باید عدد باشد'),
  activated: yup.boolean(),
  platform_id: yup.number().required('الزامی است').typeError('باید عدد باشد').min(1, 'انتخاب نمایید'),
  service_id: yup.number().required('الزامی است').typeError('باید عدد باشد').min(1, 'انتخاب نمایید')
})

function SidebarAddCourier({ open, toggle, setChange, company, edit }) {
  const [showPassword, setShowPassword] = useState(false)
  const [platform, setPlatform] = useState([])
  const [service, setService] = useState([])
  useEffect(() => {
    const toastId = toast.loading('در حال دریافت اطلاعات پلتفرم ها')
    http
      .get(
        'invoice/platform',
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(response => {
        if (response.data !== null) {
          console.log(response.data)
          setPlatform(response.data)
          toast.dismiss(toastId)
        }
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        toast.dismiss(toastId)
      })
    const toastId2 = toast.loading('در حال دریافت اطلاعات سرویس ها')
    http
      .get(
        'invoice/service',
        {},
        {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        }
      )
      .then(response => {
        if (response.data !== null) {
          console.log(response.data)
          setService(response.data)
          toast.dismiss(toastId2)
        }
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        toast.dismiss(toastId2)
      })
  }, [])

  const defaultValues = company
    ? {
        natural_code: company?.natural_code,
        name: company?.name,
        phone: company?.phone,
        duration_of_activity: company?.duration_of_activity,
        username: company?.username,
        password: '********',
        economic_code: company?.economic_code,
        branch_code: company?.branch_code,
        activated: company?.activated,
        platform_id: company?.platform_id,
        service_id: company?.service_id
      }
    : {
        natural_code: '',
        name: '',
        phone: '',
        duration_of_activity: 0,
        username: '',
        password: '',
        economic_code: '',
        branch_code: 0,
        activated: true,
        platform_id: 0,
        service_id: 0
      }

  const {
    reset,
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    toast.promise(
      registerCompany(data).then(() => {
        reset(defaultValues)
        setChange(true)
        toggle()
      }),
      {
        loading: 'در حال ایجاد شرکت',
        success: 'شرکت ایجاد شد',
        error: err => {
          setError('name', { type: 'custom', message: err.response.data.message })

          return err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.'
        }
      }
    )
  }

  const handleClose = () => {
    toggle()
    reset(defaultValues)
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
        <Typography variant='h6'>اطلاعات شرکت</Typography>
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
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  inputProps={{ maxLength: 30 }}
                  label='نام شرکت'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.name)}
                  disabled={edit}
                />
              )}
            />
            {errors.name && <FormHelperText sx={{ color: 'error.main' }}>{errors.name.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='branch_code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  inputProps={{ maxLength: 30 }}
                  label='کد شعبه'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.branch_code)}
                  disabled={edit}
                />
              )}
            />
            {errors.branch_code && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.branch_code.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='economic_code'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  inputProps={{ maxLength: 30 }}
                  label='کد اقتصادی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.economic_code)}
                  disabled={edit}
                />
              )}
            />
            {errors.economic_code && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.economic_code.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='duration_of_activity'
              control={control}
              type='number'
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='اعتبار اکانت (روز)'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.duration_of_activity)}
                  disabled={edit}
                />
              )}
            />
            {errors.duration_of_activity && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.duration_of_activity.message}</FormHelperText>
            )}
          </FormControl>
          <Box sx={{ mb: 4 }}>
            <Typography variant='p' fullwidth>
              ادمین
            </Typography>
          </Box>
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
                  disabled={edit}
                />
              )}
            />
            {errors.natural_code && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.natural_code.message}</FormHelperText>
            )}
          </FormControl>
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
                  disabled={edit}
                />
              )}
            />
            {errors.phone && <FormHelperText sx={{ color: 'error.main' }}>{errors.phone.message}</FormHelperText>}
          </FormControl>
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
                  dir='ltr'
                  disabled={edit}
                />
              )}
            />
            {errors.username && <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>}
          </FormControl>
          {!edit && (
            <FormControl fullWidth sx={{ mb: 4 }}>
              <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                کلمه عبور
              </InputLabel>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <OutlinedInput
                    disabled={edit}
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
                          onClick={() => !edit && setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                )}
              />
            </FormControl>
          )}
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='activated'
              control={control}
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <InputLabel id='demo-multiple-name-label'>وضعیت</InputLabel>
                  <Select
                    onBlur={onBlur}
                    labelId='demo-multiple-name-label'
                    id='demo-multiple-name'
                    onChange={onChange}
                    defaultValue={company?.activated ? company?.activated : true}
                    error={Boolean(errors.activated)}
                    disabled={edit}
                    input={<OutlinedInput label='Name' />}
                  >
                    <MenuItem value>فعال</MenuItem>
                    <MenuItem value={false}>غیرفعال</MenuItem>
                  </Select>
                </>
              )}
            />
            {errors.activated && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.activated.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='platform_id'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <InputLabel>پلتفرم</InputLabel>
                  <Select
                    type='number'
                    onBlur={onBlur}
                    id='demo-multiple-name'
                    onChange={onChange}
                    input={<OutlinedInput label='Name' />}
                    error={Boolean(errors.platform_id)}
                    disabled={edit}
                    defaultValue={company ? company.platform_id : 0}
                  >
                    {platform.map(element => (
                      <MenuItem key={element.id} value={parseInt(element.id, 10)}>
                        {element.name}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
            {errors.platform_id && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.platform_id.message}</FormHelperText>
            )}
          </FormControl>{' '}
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='service_id'
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <InputLabel>نوع سرویس</InputLabel>
                  <Select
                    type='number'
                    onBlur={onBlur}
                    id='demo-multiple-name'
                    onChange={onChange}
                    input={<OutlinedInput label='Name' />}
                    error={Boolean(errors.service_id)}
                    disabled={edit}
                    defaultValue={company ? company.service_id : 0}
                  >
                    {service.map(element => (
                      <MenuItem key={element.id} value={parseInt(element.id, 10)}>
                        {element.name}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
            {errors.service_id && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.service_id.message}</FormHelperText>
            )}
          </FormControl>
          {!edit && (
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
