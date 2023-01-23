/* eslint-disable react/no-unstable-nested-components */
import {useCallback, useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {DataGrid, faIR, getGridStringOperators, GridToolbarFilterButton} from '@mui/x-data-grid'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import http from 'services/http'
import CustomChip from '@core/components/mui/chip'
import Snackbar from "@mui/material/Snackbar";
import {Alert} from "@mui/material";
import Loading from "../../@core/components/loading/loading";

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
  const [sortModel, setSortModel] = useState({page: 1, page_size: 10, sort_by: 'id desc'})
  const [data, setData] = useState([])
  const [change, setChange] = useState(true)

  const [alert, setAlert] = useState({
    open: false,
    variant: "",
    message: ""
  })

  const filterOperators = getGridStringOperators().filter(({value}) =>
    ['contains' /* add more over time */].includes(value),
  );

  const columns = [
    {
      flex: 0.1,
      minWidth: 230,
      field: 'name',
      headerName: 'نام کوریر',
      filterOperators,
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
      minWidth: 110,
      field: 'active',
      headerName: 'وضعیت',
      filterable: false,
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
        if (response.data === null) {
          setData([])
        } else setData(response.data)
        setChange(false)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        setAlert({open: true, message: err.response.data.message, variant: "error"})
      })
  }, [sortModel, change])


  const handleSortModelChange = Model => {
    const sortMode = Model.length !== 0 ? `${Model[0]?.field} ${Model[0]?.sort}` : 'id desc'
    setSortModel({...sortModel, ...{sort_by: `${sortMode}`}})
  }


  const handlePageSizeChange = newPageSize => {
    setPageSize(newPageSize)
    setSortModel({...sortModel, ...{page_size: newPageSize}})
  }
  const [page, setPage] = useState(0)

  const handlePageChange = newPage => {
    setPage(newPage)
    setSortModel({...sortModel, ...{page: newPage + 1}})
  }
  const [filter, setFilter] = useState({})

  const handleFilterChange = useCallback((filterModel) => {

    console.log(filterModel)
    setFilter(filterModel)
    if (Object.keys(filterModel).length !== 0 && filterModel.items[0]?.value !== undefined) {
      setSortModel({...sortModel, ...{search: `${filterModel.items[0].columnField}|${filterModel.items[0]?.value}`}})
      console.log(`${filterModel.items[0].columnField}|${filterModel.items[0]?.value}`)
    } else {
      setSortModel({...sortModel, ...{search: ''}})
    }
  }, [filter, setFilter]);

  const handleSnackbarClose = () => {
    setAlert({open: false, message: "", variant: ""})
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <GridContainer sx={{p: 4, m: 1}}>
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
              rowCount={50}
              onFilterModelChange={handleFilterChange}
              isLoading={loading}
              components={{
                Toolbar: GridToolbarFilterButton,
              }}
            />
          </GridContainer>
        </Card>
      </Grid>
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
                key="TransitionUp"
                variant="error"
      >
        <Alert severity={alert.variant} sx={{width: '100%'}}>
          {alert.message}
        </Alert>
      </Snackbar>
      <Loading open={loading}/>
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
