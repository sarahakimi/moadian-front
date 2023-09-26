import React from 'react'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'

function DonePage({ handleReset }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box>
        <img src='/images/pages/successfull.png' alt='موفق' />
      </Box>
      <p>با موفقیت ارسال شد.</p>
      <Button size='large' variant='contained' sx={{ m: 1 }} color='success' onClick={handleReset}>
        بارگذاری صورتحساب جدید
      </Button>
    </div>
  )
}

export default DonePage
