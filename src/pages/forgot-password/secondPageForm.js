import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import {Controller, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import ChevronLeft from "mdi-material-ui/ChevronLeft";
import {styled} from "@mui/material/styles";
import * as yup from "yup";
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
  otp: yup
    .string()
    .required('کد ارسال شده الزامی است')
    .matches(/d*/, 'باید عدد باشد'),
  password: yup.string().required('کلمه عبور الزامی است').min(4, "حداقل باید 4 کاراکتر باشد"),
})

export default function SecondPageForm({setPage, firstFormData}) {

  const defaultValues = {
    otp: '',
    password: '',
    ...firstFormData
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

  const onSubmit = data => {
    toast.promise(
      http
        .post('auth/user/forget_password', data,)
        .then(() => {
          reset(defaultValues)
          window.location = `${window.location.origin}/login`
        })
        .catch(err => {
          setError("otp", {type: 'custom', message: err.response.data.message});
        }), {
        loading: 'در حال ثبت فرم',
        success: 'فرم ثبت شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است."
      })
  }


  return <>
    <Box sx={{mb: 6}}>
      <TypographyStyled variant='h5'>کد بازیابی ارسال شد </TypographyStyled>
      <Typography variant='body2'>
        بازیابی کلمه عبور
      </Typography>
    </Box>
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth sx={{mb: 4}}>
        <Controller
          name="otp"
          control={control}
          render={({field: {value, onChange, onBlur}}) => (
            <TextField
              autoFocus
              label='کد بازیابی'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.otp)}
              dir='ltr'
            />
          )}
        />
        {errors.otp && <FormHelperText sx={{color: 'error.main'}}>{errors.otp.message}</FormHelperText>}
      </FormControl>
      <FormControl fullWidth sx={{mb: 4}}>
        <Controller
          name="password"
          control={control}
          render={({field: {value, onChange, onBlur}}) => (
            <TextField
              autoFocus
              label='کلمه عبور'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.password)}
              dir='ltr'
            />
          )}
        />
        {errors.password && <FormHelperText sx={{color: 'error.main'}}>{errors.password.message}</FormHelperText>}
      </FormControl>

      <Button fullWidth size='large' type='submit' variant='contained' sx={{mb: 5.25}}>
        ثبت
      </Button>
      <Button variant='link' onClick={() => setPage(1)}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                color: 'primary.main',
                justifyContent: 'center',
                backgroundColor: 'transparent'
              }}>
        بازگشت به صفحه اول
        <ChevronLeft sx={{mr: 1.5, fontSize: '2rem'}}/>
      </Button>


    </form>
  </>
}
