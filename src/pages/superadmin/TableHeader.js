import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ExportVariant from 'mdi-material-ui/ExportVariant'
import {CSVDownload} from "react-csv";
import React, {useEffect, useState} from "react"
import moment from "jalali-moment";
import http from "services/http";

function TableHeader({sortModel, toggle, setLoading, setAlert}) {

  const [data, setData] = useState([])
  const [initiateDownload, setInitiateDownload] = useState(false)

  const headers = [
    {key: "id", label: "شناسه"},
    {key: "name", label: "تام شرکت"},
    {key: "duration_of_activity", label: "اشتراک"},
    {key: "active", label: "وضعیت"},
    {key: "created_at", label: "تاریخ ایجاد"},
  ];
  useEffect(() => {
    if (data.length) {
      setInitiateDownload(true)
    }
  }, [data])

  const fetchCsvData = () => {
    setLoading(true)
    http
      .get('company/all/admin', sortModel, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(async response => {
        setData(response.data.map((element) => {
          const isActive = element.active ? "فعال" : "غیرفعال"

          return {
            ...element,
            created_at: moment(element.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'),
            active: isActive
          }
        }))
        setLoading(false)
        setAlert({open: true, message: "با موفقیت انجام شد", variant: "success"})
      })
      .catch(err => {
        setLoading(false)
        setAlert({open: true, message: err.response.data.message, variant: "error"})
      })

  }

  return (
    <Box sx={{p: 5, pb: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
      <Button sx={{mr: 4, mb: 2}} color='secondary' variant='outlined' startIcon={<ExportVariant fontSize='small'/>}
              onClick={fetchCsvData}>
        خروجی
        {initiateDownload && <CSVDownload data={data} headers={headers} target="_blank"/>}
      </Button>


      <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>

        <Button sx={{mb: 2}} onClick={toggle} variant='contained'>
          افزودن کوریر
        </Button>
      </Box>

    </Box>
  )
}

export default TableHeader
