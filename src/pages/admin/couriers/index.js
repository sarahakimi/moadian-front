import Couriers from "pages/couriers"

function ACLPage() {
  return (<Couriers/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
