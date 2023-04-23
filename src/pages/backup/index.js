import {useEffect, useState} from 'react'
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
import {fetchData, getBackupNow} from "./requests";
import {editUser} from "../representatives/requests";

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
    {key: "username", label: "تام کاربری"},
    {key: "traffic_type", label: "عملیات"},
  ];

  const downloadApi = () => toast.promise(
    fetchData(sortModel).then(response => {

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


  const columns = [
    {
      flex: 0.25,
      field: 'created_at',
      minWidth: 200,
      headerName: 'تاریخ و ساعت',
      filterable: false,
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {moment(row.created_at, 'YYYY/MM/DD HH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss')}

          </Typography>
        </Box>
      )
    },
    {
      flex: 0.25,
      minWidth: 230,
      field: 'username',
      headerName: 'نام کاربری',
      filterOperators,
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
      flex: 0.25,
      minWidth: 230,
      field: 'name',
      headerName: 'نام و نام خانوادگی',
      hideable: false,
      filterOperators,
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
      flex: 0.25,
      field: 'traffic_type',
      minWidth: 150,
      headerName: 'عملیات',
      filterOperators,
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.traffic_type}
          </Typography>
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
          alert(response.data)
        })
      , {
        loading: 'در حال دانلود فایل پشتیبان گیری',
        success: 'دانلود انجام شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
      })
  }

  const onChangeInpuFile=(ev)=>{
    console.log(ev.target.value)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <TableHeader data={downloadData}
                         api={downloadApi} headers={headers} name="پشتیبان گیری" noAdd>
              <>
                <Button onClick={getBackup} variant="outlined">
                  پشتیبان گیری در لحظه
                </Button>
                <Button variant="outlined" component="label">
                  اعمال فایل پشتیبان گیری
                  <input hidden accept="*" type="file"  onChange={onChangeInpuFile}/>
                </Button>
              </>
            </TableHeader>
            <GridContainer sx={{p: 4, m: 1}}>
              <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel}/>
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
