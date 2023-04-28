import Hub from "pages/hub"

function ACLPage() {
  return (<Hub/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
