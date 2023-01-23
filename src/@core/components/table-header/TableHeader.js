import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from "react"
import ExportButton from "../export-button/export-button";

function TableHeader({toggle, data, headers, api, name}) {
  return (
    <Box sx={{p: 5, pb: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
      <ExportButton api={api} headers={headers} data={data}/>

      <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>

        <Button sx={{mb: 2}} onClick={toggle} variant='contained'>
          افزودن {name}
        </Button>
      </Box>

    </Box>
  )
}

export default TableHeader
