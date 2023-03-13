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
import {Autocomplete} from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import {ostan, shahr} from "iran-cities-json";
import toast from "react-hot-toast";
import {editUser, registerUser} from "./requests";

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
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  area_code: yup
    .string()
    .required(' پیش شماره تلفن الزامی است')
    .min(3, 'باید 3 رقم باشد')
    .max(3, 'باید سه رقم باشد')
    .matches(/d*/, '  باید عدد باشد'),
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
  other_information: yup
    .string(),
  texes: yup.boolean().required('فیلد الزامی'),
  off_percent_status: yup.boolean().required('فیلد الزامی'),
  off_percent: yup.number().min(0, " باید مثبت باشد").max(100, "حداکثر باید 100 باشد").typeError("باید عدد باشد"),
  username: yup.string().required('نام کاربری الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  password: yup.string().required('رمز عبور الزامی است').min(4, 'حداقل باید ع کاراکتر باشد'),
  main_street: yup
    .string()
    .required('خیابان اصلی الزامی است'),
  side_street: yup
    .string()
    .required('خیابان فرعی الزامی است'),
  floor: yup
    .string()
    .required('طبقه الزامی است'),
  home_unit: yup
    .string()
    .required('واحد الزامی است'),
  plaque: yup
    .string()
    .required('پلاک الزامی است'),
  alley: yup
    .string()
    .required('کوچه الزامی است'),
  company: yup.string()
})

function SidebarAddCourier({open, toggle, setChange, user, edit, showUser}) {
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
    other_information: '',
    texes: false,
    off_percent_status: false,
    off_percent: 0,
    username: '',
    password: '',
    area_code: '',
    main_street: '',
    side_street: '',
    floor: '',
    home_unit: '',
    plaque: '',
    alley: ''

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
    other_information: user.other_information,
    texes: user.texes,
    off_percent_status: user.off_percent_status,
    off_percent: user.off_percent,
    username: user.username,
    password: '******',
    area_code: user.area_code,
    main_street: user.main_street,
    side_street: user.side_street,
    floor: user.floor,
    home_unit: user.home_unit,
    plaque: user.plaque,
    alley: user.alley,
    company: user.company

  } : emptyForm


  const {
    reset, control, handleSubmit, formState: {errors}
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
    if (edit) {
      toast.promise(
        editUser(user.id, {address: `${data.main_street}- خیابان ${data.side_street} -کوچه ${data.alley} - پلاک ${data.plaque} - طبقه ${data.floor} - واحد ${data.home_unit}`, ...data})
          .then(() => {
            setChange(true)
            handleClose()
          })
        , {
          loading: 'در حال ویرایش کاربر',
          success: 'کاربر ویرایش شد',
          error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
        })
      // eslint-disable-next-line no-param-reassign
      delete data.password

    } else {
      toast.promise(
        registerUser({address: `${data.main_street}- خیابان ${data.side_street} -کوچه ${data.alley} - پلاک ${data.plaque} - طبقه ${data.floor} - واحد ${data.home_unit}`, ...data})
          .then(() => {
            setChange(true)
            handleClose()
          })
        , {
          loading: 'در حال ایجاد کاربر',
          success: 'کاربر ایجاد شد',
          error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
        })
    }
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
      <Typography variant='h6'>اطلاعات مشتری</Typography>
      <Close fontSize='small' onClick={handleClose} sx={{cursor: 'pointer'}}/>
    </Header>
    <Box sx={{
      p: 5, "& .MuiInputBase-input.Mui-disabled": {
        WebkitTextFillColor: "rgba(76,78,100,0.87)",
      },
      "& 	.MuiInputLabel-root.Mui-disabled": {
        WebkitTextFillColor: "rgba(76,78,100,0.87)",
      },
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            fullWidth
            name='natural_code'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

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
            name='area_code'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='پیش شماره(کد سه رقمی استان)'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.area_code)}
              inputProps={{maxLength: 3}}
              dir='ltr'
              disabled={showUser}
            />)}
          />
          {errors.area_code && <FormHelperText sx={{color: 'error.main'}}>{errors.area_code.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='tel_number'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='(بدون پیش شماره) شماره تلفن'
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

              label='کدپستی'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.postal_code)}
              inputProps={{maxLength: 10}}
              dir='ltr'
              disabled={showUser}
            />)}
          />
          {errors.postal_code &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.postal_code.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='company'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='نام شرکت'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.company)}
              disabled={showUser}
            />)}
          />
          {errors.company &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.company.message}</FormHelperText>}
        </FormControl>
        <Typography fullWidth sx={{mb: 2}}>آدرس</Typography>
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
                disableClearable
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
                disableClearable
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
            name='main_street'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='خیابان اصلی'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.main_street)}
              disabled={showUser}
            />)}
          />
          {errors.main_street &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.main_street.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='side_street'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='خیابان فرعی'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.side_street)}
              disabled={showUser}
            />)}
          />
          {errors.side_street &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.side_street.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='alley'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='کوچه'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.alley)}
              disabled={showUser}
            />)}
          />
          {errors.alley &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.alley.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='plaque'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='پلاک'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.plaque)}
              disabled={showUser}
            />)}
          />
          {errors.plaque &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.plaque.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='floor'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='طبقه'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.floor)}
              disabled={showUser}
              dir="ltr"
            />)}
          />
          {errors.floor &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.floor.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='home_unit'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

              label='واحد'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.home_unit)}
              disabled={showUser}
              dir="ltr"
            />)}
          />
          {errors.home_unit &&
            <FormHelperText sx={{color: 'error.main'}}>{errors.home_unit.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{mb: 4}}>
          <Controller
            name='other_information'
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange, onBlur}}) => (<TextField

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
  </Drawer>)
}

export default SidebarAddCourier
