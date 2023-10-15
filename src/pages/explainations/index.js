import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import toast from 'react-hot-toast'
import Table from '@core/components/table/table'
import Button from '@mui/material/Button'

import TableHeader from '@core/components/table-header/TableHeader'
import RowOptions from '@core/components/row-options/row-options'
import AddUserDrawer from './AddUserDrawer'
import { deleteUser, fetchData } from './requests'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

function ACLPage() {
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: 'id desc', serach: '' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])

  const headers = [
    { key: 'name', label: 'تام کاربر' },
    { key: 'code', label: 'تام کاربری' },
    { key: 'tax_code', label: 'کدملی' }
  ]

  const downloadApi = () =>
    toast.promise(
      fetchData(sortModel).then(response => {
        setDownloadData(
          response.data.map(element => ({
            ...element
          }))
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
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

  const deleteFunction = company => {
    toast.promise(deleteUser(company.id).then(setChange(true)), {
      loading: 'در حال حذف کاربر',
      success: 'با موفقیت حذف شد',
      error: err => (err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است')
    })
  }

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'name',
      headerName: 'نام کالا/خدمت',
      hideable: false,
      filterOperators,
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
      field: 'code',
      headerName: 'کد کالا',
      filterOperators,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.code}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'tax_code',
      minWidth: 150,
      headerName: 'کد ۱۳ رقمی',
      filterable: false,
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.tax_code}
          </Typography>
        </Box>
      )
    },

    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      hideable: false,
      filterable: false,
      field: 'گزینه ها',
      headerName: 'گزینه ها',
      renderCell: ({ row }) => (
        <RowOptions
          company={row}
          toggleShowUserDrawer={toggleShowUserDrawer}
          toggleEditUserDrawer={toggleEditUserDrawer}
          setSelectedCompany={setSelectedCompany}
          setChange={setChange}
          selectedCompany={selectedCompany}
          deleteFunction={deleteFunction}
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
            name='تعریف'
          >
            <Button
              variant='outlined'
              color='inherit'
              onClick={() => window.open('https://stuffid.tax.gov.ir/', '_blank').focus()}
            >
              دریافت شناسه کالا و خدمات
            </Button>
          </TableHeader>
          <GridContainer sx={{ p: 4, m: 1 }}>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} />
          </GridContainer>
        </Card>
      </Grid>
      {addUserOpen && (
        <AddUserDrawer
          open={addUserOpen}
          toggle={toggleAddUserDrawer}
          setChange={setChange}
          edit={false}
          company={null}
          showUser={false}
        />
      )}
      {openEdit && (
        <AddUserDrawer
          open={openEdit}
          toggle={toggleEditUserDrawer}
          setChange={setChange}
          user={selectedCompany}
          edit
          showUser={false}
        />
      )}
      {showUser && (
        <AddUserDrawer
          open={showUser}
          toggle={toggleShowUserDrawer}
          setChange={setChange}
          edit
          user={selectedCompany}
          showUser
        />
      )}
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
