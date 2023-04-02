import {useState} from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import toast from "react-hot-toast";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import yupschema from "configs/yupSchema";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import * as yup from "yup";
import {changePassword, sendSms} from "./requests";


const schema = yup.object().shape({
  otp: yupschema.otp,
  password: yupschema.password
})

function TabSecurity() {
  const [sentSms, setSentSms] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const emptyForm = {
    otp: null,
    password: null
  }

  const defaultValues = emptyForm


  const {
    control,
    setError,
    handleSubmit,
    formState: {errors}
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const sendOtp = () => {
    toast.promise(
      sendSms()
        .then(() => {
          setSentSms(true)
        })
      , {
        loading: 'در حال ارسال کد',
        success: 'ارسال شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است."
      })
  }

  const onSubmit = data => {

    toast.promise(
      changePassword(data)
        .then(() => {

          setSentSms(false)
        }), {
        loading: 'در حال تغییر کلمه عبور',
        success: 'کلمه عبور تغییر کرد',
        error: (err) => {

          setError("otp", {type: 'custom', message: err?.response?.data?.message});

          return err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است."
        }
      })
  }

return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} sx={{mt: 5, mb: [0, 6]}}>
            <Grid container spacing={6}>
              {sentSms ? <>
                  <Grid item xs={12}>
                    <FormControl fullWidth sx={{mb: 4}}>
                      <Controller
                        name='otp'
                        control={control}
                        render={({field: {value, onChange, onBlur}}) => (
                          <TextField
                            autoFocus
                            label='کد ارسال شده'
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            error={Boolean(errors.otp)}
                            inputProps={{maxLength: 5}}
                          />
                        )}
                      />
                      {errors.otp && (
                        <FormHelperText sx={{color: 'error.main'}}>{errors.otp.message}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
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
                                  onClick={() => setShowPassword(!showPassword)}
                                >
                                  {showPassword ? <EyeOutline/> : <EyeOffOutline/>}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        )}
                      />
                    </FormControl>
                  </Grid>
                  <Button variant='contained' type='submit' fullWidth>
                    ذخیره تغییرات
                  </Button>
                </>

                : <Grid item xs={12}>
                  <Button color="info" fullWidth
                          variant="contained"
                          onClick={sendOtp}>{sentSms ? "ارسال مجدد کد تایید" : "ارسال کد تایید"}</Button>
                </Grid>}
            </Grid>
          </Grid>

          <Grid item sm={6} xs={12} sx={{display: 'flex', mt: 2.5, alignItems: 'flex-end', justifyContent: 'center'}}>
            <img alt='avatar' src='/images/pages/account-settings-security-illustration.png'/>
          </Grid>
        </Grid>


      </CardContent>
    </form>
  )
}

export default TabSecurity
