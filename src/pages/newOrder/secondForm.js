import React, { useCallback, useEffect, useState } from 'react'
import { Box, Alert } from '@mui/material'
import { DataGrid, faIR, GridCellModes } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import toast from 'react-hot-toast'
import $ from 'jquery'
import http from 'services/http'
import Typography from '@mui/material/Typography'
import Loading from '../../@core/components/loading/loading'

function SecondForm({ rows, setRows, handleNext, oneCell }) {
  const [cellModesModel, setCellModesModel] = useState({})
  const [LoadingOpen, setLoadingOpen] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      const myDivElement = $('.MuiDataGrid-virtualScroller')
      myDivElement.scrollLeft(myDivElement.width())
    }, 100)
  }, [])

  const columns = [
    {
      field: 'taxid',
      headerName: 'شماره منحصربفرد مالیاتی',
      type: 'string',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
            {row.taxid}
          </Typography>
        </Box>
      )
    },
    {
      field: 'indatim',
      headerName: 'تاریخ و زمان صدور صورتحساب(میلادی)',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
            {row.indatim}
          </Typography>
        </Box>
      )
    },
    {
      field: 'inty',
      headerName: 'نوع صورت حساب',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'inno',
      headerName: 'سریال صورت حساب',
      type: 'string',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
            {row.inno}
          </Typography>
        </Box>
      )
    },
    {
      field: 'inp',
      headerName: 'الگوی صورت حساب',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'ins',
      headerName: 'موضوع صورت حساب',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'tins',
      headerName: 'شماره اقتصادی فروشنده',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
            {row.tins}
          </Typography>
        </Box>
      )
    },
    {
      field: 'tob',
      headerName: 'نوع شخص خریدار',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'tinb',
      headerName: 'شماره اقتصادی خریدار',
      type: 'string',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
            {row.tinb}
          </Typography>
        </Box>
      )
    },
    {
      field: 'tprdis',
      headerName: 'مجموع مبلغ قبل از کسر تخفیف',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'tdis',
      headerName: 'مجموع نخفبفات',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'tadis',
      headerName: 'مجموع مبلغ پس از کسر تخفیف',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'tvam',
      headerName: 'مجموع مالیات بر ارزش افزوده',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'todam',
      headerName: 'مجموع سایر مالیات، عوارض و وجوه قانونی',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'tbill',
      headerName: 'مجموع صورتحساب',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'setm',
      headerName: 'روش تسویه',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'cap',
      headerName: 'مبلغ پرداختی نقدی',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'tvop',
      headerName: 'مجموع سهم مالیات بر ارزش افزوده از پرداخت',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'sstid',
      headerName: 'شناسه کالا/خدمت',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
            {row.sstid}
          </Typography>
        </Box>
      )
    },
    {
      field: 'mu',
      headerName: 'واحد اندازه گیری',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'am',
      headerName: 'نعداد/مقدار',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap variant='subtitle2' sx={{ color: 'text.primary', textDecoration: 'none' }}>
            {row.am}
          </Typography>
        </Box>
      )
    },
    {
      field: 'fee',
      headerName: 'مبلغ واحد',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'prdis',
      headerName: 'مبلغ قبل از تخفیف',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'dis',
      headerName: 'مبلغ تخفیف',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'adis',
      headerName: 'مبلغ بعد از تخفیف',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'vra',
      headerName: 'نرخ مالیات بر ارزش افزوده',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'vam',
      headerName: 'مبلغ مالیات بر ارزش افزوده',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'odam',
      headerName: 'مبلغ سایر مالیات و عوارض',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'vop',
      headerName: 'سهم ترزش افزوده از پرداخت',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    },
    {
      field: 'tsstam',
      headerName: 'مبلغ کل کالا/خدمات',
      type: 'number',
      editable: true,
      align: 'center',
      headerAlign: 'center',
      width: 200
    }
  ]

  const handleCellClick = useCallback((params, event) => {
    if (!params.isEditable) {
      return
    }

    // Ignore portal
    if (!event.currentTarget.contains(event.target)) {
      return
    }

    setCellModesModel(prevModel => ({
      // Revert the mode of the other cells from other rows
      ...Object.keys(prevModel).reduce(
        (acc, id) => ({
          ...acc,
          [id]: Object.keys(prevModel[id]).reduce(
            (acc2, field) => ({
              ...acc2,
              [field]: { mode: GridCellModes.View }
            }),
            {}
          )
        }),
        {}
      ),
      [params.id]: {
        // Revert the mode of other cells in the same row
        ...Object.keys(prevModel[params.id] || {}).reduce(
          (acc, field) => ({ ...acc, [field]: { mode: GridCellModes.View } }),
          {}
        ),
        [params.field]: { mode: GridCellModes.Edit }
      }
    }))
  }, [])

  const handleCellModesModelChange = useCallback(newModel => {
    setCellModesModel(newModel)
  }, [])

  const onSubmitSooratHesab = () => {
    setLoadingOpen(true)

    const submitRows = rows.flatMap(element => ({
      header: {
        taxid: element.taxid,
        indatim: element.indatim,
        inty: element.inty,
        inno: element.inno,
        inp: element.inp,
        ins: element.ins,
        tins: element.tins,
        tob: element.tob,
        tinb: element.tinb,
        tprdis: element.tprdis,
        tdis: element.tdis,
        tadis: element.tadis,
        tvam: element.tvam,
        todam: element.todam,
        tbill: element.tbill,
        setm: element.setm,
        cap: element.cap,
        tvop: element.tvop
      },
      body: {
        sstid: element.sstid,
        mu: element.mu,
        am: element.am,
        fee: element.fee,
        prdis: element.prdis,
        dis: element.dis,
        adis: element.adis,
        vra: element.vra,
        vam: element.vam,
        odam: element.odam,
        vop: element.vop,
        tsstam: element.tsstam
      },
      payment: {}
    }))
    toast.promise(
      http
        .post(`invoice/apply`, submitRows, {
          Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
        })
        .then(() => {
          setLoadingOpen(false)
          handleNext()
        }),
      {
        loading: 'در حال ثبت',
        success: ' ثبت شد',
        error: err => (err.response?.data?.message ? err.response?.data?.message : 'خطایی رخ داده است.')
      }
    )
  }
  const height = oneCell ? 50 : 100

  return (
    <>
      <Alert severity='info' sx={{ mb: 5 }}>
        اطلاعات موجود در جدول زیر به سامانه مودیان ارسال خواهد شد. در صورتی که هر فیلد آن نیاز به تغییر داشت ، با کلیک
        بر روی هر فیلد، می توانید آن را اصلاح کنید.
      </Alert>
      <Box style={{ height, width: '100%' }} dir='ltr'>
        <DataGrid
          rows={rows}
          rowCount={rows.length}
          localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
          columns={columns.reverse()}
          rowsPerPageOptions={oneCell ? [1] : [100]}
          cellModesModel={cellModesModel}
          onCellModesModelChange={handleCellModesModelChange}
          onCellClick={handleCellClick}
          onCellEditCommit={event => {
            if (event.rowNode) {
              const newRows = rows
              newRows[event.rowNode.id][event.field] = event.value
              setRows([...newRows])
            }
          }}
          sx={{
            '& .MuiDataGrid-columnHeaderTitle': {
              whiteSpace: 'break-spaces',
              lineHeight: 1
            },
            '&.MuiDataGrid-root .MuiDataGrid-columnHeader--alignRight .MuiDataGrid-columnHeaderTitleContainer': {
              pl: 1
            }
          }}
        />
      </Box>
      <Button size='large' variant='contained' sx={{ m: 1 }} color='success' onClick={onSubmitSooratHesab}>
        ارسال {oneCell && 'مجدد'} به سامانه
      </Button>
      <Loading open={LoadingOpen} />
    </>
  )
}

export default SecondForm
