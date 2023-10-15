import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import ExportButton from '../export-button/export-button'

function TableHeader({ toggle, data, headers, api, name, noAdd, children, noExport }) {
  return (
    <Box sx={{ p: 5, pb: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>{!noExport && <ExportButton api={api} headers={headers} data={data} />}</Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 2 }}>
        {children}
        {!noAdd && (
          <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
            افزودن {name}
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default TableHeader
