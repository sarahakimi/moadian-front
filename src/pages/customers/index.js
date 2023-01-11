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
import Paper from '@mui/material/Paper'
import Laptop from 'mdi-material-ui/Laptop'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import CogOutline from 'mdi-material-ui/CogOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import {EyeOutline} from 'mdi-material-ui'
import http from 'services/http'
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import DialogContentText from '@mui/material/DialogContentText'
import Button from '@mui/material/Button'
import TableHeader from './TableHeader'
import AddUserDrawer from './AddUserDrawer'
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

const userRoleObj = {
  admin: <Laptop sx={{mr: 2, color: 'error.main'}}/>,
  author: <CogOutline sx={{mr: 2, color: 'warning.main'}}/>,
  editor: <PencilOutline sx={{mr: 2, color: 'info.main'}}/>,
  maintainer: <ChartDonut sx={{mr: 2, color: 'success.main'}}/>,
  subscriber: <AccountOutline sx={{mr: 2, color: 'primary.main'}}/>
}

function ACLPage() {
  const [loading, setLoading] = useState([false])
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [value, setValue] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({page: 1, page_size: 10, sort_by: 'created_at desc'})
  const [data, setData] = useState([])
  const [change, setChange] = useState(true)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

  const handleSortModelChange = Model => {
    const sortMode = Model.length !== 0 ? `${Model[0]?.field} ${Model[0]?.sort}` : 'created_at desc'
    setSortModel({...sortModel, ...{sort_by: `${sortMode}`}})
  }

  const handleDialogClose = () => {
    setSuccess(false)
    setChange(true)
  }


  // eslint-disable-next-line react/no-unstable-nested-components
  function RowOptions({user}) {
    const [anchorEl, setAnchorEl] = useState(null)
    const rowOptionsOpen = Boolean(anchorEl)

    const handleRowOptionsClick = event => {
      setAnchorEl(event.currentTarget)
    }

    const handleRowOptionsClose = () => {
      setAnchorEl(null)
    }

    const handleDelete = id => {
      http
        .delete(`company/${id}`, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          setSuccess(true)
        })
        .catch(err => {
          console.log(err.response)
        })
      handleRowOptionsClose()
    }

    const handleEdit = element => {
      setSelectedCompany(element)
      toggleEditUserDrawer()
    }

    const handleShowCompany = element => {
      setSelectedCompany(element)
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
          <MenuItem onClick={() => handleShowCompany(user)}>
            <EyeOutline fontSize='small' sx={{mr: 2}}/>
            نمایش مشتری
          </MenuItem>
          <MenuItem onClick={() => handleEdit(user)}>
            <PencilOutline fontSize='small' sx={{mr: 2}}/>
            ویرایش
          </MenuItem>
          <MenuItem onClick={() => handleDelete(user.id)}>
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
      minWidth: 150,
      field: 'name',
      filterOperators,
      headerName: 'نام و نام خانوادگی',
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
      minWidth: 150,
      field: 'username',
      filterOperators,
      headerName: 'نام کاربری',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
            <Typography noWrap component='a' variant='subtitle2' sx={{color: 'text.primary', textDecoration: 'none'}}>
              {row.username}
            </Typography>
          </Box>
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
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          {userRoleObj[row.role]}
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.natural_code}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'phone',
      minWidth: 150,
      headerName: 'شماره تلفن',
      filterOperators,
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          {userRoleObj[row.role]}
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.natural_code}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'postal_code',
      minWidth: 150,
      filterOperators,
      headerName: 'کدپستی',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.postal_code}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'city',
      minWidth: 150,
      filterOperators,
      headerName: 'شهر',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.city}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.2,
      field: 'address',
      minWidth: 150,
      filterOperators,
      headerName: 'ادرس',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.address}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      sortable: false,
      hideable: false,
      filterable: false,
      field: 'گزینه ها',
      headerName: 'گزینه ها',
      renderCell: ({row}) => <RowOptions user={row}/>
    }
  ]

  useEffect(() => {
    setLoading(true)
    http
      .get('customer/admin/3/all', sortModel, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(async response => {
        setLoading(false)
        if (response.data === null) {
          setData([])
        } else setData(response.data)
        setChange(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }, [sortModel, change])

  const handleFilter = useCallback(
    val => {
      setValue(val)
    },
    [change]
  )


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

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} sortModel={sortModel}
                       setLoading={setLoading}/>
          <GridContainer>
            <DataGrid
              autoHeight
              pagination
              rows={data}
              columns={columns}
              pageSize={pageSize}
              disableSelectionOnClick
              rowsPerPageOptions={[10, 25, 50]}
              sx={{'& .MuiDataGrid-columnHeaders': {borderRadius: 0},}}
              paginationMode='server'
              onPageSizeChange={handlePageSizeChange}
              localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
              disableColumnSelector
              sortingMode='server'
              onSortModelChange={handleSortModelChange}
              onPageChange={handlePageChange}
              page={page}
              rowCount={50}
              filterMode="server"
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
        <AddUserDrawer
          open={addUserOpen}
          toggle={toggleAddUserDrawer}
          setChange={setChange}
          edit={false}
          company={null}
          showUser={false}
          setLoading={setLoading}
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
          setLoading={setLoading}
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
          setLoading={setLoading}
        />
      )}

      <Dialog
        open={success}
        onClose={handleDialogClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>حذف مشتری</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>مشتری با موفقیت حذف شد</DialogContentText>
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
  subject: 'every-page'
}

export default ACLPage
