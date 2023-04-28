import Users from "pages/users"

function ACLPage() {
  return (<Users/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
