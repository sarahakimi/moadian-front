import {useState} from 'react'
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
import DialogContentText from "@mui/material/DialogContentText";
import {ostan, shahr} from "iran-cities-json";
import * as tus from "tus-js-client";
import Avatar from "../../@core/components/mui/avatar";
import http from "../../services/http";


const Header = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  image: yup.mixed(),
  name: yup
    .string()
    .required('نام الزامی است'),
  fax: yup
    .string()
    .required('فگس الزامی است').matches(/^[0-9]*$/, ' باید عدد باشد'),
  provence: yup
    .string()
    .required('استان الزامی است'),
  city: yup
    .string()
    .required('شهر الزامی است'),
  telephone: yup
    .string()
    .required('تلفن الزامی است').matches(/^[0-9]*$/, ' باید عدد باشد'),

})

function SidebarAddCourier({open, toggle, setChange, user, edit, showUser, setLoading}) {
  const [selectedSenderOstan, setSelectedSenderOstan] = useState('')
  const [success, setSuccess] = useState(false)
  const [imageUrl, setImageUrl] = useState(edit ? user.image : "")

  function onChangeSenderOstan(event, onChange, values,) {
    onChange(values)
    setSelectedSenderOstan(ostan.find(element => element.name === event.target.innerText)?.id)
  }

  const emptyForm = {
    image: null,
    name: '',
    fax: '',
    telephone: '',
    provence: '',
    city: '',
  }
  const defaultValues = user || emptyForm

  const {
    reset,
    control,
    handleSubmit,
    setError,
    formState: {errors}
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleClose = () => {
    toggle()
    reset(emptyForm)
  }


  const handleSetUpload = (event) => {
    const uploadFile = event.target.files[0]
    if (!uploadFile) {
      return;
    }

    const upload = new tus.Upload(uploadFile, {
      endpoint: "https://api.zaminbar.ir/files/",
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: uploadFile.name,
        filetype: uploadFile.type
      },
      onError() {
        setError("hub_id", {type: 'custom', message: "مشکل در بارگذای عکس. مجدد تلاش کنید"});
      },
      onSuccess() {
        setLoading(false)
        setImageUrl(upload.url)
      }
    })
    setLoading(true)
    upload.start()
  }


  const onSubmit = async (data) => {
    console.log(data)
    if (edit) {
      http
        .put(`hub/${user.id}`, {...data, image: imageUrl}, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          setLoading(false)
          handleClose()
          setSuccess(true)
          setChange(true)
        })
        .catch(err => {
          setError("name", {type: 'custom', message: err.response.data.message});
        })

    } else {
      http
        .post('hub/register', {...data, image: imageUrl}, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          setSuccess(true)
          setChange(true)
          reset(defaultValues)
          toggle()
        })
        .catch(err => {
          alert(err)
        })
    }


  }


  const handleDialogClose = () => {
    setSuccess(false);
    setChange(true)
  };


  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{keepMounted: true}}
      sx={{'& .MuiDrawer-paper': {width: {xs: 300, sm: 400}}}}
    >
      <Header>
        <Typography variant='h6'>اطلاعات هاب</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{cursor: 'pointer'}}/>
      </Header>
      <Box sx={{
        p: 5, "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "rgba(76,78,100,0.87)",
        },
        "& 	.MuiInputLabel-root.Mui-disabled": {
          WebkitTextFillColor: "rgba(76,78,100,0.87)",
        }
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='imagee'
              control={control}
              rules={{required: true}}
              render={({field: {value, onBlur}}) => (
                <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
                  <TextField
                    inputProps={{
                      accept: "image/*"
                    }}
                    disabled={showUser}
                    style={{display: 'none'}}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={handleSetUpload}
                    value={value}
                    onBlur={onBlur}
                    error={Boolean(errors.name)}
                    sx={{display: 'inline'}}
                  />
                  <Avatar src={imageUrl} sx={{width: 56, height: 56}}/>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  {!showUser && <label htmlFor="raised-button-file">
                    <Button
                      variant="text"
                      component="span"
                    >
                      افزودن لوگو
                    </Button>
                  </label>}
                </Box>
              )}
            />
            {errors.image && <FormHelperText sx={{color: 'error.main'}}>{errors.image.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='name'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  autoFocus
                  label='نام هاب'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.name)}
                  disabled={showUser}
                />
              )}
            />
            {errors.name && <FormHelperText sx={{color: 'error.main'}}>{errors.name.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='telephone'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  autoFocus
                  label='تلفن'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.telephone)}
                  inputProps={{maxLength: 11}}
                  placeholder='021*******'
                  dir='ltr'
                  disabled={showUser}
                />
              )}
            />
            {errors.telephone && <FormHelperText sx={{color: 'error.main'}}>{errors.telephone.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='fax'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  autoFocus
                  label='فکس'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.fax)}
                  disabled={showUser}
                  inputProps={{maxLength: 12}}
                  dir="ltr"
                />
              )}
            />
            {errors.fax && <FormHelperText sx={{color: 'error.main'}}>{errors.fax.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              fullWidth
              name='provence'
              control={control}
              rules={{required: true}}
              render={({field: {onChange, value, onBlur}}) => (
                <Autocomplete
                  onBlur={onBlur}
                  select
                  options={ostan.map(element => element.name)}
                  onChange={(event, values, value) => onChangeSenderOstan(event, onChange, values, value)}
                  value={value}
                  disabled={showUser}
                  renderInput={params => (
                    <TextField

                      /* eslint-disable-next-line react/jsx-props-no-spreading */
                      {...params}
                      label='استان'
                      variant='outlined'
                      onChange={onChange}
                      error={Boolean(errors.provence)}
                      disabled={showUser}
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
                  onBlur={onBlur}
                  select
                  options={shahr
                    .filter(element => element.ostan === selectedSenderOstan)
                    .map(element => element.name)}
                  onChange={(event, values) => onChange(values)}
                  value={value}
                  disabled={showUser}
                  renderInput={params => (
                    <TextField
                      /* eslint-disable-next-line react/jsx-props-no-spreading */
                      {...params}
                      label='شهر'
                      variant='outlined'
                      onChange={onChange}
                      error={Boolean(errors.city)}
                      disabled={showUser}
                    />
                  )}
                />
              )}
            />
            {errors.city && (
              <FormHelperText sx={{color: 'error.main'}}>{errors.city.message}</FormHelperText>
            )}
          </FormControl>

          {!showUser && <Button size='large' type='submit' variant='contained' sx={{mr: 3}} fullWidth>
            ذخیره
          </Button>}

        </form>
      </Box>
      <Dialog
        open={success}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ایجاد هاب
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            هاب مورد نظر ایجاد شد
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            متوجه شدم
          </Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  )
}

export default SidebarAddCourier
