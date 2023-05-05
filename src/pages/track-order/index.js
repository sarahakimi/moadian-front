import React, {useState} from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid'
import {
  Card, CardContent, CardHeader,

  StepConnector, stepConnectorClasses
} from "@mui/material";
import toast from "react-hot-toast";
import Check from "mdi-material-ui/Check";
import urls from "configs/requestEndpoints"
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Step from "@mui/material/Step";
import {styled} from "@mui/material/styles";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import {IconExpandMore} from "@aws-amplify/ui-react";

import Box from "@mui/material/Box";
import Loading from "../../@core/components/loading/loading";
import http from "../../services/http";
import BlankLayout from "../../@core/layouts/BlankLayout";

import themeConfig from "../../configs/themeConfig";


const QontoConnector = styled(StepConnector)(({theme}) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10, left: 'calc(-50% + 16px)', right: 'calc(50% + 16px)',
  }, [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  }, [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  }, [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({theme, ownerState}) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center', ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4', zIndex: 1, fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8, height: 8, borderRadius: '50%', backgroundColor: 'currentColor',
  },
}),);

function QontoStepIcon(props) {
  const {active, completed, className} = props;

  return (<QontoStepIconRoot ownerState={{active}} className={className}>
    {completed ? (<Check className="QontoStepIcon-completedIcon"/>) : (<div className="QontoStepIcon-circle"/>)}
  </QontoStepIconRoot>);
}

const schema = yup.object().shape({
  code: yup.string().typeError("به درستی وارد نمایید").required("کد رهگیری را وارد نمایید").min(3,"به درستی وارد نمایید")
})

