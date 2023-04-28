import Tracking from "pages/tracking"

function ACLPage() {
  return (<Tracking/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
