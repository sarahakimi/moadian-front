/* eslint-disable react/no-unstable-nested-components */
import {useCallback, useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import {DataGrid, faIR, getGridStringOperators, GridToolbarFilterButton} from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import {styled} from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import moment from 'jalali-moment'
import Paper from '@mui/material/Paper'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import {EyeOutline, PlusOutline} from 'mdi-material-ui'
import http from 'services/http'
import CustomChip from '@core/components/mui/chip'
import {Alert, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import DialogContentText from '@mui/material/DialogContentText'
import Button from '@mui/material/Button'
import Snackbar from "@mui/material/Snackbar";
import AddCourierDrawer from './AddCourierDrawer'
import TableHeader from './TableHeader'
import EditDuration from './EditDuration'
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
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({page: 1, page_size: 10, sort_by: 'id desc'})
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [openDurationEdit, setOpenDurationEdit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showUser, setShowUser] = useState(false)

  const [alert, setAlert] = useState({
    open: false,
    variant: "",
    message: ""
  })
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleEditDurationDrawer = () => setOpenDurationEdit(!openDurationEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

  function RowOptions({company}) {
    const [anchorEl, setAnchorEl] = useState(null)
    const rowOptionsOpen = Boolean(anchorEl)

    const handleRowOptionsClick = event => {
      setAnchorEl(event.currentTarget)
    }

    const handleRowOptionsClose = () => {
      setAnchorEl(null)
    }

    const handleDelete = id => {
      setLoading(true)
      http
        .delete(`company/${id}`, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          setLoading(false)
          setChange(true)
        })
        .catch(err => {
          setLoading(false)
          setAlert({open: true, message: err.response.data.message, variant: "error"})
        })
      handleRowOptionsClose()
    }

    const handleDurationExtention = selected => {
      setSelectedCompany(selected)
      toggleEditDurationDrawer()
    }

    const handleEdit = selected => {
      setSelectedCompany(selected)
      toggleEditUserDrawer()
    }

    const handleShowCompany = selected => {
      setSelectedCompany(selected)
      toggleShowUserDrawer()
    }

    return (
      <>
        <IconButton size='small' onClick={handleRowOptionsClick}>
          <DotsVertical/>
        </IconButton>
        <Menu
          keepMounted
          anchorEl={anchorEl}
          open={rowOptionsOpen}
          onClose={handleRowOptionsClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          PaperProps={{style: {minWidth: '8rem'}}}
        >
          <MenuItem onClick={() => handleShowCompany(company)}>
            <EyeOutline fontSize='small' sx={{mr: 2}}/>
            نمایش شرکت
          </MenuItem>
          <MenuItem onClick={() => handleDurationExtention(company)}>
            <PlusOutline fontSize='small' sx={{mr: 2}}/>
            تمدید اشتراک
          </MenuItem>
          <MenuItem onClick={() => handleEdit(company)}>
            <PencilOutline fontSize='small' sx={{mr: 2}}/>
            ویرایش
          </MenuItem>
          <MenuItem onClick={() => handleDelete(company.id)}>
            <DeleteOutline fontSize='small' sx={{mr: 2}}/>
            حذف
          </MenuItem>
        </Menu>
      </>
    )
  }

  const filterOperators = getGridStringOperators().filter(({value}) =>
    ['contains' /* add more over time */].includes(value),
  );

  const columns = [
    {
      flex: 0.1,
      minWidth: 230,
      field: 'name',
      filterOperators,
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
      filterable: false,
      headerName: 'نام ادمین',
      sortable: false,
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
      flex: 0.2,
      minWidth: 230,
      field: 'adminUsername',
      headerName: 'نام کاربری ادمین',
      filterable: false,
      hideable: false,
      sortable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
            <Typography noWrap component='a' variant='subtitle2' sx={{color: 'text.primary', textDecoration: 'none'}}>
              {row?.admin?.username}
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
      headerName: 'تاریخ ثبت نام',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {moment(row.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'اشتراک',
      filterOperators,
      field: 'duration_of_activity',
      hideable: false,
      renderCell: ({row}) => (
        <Typography variant='subtitle1' noWrap sx={{textTransform: 'capitalize'}}>
          {row.duration_of_activity} روز
        </Typography>
      )
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'active',
      filterable: false,
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
    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      hideable: false,
      field: 'گزینه ها',
      headerName: 'گزینه ها',
      renderCell: ({row}) => <RowOptions company={row}/>
    }
  ]

  useEffect(() => {
    if (change) {
      setAlert({open: true, message: "با موفقیت انجام شد", variant: "success"})
    }
    setLoading(true)
    http
      .get('company/all/admin', sortModel, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(async response => {
        if (response.data === null) {
          setData([])
        } else setData(response.data)
        setChange(false)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setAlert({open: true, message: err.response.data.message, variant: "error"})
      })
  }, [sortModel, change])


  const handleSortModelChange = Model => {
    const sortMode = Model.length !== 0 ? `${Model[0]?.field} ${Model[0]?.sort}` : 'id desc'
    setSortModel({...sortModel, ...{sort_by: `${sortMode}`}})
  }

  const handleDialogClose = () => {
    setSuccess(false)
    setChange(true)
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
          <TableHeader toggle={toggleAddUserDrawer} setLoading={setLoading} setAlert={setAlert} sortModel={sortModel}/>
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
      {addUserOpen && (
        <AddCourierDrawer
          open={addUserOpen}
          toggle={toggleAddUserDrawer}
          setChange={setChange}
          edit={false}
          company={null}
          setLoading={setLoading}
        />
      )}

      {openEdit && (
        <EditDuration
          open={openEdit}
          toggle={toggleEditUserDrawer}
          setChange={setChange}
          company={selectedCompany}
          edit={false}
          setLoading={setLoading}
        />
      )}
      {openDurationEdit && (
        <EditDuration
          open={openDurationEdit}
          toggle={toggleEditDurationDrawer}
          setChange={setChange}
          company={selectedCompany}
          edit
          setLoading={setLoading}
        />
      )}
      {showUser && (
        <AddCourierDrawer
          open={showUser}
          toggle={toggleShowUserDrawer}
          setChange={setChange}
          edit
          company={selectedCompany}
          setLoading={setLoading}
        />
      )}

      <Dialog
        open={success}
        onClose={handleDialogClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>حذف شرکت</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>شرکت با موفقیت حذف شد</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            متوجه شدم
          </Button>
        </DialogActions>
      </Dialog>
      <Loading open={loading}/>

    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ACLPage
