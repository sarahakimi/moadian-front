// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import PlusOutline from 'mdi-material-ui/PlusOutline'
import ViewListOutline from 'mdi-material-ui/ViewListOutline'
import StoreOutline from 'mdi-material-ui/StoreOutline'
import Account from "mdi-material-ui/Account";
import Taxi from "mdi-material-ui/Taxi"
import {
  AccountMultipleCheck,
  AccountOutline,
  AccountSupervisor,
  BackupRestore,
  CalculatorVariantOutline,
  CogOutline,
  CreditCardMultipleOutline,
  DatabaseArrowLeftOutline,
  DatabaseEye,
  HumanMale, MagnifyScan,
  OfficeBuildingOutline,
  CreditCardFast
} from "mdi-material-ui";


const navigation = () => [
  {
    icon: HomeOutline,
    title: 'داشبورد',
    path: '/dashboards',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: PlusOutline,
    title: 'سفارش جدید',
    path: '/newOrder',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: ViewListOutline,
    title: 'سفارشات',
    path: '/orders',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: MagnifyScan,
    title: 'رهگیری سفارش',
    path: '/tracking',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: Account,
    title: 'کاربران',
    path: '/users',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: Account,
    title: 'کاربران',
    path: '/admin/users',
    action: 'read',
    subject: 'admin',
  },
  {
    icon: AccountSupervisor,
    title: 'مشتریان',
    path: '/customers',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: AccountMultipleCheck,
    title: 'بازاریابان',
    path: '/marketers',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: HumanMale,
    title: 'نمایندگان',
    path: '/representatives',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: Taxi,
    title: 'رانندگان',
    path: '/drivers',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: StoreOutline,
    title: 'هاب',
    path: '/hub',
    action: 'read',
    subject: 'every-page',
  },
  {
    icon: StoreOutline,
    title: 'هاب',
    path: '/admin/hub',
    action: 'read',
    subject: 'admin',
  },
  {
    path: '/superadmin',
    action: 'read',
    subject: 'acl-page',
    icon: OfficeBuildingOutline,
    title: ' شرکت ها'
  },
  {
    path: '/couriers',
    action: 'read',
    subject: 'every-page',
    icon: OfficeBuildingOutline,
    title: ' شرکت ها'
  },
  {
    icon: MagnifyScan,
    title: 'رهگیری سفارش',
    path: '/admin/tracking',
    action: 'read',
    subject: 'admin',
  },
  {
    path: '/admin/couriers',
    action: 'read',
    subject: 'admin',
    icon: OfficeBuildingOutline,
    title: ' شرکت ها'
  },
  {
    path: '/calculate-price',
    action: 'read',
    subject: 'every-page',
    icon: CalculatorVariantOutline,
    title: ' قیمت گذاری'
  },
  {
    icon: AccountOutline,
    action: 'read',
    subject: 'every-page',
    title: 'پروفایل کاربری',
    path: '/account-settings'
  },
  {
    icon: AccountOutline,
    action: 'read',
    subject: 'admin',
    title: 'پروفایل کاربری',
    path: '/admin/account-settings'
  },
  {
    icon: CogOutline,
    action: 'read',
    subject: 'every-page',
    title: 'تنظیمات',
    path: '/settings'
  },
  {
    icon: CreditCardFast,
    action: 'read',
    subject: 'every-page',
    title: 'امور مالی',
    path: '/financial-contribution'
  },
  {
    icon: CreditCardMultipleOutline,
    action: 'read',
    subject: 'every-page',
    title: 'ارتباط با مالی',
    path: '/finance'
  },
  {
    icon: BackupRestore,
    action: 'read',
    subject: 'every-page',
    title: 'پشتیبان گیری',
    path: '/backup'
  },
  {
    icon: BackupRestore,
    action: 'read',
    subject: 'admin',
    title: 'پشتیبان گیری',
    path: '/admin/backup'
  },
  {
    icon: DatabaseEye,
    action: 'read',
    subject: 'every-page',
    title: 'تاریخچه ورود و خروج',
    path: '/login-history'
  },
  {
    icon: DatabaseEye,
    action: 'read',
    subject: 'admin',
    title: 'تاریخچه ورود و خروج',
    path: '/admin/login-history'
  },
  {
    icon: DatabaseArrowLeftOutline,
    action: 'read',
    subject: 'every-page',
    title: 'تاریخچه عملیات',
    path: '/operation-history'
  },
  {
    icon: DatabaseArrowLeftOutline,
    action: 'read',
    subject: 'admin',
    title: 'تاریخچه عملیات',
    path: '/admin/operation-history'
  },

]

export default navigation
