import Profile from "pages/account-settings"

function ACLPage() {
  return (<Profile/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
