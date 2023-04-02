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
    .min(1, 'حداقل باید 1 تومان باشد'),
  cartype: yup.string().required('وسیله حمل کننده الزامی است'),
  needsSpecialCarry: yup.boolean(),
  SpecialBox: yup.boolean(),
  paymentMethod: yup.string().required('الزامی است'),
  needsEvacuate: yup.boolean(),
  needsLoading: yup.boolean(),
  needsMovement: yup.boolean(),
  isSuburb:yup.boolean()
}