function Index() {
  const [data, setData] = useState({})
  const [hasUser, setHasUser] = useState(false)
  const [loading, setLoading] = useState(false)

  const defaultValues = {
    code: ""
  }


  const {
    control, handleSubmit, formState: {errors}
  } = useForm({
    defaultValues, mode: 'onChange', resolver: yupResolver(schema)
  })


  const onSubmit = data => {
    const toastid = toast.loading("در حال دریافت اطلاعات...")
    setLoading(true)
    http
      .get(urls.getOrder(data.code), {},)
      .then(async response => {
        setLoading(false)
        setHasUser(true)
        toast.dismiss(toastid)
        if (response.data === null) setData({})
        else setData(response.data)
      })
      .catch(err => {
        setLoading(false)
        toast.dismiss(toastid)
        toast.error(err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داد")
      })
  }

  return (
    <Box sx={{ backgroundColor: 'background.paper'}}>

    <Card container spacing={6} >
      <CardHeader title={ <Box
        sx={{

          display: 'flex',

          alignItems: 'center',
          justifyContent: 'start'
        }}
      >
        <img width={60} height={60} src='/images/favicon.png'/>
        <Typography variant='h6' sx={{ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important'}}>
          {themeConfig.templateName}
        </Typography>
      </Box>} subheader="کد رهگیری مرسوله خود را وارد کنید"/>
      <CardContent>
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mb={6}>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <FormControl fullWidth>
                <Controller
                  fullWidth
                  name='code'
                  control={control}
                  rules={{required: true}}
                  render={({field: {value, onChange, onBlur}}) => (<TextField
                    label='کد رهگیری'
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.senderCodeMelli)}

                    dir='ltr'

                    fullWidth
                  />)}
                />

                {errors.senderCodeMelli && (
                  <FormHelperText sx={{color: 'error.main'}}>{errors.senderCodeMelli.message}</FormHelperText>)}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Button size='large' type='success' variant='contained' sx={{m: 1}}>
                رهگیری
              </Button>
            </Grid>
          </Grid>
        </form>
        {hasUser && <><Stepper activeStep={data.order.state_id - 1} alternativeLabel connector={<QontoConnector/>}
                               sx={{mb: 6}}>

          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>ثبت سفارش</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>انتصاب به راننده</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>تحویل از مبدا</StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>تحویل به مقصد</StepLabel>
          </Step>

        </Stepper>
          <Accordion>
            <AccordionSummary
              expandIcon={<IconExpandMore/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>اطلاعات سفارش</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card sx={{
                p: 5, "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, "& 	.MuiInputLabel-root.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, mb: 5
              }}>
                <CardHeader title='اطلاعات سفارش'/>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        label='شماره سفارش'
                        value={data.order.id}
                        dir='ltr'
                        disabled
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        label='وضعیت'
                        value={data.order.state}
                        disabled
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        label='هزینه'
                        value={data.order.price}
                        disabled
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </CardContent>

              </Card>
              <Card sx={{
                p: 5, "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, "& 	.MuiInputLabel-root.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, mb: 5,
              }}>
                <CardHeader title='فرستنده'
                />

                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField

                        label='کدملی'
                        value={data.sender_customer.identity_code}
                        fullWidth
                        dir='ltr'
                        disabled
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disable
                        fullWidth
                        label='نام و نام خانوادگی'
                        value={data.sender_customer.name}

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        fullWidth
                        label='موبایل'
                        value={data.sender_customer.mobile}

                        disabled
                      />

                    </Grid>
                    <Grid item xs={8} sm={8} md={4} lg={2} xl={2}>

                      <TextField
                        fullWidth
                        label='تلفن'
                        value={data.sender_customer.tel}

                        disabled
                      />

                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>

                      <TextField
                        fullWidth
                        label='پیش شماره'
                        value={data.sender_customer.area_code}
                        dir='ltr'
                        disabled
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        fullWidth
                        label='شرکت'
                        value={data.sender_customer.company_name}

                        disabled

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        fullWidth
                        label='استان'
                        value={data.sender_customer.provence}
                        disabled

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        fullWidth
                        label='شهر'

                        value={data.sender_customer.city}
                        disabled
                      />


                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>


                      <TextField
                        disabled
                        fullWidth
                        label='کدپستی'
                        value={data.sender_customer.postal_code}

                        dir='ltr'
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                      <TextField
                        disabled
                        fullWidth
                        label='سایر اطلاعات'
                        value={data.sender_customer.other_information}

                      />


                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography variant='p' component='p' mb={4}>
                        آدرس
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disabled
                        fullWidth
                        label='خیابان اصلی'
                        value={data.sender_customer.main_street}
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disabled
                        fullWidth
                        label='خیابان فرعی'
                        value={data.sender_customer.side_street}

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disabled
                        fullWidth
                        label='کوچه'
                        value={data.sender_customer.alley}


                      />

                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
                      <TextField
                        disabled
                        fullWidth
                        label='پلاک'
                        value={data.sender_customer.plaque}

                      />

                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>

                      <TextField
                        disabled
                        fullWidth
                        label='طبقه'
                        value={data.sender_customer.floor}


                      />


                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>

                      <TextField
                        disabled
                        fullWidth
                        label='واحد'
                        value={data.sender_customer.home_unit}

                      />

                    </Grid>

                  </Grid>
                </CardContent>
              </Card>
              <Card sx={{
                p: 5, "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, "& 	.MuiInputLabel-root.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, mb: 5,
              }}>
                <CardHeader title='گیرنده'
                />

                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField

                        label='کدملی'
                        value={data.receiver_customer.identity_code}
                        fullWidth
                        dir='ltr'
                        disabled
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disable
                        fullWidth
                        label='نام و نام خانوادگی'
                        value={data.receiver_customer.name}

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        fullWidth
                        label='موبایل'
                        value={data.receiver_customer.mobile}

                        disabled
                      />

                    </Grid>
                    <Grid item xs={8} sm={8} md={4} lg={2} xl={2}>

                      <TextField
                        fullWidth
                        label='تلفن'
                        value={data.receiver_customer.tel}

                        disabled
                      />

                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>

                      <TextField
                        fullWidth
                        label='پیش شماره'
                        value={data.receiver_customer.area_code}
                        dir='ltr'
                        disabled
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        fullWidth
                        label='شرکت'
                        value={data.receiver_customer.company_name}

                        disabled

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        fullWidth
                        label='استان'
                        value={data.receiver_customer.provence}
                        disabled

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        fullWidth
                        label='شهر'

                        value={data.receiver_customer.city}
                        disabled
                      />


                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>


                      <TextField
                        disabled
                        fullWidth
                        label='کدپستی'
                        value={data.receiver_customer.postal_code}

                        dir='ltr'
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                      <TextField
                        disabled
                        fullWidth
                        label='سایر اطلاعات'
                        value={data.receiver_customer.other_information}

                      />


                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography variant='p' component='p' mb={4}>
                        آدرس
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disabled
                        fullWidth
                        label='خیابان اصلی'
                        value={data.receiver_customer.main_street}
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disabled
                        fullWidth
                        label='خیابان فرعی'
                        value={data.receiver_customer.side_street}

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disabled
                        fullWidth
                        label='کوچه'
                        value={data.receiver_customer.alley}


                      />

                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>
                      <TextField
                        disabled
                        fullWidth
                        label='پلاک'
                        value={data.receiver_customer.plaque}

                      />

                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>

                      <TextField
                        disabled
                        fullWidth
                        label='طبقه'
                        value={data.receiver_customer.floor}


                      />


                    </Grid>
                    <Grid item xs={4} sm={4} md={2} lg={1} xl={1}>

                      <TextField
                        disabled
                        fullWidth
                        label='واحد'
                        value={data.receiver_customer.home_unit}

                      />

                    </Grid>

                  </Grid>
                </CardContent>
              </Card>
              <Card sx={{
                p: 5, "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, "& 	.MuiInputLabel-root.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, mb: 5,
              }}>
                <CardHeader title='مرسوله'/>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disabled
                        fullWidth
                        label='وزن (گرم)'
                        value={data.product.weight}

                        dir='ltr'

                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>

                      <TextField
                        disabled
                        label='طول (سانتی متر)'
                        value={data.product.length}
                        fullWidth
                        dir='ltr'
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label='عرض (سانتی متر)'
                        value={data.product.width}
                        fullWidth
                        dir='ltr'
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label='ارتفاع (سانتی متر)'
                        value={data.product.height}
                        fullWidth
                        dir='ltr'
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label='ارزش کالا (ریال)'
                        value={data.product.product_cost}
                        dir='ltr'
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label='وسیله حمل کننده'
                        value={data.product.vehicle}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label="نیاز به حمل ویژه"
                        value={data.product.special_vehicle_required ? "دارد" : "ندارد"}
                        fullWidth
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label="بار خاص"
                        value={data.product.special_product ? "دارد" : "ندارد"}
                        fullWidth
                      />

                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card sx={{
                p: 5, "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, "& 	.MuiInputLabel-root.Mui-disabled": {
                  WebkitTextFillColor: "rgba(76,78,100,0.87)",
                }, mb: 5,
              }}>
                <CardHeader title='پرداخت'/>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label="نحوه چرداخت"
                        value={data.product.payment_method}
                        fullWidth
                      />

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label="نیازمند جابجابی"
                        value={data.product.movement_required ? "دارد" : "ندارد"}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label="نیازمند بارگیری"
                        value={data.product.product_loading_required ? "دارد" : "ندارد"}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label="نیازمند تخلیه"
                        value={data.product.product_unloading_required ? "دارد" : "ندارد"}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                      <TextField
                        disabled
                        label="سفارش برون شهری"
                        value={data.product.is_suburb ? "دارد" : "ندارد"}
                        fullWidth
                      />

                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

            </AccordionDetails>
          </Accordion></>}
      </CardContent>
      <Loading open={loading}/>
    </Card>
    </Box>
  )
}
Index.getLayout = page => <BlankLayout>{page}</BlankLayout>
Index.guestGuard = true

export default Index;
