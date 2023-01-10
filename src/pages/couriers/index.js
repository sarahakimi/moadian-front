/* eslint-disable react/no-unstable-nested-components */
import {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {DataGrid, faIR} from '@mui/x-data-grid'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import http from 'services/http'
import CustomChip from '@core/components/mui/chip'
import Loading from "../components/loading/loading";

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
  const [loading, setLoading] = useState(false)
  const [pageSize, setPageSize] = useState(10)
  const [sortModel, setSortModel] = useState({page: 1, page_size: 10, sort_by: ''})
  const [data, setData] = useState([])
  const [change, setChange] = useState(true)

  const columns = [
    {
      flex: 0.1,
      minWidth: 230,
      field: 'name',
      headerName: 'نام کوریر',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
            <Typography noWrap component='a' variant='subtitle2' sx={{color: 'text.primary', textDecoration: 'none'}}>
              {row.name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 230,
      field: 'adminName',
      headerName: 'نام مدیرعامل',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
            <Typography noWrap component='a' variant='subtitle2' sx={{color: 'text.primary', textDecoration: 'none'}}>
              {row?.admin?.name}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'active',
      headerName: 'وضعیت',
      hideable: false,
      renderCell: ({row}) => (
        <CustomChip
          skin='light'
          size='small'
          label={row.active ? 'فعال' : 'غیرفعال'}
          color={userStatusObj[row.active]}
          sx={{textTransform: 'capitalize', '& .MuiChip-label': {lineHeight: '18px'}}}
        />
      )
    },
  ]

  useEffect(() => {
    setLoading(true)
    http
      .get('company/all', sortModel, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(async response => {
        setData(response.data)
        setChange(false)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [sortModel, change])


  const handleSortModelChange = Model => {
    setSortModel({...sortModel, ...{sort_by: `${Model[0]?.field} ${Model[0]?.sort}`}})
  }


  const handlePageSizeChange = newPageSize => {
    console.log(newPageSize)
    setPageSize(newPageSize)
    setSortModel({...sortModel, ...{page_size: newPageSize}})
  }
  const [page, setPage] = useState(0)

  const handlePageChange = newPage => {
    setPage(newPage)
    setSortModel({...sortModel, ...{page: newPage + 1}})
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <GridContainer>
            <DataGrid
              autoHeight
              pagination
              rows={data}
              columns={columns}
              pageSize={pageSize}
              disableSelectionOnClick
              rowsPerPageOptions={[10, 25, 50]}
              sx={{'& .MuiDataGrid-columnHeaders': {borderRadius: 0}}}
              paginationMode='server'
              onPageSizeChange={handlePageSizeChange}
              localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
              disableColumnSelector
              sortingMode='server'
              onSortModelChange={handleSortModelChange}
              onPageChange={handlePageChange}
              page={page}
              disableColumnFilter
              rowCount={50}
            />
          </GridContainer>
        </Card>
      </Grid>
      <Loading open={loading}/>
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
