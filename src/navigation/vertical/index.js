// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import PlusOutline from 'mdi-material-ui/PlusOutline'
import ViewListOutline from 'mdi-material-ui/ViewListOutline'

import { OfficeBuildingOutline, Account, AccountOutline, MagnifyScan } from 'mdi-material-ui'

const navigation = () => [
  {
    icon: HomeOutline,
    title: 'داشبورد',
    path: '/dashboards',
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
    icon: MagnifyScan,
    title: 'تطبیق کدهای کالا و خدمات',
    path: '/explainations',
    action: 'read',
    subject: 'every-page'
  },

  {
    icon: PlusOutline,
    title: 'ارسال صورت خساب',
    path: '/newOrder',
    action: 'read',
    subject: 'every-page'
  },
  {
    icon: ViewListOutline,
    title: 'گزارشات',
    path: '/orders',
    action: 'read',
    subject: 'every-page'
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
