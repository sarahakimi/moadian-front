import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import moment from 'jalali-moment'
import Paper from '@mui/material/Paper'
import toast from 'react-hot-toast'

import { fetchData } from 'pages/drivers/requests'

import Button from '@mui/material/Button'
import { CardContent, CardHeader, Modal } from '@mui/material'
import TextField from '@mui/material/TextField'
import Table from '../../@core/components/table/table'
import { editUser } from '../drivers/requests'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}

function ACLPage() {
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: 'id desc' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(true)
  const [open, setOpen] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState({})
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'name',
      filterOperators,
      headerName: 'نام و نام خانوادگی',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.2,
      minWidth: 230,
      field: 'username',
      filterOperators,
      headerName: 'نام کاربری',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.username}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'created_at',
      minWidth: 150,
      filterable: false,
      headerName: 'تاریخ ثبت نام',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {moment(row.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'natural_code',
      minWidth: 150,
      filterOperators,
      headerName: 'کدملی',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.natural_code}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'phone',
      minWidth: 150,
      filterOperators,
      headerName: 'شماره تلفن',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.area_code}
            {row.tel_number}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'vehicle',
      minWidth: 150,
      headerName: 'وسیله نقلیه',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.vehicle}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'verify',
      minWidth: 150,
      headerName: 'تایید راننده',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant='contained'
            color='success'
            onClick={() => {
              handleOpen()
              setSelectedDriver(row)
            }}
          >
            تایید
          </Button>
        </Box>
      )
    }
  ]

  useEffect(() => {
    fetchData(sortModel)
      .then(response => {
        if (response.data === null) {
          setData([])
        } else setData(response.data.filter(element => element.verified === false))
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [sortModel, change, setData])

  const setVerified = () => {
    // eslint-disable-next-line no-param-reassign
    delete selectedDriver.password
    toast.promise(
      editUser(selectedDriver.id, { ...selectedDriver, verified: true }).then(() => {
        setChange(true)
        handleClose()
      }),
      {
        loading: 'در حال تایید راننده',
        success: 'راننده تایید شد',
        error: err => (err?.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='لیست رانندگانی که در انتظار تایید هستند:' />
          <CardContent>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} />
          </CardContent>
        </Card>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...style }}>
          <h2 id='modal-modal-title'>اطلاعات راننده</h2>

          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            sx={{
              p: 5,
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: 'rgba(76,78,100,0.87)'
              },
              '& 	.MuiInputLabel-root.Mui-disabled': {
                WebkitTextFillColor: 'rgba(76,78,100,0.87)'
              },
              mb: 5
            }}
          >
            <Grid container spacing={2} mb={2}>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField label='کدملی' value={selectedDriver.natural_code} dir='ltr' disabled fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField label='نام و نام خانوادگی' value={selectedDriver.name} disabled fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField
                  label='موبایل'
                  value={selectedDriver.phone}
                  inputProps={{ maxLength: 11 }}
                  placeholder='09*********'
                  dir='ltr'
                  disabled
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField label='نوع وسیله نقلیه' value={selectedDriver.vehicle_type} disabled fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField label='وسیله نقلیه' value={selectedDriver.vehicle} fullWidth disabled />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField fullWidth label='شماره وسیله نقلیه' value={selectedDriver.vehicle_card_id} disabled />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField label='پلاک' value={selectedDriver.vehicle_plaque} disabled fullWidth />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField fullWidth label='نام کاربری' value={selectedDriver.username} disabled />
              </Grid>
            </Grid>
            <Box>
              <Button variant='contained' color='primary' onClick={setVerified} sx={{ mx: 2 }}>
                انتخاب{' '}
              </Button>
              <Button variant='contained' color='error' onClick={handleClose}>
                بستن
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
