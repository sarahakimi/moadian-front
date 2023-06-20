import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import Close from 'mdi-material-ui/Close'
import { Dialog, DialogActions, DialogContent, DialogTitle, OutlinedInput } from '@mui/material'
import DialogContentText from '@mui/material/DialogContentText'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import toast from 'react-hot-toast'
import { editCompany } from './requests'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  duration_of_activity: yup.number().required(' الزامی است').min(1, 'حداقل 1 روز').typeError('باید عدد باشد'),
  activated: yup.boolean().required('الزامی است').typeError('فیلد را انتخاب کنید'),
  name: yup.string()
})

function SidebarAddCourier({ open, toggle, setChange, company, edit }) {
  const [success, setSuccess] = useState(false)

  const defaultValues = {
    duration_of_activity: company.duration_of_activity,
    name: company.name,
    activated: company.activated
  }

  const {
    reset,
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleDialogClose = () => {
    setSuccess(false)
    setChange(true)
    toggle()
    reset({
      duration_of_activity: 0,
      name: '',
      activated: false
    })
  }

  const handleClose = () => {
    toggle()
    reset(defaultValues)
  }

  const onSubmit = data => {
    toast.promise(
      editCompany(company.id, data).then(() => {
        handleClose()
        setChange(true)
      }),
      {
        loading: 'در حال ویرایش شرکت',
        success: 'شرکت ویرایش شد',
        error: err => {
          setError('name', { type: 'custom', message: err.response.data.message })

          return err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.'
        }
      }
    )
  }

  return (
    <Drawer
      open={open}
      anchor='left'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'> {edit ? 'تغییر اشتراک' : 'ویرایش کوریر'}</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{ cursor: 'pointer' }} />
      </Header>
      <Box
        sx={{
          p: 5,
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          },
          '& 	.MuiInputLabel-root.Mui-disabled': {
            WebkitTextFillColor: 'rgba(76,78,100,0.87)'
          }
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='نام شرکت/نام شخص'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  disabled={edit || false}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='duration_of_activity'
              control={control}
              type='number'
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label='اعتبار اکانت (روز)'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.duration_of_activity)}
                />
              )}
            />
            {errors.duration_of_activity && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.duration_of_activity.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='activated'
              control={control}
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <InputLabel id='demo-multiple-name-label'>وضعیت</InputLabel>
                  <Select
                    onBlur={onBlur}
                    labelId='demo-multiple-name-label'
                    id='demo-multiple-name'
                    onChange={onChange}
                    defaultValue={company.activated}
                    error={Boolean(errors.activated)}
                    input={<OutlinedInput label='Name' />}
                  >
                    <MenuItem value>فعال</MenuItem>
                    <MenuItem value={false}>غیرفعال</MenuItem>
                  </Select>
                </>
              )}
            />
            {errors.activated && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.activated.message}</FormHelperText>
            )}
          </FormControl>

          <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }} fullWidth>
            ذخیره
          </Button>
        </form>
      </Box>
      <Dialog open={success} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>ویرایش شرکت</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>شرکت {company.name} ویرایش شد.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>متوجه شدم</Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  )
}

export default SidebarAddCourier
