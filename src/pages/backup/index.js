import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {getGridStringOperators} from '@mui/x-data-grid'
import {styled} from '@mui/material/styles'
import moment from 'jalali-moment'
import Paper from '@mui/material/Paper'
import toast from "react-hot-toast";
import Table from "@core/components/table/table";

import TableHeader from "@core/components/table-header/TableHeader";

import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { applyBackupById, downloadBackup, fetchData, getBackupNow} from "./requests";

const FileDownload = require('js-file-download');

export const GridContainer = styled(Paper)({
  flexGrow: 1,
  '.MuiDataGrid-root': {
    border: 'none'
  },
  '.MuiTablePagination-displayedRows': {
    display: 'none'
  }
})

function ACLPage() {
  const [sortModel, setSortModel] = useState({page: 1, page_size: 10, sort_by: 'id desc', serach: ''})
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])

  const headers = [
    {key: "id", label: "شناسه"},
    {key: "created_at", label: "تاریخ و ساعت"},
    {key: "name", label: "تام کاربر"},
    {key: "traffic_type", label: "عملیات"},
  ];

  const downloadApi = () => toast.promise(
    fetchData({sort_by: sortModel.sort_by, serach: sortModel.serach}).then(response => {

      setDownloadData(response.data.map((element) => ({
        ...element,
        created_at: moment(element.created_at, 'YYYY/MM/DD HH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss')
      })))

    }), {
      loading: 'در حال دانلود',
      success: 'دانلود انجام شد',
      error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.از خالی نبودن موارد دانلود مطمئن شوید.",
    })


  const filterOperators = getGridStringOperators().filter(({value}) =>
    ['contains' /* add more over time */].includes(value),
  );

  const getBackupbyId = (row) => {
    toast.promise(
      downloadBackup(row.id)
        .then((response) => {
          FileDownload(response.data, `report${row.time}.BAK`);
        })
      , {
        loading: 'در حال دانلود فایل پشتیبان گیری',
        success: 'دانلود انجام شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
      })
  }

  const setBackupById = (id) => toast.promise(
    applyBackupById(id), {
      loading: 'در حال اعمال',
      success: 'فایل پشتیبان گیری اعمال شد',
      error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.از خالی نبودن موارد دانلود مطمئن شوید.",
    })


  const columns = [
    {
      flex: 1,
      field: 'id',
      minWidth: 200,
      headerName: 'شماره',
      filterable: false,
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.id}

          </Typography>
        </Box>
      )
    },
    {
      flex: 1,
      field: 'time',
      minWidth: 200,
      headerName: 'تاریخ و ساعت',
      filterable: false,
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {moment(row.time, 'YYYY/MM/DD HH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss')}
          </Typography>
        </Box>
      )
    },
    {
      flex: 1,
      field: 'apply',
      minWidth: 150,
      headerName: 'عملیات',
      filterOperators,
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Button onClick={() => setBackupById(row.id)}>
            اعمال فایل
          </Button>
        </Box>
      )
    },
    {
      flex: 1,
      field: 'traffic_type',
      minWidth: 150,
      headerName: 'عملیات',
      filterOperators,
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Button onClick={() => getBackupbyId(row)}>
            دانلود
          </Button>
        </Box>
      )
    }

  ]

  useEffect(() => {
    setDownloadData([])
    fetchData(sortModel).then(response => {
      if (response.data === null) {
        setData([])
      } else setData(response.data)
      if (change) setChange(false)
    }).catch((err) => {
      const errorMessage = err?.response?.data?.message ? err.response.data.message : "خطایی رخ داده است"
      toast.error(errorMessage)
    })

  }, [sortModel, setDownloadData, change])

  const getBackup = () => {
    toast.promise(
      getBackupNow()
        .then((response) => {
          FileDownload(response.data, 'report.BAK');
        })
      , {
        loading: 'در حال دانلود فایل پشتیبان گیری',
        success: 'دانلود انجام شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
      })
  }



  const onChangeInpuFile = (ev) => {
    console.log(ev.target.files[0])
    const formData = new FormData();
    formData.append("file", ev.target.files[0], ev.target.files[0].name);
    console.log(formData)

    // toast.promise(
    //   applyBackup(file)
    //     .then(() => {
    //       alert("hi")
    //     })
    //   , {
    //     loading: 'در حال دانلود فایل پشتیبان گیری',
    //     success: 'دانلود انجام شد',
    //     error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
    //   })
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <TableHeader data={downloadData}
                         api={downloadApi} headers={headers} name="پشتیبان گیری" noAdd noExport>
              <>
                <Button onClick={getBackup} variant="outlined">
                  پشتیبان گیری در لحظه
                </Button>
                <Button variant="outlined" component="label" disabled>
                  اعمال فایل پشتیبان گیری
                  <input hidden accept=".Bak" type="file" onChange={(event)=>onChangeInpuFile(event)}/>
                </Button>
              </>
            </TableHeader>
            <GridContainer sx={{p: 4, m: 1}}>
              <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} />
            </GridContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
