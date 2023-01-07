import {useCallback, useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import {DataGrid, faIR} from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import {styled} from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import moment from 'jalali-moment'
import Paper from '@mui/material/Paper'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import {EyeOutline} from 'mdi-material-ui'
import http from 'services/http'
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import TableHeader from './TableHeader'
import AddUserDrawer from "./AddUserDrawer";
import Loading from "../components/loading/loading";

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none',
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none',
  },
});

function ACLPage() {
  const [loading, setLoading] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [value, setValue] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({page: 1, page_size: 10, sort_by: ""})
  const [data, setData] = useState([])
  const [change, setChange] = useState(true)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

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

    const handleDelete = (id) => {
      setLoading(true)
      http
        .delete(`company/${id}`, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          setSuccess(true)
          setLoading(false)
        })
        .catch(err => {
          console.log(err.response)
          setLoading(false)
        })
      handleRowOptionsClose()
    }

    const handleEdit = (element) => {
      setSelectedCompany(element)
      toggleEditUserDrawer()
    }

    const handleShowCompany = (element) => {
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
            نمایش راننده
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

  const columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'name',
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
      flex: 0.2,
      minWidth: 230,
      field: 'username',
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
      field: 'created_at',
      minWidth: 150,
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
      field: 'natural_code',
      minWidth: 150,
      headerName: 'کدملی',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.natural_code}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'phone',
      minWidth: 150,
      headerName: 'شماره تلفن',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.natural_code}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'vehicle',
      minWidth: 150,
      headerName: 'وسیله نقلیه',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.vehicle}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      hideable: false,
      field: 'گزینه ها',
      headerName: 'گزینه ها',
      renderCell: ({row}) => <RowOptions user={row}/>
    }
  ]

  useEffect(() => {
    http
      .get('user/admin/all?type=2', sortModel, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(response => {
        if (response.data != null) {
          setData(response.data)
        } else {
          setData([])
        }

        setChange(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [sortModel, change])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [change])


  const handleSortModelChange = (Model) => {
    const sortMode = Model.length !== 0 ? `${Model[0]?.field} ${Model[0]?.sort}` : ''
    setSortModel({...sortModel, ...{sort_by: `${sortMode}`}})
  }

  const handleDialogClose = () => {
    setSuccess(false);
    setChange(true)
  };

  const handlePageSizeChange = (newPageSize) => {
    console.log(newPageSize)
    setPageSize(newPageSize)
    setSortModel({...sortModel, ...{page_size: newPageSize}})
  }
  const [page,] = useState(0)

  const handlePageChange = (newPage) => {
    setPageSize(newPage)
    setSortModel({...sortModel, ...{page: newPage + 1}})

  }

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
              sx={{'& .MuiDataGrid-columnHeaders': {borderRadius: 0}}}
              paginationMode="server"
              onPageSizeChange={handlePageSizeChange}
              localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
              disableColumnSelector
              sortingMode="server"
              onSortModelChange={handleSortModelChange}
              onPageChange={handlePageChange}
              page={page}
              disableColumnFilter
              rowCount={50}
            />
          </GridContainer>
        </Card>
      </Grid>
      {addUserOpen &&
        <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} setChange={setChange} edit={false}
                       company={null} showUser={false} setLoading={setLoading}
        />
      }
      {openEdit &&
        <AddUserDrawer open={openEdit} toggle={toggleEditUserDrawer} setChange={setChange} user={selectedCompany}
                       edit showUser={false} setLoading={setLoading}/>
      }
      {showUser &&
        <AddUserDrawer open={showUser} toggle={toggleShowUserDrawer} setChange={setChange} edit
                       user={selectedCompany} showUser setLoading={setLoading}/>
      }


      <Dialog
        open={success}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          حذف راننده
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            راننده با موفقیت حذف شد
          </DialogContentText>
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
