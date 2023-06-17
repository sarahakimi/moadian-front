// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import PlusOutline from 'mdi-material-ui/PlusOutline'
import ViewListOutline from 'mdi-material-ui/ViewListOutline'

import { OfficeBuildingOutline, Account, AccountOutline } from 'mdi-material-ui'

const navigation = () => [
  {
    icon: HomeOutline,
    title: 'داشبورد',
    path: '/dashboards',
    action: 'read',
    subject: 'every-page'
  },
  {
    icon: PlusOutline,
    title: 'افزودن صورت حساب',
    path: '/newOrder',
    action: 'read',
    subject: 'every-page'
  },
  {
    icon: ViewListOutline,
    title: 'همه صورت حساب ها',
    path: '/orders',
    action: 'read',
    subject: 'every-page'
  },
  {
    icon: Account,
    title: 'تعاریف',
    path: '/users',
    action: 'read',
    subject: 'every-page'
  },
  {
    icon: AccountOutline,
    action: 'read',
    subject: 'every-page',
    title: 'پروفایل کاربری',
    path: '/account-settings'
  },
  {
    path: '/superadmin',
    action: 'read',
    subject: 'acl-page',
    icon: OfficeBuildingOutline,
    title: ' شرکت ها'
  }
]

export default navigation
