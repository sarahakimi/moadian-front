(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7080],{79997:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculate-price/requests",function(){return n(64023)}])},63543:function(r,e){"use strict";e.Z={getCompaniesFromSuperAdminPageEndpoint:"company/all/admin",singleCompany:function(r){return"company/".concat(r)},registerEndpoint:"auth/user/login",storageTokenKeyName:"access_Token",registerCompany:"company/register",getusers:"user/admin/all?type=1",singleUser:function(r){return"user/admin/".concat(r)},registerUser:"user/admin/register",getCustomers:"customer/admin/3/all",singleCustomer:function(r){return"customer/admin/".concat(r)},registerCustomer:"customer/admin/3/register",getMarketers:"customer/admin/2/all",singleMarketer:function(r){return"customer/admin/".concat(r)},registerMarketer:"customer/admin/2/register",getRepresentatives:"customer/admin/1/all",singleRepresentatives:function(r){return"customer/admin/".concat(r)},registerRepresentatives:"customer/admin/1/register",createOrder:"ordering/admin/register",getAdminOrders:"ordering/admin/all",singleHub:function(r){return"hub/".concat(r)},registerHub:"hub/register",getHubsFromAdmin:"hub/company/all",myHub:"hub/me",getDrivers:"user/admin/all?type=2",registerDriver:"user/admin/courier/register",pricingPerKilometer:"pricing/per_kilometer",pricinPerSizeOfCar:function(r){return"pricing/size_of_car/".concat(r)},pricingOtherOptions:"pricing/other_options",getPricingSizeOfCar:"pricing/size_of_car",singleOrder:function(r){return"ordering/admin/".concat(r)},getOrder:function(r){return"ordering/".concat(r)}}},64023:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h},editOtherOptions:function(){return l},editPerCar:function(){return d},editPerKiometer:function(){return m},getOtherOptions:function(){return f},getPerCar:function(){return g},getPerKiometer:function(){return p}});var t=n(34051),i=n.n(t),a=n(85893),c=n(5370),o=n(63543);function u(r,e,n,t,i,a,c){try{var o=r[a](c),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(t,i)}function s(r){return function(){var e=this,n=arguments;return new Promise((function(t,i){var a=r.apply(e,n);function c(r){u(a,t,i,c,o,"next",r)}function o(r){u(a,t,i,c,o,"throw",r)}c(void 0)}))}}var p=function(){var r=s(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(o.Z.pricingPerKilometer,"",{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),g=function(){var r=s(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(o.Z.getPricingSizeOfCar,"",{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=s(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(o.Z.pricingOtherOptions,"",{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return e=r.sent,r.abrupt("return",e);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),m=function(){var r=s(i().mark((function r(e){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.put(o.Z.pricingPerKilometer,e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=s(i().mark((function r(e,n){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.put(o.Z.pricinPerSizeOfCar(e),n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=r.sent,r.abrupt("return",t);case 4:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),l=function(){var r=s(i().mark((function r(e){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.put(o.Z.pricingOtherOptions,e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=r.sent,r.abrupt("return",n);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();function h(){return(0,a.jsx)("div",{})}}},function(r){r.O(0,[9774,2888,179],(function(){return e=79997,r(r.s=e);var e}));var e=r.O();_N_E=e}]);