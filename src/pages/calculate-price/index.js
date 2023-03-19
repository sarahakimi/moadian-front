import Grid from '@mui/material/Grid'
import {Button, Card, CardHeader} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {editOtherOptions, editPerCar, editPerKiometer, getOtherOptions, getPerCar, getPerKiometer} from "./requests";

const schema = yup.object().shape({
  regularinside: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  regularOutside: yup.number().min(0, "باید عدد طبیعی باشد").max(100, "درصد باید عددی بین 0 و 100 باشد").typeError("باید عدد باشد").required("الزامی است"),
  specialInside: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  specialOutside: yup.number().min(0, "باید عدد طبیعی باشد").max(100, "درصد باید عددی بین 0 و 100 باشد").typeError("باید عدد باشد").required("الزامی است"),
  motorHajm: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  motorVazn: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  savariHakm: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  savariVazn: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  vanetVazn: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  vanetHajm: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  kamionetVazn: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  kamionetHajm: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  kamionVazn: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  KaminoHajm: yup.number().min(1, "باید مثبت باشد").typeError("باید عدد باشد").required("الزامی است"),
  maliat: yup.number().min(0, "باید عدد طبیعی باشد").max(100, "درصد باید عددی بین 0 و 100 باشد").typeError("باید عدد باشد").required("الزامی است"),
  arzeshAfzoode: yup.number().min(0, "باید عدد طبیعی باشد").max(100, "درصد باید عددی بین 0 و 100 باشد").typeError("باید عدد باشد").required("الزامی است"),
  jabejai: yup.number().min(0, "باید عدد طبیعی باشد").max(100, "درصد باید عددی بین 0 و 100 باشد").typeError("باید عدد باشد").required("الزامی است"),
  bargiri: yup.number().min(0, "باید عدد طبیعی باشد").max(100, "درصد باید عددی بین 0 و 100 باشد").typeError("باید عدد باشد").required("الزامی است"),
  takhlie: yup.number().min(0, "باید عدد طبیعی باشد").max(100, "درصد باید عددی بین 0 و 100 باشد").typeError("باید عدد باشد").required("الزامی است"),
})

