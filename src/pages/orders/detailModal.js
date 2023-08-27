import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import Close from 'mdi-material-ui/Close'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { getGridStringOperators } from '@mui/x-data-grid'
import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '../../@core/components/table/table'

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))
function DetailModal({ open, setOpen, data }) {
  const handleClose = () => {
    setOpen(false)
  }
  const [sortModel, setSortModel] = useState({ page: 1, page_size: 100, sort_by: 'id desc', serach: '' })

  const filterOperators = getGridStringOperators().filter(({ value }) =>
    ['contains' /* add more over time */].includes(value)
  )

  const columns = [
    {
      flex: 0.1,
      minWidth: 100,
      field: 'code',
      filterOperators,
      headerName: 'شناسه',
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
      flex: 0.9,
      minWidth: 100,
      field: 'mesage',
      filterOperators,
      headerName: 'پیام',
      hideable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap component='a' variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
              {row.message}
            </Typography>
          </Box>
        </Box>
      )
    }
  ]

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open={open}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '1500px' // Set your width here
          }
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
        لیست جزئیات
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500]
        }}
      >
        <Close />
      </IconButton>
      <DialogContent dividers>
        <GridContainer sx={{ p: 4, m: 1 }}>
          <Table columns={columns} data={data} noFilter sortModel={sortModel} setSortModel={setSortModel} />
        </GridContainer>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          بستن
        </Button>
      </DialogActions>
    </BootstrapDialog>
  )
}

export default DetailModal
