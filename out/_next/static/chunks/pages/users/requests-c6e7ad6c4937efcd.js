(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2598],{23871:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/requests",function(){return n(94027)}])},63543:function(e,r){"use strict";r.Z={getCompaniesFromSuperAdminPageEndpoint:"company/all/admin",singleCompany:function(e){return"company/".concat(e)},registerEndpoint:"auth/user/login",storageTokenKeyName:"access_Token",registerCompany:"company/register",getusers:"user/admin/all?type=1",singleUser:function(e){return"user/admin/".concat(e)},registerUser:"user/admin/register",getCustomers:"customer/admin/3/all",singleCustomer:function(e){return"customer/admin/".concat(e)},registerCustomer:"customer/admin/3/register",getMarketers:"customer/admin/2/all",singleMarketer:function(e){return"customer/admin/".concat(e)},registerMarketer:"customer/admin/2/register",getRepresentatives:"customer/admin/1/all",singleRepresentatives:function(e){return"customer/admin/".concat(e)},registerRepresentatives:"customer/admin/1/register",createOrder:"ordering/admin/register",getAdminOrders:"ordering/admin/all",singleHub:function(e){return"hub/".concat(e)},registerHub:"hub/register",getHubsFromAdmin:"hub/company/all",myHub:"hub/me",getDrivers:"user/admin/all?type=2",registerDriver:"user/admin/courier/register",pricingPerKilometer:"pricing/per_kilometer",pricinPerSizeOfCar:function(e){return"pricing/size_of_car/".concat(e)},pricingOtherOptions:"pricing/other_options",getPricingSizeOfCar:"pricing/size_of_car"}},94027:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return l},deleteUser:function(){return p},editUser:function(){return f},fetchData:function(){return g},registerUser:function(){return m}});var t=n(34051),i=n.n(t),u=n(85893),a=n(5370),s=n(63543);function o(e,r,n,t,i,u,a){try{var s=e[u](a),o=s.value}catch(c){return void n(c)}s.done?r(o):Promise.resolve(o).then(t,i)}function c(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var u=e.apply(r,n);function a(e){o(u,t,i,a,s,"next",e)}function s(e){o(u,t,i,a,s,"throw",e)}a(void 0)}))}}var g=function(){var e=c(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(s.Z.getusers,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=c(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.delete(s.Z.singleUser(r),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=c(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(s.Z.registerUser,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=c(i().mark((function e(r,n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.put(s.Z.singleUser(r),n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}();function l(){return(0,u.jsx)("div",{})}}},function(e){e.O(0,[9774,2888,179],(function(){return r=23871,e(e.s=r);var r}));var r=e.O();_N_E=r}]);