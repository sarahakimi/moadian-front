// ** React Imports
import {useState} from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import {ostan, shahr} from 'iran-cities-json'
import * as yup from 'yup'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {Autocomplete, Card, CardContent, CardHeader, FormLabel, Grid, MenuItem, Select} from '@mui/material'

const schema = yup.object().shape({
  senderCodeMelli: yup.string()
    .required('کدملی فرستنده الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  senderName: yup.string().required('نام و نام خانوادگی فرستنده الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  senderMobile: yup.string()
    .required('موبایل فرستنده الزامی است')
    .matches(/d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  senderPhone: yup.string()
    .required('تلفن فرستنده الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد')
    .min(3, 'تلفن باید حداقل 3 رقم باشد'),
  senderPhonePrefix: yup.string()
    .required('پیش شماره الزامی است')
    .matches(/d*/, ' پیش شماره باید عدد باشد')
    .test('len', 'پیش شماره باید 3 رقم باشد', val => val.toString().length === 3),
  senderCounty: yup.string().required('استان الزامی است').typeError('الزامی است'),
  senderCity: yup.string().required('شهر الزامی است'),
  senderCodePosti: yup.string()
    .required('کدپستی فرستنده الزامی است')
    .matches(/d*/, 'کدپستی باید عدد باشد')
    .test('len', 'کدپستی باید 10 رقم باشد', val => val.toString().length === 10),
  senderMainRoard: yup.string().required('خیابان اصلی الزامی است'),
  senderSubRoad: yup.string().required('خیابان فرعی الزامی است'),
  senderAlley: yup.string().required('کوچه الزامی است'),
  senderPlaque: yup.number().required('پلاک الزامی است').typeError('باید عدد باشد'),
  senderFloor: yup.number().required('طبقه الزامی است').typeError('باید عدد باشد'),
  senderUnit: yup.number().required('واحد الزامی است').typeError('باید عدد باشد'),
  recieverCodeMelli: yup.string()
    .required('کدملی گیرنده الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  recieverName: yup.string().required('نام و نام خانوادگی گیرنده الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  recieverMobile: yup.string()
    .required('موبایل گیرنده الزامی است')
    .matches(/d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  recieverPhone: yup.string()
    .required('تلفن گیرنده الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد')
    .min(3, 'تلفن باید حداقل 3 رقم باشد'),
  recieverPhonePrefix: yup.string()
    .required('پیش شماره الزامی است')
    .matches(/d*/, ' پیش شماره باید عدد باشد')
    .test('len', 'پیش شماره باید 3 رقم باشد', val => val.toString().length === 3),
  recieverCounty: yup.string().required('استان الزامی است').typeError('الزامی است'),
  recieverCity: yup.string().required('شهر الزامی است'),
  recieverCodePosti: yup.string()
    .required('کدپستی گیرنده الزامی است')
    .matches(/d*/, 'کدپستی باید عدد باشد')
    .test('len', 'کدپستی باید 10 رقم باشد', val => val.toString().length === 10),
  recieverMainRoard: yup.string().required('خیابان اصلی الزامی است'),
  recieverSubRoad: yup.string().required('خیابان فرعی الزامی است'),
  recieverAlley: yup.string().required('کوچه الزامی است'),
  recieverPlaque: yup.number().required('پلاک الزامی است').typeError('باید عدد باشد'),
  recieverFloor: yup.number().required('طبقه الزامی است').typeError('باید عدد باشد'),
  recieverUnit: yup.number().required('واحد الزامی است').typeError('باید عدد باشد'),
  weight: yup.number().required('وزن الزامی است').typeError('وزن باید عدد باشد').min(1, 'حداقل باید 1 گرم باشد'),
  length: yup.number().required('طول الزامی است').typeError('طول باید عدد باشد').min(1, 'حداقل باید 1 سانتی متر باشد'),
  width: yup.number().required('عرض الزامی است').typeError('عرض باید عدد باشد').min(1, 'حداقل باید 1 سانتی متر باشد'),
  height: yup.number()
    .required('ارتفاع الزامی است')
    .typeError('ارتفاع باید عدد باشد')
    .min(1, 'حداقل باید 1 سانتی متر باشد'),
  money: yup.number()
    .required('ارزش کالا الزامی است')
    .typeError('ارزش کالا باید عدد باشد')
    .min(1, 'حداقل باید 1 تومان باشد'),
  car: yup.string().required('وسیله حمل کننده الزامی است'),
  needsSpecialCarry: yup.boolean().required('الزامی است'),
  SpecialBox: yup.boolean().required('الزامی است'),
  paymentMethod: yup.string().required('نحوه پرداخت الزامی است'),
  needsEvacuate: yup.boolean().required('الزامی است'),
  needsLoading: yup.boolean().required('الزامی است'),
  needsMovement: yup.boolean().required('الزامی است')
})

const defaultValues = {
  senderCodeMelli: '',
  senderName: '',
  senderMobile: '',
  senderPhone: '',
  senderPhonePrefix: '',
  senderCounty: '',
  senderCodePosti: '',
  recieverCodeMelli: '',
  recieverName: '',
  recieverMobile: '',
  recieverPhone: '',
  recieverPhonePrefix: '',
  recieverCounty: '',
  recieverCodePosti: ''
}
const cars = ['موتور', 'سواری', 'وانت', 'کامیون', 'کامیونت']
const paymentMethod = ['پیش کرایه', 'پس کرایه']

function ACLPage() {
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')
  const [selectedRecieverOstan, setSelectedRecieverOstan] = useState('')

  // const DefaultLocation = {lat: 35.69439, lng: 51.42151}
  // const [defaultLocation, setDefaultLocation] = useState(DefaultLocation)
  // const DefaultZoom = 10

  // const [location, setLocation] = useState(defaultLocation)
  // const [zoom, setZoom] = useState(DefaultZoom)
  //
  // function handleChangeZoom(newZoom) {
  //   setZoom(newZoom)
  // }

  // function handleResetLocation() {
  //   setDefaultLocation({...DefaultLocation})
  //   setZoom(DefaultZoom)
  // }

  // function handleChangeLocation(lat, lng) {
  //   setLocation({lat, lng})
  // }

  // ** Vars
  // const {skin} = settings

  const {
    control,

    // setError,
    handleSubmit,
    formState: {errors}
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  function onChangeSenderOstan(event, onChange, values) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  function onChangeRecieverOstan(event, onChange, values) {
    onChange(values)
    setSelectedRecieverOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  const onSubmit = data => {
    // const { username, password, codemelli } = data
    // auth.login({ username, password }, err => {
    //   setError('username', {
    //     type: 'manual',
    //     message: err.response?.data?.message
    //   })
    // })
    console.log(data)
  }

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{mb: 5}}>
        <CardHeader title='فرستنده'/>{' '}
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='senderCodeMelli'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='کدملی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCodeMelli)}
                      inputProps={{maxLength: 10}}
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderCodeMelli && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderCodeMelli.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderName'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='نام و نام خانوادگی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderName)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.senderName && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderName.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderMobile'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='موبایل'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderMobile)}
                      inputProps={{maxLength: 11}}
                      placeholder='09*********'
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderMobile && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderMobile.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={8} sm={8} md={4} lg={2} xl={2}>
              <FormControl fullWidth>
                <Controller
                  name='senderPhone'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='تلفن'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderPhone)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderPhone && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderPhone.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='senderPhonePrefix'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='پیش شماره'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderPhone)}
                      dir='ltr'
                      placeholder='021'
                    />
                  )}
                />
                {errors.senderPhonePrefix && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderPhonePrefix.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='senderCounty'
                  control={control}
                  rules={{required: true}}
                  render={({field: {onChange, value, onBlur}}) => (
                    <Autocomplete
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
                          error={Boolean(errors.senderCounty)}
                        />
                      )}
                    />
                  )}
                />
                {errors.senderCounty && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderCounty.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderCity'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <Autocomplete
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
                          error={Boolean(errors.senderCity)}
                        />
                      )}
                    />
                  )}
                />
                {errors.senderCity && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderCity.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderCodePosti'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='کدپستی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCodePosti)}
                      inputProps={{maxLength: 10}}
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderCodePosti && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderCodePosti.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant='p' component='p'>
                آدرس
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderMainRoard'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='خیابان اصلی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderMainRoard)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.senderMainRoard && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderMainRoard.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderSubRoad'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='خیابان فرعی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderSubRoad)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.senderSubRoad && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderSubRoad.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='senderAlley'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='کوچه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderAlley)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.senderAlley && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderAlley.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='senderPlaque'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='پلاک'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderPlaque)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.senderPlaque && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderPlaque.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='senderFloor'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='طبقه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderFloor)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.senderFloor && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderFloor.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='senderUnit'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='واحد'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderUnit)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.senderUnit && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderUnit.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormLabel variant='p' component='p'>
                لوکیشن
              </FormLabel>
              {/* <NeshanMap
                options={{
                  key: 'web.293aa15bfefa46b6886f2e250d695edd',
                  maptype: 'dreamy',
                  poi: true,
                  traffic: false,
                  center: [35.699739, 51.338097],
                  zoom: 13
                }}
                onInit={(L, myMap) => {
                  let marker = L.marker([35.699739, 51.338097]).addTo(myMap).bindPopup('I am a popup.')

                  myMap.on('click', function (e) {
                    marker.setLatLng(e.latlng)
                  })

                  L.circle([35.699739, 51.348097], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                  }).addTo(myMap)
                }}
              /> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mb: 5}}>
        <CardHeader title='گیرنده'/>{' '}
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='recieverCodeMelli'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='کدملی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverCodeMelli)}
                      inputProps={{maxLength: 10}}
                      dir='ltr'
                    />
                  )}
                />
                {errors.recieverCodeMelli && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverCodeMelli.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverName'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='نام و نام خانوادگی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverName)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.recieverName && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverName.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverMobile'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='موبایل'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverMobile)}
                      inputProps={{maxLength: 11}}
                      placeholder='09*********'
                      dir='ltr'
                    />
                  )}
                />
                {errors.recieverMobile && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverMobile.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={8} sm={8} md={4} lg={2} xl={2}>
              <FormControl fullWidth>
                <Controller
                  name='recieverPhone'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='تلفن'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverPhone)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.recieverPhone && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverPhone.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='recieverPhonePrefix'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='پیش شماره'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverPhone)}
                      dir='ltr'
                      placeholder='021'
                    />
                  )}
                />
                {errors.recieverPhonePrefix && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverPhonePrefix.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='recieverCounty'
                  control={control}
                  rules={{required: true}}
                  render={({field: {onChange, value, onBlur}}) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={ostan.map(element => element.name)}
                      onChange={(event, values, value) => onChangeRecieverOstan(event, onChange, values, value)}
                      value={value}
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='استان'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.recieverCounty)}
                        />
                      )}
                    />
                  )}
                />
                {errors.recieverCounty && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverCounty.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverCity'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={shahr
                        .filter(element => element.ostan === selectedRecieverOstan)
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
                          error={Boolean(errors.recieverCity)}
                        />
                      )}
                    />
                  )}
                />
                {errors.recieverCity && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverCity.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverCodePosti'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='کدپستی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverCodePosti)}
                      inputProps={{maxLength: 10}}
                      dir='ltr'
                    />
                  )}
                />
                {errors.recieverCodePosti && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverCodePosti.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant='p' component='p'>
                آدرس
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverMainRoard'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='خیابان اصلی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverMainRoard)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.recieverMainRoard && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverMainRoard.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverSubRoad'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='خیابان فرعی'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverSubRoad)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.recieverSubRoad && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverSubRoad.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='recieverAlley'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='کوچه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverAlley)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.recieverAlley && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverAlley.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='recieverPlaque'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='پلاک'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverPlaque)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.recieverPlaque && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverPlaque.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='recieverFloor'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='طبقه'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverFloor)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.recieverFloor && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverFloor.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
              <FormControl fullWidth>
                <Controller
                  name='recieverUnit'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='واحد'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverUnit)}
                      inputProps={{maxLength: 10}}
                    />
                  )}
                />
                {errors.recieverUnit && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverUnit.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormLabel variant='p' component='p'>
                لوکیشن
              </FormLabel>
              {/* <NeshanMap
        options={{
          key: 'web.293aa15bfefa46b6886f2e250d695edd',
          maptype: 'dreamy',
          poi: true,
          traffic: false,
          center: [35.699739, 51.338097],
          zoom: 13
        }}
        onInit={(L, myMap) => {
          let marker = L.marker([35.699739, 51.338097]).addTo(myMap).bindPopup('I am a popup.')

          myMap.on('click', function (e) {
            marker.setLatLng(e.latlng)
          })

          L.circle([35.699739, 51.348097], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
          }).addTo(myMap)
        }}
      /> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mb: 5}}>
        <CardHeader title='مرسوله'/>{' '}
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='weight'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='وزن (گرم)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.weight)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.weight && <FormHelperText sx={{color: 'error.main'}}>{errors.weight.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='length'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='طول (سانتی متر)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.length)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.length && <FormHelperText sx={{color: 'error.main'}}>{errors.length.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='width'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='عرض (سانتی متر)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.width)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.width && <FormHelperText sx={{color: 'error.main'}}>{errors.width.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='height'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='ارتفاع (سانتی متر)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.height)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.height && <FormHelperText sx={{color: 'error.main'}}>{errors.height.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='money'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='ارزش کالا (تومان)'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.height)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.height && <FormHelperText sx={{color: 'error.main'}}>{errors.height.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='car'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={cars}
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      renderInput={params => (
                        <TextField
                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='وسیله حمل کننده'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.car)}
                        />
                      )}
                    />
                  )}
                />
                {errors.recieverCity && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.car.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='needsSpecialCarry'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <>
                      <InputLabel>نیاز به حمل ویژه</InputLabel>
                      <Select
                        autoFocus
                        label='نیاز به حمل ویژه'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.needsSpecialCarry)}
                      >
                        <MenuItem value>دارد</MenuItem>
                        <MenuItem value={false}>ندارد</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.needsSpecialCarry && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.needsSpecialCarry.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='SpecialBox'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <>
                      <InputLabel>بار خاص</InputLabel>
                      <Select
                        autoFocus
                        label='بار خاص'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.SpecialBox)}
                      >
                        <MenuItem value>دارد</MenuItem>
                        <MenuItem value={false}>ندارد</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.SpecialBox && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.SpecialBox.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mb: 5}}>
        <CardHeader title='پرداخت'/>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  name='paymentMethod'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <Autocomplete
                      onBlur={onBlur}
                      select
                      options={paymentMethod}
                      onChange={(event, values,) => onChange(values)}
                      value={value}
                      renderInput={params => (
                        <TextField

                          /* eslint-disable-next-line react/jsx-props-no-spreading */
                          {...params}
                          label='نحوه پرداخت'
                          variant='outlined'
                          onChange={onChange}
                          error={Boolean(errors.paymentMethod)}
                        />
                      )}
                    />
                  )}
                />
                {errors.paymentMethod && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.paymentMethod.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='needsMovement'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <>
                      <InputLabel>نیازمند جابجابی</InputLabel>
                      <Select
                        autoFocus
                        label='نیازمند جابجایی'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.needsMovement)}
                      >
                        <MenuItem value>دارد</MenuItem>
                        <MenuItem value={false}>ندارد</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.needsMovement && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.needsMovement.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='needsLoading'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <>
                      <InputLabel>نیازمند بارگیری</InputLabel>
                      <Select
                        autoFocus
                        label='نیازمند بارگیری'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.needsLoading)}
                      >
                        <MenuItem value>دارد</MenuItem>
                        <MenuItem value={false}>ندارد</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.needsLoading && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.needsLoading.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='needsEvacuate'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <>
                      <InputLabel>نیازمند تخلیه</InputLabel>
                      <Select
                        autoFocus
                        label='نیازمند تخلیه'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.needsEvacuate)}
                      >
                        <MenuItem value>دارد</MenuItem>
                        <MenuItem value={false}>ندارد</MenuItem>
                      </Select>
                    </>
                  )}
                />
                {errors.needsEvacuate && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.needsEvacuate.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Button size='large' type='submit' variant='contained' sx={{m: 1}}>
        محاسبه قیمت
      </Button>
      <Button size='large' type='success' variant='contained' sx={{m: 1}}>
        ثبت سفارش
      </Button>
    </form>
  )
}

ACLPage.acl = {
  action: 'manage',
  subject: 'all'
}

export default ACLPage
