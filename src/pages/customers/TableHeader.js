// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icons Imports
import ExportVariant from 'mdi-material-ui/ExportVariant'
import {CSVDownload} from "react-csv";
import React, {useEffect, useState} from "react"
import moment from "jalali-moment";
import http from "../../services/http";

function TableHeader({handleFilter, toggle, value, sortModel, setLoading}) {
  const [data, setData] = useState([])
  const [initiateDownload, setInitiateDownload] = useState(false)

  const headers = [
    {key: "id", label: "شناسه"},
    {key: "name", label: "تام کاربر"},
    {key: "username", label: "نام کاربری"},
    {key: "phone", label: "موبایل"},
    {key: "tel_number", label: "شماره تلفن"},
    {key: "postal_code", label: "کدپستی"},
    {key: "natural_code", label: "کدملی"},
    {key: "provence", label: "استان"},
    {key: "city", label: "شهر"},
    {key: "address", label: "ادرس"},
    {key: "created_at", label: "تاریخ ایجاد"},
    {key: "other_information", label: "سایر اطلاعات"},
    {key: "texes", label: "شامل مالیات"},
    {key: "off_percent_status", label: "شامل تخفیف"},
    {key: "off_percent", label: "درصد تخفیف"}
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
      .get('customer/admin/3/all', sortModel, {
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
        <TextField
          size='small'
          value={value}
          sx={{mr: 6, mb: 2}}
          placeholder='جستجوی مشتری'
          onChange={e => handleFilter(e.target.value)}
        />

        <Button sx={{mb: 2}} onClick={toggle} variant='contained'>
          افزودن مشتری
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
