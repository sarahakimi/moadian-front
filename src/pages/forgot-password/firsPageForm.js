import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import {Controller, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import {OutlinedInput} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import ChevronLeft from "mdi-material-ui/ChevronLeft";
import {styled} from "@mui/material/styles";
import * as yup from "yup";
import {useEffect, useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import toast from "react-hot-toast";
import http from "../../services/http";


const TypographyStyled = styled(Typography)(({theme}) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: {marginTop: theme.spacing(8)}
}))


const schema = yup.object().shape({
  phone: yup
    .string()
    .required('موبایل الزامی است')
    .matches(/d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  hub_id: yup.number(),
  company_id: yup.number()
})

export default function FirstPageForm({setPage, setFirstFormData}) {
  // eslint-disable-next-line camelcase
  const [hub_id, setHub_id] = useState([])
  const [company, setCompanies] = useState([])

  const defaultValues = {
    phone: '',
    company_id: 0,
    hub_id: 0
  }

  const {
    control,
    setError,
    reset,
    handleSubmit,
    formState: {errors}
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  useEffect(() => {
    http
      .get('hub/all')
      .then(async response => {
        if (response.data != null) {
          setHub_id(response.data)
        } else setHub_id([])
      })
      .catch(err => {
        setError("hub_id", {type: 'custom', message: err.response.data.message});
        toast.error("خطا در دریافت اطلاعات.لطفا مجدد تلاش کنید")
      })
    http
      .get('company/all')
      .then(async response => {
        if (response.data != null) {
          setCompanies(response.data)
        } else setCompanies([])
      })
      .catch(err => {
        setError("comapny_id", {type: 'custom', message: err.response.data.message});
        toast.error("خطا در دریافت اطلاعات.لطفا مجدد تلاش کنید")
      })
  }, [])

  const onSubmit = data => {
    toast.promise(
      http
        .post('auth/user/validate_phone', data, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          reset(defaultValues)
          setFirstFormData(data)
          setPage(2)
        })
        .catch(err => {
          console.log(err)
          setError("phone", {type: 'custom', message: err.response.data.message});
        }), {
        loading: 'در حال ثبت فرم',
        success: 'فرم ثبت شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است."
      })
  }


  return <>
    <Box sx={{mb: 6}}>
      <TypographyStyled variant='h5'>کلمه عبور را فراموش کردید ؟ 🔒</TypographyStyled>
      <Typography variant='body2'>
        بازیابی کلمه عبور
      </Typography>
    </Box>
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{mb: 4}}>
        <Controller
          name='phone'
          control={control}
          rules={{required: true}}
          render={({field: {value, onChange, onBlur}}) => (
            <TextField

              label='موبایل'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.phone)}
              inputProps={{maxLength: 11}}
              placeholder='09*********'
              dir='ltr'
            />
          )}
        />
        {errors.phone && <FormHelperText sx={{color: 'error.main'}}>{errors.phone.message}</FormHelperText>}
      </FormControl>
      <FormControl fullWidth sx={{mb: 4}}>
        <Controller
          name="company_id"
          control={control}
          render={({field: {onChange, onBlur}}) => (
            <>
              <InputLabel>شرکت</InputLabel>
              <Select
                type="number"
                onBlur={onBlur}
                onChange={onChange}
                input={<OutlinedInput/>}
                error={Boolean(errors.comapny_id)}

              >
                {company.map(company => (
                  <MenuItem key={company.id} value={parseInt(company.id, 10)}>
                    {company.name}
                  </MenuItem>
                ))}
              </Select>
            </>
          )}
        />
        {errors.comapny_id && <FormHelperText sx={{color: 'error.main'}}>{errors.comapny_id.message}</FormHelperText>}
      </FormControl>
      <FormControl fullWidth sx={{mb: 4}}>
        <Controller
          name='hub_id'
          control={control}
          render={({field: {onChange, onBlur}}) => (
            <>
              <InputLabel>هاب</InputLabel>
              <Select
                type="number"
                onBlur={onBlur}
                onChange={onChange}
                input={<OutlinedInput/>}
                error={Boolean(errors.hub_id)}

              >
                {/* eslint-disable-next-line camelcase */}
                {hub_id.map(hub_id => (
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

      <Button fullWidth size='large' type='submit' variant='contained' sx={{mb: 5.25}}>
        ارسال کد
      </Button>
      <Typography sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link passHref href='/login'>
          <Typography
            component={MuiLink}
            sx={{display: 'flex', alignItems: 'center', color: 'primary.main', justifyContent: 'center'}}
          >
            <span>بازگشت به ورود</span>
            <ChevronLeft sx={{mr: 1.5, fontSize: '2rem'}}/>
          </Typography>
        </Link>
      </Typography>

    </form>
  </>
}
