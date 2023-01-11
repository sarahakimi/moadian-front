// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Icons Imports
import ExportVariant from 'mdi-material-ui/ExportVariant'
import {CSVDownload} from "react-csv";
import React, {useEffect, useState} from "react"
import moment from "jalali-moment";
import http from "../../services/http";

function TableHeader({toggle, sortModel, setLoading}) {
  const [data, setData] = useState([])
  const [initiateDownload, setInitiateDownload] = useState(false)

  const headers = [
    {key: "id", label: "شناسه"},
    {key: "name", label: "تام کاربر"},
    {key: "username", label: "تام کاربری"},
    {key: "natural_code", label: "کدملی"},
    {key: "phone", label: "شماره تلفن"},
    {key: "created_at", label: "تاریخ ایجاد"},
  ];
  useEffect(() => {
    if (data.length) {
      setInitiateDownload(true)
    }
  }, [data])

  const fetchCsvData = () => {
    setLoading(true)
    setInitiateDownload(false)
    http
      .get('user/admin/all?type=1', sortModel, {
        Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
      })
      .then(async response => {
        console.log("data", response.data)
        setData(response.data.map((element) => ({
          ...element,
          created_at: moment(element.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'),
        })))
        setLoading(false)
      })
      .catch(() => {

        setLoading(false)

        return false
      })
  }

  return (
    <Box sx={{p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
      <Button sx={{mr: 4, mb: 2}} color='secondary' variant='outlined' onClick={fetchCsvData}
              startIcon={<ExportVariant fontSize='small'/>}>
        خروجی
      </Button>
      {initiateDownload && <CSVDownload data={data} headers={headers} target="_blank"/>}

      <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>


        <Button sx={{mb: 2}} onClick={toggle} variant='contained'>
          افزودن کاربر
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
