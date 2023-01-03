import {useEffect, useState} from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {Controller, useForm} from 'react-hook-form'
import Close from 'mdi-material-ui/Close'
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import http from 'services/http'
import DialogContentText from '@mui/material/DialogContentText'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const Header = styled(Box)(({theme}) => ({
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
  vehicle: yup.string().required(' الزامی است').min(3, 'به درستی وارد نمایید')
})

function SidebarAddCourier({open, toggle, setChange, user, edit, showUser, setLoading}) {
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  // eslint-disable-next-line camelcase
  const [hub_ids, sethub_ids] = useState([])
  useEffect(() => {
    setLoading(true)
    console.log('user', user)
    http
      .get('hub/all')
      .then(async response => {
        setLoading(false)
        if (response.data != null) {
          sethub_ids(response.data)
        } else sethub_ids([])
        console.log(hub_ids)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })

  }, [])

  const emptyForm = {
    natural_code: '',
    name: '',
    phone: '',
    hub_id: 0,
    username: '',
    password: '',
    vehicle: ''
  }

  const defaultValues = user
    ? {
      natural_code: user.natural_code,
      name: user.name,
      phone: user.phone,
      hub_id: user.hub_id,
      username: user.username,
      password: '********',
      vehicle: user.vehicle
    }
    : emptyForm


  const {
    reset,
    control,
    handleSubmit,
    setError,
    formState: {errors}
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    setLoading(true)
    if (edit) {
      http
        .put(`user/admin/${user.id}`, data, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          reset(emptyForm)
          setSuccess(true)
          setLoading(false)
          toggle()
          setChange(true)
        })
        .catch(err => {
          setLoading(false)
          setError('natural_code', {type: 'custom', message: err.response.data.message})
        })
    } else {
      setLoading(true)
      http
        .post('user/admin/courier/register', data, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          reset(emptyForm)
          setSuccess(true)
          setLoading(false)
          toggle()
          setChange(true)
        })
        .catch(err => {
          setError('natural_code', {type: 'custom', message: err.response.data.message})
          setLoading(false)
        })
    }
  }

  const handleClose = () => {
    toggle()
    reset(defaultValues)
  }

  const handleDialogClose = () => {
    setSuccess(false)
    setChange(true)
  }

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{keepMounted: true}}
      sx={{'& .MuiDrawer-paper': {width: {xs: 300, sm: 400}}}}
    >
      <Header>
        <Typography variant='h6'>اطلاعات راننده</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{cursor: 'pointer'}}/>
      </Header>
      <Box sx={{p: 5}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              fullWidth
              name='natural_code'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  autoFocus
                  label='کدملی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.natural_code)}
                  inputProps={{maxLength: 10}}
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.natural_code && (
              <FormHelperText sx={{color: 'error.main'}}>{errors.natural_code.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='name'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  autoFocus
                  label='نام و نام خانوادگی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.name && <FormHelperText sx={{color: 'error.main'}}>{errors.name.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='phone'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  autoFocus
                  label='موبایل'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.phone)}
                  inputProps={{maxLength: 11}}
                  placeholder='09*********'
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.phone && <FormHelperText sx={{color: 'error.main'}}>{errors.phone.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='vehicle'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  autoFocus
                  label='وسیله نقلیه'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.vehicle)}
                  disabled={showUser}
                />
              )}
            />
            {errors.vehicle && <FormHelperText sx={{color: 'error.main'}}>{errors.vehicle.message}</FormHelperText>}
          </FormControl>
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
                  disabled={showUser}
                />
              )}
            />
            {errors.username && <FormHelperText sx={{color: 'error.main'}}>{errors.username.message}</FormHelperText>}
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
                  disabled={showUser}
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
                        onClick={() => !showUser && setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOutline/> : <EyeOffOutline/>}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='hub_id'
              control={control}
              rules={{required: true}}
              render={({field: {onChange, onBlur}}) => (
                <>
                  <InputLabel>هاب</InputLabel>
                  <Select
                    type='number'
                    onBlur={onBlur}
                    id='demo-multiple-name'
                    onChange={onChange}
                    input={<OutlinedInput label='Name'/>}
                    error={Boolean(errors.hub_id)}
                    disabled={showUser}
                    defaultValue={user ? user.hub_id : 0}
                  >
                    {/* eslint-disable-next-line camelcase */}
                    {hub_ids.map(hub_id => (
                      // eslint-disable-next-line camelcase
                      <MenuItem key={hub_id.id} value={parseInt(hub_id.id, 10)}>
                        {/* eslint-disable-next-line camelcase */}
                        {hub_id.name}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
            {errors.hub_id && <FormHelperText sx={{color: 'error.main'}}>{errors.hub_id.message}</FormHelperText>}
          </FormControl>


          <Box sx={{display: 'flex', alignItems: 'center'}}>
            {!showUser && (
              <Button size='large' type='submit' variant='contained' sx={{mr: 3}}>
                ذخیره
              </Button>
            )}
          </Box>
        </form>
      </Box>
      <Dialog open={success} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>ایجاد راننده</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>راننده مورد نظر ایجاد شد</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            متوجه شدم
          </Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  )
}

export default SidebarAddCourier
