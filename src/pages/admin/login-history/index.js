import LoginHistory from "pages/login-history"

function ACLPage() {
  return (<LoginHistory/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
