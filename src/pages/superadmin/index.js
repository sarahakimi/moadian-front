import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import CustomChip from '@core/components/mui/chip'
import toast from 'react-hot-toast'
import Table from '@core/components/table/table'
import moment from 'jalali-moment'
import AddCourierDrawer from './AddCourierDrawer'
import TableHeader from '../../@core/components/table-header/TableHeader'
import EditDuration from './EditDuration'
import { fetchData } from './requests'
import RowOptions from './row-options'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

const userStatusObj = {
  true: 'success',
  false: 'secondary'
}

function ACLPage() {
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: 'id desc' })
  const [data, setData] = useState([])
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [openDurationEdit, setOpenDurationEdit] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleEditDurationDrawer = () => setOpenDurationEdit(!openDurationEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)
  const [downloadData, setDownloadData] = useState([])
  const [change, setChange] = useState(false)

  const headers = [
    { key: 'id', label: 'شناسه' },
    { key: 'name', label: 'تام شرکت' },
    { key: 'username', label: 'تام کاربری شرکت' },
    { key: 'duration_of_activity', label: 'اشتراک' },
    { key: 'activated', label: 'وضعیت' },
    { key: 'created_at', label: 'تاریخ ایجاد' }
  ]

  const downloadApi = () =>
    toast.promise(
      fetchData({
        sort_by: sortModel.sort_by,
        search: sortModel.search
      }).then(response => {
        setDownloadData(
          response.data.map(element => {
            const isActive = element.active ? 'فعال' : 'غیرفعال'

            return {
              ...element,

              // created_at: moment(element.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'),
              activated: isActive
            }
          })
        )
      }),
      {
        loading: 'در حال دانلود',
        success: 'دانلود انجام شد',
        error: err =>
          err?.response?.data?.message
            ? err.response?.data?.message
            : 'خطایی رخ داده است.از خالی نبودن موارد دانلود مطمئن شوید.'
      }
    )

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 230,
      field: 'name',
      filterOperators,
      headerName: 'نام شرکت',
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
      field: 'adminUsername',
      headerName: 'نام کاربری',
      filterable: false,
      hideable: false,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row?.username}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'created_at',
      minWidth: 150,
      filterOperators,
      headerName: 'تاریخ ایجاد',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {moment(row.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
          </Typography>
        </Box>
      )
    },

    // {
    //   flex: 0.15,
    //   field: 'first_login',
    //   minWidth: 150,
    //   filterOperators,
    //   headerName: 'تاریخ اولین ورود',
    //   hideable: false,
    //   renderCell: ({ row }) => (
    //     <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //       <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
    //         {moment(row.first_login, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
    //       </Typography>
    //     </Box>
    //   )
    // },
    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'اشتراک',
      filterOperators,
      field: 'duration_of_activity',
      hideable: false,
      renderCell: ({ row }) => (
        <Typography variant='subtitle1' noWrap sx={{ textTransform: 'capitalize' }}>
          {row.duration_of_activity} روز
        </Typography>
      )
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'activated',
      filterable: false,
      headerName: 'وضعیت',
      hideable: false,
      renderCell: ({ row }) => (
        <CustomChip
          skin='light'
          size='small'
          label={row.activated ? 'فعال' : 'غیرفعال'}
          color={userStatusObj[row.activated]}
          sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
        />
      )
    },
    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      hideable: false,
      field: 'گزینه ها',
      filterable: false,
      headerName: 'گزینه ها',
      renderCell: ({ row }) => (
        <RowOptions
          company={row}
          toggleEditDurationDrawer={toggleEditDurationDrawer}
          toggleShowUserDrawer={toggleShowUserDrawer}
          toggleEditUserDrawer={toggleEditUserDrawer}
          setSelectedCompany={setSelectedCompany}
          setChange={setChange}
          selectedCompany={selectedCompany}
        />
      )
    }
  ]

  useEffect(() => {
    setDownloadData([])
    fetchData(sortModel)
      .then(response => {
        if (response.data === null) {
          setData([])
        } else setData(response.data)
        if (change) setChange(false)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
      })
  }, [sortModel, setDownloadData, change])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            toggle={toggleAddUserDrawer}
            data={downloadData}
            api={downloadApi}
            headers={headers}
            name='شرکت'
          />
          <GridContainer sx={{ p: 4, m: 1 }}>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} />
          </GridContainer>
        </Card>
      </Grid>
      {addUserOpen && (
        <AddCourierDrawer
          open={addUserOpen}
          toggle={toggleAddUserDrawer}
          edit={false}
          company={null}
          setChange={setChange}
        />
      )}

      {openEdit && (
        <EditDuration
          open={openEdit}
          toggle={toggleEditUserDrawer}
          company={selectedCompany}
          edit={false}
          setChange={setChange}
        />
      )}
      {openDurationEdit && (
        <EditDuration
          open={openDurationEdit}
          toggle={toggleEditDurationDrawer}
          company={selectedCompany}
          edit
          setChange={setChange}
        />
      )}
      {showUser && <AddCourierDrawer open={showUser} toggle={toggleShowUserDrawer} edit company={selectedCompany} />}
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ACLPage
