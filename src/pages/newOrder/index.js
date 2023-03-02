// ** React Imports
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
import {Autocomplete, Card, CardContent, CardHeader, FormLabel, Grid, MenuItem, Modal, Select} from '@mui/material'
import {useState} from "react";
import Box from '@mui/material/Box';
import toast from "react-hot-toast";
import Map from "./map";
import {createOrder} from "./requests";
import Table from "./table"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const schema = yup.object().shape({
  senderCodeMelli: yup.string()
    .required('کدملی فرستنده الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  senderName: yup.string().required('نام و نام خانوادگی فرستنده الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  senderMobile: yup.string()
    .required('موبایل فرستنده الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  senderPhone: yup.string()
    .required('تلفن فرستنده الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد')
    .min(3, 'تلفن باید حداقل 3 رقم باشد'),
  senderPhonePrefix: yup.string()
    .required('پیش شماره الزامی است')
    .matches(/d*/, ' پیش شماره باید عدد باشد')
    .test('len', 'پیش شماره باید 3 رقم باشد', val => val.toString().length === 3),
  senderCompany: yup.string(),
  senderCounty: yup.string().required('استان الزامی است').typeError('الزامی است'),
  senderCity: yup.string().required('شهر الزامی است'),
  senderCodePosti: yup.string()
    .required('کدپستی فرستنده الزامی است')
    .matches(/d*/, 'کدپستی باید عدد باشد')
    .test('len', 'کدپستی باید 10 رقم باشد', val => val.toString().length === 10),
  senderOtherInfo: yup.string(),
  senderMainRoard: yup.string().required('خیابان اصلی الزامی است'),
  senderSubRoad: yup.string().required('خیابان فرعی الزامی است'),
  senderAlley: yup.string().required('کوچه الزامی است'),
  senderPlaque: yup.string().required('پلاک الزامی است').matches(/d*/, 'باید عدد باشد'),
  senderFloor: yup.string().required('طبقه الزامی است').matches(/d*/, 'باید عدد باشد'),
  senderUnit: yup.string().required('واحد الزامی است').matches(/d*/, 'باید عدد باشد'),
  recieverCodeMelli: yup.string()
    .required('کدملی گیرنده الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  recieverName: yup.string().required('نام و نام خانوادگی گیرنده الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  recieverMobile: yup.string()
    .required('موبایل گیرنده الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  recieverPhone: yup.string()
    .required('تلفن گیرنده الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد')
    .min(3, 'تلفن باید حداقل 3 رقم باشد'),
  recieverPhonePrefix: yup.string()
    .required('پیش شماره الزامی است')
    .matches(/d*/, ' پیش شماره باید عدد باشد')
    .test('len', 'پیش شماره باید 3 رقم باشد', val => val.toString().length === 3),
  recieverCompany: yup.string(),
  recieverCounty: yup.string().required('استان الزامی است').typeError('الزامی است'),
  recieverCity: yup.string().required('شهر الزامی است'),
  recieverCodePosti: yup.string()
    .required('کدپستی گیرنده الزامی است')
    .matches(/d*/, 'کدپستی باید عدد باشد')
    .test('len', 'کدپستی باید 10 رقم باشد', val => val.toString().length === 10),
  recieverMainRoard: yup.string().required('خیابان اصلی الزامی است'),
  recieverSubRoad: yup.string().required('خیابان فرعی الزامی است'),
  recieverAlley: yup.string().required('کوچه الزامی است'),
  recieverPlaque: yup.string().required('پلاک الزامی است').matches(/d*/, 'باید عدد باشد'),
  recieverFloor: yup.string().required('طبقه الزامی است').matches(/d*/, 'باید عدد باشد'),
  recieverUnit: yup.string().required('واحد الزامی است').matches(/d*/, 'باید عدد باشد'),
  receiverOtherInfo: yup.string(),
  weight: yup.string().required('وزن الزامی است').matches(/d*/, 'وزن باید عدد باشد').min(1, 'حداقل باید 1 گرم باشد'),
  length: yup.string().required('طول الزامی است').matches(/d*/, 'طول باید عدد باشد').min(1, 'حداقل باید 1 سانتی متر باشد'),
  width: yup.string().required('عرض الزامی است').matches(/d*/, 'عرض باید عدد باشد').min(1, 'حداقل باید 1 سانتی متر باشد'),
  height: yup.string()
    .required('ارتفاع الزامی است')
    .matches(/d*/, 'ارتفاع باید عدد باشد')
    .min(1, 'حداقل باید 1 سانتی متر باشد'),
  money: yup.string()
    .required('ارزش کالا الزامی است')
    .matches(/d*/, 'ارزش کالا باید عدد باشد')
    .min(1, 'حداقل باید 1 تومان باشد'),
  car: yup.string().required('وسیله حمل کننده الزامی است'),
  needsSpecialCarry: yup.boolean(),
  SpecialBox: yup.boolean(),
  paymentMethod: yup.string().required('الزامی است'),
  needsEvacuate: yup.boolean(),
  needsLoading: yup.boolean(),
  needsMovement: yup.boolean()
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

const emptyForm = {
  senderCodeMelli: "",
  senderName: "",
  senderMobile: "",
  senderPhone: "",
  senderPhonePrefix: "",
  senderCompany: "",
  senderCounty: "",
  senderCity: "",
  senderCodePosti: "",
  senderOtherInfo: "",
  senderMainRoard: "",
  senderSubRoad: "",
  senderAlley: "",
  senderPlaque: "",
  senderFloor: "",
  senderUnit: "",
  recieverCodeMelli: "",
  recieverName: "",
  recieverMobile: "",
  recieverPhone: "",
  recieverPhonePrefix: "",
  recieverCompany: "",
  recieverCounty: "",
  recieverCity: "",
  recieverCodePosti: "",
  recieverMainRoard: "",
  recieverSubRoad: "",
  recieverAlley: "",
  recieverPlaque: "",
  recieverFloor: "",
  recieverUnit: "",
  receiverOtherInfo: "",
  weight: "",
  length: "",
  width: "",
  height: "",
  money: "",
  car: "",
  needsSpecialCarry: false,
  SpecialBox: false,
  paymentMethod: "",
  needsEvacuate: false,
  needsLoading: false,
  needsMovement: false
}
const cars = ['موتور', 'سواری', 'وانت', 'کامیون', 'کامیونت']
const paymentMethod = ['پیش کرایه', 'پس کرایه']

function ACLPage() {
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')
  const [selectedRecieverOstan, setSelectedRecieverOstan] = useState('')
  const [sendertLatLang, setSenderLatLang] = useState([51.3347, 35.7219])
  const [recieverLatLang, setRecieverLatLang] = useState([51.3347, 35.7219])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [sender, setSender] = useState({})
  const [reciever, setReciever] = useState({})
  const [recieverOpen, setRecieverOpen] = useState(false)
  const handleRecieverOpen = () => setRecieverOpen(true);
  const handleRecieverClose = () => setRecieverOpen(false);

  const {
    control,
    reset,
    setValue,

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
    const config = {
      "sender_customer": {
        "identity_code": data.senderCodeMelli,
        "name": data.senderName,
        "companyName": data.senderCompany,
        "mobile": data.senderMobile,
        "tel": data.senderPhone,
        "area_code": data.senderPhonePrefix,
        "provence": data.senderCounty,
        "city": data.senderCity,
        "postal_code": data.senderCodePosti,
        "main_street": data.senderMainRoard,
        "side_street": data.senderSubRoad,
        "alley": data.senderAlley,
        "plaque": data.senderPlaque,
        "floor": data.senderFloor,
        "home_unit": data.senderUnit,
        "other_information": data.senderOtherInfo,
        "lat": sendertLatLang[1],
        "lang": sendertLatLang[0]
      },
      "receiver_customer": {
        "identity_code": data.recieverCodeMelli,
        "name": data.recieverName,
        "companyName": data.recieverCompany,
        "mobile": data.recieverMobile,
        "tel": data.recieverPhone,
        "area_code": data.recieverPhonePrefix,
        "provence": data.recieverCounty,
        "city": data.recieverCity,
        "postal_code": data.recieverCodePosti,
        "main_street": data.recieverMainRoard,
        "side_street": data.recieverSubRoad,
        "alley": data.recieverAlley,
        "plaque": data.recieverAlley,
        "floor": data.recieverFloor,
        "home_unit": data.recieverUnit,
        "other_information": data.receiverOtherInfo,
        "lat": recieverLatLang[1],
        "lang": recieverLatLang[0]
      },
      "product": {
        "weight": data.weight,
        "length": data.length,
        "width": data.width,
        "height": data.height,
        "product_cost": data.money,
        "vehicle": data.car,
        "special_vehicle_required": data.needsSpecialCarry,
        "special_product": data.SpecialBox,
        "movement_required": data.needsMovement,
        "product_loading_required": data.needsLoading,
        "product_unloading_required": data.needsEvacuate
      }
    }
    toast.promise(
      createOrder(config).then(() => {
        reset(emptyForm)
        setSenderLatLang([51.3347, 35.7219])
        setRecieverLatLang([51.3347, 35.7219])
      })
      , {
        loading: 'در حال ثبت سفارش',
        success: 'سفارش ثبت شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
      })

  }

  const onsetSenderCustomer = () => {

    console.log(sender)
    setValue('senderName', sender.name, {shouldTouch: true})
    setValue('senderCodeMelli', sender.natural_code, {shouldTouch: true})
    setValue('senderCompany', sender.identity_code, {shouldTouch: true})
    setValue('senderMobile', sender.phone, {shouldTouch: true})
    setValue('senderPhone', sender.tel_number, {shouldTouch: true})
    setValue('senderPhonePrefix', sender.identity_code, {shouldTouch: true})
    setValue('senderCounty', sender.identity_code, {shouldTouch: true})
    setValue('senderCity', sender.city, {shouldTouch: true})
    setValue('senderCodePosti', sender.identity_code, {shouldTouch: true})
    setValue('senderMainRoard', sender.identity_code, {shouldTouch: true})
    setValue('senderSubRoad', sender.identity_code, {shouldTouch: true})
    setValue('senderAlley', sender.identity_code, {shouldTouch: true})
    setValue('senderPlaque', sender.identity_code, {shouldTouch: true})
    setValue('senderFloor', sender.identity_code, {shouldTouch: true})
    setValue('senderUnit', sender.identity_code, {shouldTouch: true})


    handleClose()
  }

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{mb: 5}}>
        <CardHeader title='فرستنده' subheader={<Button onClick={handleOpen}>جستجوی مشتری</Button>}/>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <Box sx={{...style}}>
            <h2 id="modal-modal-title">انتخاب فرستنده</h2>
            <Table setCustomer={setSender} customer={sender}/>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Button variant="contained" color="primary" onClick={onsetSenderCustomer} sx={{mx: 2}}
                      disabled>انتخاب </Button>
              <Button variant="contained" color="error" onClick={handleClose}>بستن</Button>
            </Box>

          </Box>

        </Modal>
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
                      inputProps={{maxLength: 50}}
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
                      inputProps={{maxLength: 9}}
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
                      error={Boolean(errors.senderPhonePrefix)}
                      dir='ltr'
                      placeholder='021'
                      inputProps={{maxLength: 3}}
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
                  name='senderCompany'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='شرکت'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderCompany)}

                    />
                  )}
                />
                {errors.senderCompany && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderCompany.message}</FormHelperText>
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
                      disableClearable
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
                      disableClearable
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
              <FormControl fullWidth>
                <Controller
                  name='senderOtherInfo'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='سایر اطلاعات'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.senderOtherInfo)}
                      inputProps={{maxLength: 10}}
                      dir='ltr'
                    />
                  )}
                />
                {errors.senderOtherInfo && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderOtherInfo.message}</FormHelperText>
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
              <Box sx={{height: 400}}>
                <Map latLang={sendertLatLang} setLatLang={setSenderLatLang}/>
              </Box>
              <div/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mb: 5}}>
        <CardHeader title='گیرنده' subheader={<Button onClick={handleRecieverOpen}>جستجوی مشتری</Button>}/>
        <Modal
          open={recieverOpen}
          onClose={handleRecieverClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <Box sx={{...style}}>
            <h2 id="modal-modal-title">انتخاب گیرنده</h2>
            <Table setCustomer={setReciever} customer={reciever}/>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"

            >
              <Button variant="contained" color="primary" onClick={onsetSenderCustomer} sx={{mx: 2}}
                      disabled>انتخاب </Button>
              <Button variant="contained" color="error" onClick={handleRecieverClose}>بستن</Button>
            </Box>

          </Box>

        </Modal>
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
                      inputProps={{maxLength: 50}}
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
                      inputProps={{maxLength: 9}}
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
                      error={Boolean(errors.recieverPhonePrefix)}
                      dir='ltr'
                      placeholder='021'
                      inputProps={{maxLength: 3}}
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
                  name='recieverCompany'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='شرکت'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.recieverCompany)}
                    />
                  )}
                />
                {errors.recieverCompany && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.recieverCompany.message}</FormHelperText>
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
                      disableClearable
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
                      disableClearable
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
              <FormControl fullWidth>
                <Controller
                  name='receiverOtherInfo'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (
                    <TextField
                      autoFocus
                      label='سایر اطلاعات'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.receiverOtherInfo)}
                      inputProps={{maxLength: 10}}
                      dir='ltr'
                    />
                  )}
                />
                {errors.receiverOtherInfo && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.receiverOtherInfo.message}</FormHelperText>
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
              <Box sx={{height: 400}}>
                <Map latLang={recieverLatLang} setLatLang={setRecieverLatLang}/>
              </Box>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{mb: 5}}>
        <CardHeader title='مرسوله'/>
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
                      error={Boolean(errors.money)}
                      dir='ltr'
                    />
                  )}
                />
                {errors.money && <FormHelperText sx={{color: 'error.main'}}>{errors.money.message}</FormHelperText>}
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
                      disableClearable
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
                        defaultValue={false}
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
                        defaultValue={false}
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
                      disableClearable
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
                        defaultValue={false}
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
                        defaultValue={false}
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
                        defaultValue={false}
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

      <Button size='large' type='submit' variant='contained' sx={{m: 1}} disabled>
        محاسبه قیمت
      </Button>
      <Button size='large' type='success' variant='contained' sx={{m: 1}}>
        ثبت سفارش
      </Button>
    </form>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
