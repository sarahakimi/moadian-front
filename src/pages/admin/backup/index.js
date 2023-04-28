import Backup from "pages/backup"

function ACLPage() {
  return (<Backup/>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'admin'
}

export default ACLPage
