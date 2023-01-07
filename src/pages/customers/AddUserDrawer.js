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
import {Autocomplete, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import DialogContentText from '@mui/material/DialogContentText'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import {ostan, shahr} from "iran-cities-json";
import http from "../../services/http";

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
  tel_number: yup
    .string()
    .required('تلفن الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد'),
  postal_code: yup
    .string()
    .required('کدپستی الزامی است')
    .matches(/d*/, ' کدپستی باید عدد باشد'),
  provence: yup
    .string()
    .required('استان الزامی است'),
  city: yup
    .string()
    .required('شهر الزامی است'),
  address: yup
    .string()
    .required('ادرس الزامی است').min(10, "ادرس را کامل وارد کنید"),
  other_information: yup
    .string(),
  texes: yup.boolean().required('فیلد الزامی'),
  off_percent_status: yup.boolean().required('فیلد الزامی'),
  off_percent: yup.number().min(0.01, " باید مثبت باشد").max(100, "حداکثر باید 100 باشد").typeError("باید عدد باشد"),
  username: yup.string().required('نام کاربری الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  password: yup.string().required('رمز عبور الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
})

function SidebarAddCourier({open, toggle, setChange, user, edit, showUser, setLoading}) {
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  // eslint-disable-next-line camelcase
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')
  const [hasDiscount, setHasDiscount] = useState(false)
  useEffect(() => {
    if (edit) {
      setHasDiscount(user.off_percent_status)
    }
  }, [hasDiscount])

  const emptyForm = {
    natural_code: "",
    name: '',
    phone: '',
    tel_number: '',
    postal_code: '',
    provence: '',
    city: '',
    address: '',
    other_information: '',
    texes: false,
    off_percent_status: false,
    off_percent: 0,
    username: '',
    password: '',
  }

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }


  const defaultValues = user ? {
    natural_code: user.natural_code,
    name: user.name,
    phone: user.phone,
    tel_number: user.tel_number,
    postal_code: user.postal_code,
    provence: user.provence,
    city: user.city,
    address: user.address,
    other_information: user.other_information,
    texes: user.texes,
    off_percent_status: user.off_percent_status,
    off_percent: user.off_percent,
    username: user.username,
    password: '******',
  } : emptyForm


  const {
    reset, control, handleSubmit, setError, formState: {errors}
  } = useForm({
    defaultValues, mode: 'onChange', resolver: yupResolver(schema)
  })

  const handleClose = () => {
    toggle()
    reset(emptyForm)
  }

  const onDiscount = (ev, onChange) => {
    onChange(ev)
    setHasDiscount(ev.target.value)
  }

  const onSubmit = data => {
    setLoading(true)
    if (edit) {
      // eslint-disable-next-line no-param-reassign
      delete data.password;
      http
        .put(`customer/admin/${user.id}`, data, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          setSuccess(true)
          setChange(true)
          setLoading(false)
          handleClose()
        })
        .catch(err => {
          setLoading(false)
          console.log(err)
          setError('natural_code', {type: 'custom', message: err.response.data?.message})
        })
    } else {
      http
        .post('customer/admin/3/register', data, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          setSuccess(true)
          setChange(true)
          setLoading(false)
          handleClose()
        })
        .catch(err => {
          setLoading(false)
          setError('natural_code', {type: 'custom', message: err.response.data?.message})
        })
    }
  }


  const handleDialogClose = () => {
    setSuccess(false)
    setChange(true)
  }

  return (<Drawer
    open={open}
    anchor='left'
    variant='temporary'
    onClose={handleClose}
    ModalProps={{keepMounted: true}}
    sx={{'& .MuiDrawer-paper': {width: {xs: 300, sm: 400}}}}
  >
    <Header>
      <Typography variant='h6'>اطلاعات کاربر</Typography>
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
            render={({field: {value, onChange, onBlur}}) => (<TextField
              autoFocus
              label='کدملی'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.natural_code)}
              inputProps={{maxLength: 10}}
              dir='ltr'
              disabled={showUser}
            />)}
          />
          {errors.natural_code && (
            <FormHelperText sx={{color: 'error.main'}}>{errors.natural_code.message}</FormHelperText>)}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='name'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField
              autoFocus
              label='نام و نام خانوادگی'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.name)}
              disabled={showUser}
            />)}
          />
          {errors.name && <FormHelperText sx={{color: 'error.main'}}>{errors.name.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='phone'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField
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
            />)}
          />
          {errors.phone && <FormHelperText sx={{color: 'error.main'}}>{errors.phone.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='tel_number'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField
              autoFocus
              label='شماره تلفن'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.tel_number)}
              inputProps={{maxLength: 12}}
              dir='ltr'
              disabled={showUser}
            />)}
          />
          {errors.tel_number && <FormHelperText sx={{color: 'error.main'}}>{errors.tel_number.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='postal_code'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField
              autoFocus
              label='کدپستی'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.postal_code)}
              inputProps={{maxLength: 20}}
              dir='ltr'
              disabled={showUser}
            />)}
          />
          {errors.postal_code &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.postal_code.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            fullWidth
            name='provence'
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value, onBlur}}) => (
              <Autocomplete
                disabled={showUser}
                onBlur={onBlur}
                select
                options={ostan.map(element => element.name)}
                onChange={(event, values, value) => onChangeSenderOstan(event, onChange, values, value)}
                value={value}
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
            <FormHelperText sx={{color: 'error.main'}}>{errors.provence.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='city'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (
              <Autocomplete
                disabled={showUser}
                onBlur={onBlur}
                select
                options={shahr
                  .filter(element => element.ostan === selectedSenderOstan)
                  .map(element => element.name)}
                onChange={(event, values) => onChange(values)}
                value={value}
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
          {errors.city && (
            <FormHelperText sx={{color: 'error.main'}}>{errors.city.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='address'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField
              autoFocus
              label='ادرس'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.address)}
              disabled={showUser}
              multiline
              rows={2}
            />)}
          />
          {errors.address && <FormHelperText sx={{color: 'error.main'}}>{errors.address.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='other_information'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField
              autoFocus
              label='سایر اطلاعات'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.other_information)}
              disabled={showUser}
              multiline
              rows={2}
            />)}
          />
          {errors.other_information &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.other_information.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            fullWidth
            name='texes'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (
              <>
                <InputLabel>شامل مالیات</InputLabel>
                <Select
                  autoFocus
                  label='شامل مالیات'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.texes)}
                  disabled={showUser}
                >
                  <MenuItem value>می باشد</MenuItem>
                  <MenuItem value={false}>نمی باشد</MenuItem>
                </Select>
              </>
            )}
          />
          {errors.texes && (
            <FormHelperText sx={{color: 'error.main'}}>{errors.texes.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            fullWidth
            name='off_percent_status'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (
              <>
                <InputLabel>شامل تخفیف</InputLabel>
                <Select
                  disabled={showUser}
                  autoFocus
                  label='شامل تخفیف'
                  value={value}
                  onBlur={onBlur}
                  onChange={(ev) => onDiscount(ev, onChange)}
                  error={Boolean(errors.off_percent_status)}
                >
                  <MenuItem value>می باشد</MenuItem>
                  <MenuItem value={false}>نمی باشد</MenuItem>
                </Select>
              </>
            )}
          />
          {errors.off_percent_status && (
            <FormHelperText sx={{color: 'error.main'}}>{errors.off_percent_status.message}</FormHelperText>
          )}
        </FormControl>
        {(hasDiscount || showUser || edit) && <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='off_percent'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField
              autoFocus
              label='درصد تخفیف'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.postal_code)}
              type="number"
              InputProps={{inputProps: {min: 0, max: 100}}}
              dir='ltr'
              disabled={showUser}

              defaultValue={0}
            />)}
          />
          {errors.off_percent &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.off_percent.message}</FormHelperText>}
        </FormControl>}
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='username'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField
              autoFocus
              label='نام کاربری'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.username)}
              disabled={showUser}
            />)}
          />
          {errors.username && <FormHelperText sx={{color: 'error.main'}}>{errors.username.message}</FormHelperText>}
        </FormControl>
        {!edit && <FormControl fullWidth sx={{mb: 4}}>
          <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
            کلمه عبور
          </InputLabel>
          <Controller
            name='password'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<OutlinedInput
              disabled={showUser}
              value={value}
              onBlur={onBlur}
              label='Password'
              onChange={onChange}
              id='auth-login-v2-password'
              error={Boolean(errors.password)}
              type={showPassword ? 'text' : 'password'}
              endAdornment={<InputAdornment position='end'>
                <IconButton
                  edge='end'
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => !showUser && setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOutline/> : <EyeOffOutline/>}
                </IconButton>
              </InputAdornment>}
            />)}
          />
          {errors.password && <FormHelperText sx={{color: 'error.main'}}>{errors.password.message}</FormHelperText>}
        </FormControl>}
        {!showUser && (<Button size='large' type='submit' variant='contained' sx={{mr: 3}} fullWidth>
          ذخیره
        </Button>)}

      </form>
    </Box>
    <Dialog open={success} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>ایجاد کاربر</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>کاربر مورد نظر ایجاد شد</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} autoFocus>
          متوجه شدم
        </Button>
      </DialogActions>
    </Dialog>
  </Drawer>)
}

export default SidebarAddCourier
