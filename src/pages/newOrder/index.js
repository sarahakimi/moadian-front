// ** React Imports
import { Card, CardContent, CardHeader } from '@mui/material'
import { useState } from 'react'
import * as React from 'react'
import HorizontalLinearStepper from './stepper'
import FirstForn from './firstForn'
import SecondForm from './secondForm'
import DonePage from './donePage'

// const fields_general = (name, id) => {
//   if (id === 0)
//     return { type: 'int', yup: yup.number().required('الزامی است').typeError('به درستی وارد نمایید'), default: 0, name }
//   if (id === 1)
//     return {
//       type: 'string',
//       yup: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'),
//       default: '',
//       name
//     }
//   if (id === 2)
//     return {
//       type: 'double',
//       yup: yup.number().required('الزامی است').typeError('به درستی وارد نمایید'),
//       default: '',
//       name
//     }
//
//   return { file: '', yup: yup.string().required('الزامی است').typeError('به درستی وارد نمایید'), default: '', name }
// }

function ACLPage() {
  const [rows, setRows] = useState([])
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  // useEffect(() => {
  //   const toastId = toast.loading('در حال دریافت اطلاعات')
  //   http
  //     .get(
  //       'invoice/fields',
  //       {},
  //       {
  //         Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  //       }
  //     )
  //     .then(async response => {
  //       if (response.data !== null) {
  //         const res = [
  //           { Name: 'فایل ریز جزئیات', Type: 3 },
  //           { Name: 'فایل سند', Type: 3 },
  //           { Name: 'فایل طرف حساب انبار', Type: 3 },
  //           { Name: 'شماره منحصر به فرد مالیاتی', Type: 2 },
  //           { Name: 'نوع صورت حساب', Type: 1 },
  //           { Name: 'موضوع صورت حساب', Type: 2 },
  //           { Name: 'شماره منحصر به فرد مالیاتی صورتحساب مرجع', Type: 2 }
  //         ]
  //         setFields
  //
  //         console.log(response.data)
  //         toast.dismiss(toastId)
  //       }
  //     })
  //     .catch(err => {
  //       const errorMessage = err?.response?.data?.message ? err?.response?.data?.message : 'خطایی رخ داده است'
  //       toast.error(errorMessage)
  //       toast.dismiss(toastId)
  //     })
  // }, [])

  // const handleSetUpload = (event, uploadFunction) => {
  //   const uploadFile = event.target.files[0]
  //   if (!uploadFile) {
  //     return
  //   }
  //   const toastId = toast.loading('در حال بارگذاری فایل')
  //
  //   const upload = new tus.Upload(uploadFile, {
  //     endpoint: 'https://api.zaminbar.ir/files/',
  //     retryDelays: [0],
  //     metadata: {
  //       filename: uploadFile.name,
  //       filetype: uploadFile.type
  //     },
  //     onError() {
  //       toast.dismiss(toastId)
  //       toast.error('خطا در بارگذاری فایل')
  //     },
  //     onSuccess() {
  //       uploadFunction(upload.url)
  //       toast.dismiss(toastId)
  //       toast.success('با موفقیت بارگذاری شد')
  //     }
  //   })
  //   upload.start()
  // }

  return (
    <Card>
      <CardHeader title='افزودن گزارش جدید' />
      <CardContent>
        <HorizontalLinearStepper activeStep={activeStep} />
        {activeStep === 0 && <FirstForn setRows={setRows} handleNext={handleNext} />}
        {activeStep === 1 && <SecondForm setRows={setRows} rows={rows} handleNext={handleNext} />}
        {activeStep === 2 && <DonePage handleReset={handleReset} />}
      </CardContent>
    </Card>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'every-page'
}

export default ACLPage
