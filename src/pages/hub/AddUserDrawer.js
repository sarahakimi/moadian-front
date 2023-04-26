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
import toast from "react-hot-toast";
import Avatar from "@core/components/mui/avatar";
import {editUser, registerUser} from "./requests";


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
  address: yup.string().required("الزامی است").typeError("به درستی وارد نمایید").min(5,"به درستی وازد نمایید"),
  economic_code: yup.string().required("الزامی است").typeError("به درستی وارد نمایید").min(2,"به درستی وازد نمایید"),


})

function SidebarAddCourier({open, toggle, setChange, user, edit, showUser}) {
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
    address:'',
    economic_code:'',
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
    const toastId = toast.loading("در حال بارگذاری لوگو")

    const upload = new tus.Upload(uploadFile, {
      endpoint: "https://api.zaminbar.ir/files/",
      retryDelays: [0],
      metadata: {
        filename: uploadFile.name,
        filetype: uploadFile.type
      },
      onError() {
        setError("hub_id", {type: 'custom', message: "مشکل در بارگذای عکس. مجدد تلاش کنید"});
        toast.dismiss(toastId)
        toast.error("خطا در بارگذاری لوگو")
      },
      onSuccess() {
        setImageUrl(upload.url)
        toast.dismiss(toastId)
        toast.success("با موفقیت بارگذاری شد")
      }
    })
    upload.start()
  }


  const onSubmit = async (data) => {
    if (edit) {
      toast.promise(editUser(user.id, {...data, image: imageUrl})
          .then(() => {
            setChange(true)
            handleClose()
          })
        , {
          loading: 'در حال ویرایش هاب',
          success: 'هاب ویرایش شد',
          error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
        })

    } else {
      toast.promise(registerUser({...data, image: imageUrl})
          .then(() => {
            setChange(true)
            handleClose()
          })
        , {
          loading: 'در حال ایجاد هاب',
          success: 'هاب ایجاد شد',
          error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
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
                  disableClearable
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
                  disableClearable
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
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='address'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  label='آدرس'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.address)}
                  disabled={showUser}
                  multiline
                  rows={2}
                />
              )}
            />
            {errors.address && <FormHelperText sx={{color: 'error.main'}}>{errors.address.message}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth sx={{mb: 4}}>
            <Controller
              name='economic_code'
              control={control}
              rules={{required: true}}
              render={({field: {value, onChange, onBlur}}) => (
                <TextField
                  label='کد اقتصادی'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.economic_code)}
                  disabled={showUser}
                />
              )}
            />
            {errors.economic_code && <FormHelperText sx={{color: 'error.main'}}>{errors.economic_code.message}</FormHelperText>}
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
          <Button onClick={handleDialogClose}>
            متوجه شدم
          </Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  )
}

export default SidebarAddCourier
