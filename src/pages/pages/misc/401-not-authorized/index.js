// ** Layout Import
import BlankLayout from '@core/layouts/BlankLayout'

// ** Component Import
import Error401 from 'pages/401'

function Error() {
  return <Error401 />
}
Error.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Error