function ACLPage() {
  const [change, setChange] = useState(false)
  const [carsResponse, setCarsRespnse] = useState([])

  const defaultValues = {
    regularinside: 0,
    regularOutside: 0,
    specialInside: 0,
    specialOutside: 0,
    motorHajm: 0,
    motorVazn: 0,
    savariHakm: 0,
    savariVazn: 0,
    vanetVazn: 0,
    vanetHajm: 0,
    kamionetVazn: 0,
    kamionetHajm: 0,
    kamionVazn: 0,
    KaminoHajm: 0,
    maliat: 0,
    arzeshAfzoode: 0,
    jabejai: 0,
    bargiri: 0,
    takhlie: 0
  }

  const {
    control,

    setValue,

    // setError,
    handleSubmit, formState: {errors}
  } = useForm({
    defaultValues, mode: 'onChange', resolver: yupResolver(schema)
  })
  useEffect(() => {
    getPerKiometer().then((response) => {
      setValue('regularinside', response.data.inside_common_price, {shouldValidate: true})
      setValue('regularOutside', response.data.common_outside_added_percentage, {shouldValidate: true})
      setValue('specialInside', response.data.inside_specific_price, {shouldValidate: true})
      setValue('specialOutside', response.data.specific_outside_added_percentage, {shouldValidate: true})

    }).catch((err) => {
      const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : "خطایی رخ داده است"
      toast.error(errorMessage)
    })
    getPerCar().then((response) => {
      console.log(response.data)
      setCarsRespnse(response.data)
      response.data.forEach((car) => {
        if (car.name === "سواری") {
          setValue('savariHakm', car.max_volume, {shouldValidate: true})
          setValue('savariVazn', car.max_weight, {shouldValidate: true})
        } else if (car.name === "وانت") {
          setValue('vanetHajm', car.max_volume, {shouldValidate: true})
          setValue('vanetVazn', car.max_weight, {shouldValidate: true})

        } else if (car.name === "کامیون") {
          setValue('KaminoHajm', car.max_volume, {shouldValidate: true})
          setValue('kamionVazn', car.max_weight, {shouldValidate: true})

        } else if (car.name === "کامیونت") {
          setValue('kamionetHajm', car.max_volume, {shouldValidate: true})
          setValue('kamionetVazn', car.max_weight, {shouldValidate: true})

        } else if (car.name === "موتور") {
          setValue('motorHajm', car.max_volume, {shouldValidate: true})
          setValue('motorVazn', car.max_weight, {shouldValidate: true})

        }

      })


    }).catch((err) => {
      const errorMessage = err.response?.data?.message ? err.response.data.message : "خطایی رخ داده است"
      toast.error(errorMessage)
    })
    getOtherOptions().then((response) => {
      setValue('maliat', response.data.tax, {shouldValidate: true})
      setValue('arzeshAfzoode ', response.data.adding_price, {shouldValidate: true})
      setValue('jabejai', response.data.movement, {shouldValidate: true})
      setValue('bargiri', response.data.loading, {shouldValidate: true})
      setValue('takhlie', response.data.un_loading, {shouldValidate: true})

    }).catch((err) => {
      const errorMessage = err.response?.data?.message ? err.response.data.message : "خطایی رخ داده است"
      toast.error(errorMessage)
    })
    setChange(false)


  }, [change])

  const onSubmit = data => {
    const toastId = toast.loading("در حال ذخیره تغییرات")

    const kilometerPrice = {
      "inside_common_price": data.regularinside,
      "inside_specific_price": data.specialInside,
      "common_outside_added_percentage": data.regularOutside,
      "specific_outside_added_percentage": data.specialOutside
    }
    editPerKiometer(kilometerPrice).catch((err) => {
      toast.dismiss(toastId)
      const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : "خطایی رخ داده است"
      toast.error(errorMessage)
    })
    carsResponse.forEach(car => {
      if (car.name === "سواری") {
        const carData = {
          "name": "سواری",
          "max_volume": data.savariHakm,
          "max_weight": data.savariHakm
        }
        editPerCar(car.id, carData).catch((err) => {
          toast.dismiss(toastId)
          const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : "خطایی رخ داده است"
          toast.error(errorMessage)

        })
      } else if (car.name === "وانت") {

        const carData = {
          "name": "وانت",
          "max_volume": data.vanetHajm,
          "max_weight": data.vanetVazn
        }
        editPerCar(car.id, carData).catch((err) => {
          toast.dismiss(toastId)
          const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : "خطایی رخ داده است"
          toast.error(errorMessage)
        })


      } else if (car.name === "کامیون") {
        const carData = {
          "name": "کامیون",
          "max_volume": data.KaminoHajm,
          "max_weight": data.kamionVazn
        }
        editPerCar(car.id, carData).catch((err) => {
          toast.dismiss(toastId)
          const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : "خطایی رخ داده است"
          toast.error(errorMessage)
        })


      } else if (car.name === "کامیونت") {
        const carData = {
          "name": "کامیونت",
          "max_volume": data.kamionetHajm,
          "max_weight": data.kamionetVazn
        }
        editPerCar(car.id, carData).catch((err) => {
          toast.dismiss(toastId)
          const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : "خطایی رخ داده است"
          toast.error(errorMessage)
        })


      } else if (car.name === "موتور") {
        const carData = {
          "name": "کامیونت",
          "max_volume": data.motorHajm,
          "max_weight": data.motorVazn
        }
        editPerCar(car.id, carData).catch((err) => {
          toast.dismiss(toastId)
          const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : "خطایی رخ داده است"
          toast.error(errorMessage)
        })


      }
    })

    const otherinfoData = {
      "tax": data.maliat,
      "adding_price": data.arzeshAfzoode,
      "movement": data.jabejai,
      "loading": data.bargiri,
      "un_loading": data.takhlie
    }
    editOtherOptions(otherinfoData).catch((err) => {
      toast.dismiss(toastId)
      const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : "خطایی رخ داده است"
      toast.error(errorMessage)
    })

    setChange(true)
    toast.dismiss(toastId)
    toast.success('ثبت شد')

  }

  return (<Grid container spacing={6} sx={{width: "100%", margin: 0}}>
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}
          style={{width: "100% ", padding: 0, margin: 0}}>
      <Card sx={{width: "100%", mb: 4}}>
        <CardHeader title="قیمت به ازای هر کیلومتر"/>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              نوع بار
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              درون شهری(ریال)
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              درصد افزوده برون شهری
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center"}}>
              بار عادی
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='regularinside'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.regularinside)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.regularinside && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.regularinside.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='regularOutside'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.regularOutside)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.regularOutside && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.regularOutside.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center"}}>
              بار خاص
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='specialInside'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.specialInside)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.specialInside && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.specialInside.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='specialOutside'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.specialOutside)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.specialOutside && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.specialOutside.message}</FormHelperText>)}
              </FormControl>
            </Grid>

          </Grid>
        </CardContent>

      </Card>
      <Card sx={{width: "100%", mb: 4}}>
        <CardHeader title="حداکثر وزن و حجم"/>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              وسیله مقلیه
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              حداگثر حجم(سانتی متر مکعب)
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center", backgroundColor: '#EEEEEE'}}>
              حداکثر وزن(گرم)
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center"}}>
              موتور
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='motorHajm'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.motorHajm)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.motorHajm && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.motorHajm.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='motorVazn'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.motorVazn)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.motorVazn && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.motorVazn.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center"}}>
              سواری
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='savariHakm'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.savariHakm)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.savariHakm && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.savariHakm.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='savariVazn'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.savariVazn)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.savariVazn && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.savariVazn.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center"}}>
              وانت
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='vanetHajm'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.vanetHajm)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.vanetHajm && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.vanetHajm.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='vanetVazn'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.vanetVazn)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.vanetVazn && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.vanetVazn.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center"}}>
              کامیونت
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='kamionetHajm'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.kamionetHajm)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.kamionetHajm && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.kamionetHajm.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='kamionetVazn'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.kamionetVazn)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.kamionetVazn && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.kamionetVazn.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={2} lg={2} xl={2} sx={{textAlign: "center"}}>
              کامیون
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='KaminoHajm'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.KaminoHajm)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.KaminoHajm && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.KaminoHajm.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={5} lg={5} xl={5} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='kamionVazn'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField


                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.kamionVazn)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.kamionVazn && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.kamionVazn.message}</FormHelperText>)}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{width: "100%", mb: 4}}>
        <CardHeader title="هزینه های متفرقه"/>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item md={4} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='maliat'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField

                    label="مالیات(درصد)"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.maliat)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.maliat && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.maliat.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={4} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='arzeshAfzoode'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField
                    label="ارزش افزوده(درصد)"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.arzeshAfzoode)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.arzeshAfzoode && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.arzeshAfzoode.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={4} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='jabejai'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField

                    label="جابجایی(درصد)"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.jabejai)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.jabejai && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.jabejai.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={4} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='bargiri'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField

                    label="بارگیری(درصد)"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.bargiri)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.bargiri && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.bargiri.message}</FormHelperText>)}
              </FormControl>
            </Grid>
            <Grid item md={4} lg={3} xl={3} sx={{textAlign: "center"}}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='takhlie'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField

                    label="تخلیه(درصد)"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.takhlie)}
                    inputProps={{maxLength: 10}}
                    dir='ltr'
                  />)}
                />
                {errors.takhlie && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.takhlie.message}</FormHelperText>)}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button type="submit" variant="contained" sx={{width: "100%"}}>ذخیره تغییرات</Button>
    </form>
  </Grid>)
}


ACLPage.acl = {
  action: 'read', subject: 'every-page'
}

export default ACLPage
