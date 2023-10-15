import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import toast from 'react-hot-toast'
import Table from '@core/components/table/table'
import TableHeader from '@core/components/table-header/TableHeader'
import IconButton from '@mui/material/IconButton'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import Tooltip from '@mui/material/Tooltip'
import { fetchData } from './requests'
import DetailModal from './detailModal'
import Loading from '../../@core/components/loading/loading'

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
  const [LoadingOpen, setLoadingOpen] = useState(false)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 10, sort_by: 'id desc', serach: '' })
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [detailData, setDetailData] = useState([])

  const headers = [
    { key: 'created_at', label: 'تاریخ' },
    { key: 'referenceNumber', label: 'شماره پیگیری' },
    { key: 'status', label: 'وضعیت' }
  ]

  const downloadApi = () =>
    toast.promise(
      fetchData({}).then(response => {
        setDownloadData(
          response.data
            .filter(element => element.status === 'FAILED')
            .map(element => {
              let status
              if (element.status === 'FAILED') status = 'ناموفق'
              else if (element.status === 'SUCCESS') status = 'موفق'
              else status = 'پیدا نشد'

              return { ...element, status }
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
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 100,
      field: 'referenceNumber',
      filterOperators,
      headerName: 'شماره پیگیری',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            {row.referenceNumber === '' ? (
              <Typography
                noWrap
                component='a'
                variant='subtitle2'
                sx={{ color: 'text.primary', textDecoration: 'none' }}
              >
                ندارد
              </Typography>
            ) : (
              <Typography
                noWrap
                component='a'
                variant='subtitle2'
                sx={{ color: 'text.primary', textDecoration: 'none' }}
              >
                {row.referenceNumber}
              </Typography>
            )}
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'status',
      filterOperators,
      headerName: 'وضعیت',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            {row.status === 'FAILED' && (
              <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'red', textDecoration: 'none' }}>
                ناموفق
              </Typography>
            )}
            {row.status === 'NOT_FOUND' && (
              <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'black', textDecoration: 'none' }}>
                پیدا نشد
              </Typography>
            )}
            {row.status === 'SUCCESS' && (
              <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'green', textDecoration: 'none' }}>
                موفق
              </Typography>
            )}
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'detail',
      filterOperators,
      headerName: 'جزئیات',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
            {row?.data?.error?.length > 0 && (
              <Tooltip title='خطا ها'>
                <IconButton
                  color='error'
                  onClick={() => {
                    setOpenModal(true)
                    setDetailData(row.data.error.map(element => ({ ...element, id: element.code })))
                  }}
                >
                  <InformationOutline />
                </IconButton>
              </Tooltip>
            )}
            {row?.data?.warning?.length > 0 && (
              <Tooltip title='هشدار ها'>
                <IconButton
                  color='warning'
                  onClick={() => {
                    setOpenModal(true)
                    setDetailData(row.data.warning.map(element => ({ ...element, id: element.code })))
                  }}
                >
                  <InformationOutline />
                </IconButton>
              </Tooltip>
            )}
            {row?.data?.error?.length <= 0 && row?.data?.warning?.length <= 0 && (
              <Typography
                noWrap
                component='a'
                variant='subtitle2'
                sx={{ color: 'text.primary', textDecoration: 'none' }}
              >
                موردی برای مشاهده وجود ندارد
              </Typography>
            )}
          </Box>
        </Box>
      )
    }
  ]
  useEffect(() => {
    setLoadingOpen(true)
    setDownloadData([])
    fetchData({ page: sortModel.page, page_size: sortModel.page_size })
      .then(response => {
        if (response.data === null) {
          setData([])
        } else setData(response.data.map(element => ({ ...element, id: element.referenceNumber })).reverse())
        if (change) setChange(false)
        setLoadingOpen(false)
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        setLoadingOpen(false)
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
            name='فاکتور'
            noAdd
          />
          <GridContainer sx={{ p: 4, m: 1 }}>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} selfFilter />
          </GridContainer>
        </Card>
      </Grid>
      <DetailModal open={openModal} setOpen={setOpenModal} data={detailData} />
      <Loading open={LoadingOpen} />
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
