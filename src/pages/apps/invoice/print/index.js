// ** Layout Import
import BlankLayout from '@core/layouts/BlankLayout'

// ** Demo Components Imports
import PrintPage from 'views/apps/invoice/print/PrintPage'

function InvoicePrint() {
  return <PrintPage id='4987' />
}
InvoicePrint.getLayout = page => <BlankLayout>{page}</BlankLayout>
InvoicePrint.setConfig = () => ({
  mode: 'light'
})

export default InvoicePrint
