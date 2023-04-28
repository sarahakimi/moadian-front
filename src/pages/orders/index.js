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
import RowOptions from "@core/components/row-options/row-options";
import Button from "@mui/material/Button";
import FileDownload from "js-file-download";
import AddUserDrawer from './AddUserDrawer'
import {deleteUser, downloadOrder, fetchData} from "./requests";


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
  const [selectedCompany, setSelectedCompany] = useState({})
  const [openEdit, setOpenEdit] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [sortModel, setSortModel] = useState({page: 1, sort_by: 'id desc', serach: ''})
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [downloadData, setDownloadData] = useState([])

  const headers = [
    {key: 'createdAt', label: 'تاریخ ثبت'},
    {key: 'price', label: 'مبلغ سفارش'},
    {key: 'state', label: 'وضعیت'},
    {key: "senderCodeMelli", label: "کدملی فرستنده"},
    {key: "senderName", label: "نام فرستنده"},
    {key: "senderMobile", label: "موبایل فرستنده"},
    {key: 'senderPhone', label: "تلفن فرستنده"},
    {key: 'senderPhonePrefix', label: "پیش شماره تلفن فرستنده"},
    {key: 'senderCompany', label: "شرکت فرستنده"},
    {key: 'senderCounty', label: "استان فرستنده"},
    {key: 'senderCity', label: "شهر فرستنده"},
    {key: 'senderCodePosti', label: "کدپستی فرستنده"},
    {key: 'senderOtherInfo', label: "سایر اطلاعات فرستنده"},
    {key: 'senderMainRoard', label: "خیابان اصلی فرستنده"},
    {key: 'senderSubRoad', label: "خیابان فرعی فرستنده"},
    {key: 'senderAlley', label: "کوچه فرستنده"},
    {key: 'senderPlaque', label: "پلاک فرستنده"},
    {key: 'senderFloor', label: "طبقه فرستنده"},
    {key: 'senderUnit', label: "واحد فرستنده"},
    {key: 'recieverCodeMelli', label: "کدملی گیرنده"},
    {key: 'recieverName', label: "نام گیرنده"},
    {key: 'recieverMobile', label: "موبایل گیرنده"},
    {key: 'recieverPhone', label: "تلفن گیرنده"},
    {key: 'recieverPhonePrefix', label: "پیش شماره گیرنده"},
    {key: 'recieverCompany', label: "شرکت گیرنده"},
    {key: 'recieverCounty', label: "استان گیرنده"},
    {key: 'recieverCity', label: "شهر گیرنده"},
    {key: 'recieverCodePosti', label: "کدپستی گیرنده"},
    {key: 'recieverMainRoard', label: "خیابان اصلی گیرنده"},
    {key: 'recieverSubRoad', label: "خیابان فرعی گیرنده"},
    {key: 'recieverAlley', label: "کوچه گیرنده"},
    {key: 'recieverPlaque', label: "پلاک گیرنده"},
    {key: 'recieverFloor', label: "طبقه گیرنده"},
    {key: 'recieverUnit', label: "واحد گیرنده"},
    {key: 'receiverOtherInfo', label: "سایر اطلاعات گیرنده"},
    {key: 'weight', label: "وزن"},
    {key: 'length', label: "طول"},
    {key: 'width', label: "عرض"},
    {key: 'height', label: "ارتفاع"},
    {key: 'money', label: "ارزش بنا به اظهار فرستنده"},
    {key: 'car', label: "نوع ماشین حمل کننده"},
    {key: 'needsSpecialCarry', label: "نیازمند حمل ویژه"},
    {key: 'SpecialBox', label: "بار خاص"},
    {key: 'paymentMethod', label: "نحوه پرداخت"},
    {key: 'needsEvacuate', label: 'نیازمند تخلیه'},
    {key: 'needsLoading', label: 'نیازمند بارگیری'},
    {key: 'needsMovement', label: 'نیازمند جابجایی'},
    {key: 'isSuburb', label: 'برون شهری'}
  ];

  const downloadApi = () => toast.promise(fetchData({sort_by: sortModel.sort_by, serach: sortModel.serach}).then(response => {
    setDownloadData(response.data
      .map((user) => ({
        senderCodeMelli: user.sender_customer.identity_code,
        senderName: user.sender_customer.name,
        senderMobile: user.sender_customer.mobile,
        senderPhone: user.sender_customer.tel,
        senderPhonePrefix: user.sender_customer.area_code,
        senderCompany: user.sender_customer.companyName,
        senderCounty: user.sender_customer.provence,
        senderCity: user.sender_customer.city,
        senderCodePosti: user.sender_customer.postal_code,
        senderOtherInfo: user.sender_customer.other_information,
        senderMainRoard: user.sender_customer.main_street,
        senderSubRoad: user.sender_customer.side_street,
        senderAlley: user.sender_customer.alley,
        senderPlaque: user.sender_customer.plaque,
        senderFloor: user.sender_customer.floor,
        senderUnit: user.sender_customer.home_unit,
        recieverCodeMelli: user.receiver_customer.identity_code,
        recieverName: user.receiver_customer.name,
        recieverMobile: user.receiver_customer.mobile,
        recieverPhone: user.receiver_customer.tel,
        recieverPhonePrefix: user.receiver_customer.area_code,
        recieverCompany: user.receiver_customer.companyName,
        recieverCounty: user.receiver_customer.provence,
        recieverCity: user.receiver_customer.city,
        recieverCodePosti: user.receiver_customer.postal_code,
        recieverMainRoard: user.receiver_customer.main_street,
        recieverSubRoad: user.receiver_customer.side_street,
        recieverAlley: user.receiver_customer.alley,
        recieverPlaque: user.receiver_customer.plaque,
        recieverFloor: user.receiver_customer.floor,
        recieverUnit: user.receiver_customer.home_unit,
        receiverOtherInfo: user.receiver_customer.other_information,
        weight: user.product.weight,
        length: user.product.length,
        width: user.product.width,
        height: user.product.height,
        money: user.product.product_cost,
        car: user.product.vehicle,
        needsSpecialCarry: user.product.special_vehicle_required ? "می باشد" : "نمی باشد",
        SpecialBox: user.product.special_product ? "می باشد" : "نمی باشد",
        paymentMethod: user.product.payment_method,
        needsEvacuate: user.product.product_unloading_required ? "می باشد" : "نمی باشد",
        needsLoading: user.product.product_loading_required ? "می باشد" : "نمی باشد",
        needsMovement: user.product.movement_required ? "می باشد" : "نمی باشد",
        createdAt: moment(user.order.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'),
        price: user.order.price,
        state: user.order.state,
        isSuburb: user.product.is_suburb ? "می باشد" : "نمی باشد",
      }))
    )

  }), {
    loading: 'در حال دانلود',
    success: 'دانلود انجام شد',
    error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.از خالی نبودن موارد دانلود مطمئن شوید.",
  })
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const toggleEditUserDrawer = () => setOpenEdit(!openEdit)
  const toggleShowUserDrawer = () => setShowUser(!showUser)

  const deleteFunction = company => {
    toast.promise(deleteUser(company.order.id).then(setChange(true)), {
        loading: 'در حال حذف سفارش',
        success: 'با موفقیت حذف شد',
        error: (err) => err.response.data.message ? err.response.data.message : "خطایی رخ داده است",
      }
    )
  }

  const filterOperators = getGridStringOperators().filter(({value}) =>
    ['contains' /* add more over time */].includes(value),
  );

  const getOrder = (id) => {
    toast.promise(
      downloadOrder(id)
        .then((response) => {
          FileDownload(response.data, `سفارش${id}.pdf`);
        })
      , {
        loading: 'در حال دانلود سفارش',
        success: 'دانلود انجام شد',
        error: (err) => err.response?.data?.message ? err.response?.data?.message : "خطایی رخ داده است.",
      })
  }



  const columns = [
    {
      flex: 0.1,
      minWidth: 50,
      field: 'id',
      filterOperators,
      headerName: 'شماره',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
            <Typography noWrap component='a' variant='subtitle2' sx={{color: 'text.primary', textDecoration: 'none'}}>
              {row.order.id}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'created_at',
      filterOperators,
      headerName: 'تاریخ ثبت',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
            <Typography noWrap component='a' variant='subtitle2' sx={{color: 'text.primary', textDecoration: 'none'}}>
              {moment(row.order.created_at, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      flex: 0.15,
      field: 'sender_name',
      minWidth: 150,
      filterOperators,
      headerName: 'فرستنده',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.sender_customer.name}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'sender_city',
      minWidth: 150,
      filterOperators,
      headerName: 'شهر قرستنده',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.sender_customer.city}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'reiever_name',
      minWidth: 150,
      filterOperators,
      headerName: 'گیرنده',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.receiver_customer.name}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      field: 'reciever_city',
      minWidth: 150,
      filterOperators,
      headerName: 'شهر گیرنده',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.receiver_customer.city}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.2,
      field: 'price',
      minWidth: 100,
      filterOperators,
      headerName: 'مبلغ سفارش',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ریال
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.2,
      field: 'state',
      minWidth: 100,
      filterOperators,
      headerName: 'مرحله',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography noWrap sx={{color: 'text.secondary', textTransform: 'capitalize'}}>
            {row.order.state}
          </Typography>
        </Box>
      )
    },
    {
      flex: 0.1,
      minWidth: 50,
      sortable: false,
      hideable: false,
      filterable: false,
      field: 'گزینه ها',
      headerName: 'گزینه ها',
      renderCell: ({row}) => <RowOptions company={row}
                                         toggleShowUserDrawer={toggleShowUserDrawer}
                                         toggleEditUserDrawer={toggleEditUserDrawer}
                                         setSelectedCompany={setSelectedCompany} setChange={setChange}
                                         selectedCompany={selectedCompany} deleteFunction={deleteFunction}/>
    },
    {
      flex: 0.2,
      field: 'download',
      minWidth: 100,
      filterOperators,
      headerName: 'مرحله',
      hideable: false,
      renderCell: ({row}) => (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Button onClick={()=> getOrder(row.order.id)}>
            دانلود
          </Button>
        </Box>
      )
    },
  ]
  useEffect(() => {
    setDownloadData([])
    fetchData({}).then(response => {
      if (response.data === null) {
        setData([])
      } else setData(response.data.map(element => ({id: element.order.id, ...element})))
      if (change) setChange(false)
    }).catch((err) => {
      const errorMessage = err?.response?.data?.message ? err.response.data.message : "خطایی رخ داده است"
      toast.error(errorMessage)
    })

  }, [setDownloadData, change])


  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader toggle={toggleAddUserDrawer} data={downloadData}
                       api={downloadApi} headers={headers} name="سفارش"/>
          <GridContainer sx={{p: 4, m: 1}}>
            <Table columns={columns} data={data} sortModel={sortModel} setSortModel={setSortModel} selfFilter/>
          </GridContainer>
        </Card>
      </Grid>
      {addUserOpen && (
        <AddUserDrawer
          open={addUserOpen}
          toggle={toggleAddUserDrawer}
          setChange={setChange}
          edit={false}
          company={null}
          showUser={false}
        />
      )}
      {openEdit && (
        <AddUserDrawer
          open={openEdit}
          toggle={toggleEditUserDrawer}
          setChange={setChange}
          user={selectedCompany}
          edit
          showUser={false}
        />
      )}
      {showUser && (
        <AddUserDrawer
          open={showUser}
          toggle={toggleShowUserDrawer}
          setChange={setChange}
          edit
          user={selectedCompany}
          showUser
        />
      )}

    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

// ACLPage.acl = {
//   action: 'read',
//   subject: 'acl-page'
// }

export default ACLPage
