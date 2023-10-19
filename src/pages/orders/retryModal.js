import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Dialog from '@mui/material/Dialog'
import { getGridStringOperators } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Close from 'mdi-material-ui/Close'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import toast from 'react-hot-toast'
import { fetchOrderDetail } from './requests'
import SecondForm from '../newOrder/secondForm'

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

function RetryModal({ open, setOpen, id }) {
  const [data, setData] = useState([])

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    fetchOrderDetail(id)
      .then(response => {
        setData([
          {
            ...response.data.sent_body_invoice,
            ...response.data.sent_header_invoice,
            id
          }
        ])
      })
      .catch(err => {
        const errorMessage = err?.response?.data?.message ? err.response.data.message : 'خطایی رخ داده است'
        toast.error(errorMessage)
        handleClose()
      })
  }, [])

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
        ارسال مجدد
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
          <SecondForm rows={data} setRows={setData} handleNext={handleClose} />
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

export default RetryModal
