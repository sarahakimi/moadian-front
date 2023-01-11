// ** React Imports
import {useEffect, useMemo, useState} from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Close from 'mdi-material-ui/Close'
import {Controller, useForm} from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import {useAuth} from "../../hooks/useAuth";
import Loading from "../components/loading/loading";
import http from "../../services/http";
import Chip from "../../@core/components/mui/chip";

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
  roles: yup.array().required(' الزامی است').min(1, 'حداقل 1 دسترسی انتخاب کنید')
})

function TabAccount() {
  const {user} = useAuth()
  const [openAlert, setOpenAlert] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alertMsg, setAletMsg] = useState('')
  // eslint-disable-next-line camelcase
  const [hub_ids, sethub_ids] = useState([])
  const [roles, setRoles] = useState([])

  const [formData, setFormData] = useState(
    user
  )


  const {
    control,
    reset,
    formState: {errors}
  } = useForm({
    defaultValues: useMemo(() => formData, [setFormData]),
    mode: 'onChange',
    resolver: yupResolver(schema)
  })


  useEffect(() => {
    setLoading(true)
    http
      .get('user/me', {}, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(async response => {
        setLoading(false)
        if (!response.data === null) {
          reset(response.data)
          console.log("data", response.data)
        }

      })
      .catch(err => {
        setLoading(false)
        setOpenAlert(true)

        setAletMsg(err.response.data.message)
      })
    setLoading(true)
    http
      .get('hub/company/all', {}, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(async response => {
        setLoading(false)
        if (response.data != null) {
          sethub_ids(response.data)
        } else sethub_ids([])
        console.log(hub_ids)
      })
      .catch(() => {
        setLoading(false)
      })
    http
      .get('user/roles', {}, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(async response => {
        if (response.data != null) {
          setRoles(response.data)
        } else setRoles([])
        console.log(roles)
      })
      .catch(() => {
        setLoading(false)

      })
  }, [setFormData])


  return (
    <CardContent>
      <form>
        <Grid container spacing={6} sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "rgba(76,78,100,0.87)",
          },
          "& 	.MuiInputLabel-root.Mui-disabled": {
            WebkitTextFillColor: "rgba(76,78,100,0.87)",
          }
        }}>
          <Grid item xs={12} sm={6}>
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
                  disabled
                  InputLabelProps={{shrink: true}}
                />)}
              />
              {errors.natural_code && (
                <FormHelperText sx={{color: 'error.main'}}>{errors.natural_code.message}</FormHelperText>)}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
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
                  disabled
                  InputLabelProps={{shrink: true}}
                />)}
              />
              {errors.name && <FormHelperText sx={{color: 'error.main'}}>{errors.name.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
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
                  disabled
                  InputLabelProps={{shrink: true}}
                />)}
              />
              {errors.phone && <FormHelperText sx={{color: 'error.main'}}>{errors.phone.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
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
                  disabled
                  InputLabelProps={{shrink: true}}
                />)}
              />
              {errors.username && <FormHelperText sx={{color: 'error.main'}}>{errors.username.message}</FormHelperText>}
            </FormControl>
          </Grid>
          {formData.hub_id !== 0 &&
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{mb: 4}}>
                <Controller
                  name='hub_id'
                  control={control}
                  rules={{required: true}}
                  render={({field: {onChange, onBlur}}) => (<>
                    <InputLabel>هاب</InputLabel>
                    <Select
                      type='number'
                      onBlur={onBlur}
                      id='demo-multiple-name'
                      onChange={onChange}
                      input={<OutlinedInput label='Name'/>}
                      error={Boolean(errors.hub_id)}
                      disabled
                      InputLabelProps={{shrink: true}}
                    >
                      {/* eslint-disable-next-line camelcase */}
                      {hub_ids.map(hub_id => (// eslint-disable-next-line camelcase
                        <MenuItem key={hub_id.id} value={parseInt(hub_id.id, 10)}>
                          {/* eslint-disable-next-line camelcase */}
                          {hub_id.name}
                        </MenuItem>))}
                      <MenuItem key={0} value={0}>
                        بدون هاب(ادمین اصلی شرکت)
                      </MenuItem>
                    </Select>
                  </>)}
                />
                {errors.hub_id && <FormHelperText sx={{color: 'error.main'}}>{errors.hub_id.message}</FormHelperText>}
              </FormControl>
            </Grid>}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{mb: 4}}>
              <Controller
                name='roles'
                control={control}
                rules={{required: true}}
                render={({field: {onChange, onBlur}}) => (<>
                  <InputLabel id='demo-multiple-name-label' InputLabelProps={{shrink: true}}>دسترسی ها</InputLabel>
                  <Select
                    disabled
                    onBlur={onBlur}
                    labelId='demo-multiple-name-label'
                    id='demo-multiple-name'
                    multiple
                    defaultValue={user ? user.roles : []}
                    onChange={onChange}
                    error={Boolean(errors.roles)}
                    input={<OutlinedInput label='Name'/>}
                    renderValue={(selected) => (

                      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                        {selected.map((value) => (
                          <Chip key={value} label={roles[value - 1]?.name}/>
                        ))}
                      </Box>
                    )}
                  >
                    {roles.slice(1, roles.length - 1).map(role => (
                      <MenuItem key={role.id} value={role.id} disabled>
                        {role.name}
                      </MenuItem>))}
                  </Select>
                </>)}
              />
              {errors.roles && <FormHelperText sx={{color: 'error.main'}}>{errors.roles.message}</FormHelperText>}
            </FormControl>
          </Grid>
          {openAlert ? (
            <Grid item xs={12}>
              <Alert
                severity='warning'
                sx={{'& a': {fontWeight: 400}}}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit'/>
                  </IconButton>
                }
              >
                <AlertTitle sx={{mb: '.15rem'}}>{alertMsg}</AlertTitle>
              </Alert>
            </Grid>
          ) : null}

        </Grid>
      </form>
      <Loading open={loading}/>
    </CardContent>
  )
}

export default TabAccount
