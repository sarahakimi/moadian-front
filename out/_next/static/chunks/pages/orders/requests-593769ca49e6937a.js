(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2823],{14974:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders/requests",function(){return n(4893)}])},63543:function(e,r){"use strict";r.Z={getCompaniesFromSuperAdminPageEndpoint:"company/all/admin",singleCompany:function(e){return"company/".concat(e)},registerEndpoint:"auth/user/login",storageTokenKeyName:"access_Token",registerCompany:"company/register",getusers:"user/admin/all?type=1",singleUser:function(e){return"user/admin/".concat(e)},registerUser:"user/admin/register",getCustomers:"customer/admin/3/all",singleCustomer:function(e){return"customer/admin/".concat(e)},registerCustomer:"customer/admin/3/register",getMarketers:"customer/admin/2/all",singleMarketer:function(e){return"customer/admin/".concat(e)},registerMarketer:"customer/admin/2/register",getRepresentatives:"customer/admin/1/all",singleRepresentatives:function(e){return"customer/admin/".concat(e)},registerRepresentatives:"customer/admin/1/register",createOrder:"ordering/admin/register",getAdminOrders:"ordering/admin/all",singleHub:function(e){return"hub/".concat(e)},registerHub:"hub/register",getHubsFromAdmin:"hub/company/all",myHub:"hub/me",getDrivers:"user/admin/all?type=2",registerDriver:"user/admin/courier/register",pricingPerKilometer:"pricing/per_kilometer",pricinPerSizeOfCar:function(e){return"pricing/size_of_car/".concat(e)},pricingOtherOptions:"pricing/other_options",getPricingSizeOfCar:"pricing/size_of_car",singleOrder:function(e){return"ordering/admin/".concat(e)},getOrder:function(e){return"ordering/".concat(e)}}},4893:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f},deleteUser:function(){return m},editUser:function(){return d},fetchData:function(){return g},registerUser:function(){return p}});var t=n(34051),i=n.n(t),o=n(85893),u=n(5370),a=n(63543);function c(e,r,n,t,i,o,u){try{var a=e[o](u),c=a.value}catch(s){return void n(s)}a.done?r(c):Promise.resolve(c).then(t,i)}function s(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var o=e.apply(r,n);function u(e){c(o,t,i,u,a,"next",e)}function a(e){c(o,t,i,u,a,"throw",e)}u(void 0)}))}}var g=function(){var e=s(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get(a.Z.getAdminOrders,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=s(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.delete(a.Z.singleOrder(r),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=s(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.post(a.Z.createOrder,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=s(i().mark((function e(r,n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.put(a.Z.singleOrder(r),n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}();function f(){return(0,o.jsx)("div",{})}}},function(e){e.O(0,[9774,2888,179],(function(){return r=14974,e(e.s=r);var r}));var r=e.O();_N_E=r}]);