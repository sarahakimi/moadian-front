import * as yup from "yup";

export default {
  codemelli: yup.string()
    .required('کدملی  الزامی است')
    .matches(/d*/, 'کدملی باید عدد باشد')
    .test('len', 'کدملی باید 10 رقم باشد', val => val.toString().length === 10),
  name: yup.string().required('نام و نام خانوادگی  الزامی است').min(5, 'فیلد را به درستی پر کنید'),
  mobile: yup.string()
    .required('موبایل  الزامی است')
    .matches(/09d*/, ' موبایل باید عدد باشد و با 09 شروع شود')
    .test('len', 'موبایل باید 11 رقم باشد', val => val.toString().length === 11),
  phone: yup.string()
    .required('تلفن  الزامی است')
    .matches(/d*/, ' تلفن باید عدد باشد')
    .min(3, 'تلفن باید حداقل 3 رقم باشد'),
  phonePrefix: yup.string()
    .required('پیش شماره الزامی است')
    .matches(/d*/, ' پیش شماره باید عدد باشد')
    .test('len', 'پیش شماره باید 3 رقم باشد', val => val.toString().length === 3),
  company: yup.string(),
  county: yup.string().required('استان الزامی است').typeError('الزامی است'),
  city: yup.string().required('شهر الزامی است'),
  codePosti: yup.string()
    .required('کدپستی  الزامی است')
    .matches(/d*/, 'کدپستی باید عدد باشد')
    .test('len', 'کدپستی باید 10 رقم باشد', val => val.toString().length === 10),
  otherInfo: yup.string(),
  mainRoad: yup.string().required('خیابان اصلی الزامی است'),
  subRoad: yup.string().required('خیابان فرعی الزامی است'),
  alley: yup.string().required('کوچه الزامی است'),
  plaque: yup.string().required('پلاک الزامی است').matches(/d*/, 'باید عدد باشد'),
  floor: yup.string().required('طبقه الزامی است').matches(/d*/, 'باید عدد باشد'),
  unit: yup.string().required('واحد الزامی است').matches(/d*/, 'باید عدد باشد'),
  weight: yup.string().required('وزن الزامی است').matches(/d*/, 'وزن باید عدد باشد').min(1, 'حداقل باید 1 گرم باشد'),
  length: yup.string().required('طول الزامی است').matches(/d*/, 'طول باید عدد باشد').min(1, 'حداقل باید 1 سانتی متر باشد'),
  width: yup.string().required('عرض الزامی است').matches(/d*/, 'عرض باید عدد باشد').min(1, 'حداقل باید 1 سانتی متر باشد'),
  height: yup.string()
    .required('ارتفاع الزامی است')
    .matches(/d*/, 'ارتفاع باید عدد باشد')
    .min(1, 'حداقل باید 1 سانتی متر باشد'),
  money: yup.string()
    .required('ارزش کالا الزامی است')
    .matches(/d*/, 'ارزش کالا باید عدد باشد')
    .min(1, 'حداقل باید 1 ریال باشد'),
  cartype: yup.string().required('وسیله حمل کننده الزامی است'),
  needsSpecialCarry: yup.boolean(),
  SpecialBox: yup.boolean(),
  paymentMethod: yup.string().required('الزامی است'),
  needsEvacuate: yup.boolean(),
  needsLoading: yup.boolean(),
  needsMovement: yup.boolean(),
  isSuburb: yup.boolean(),
  username: yup.string().required('نام کاربری الزامی است').min(4, 'حداقل باید 4 کاراکتر باشد'),
  password: yup.string().required('رمز عبور الزامی است').min(8, 'حداقل باید 8 کاراکتر باشد'),
  vehicle: yup.string().required(' الزامی است').min(3, 'به درستی وارد نمایید'),
  vehicle_plaque: yup.string().required(' الزامی است').min(3, 'به درستی وارد نمایید'),
  vehicle_card_id: yup.string().required(' الزامی است').min(3, 'به درستی وارد نمایید'),
  otp: yup.string().required(' الزامی است').min(5, "باید ۵ رقم باشد").max(5, "باید ۵ رقم باشد"),
  header_code: yup.string(),
  level_code:yup.string(),
  percent:yup.number().min(0, "باید عدد طبیعی باشد").max(100, "درصد باید عددی بین 0 و 100 باشد").typeError("باید عدد باشد").required("الزامی است")
}
