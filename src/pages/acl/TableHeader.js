import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ExportVariant from 'mdi-material-ui/ExportVariant'
import {CSVLink} from "react-csv";
import {useState} from "react"
import moment from "jalali-moment";
import {Backdrop, CircularProgress} from "@mui/material";
import http from "services/http";

function TableHeader(props) {
  const {handleFilter, toggle, value} = props
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);

  const headers = [
    {key: "id", label: "شناسه"},
    {key: "name", label: "تام شرکت"},
    {key: "duration_of_activity", label: "اشتراک"},
    {key: "active", label: "وضعیت"},
    {key: "created_at", label: "تاریخ ایجاد"},
  ];

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
      <Button sx={{mr: 4, mb: 2}} color='secondary' variant='outlined' startIcon={<ExportVariant fontSize='small'/>}>
        <CSVLink
          style={{textDecoration: 'none', color: 'inherit'}}
          data={data}
          headers={headers}
          filename={`${moment().locale('fa').format('YYYY/MM/DD')}لیست-کوریرها-.csv`}
          onClick={() => {
            setOpen(true)
            http
              .get('company/all/admin', {}, {
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
                setOpen(false)
              })
              .catch(() => {

                setOpen(false)

                return false
              })
          }}
        >
          خروجی
        </CSVLink>
      </Button>


      <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
        <TextField
          size='small'
          value={value}
          sx={{mr: 6, mb: 2}}
          placeholder='جستجوی شرکت'
          onChange={e => handleFilter(e.target.value)}
        />

        <Button sx={{mb: 2}} onClick={toggle} variant='contained'>
          افزودن کوریر
        </Button>
      </Box>
      <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit"/>
      </Backdrop>
    </Box>
  )
}

export default TableHeader
