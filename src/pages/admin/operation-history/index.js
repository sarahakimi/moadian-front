import OperationHistory from "pages/operation-history"

function ACLPage() {
  return (<OperationHistory/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
