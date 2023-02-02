export default {
  getCompaniesFromSuperAdminPageEndpoint: 'company/all/admin',
  singleCompany: (id) => `company/${id}`,
  registerEndpoint: 'auth/user/login',
  storageTokenKeyName: 'access_Token',
  registerCompany: 'company/register',
  getusers: 'user/admin/all?type=1',
  singleUser: (id) => `user/admin/${id}`,
  registerUser: "user/admin/register",
  getCustomers: 'customer/admin/3/all',
  singleCustomer: (id) => `customer/admin/${id}`,
  registerCustomer: 'customer/admin/3/register'
}
