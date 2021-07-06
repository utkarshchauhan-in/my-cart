(function(t){function e(e){for(var n,c,s=e[0],i=e[1],u=e[2],l=0,p=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Navbar"),t.loaded?r("router-view"):r("div",[t._v("Server Error: Cannot Fetch Data")])],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"navbar"}},["/myCart"==this.$route.path?r("span",{staticClass:"back-icon"},[r("i",{staticClass:"fa fa-arrow-left",attrs:{"aria-hidden":"true"},on:{click:t.goHome}})]):t._e(),r("span",{staticClass:"home",on:{click:t.goHome}},[t._v("Fresh Stock")]),r("span",{staticClass:"cart-icon"},[r("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"},on:{click:t.checkCart}})]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search",attrs:{placeholder:"Search Products",type:"text"},domProps:{value:t.search},on:{keyup:t.searchProduct,input:function(e){e.target.composing||(t.search=e.target.value)}}})])},s=[],i=r("2909"),u=(r("ac1f"),r("841c"),r("4de4"),r("caad"),r("2532"),{name:"Navbar",data:function(){return{search:"",timer:null}},methods:{searchProduct:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout((function(){if(t.search){var e=Object(i["a"])(t.$store.getters.getProducts),r=e.filter((function(e){return e.productName.toLowerCase().includes(t.search.toLowerCase())}));t.$store.dispatch("searchProducts",r)}else t.$store.dispatch("searchProducts",null)}),1e3)},goHome:function(){this.$router.push("/").catch((function(){}))},checkCart:function(){this.$router.push("/myCart").catch((function(){}))}}}),d=u,l=r("2877"),p=Object(l["a"])(d,c,s,!1,null,null,null),f=p.exports,h=r("bc3a"),m=r.n(h),v=Object({NODE_ENV:"production",BASE_URL:"/"}).PORT;null!=v&&""!=v||(v="https://localhost:8080");var C=v+"/products/";function g(t,e,r){var n=C+t+"/"+e;m.a.get(n).then((function(t){r?r(t.data):console.log(t)})).catch((function(t){console.log(t)}))}var _={name:"App",components:{Navbar:f},data:function(){return{loaded:!1,range:this.$store.getters.getRange}},created:function(){var t=this;g(0,this.range,(function(e){t.loaded=!0,t.$store.dispatch("addProducts",e)}))}},b=_,O=Object(l["a"])(b,a,o,!1,null,null,null),y=O.exports,T=r("2f62");n["a"].use(T["a"]);var P=new T["a"].Store({state:{user:{},myCart:[],productList:[],searchList:null,next:0,total:0,range:8},mutations:{ADD_PRODUCTS:function(t,e){var r;(r=t.productList).push.apply(r,Object(i["a"])(e.products)),t.total=e.total,t.next++},SET_PRODUCTS:function(t,e){t.productList=Object(i["a"])(e),t.next=1},SEARCH_PRODUCTS:function(t,e){t.searchList=e?Object(i["a"])(e):null},ADD_TO_CART:function(t,e){t.myCart.push(e)},REMOVE_FROM_CART:function(t,e){t.myCart=t.myCart.filter((function(t){return t.productId!==e}))},INCREMENT_NEXT:function(t){t.next++}},actions:{addProducts:function(t,e){var r=t.commit;r("ADD_PRODUCTS",e)},searchProducts:function(t,e){var r=t.commit;r("SEARCH_PRODUCTS",e)},setProducts:function(t,e){var r=t.commit;r("SET_PRODUCTS",e)},addToCart:function(t,e){var r=t.commit;r("ADD_TO_CART",e)},removeFromCart:function(t,e){var r=t.commit;r("REMOVE_FROM_CART",e)},incrementNext:function(t){var e=t.commit;e("INCREMENT_NEXT")}},getters:{getProducts:function(t){return t.productList},getCart:function(t){return t.myCart},getNext:function(t){return t.next},getRange:function(t){return t.range},getTotal:function(t){return t.total}}}),x=r("8c4f"),I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"main-container"}},t._l(t.productList,(function(e){return r("Card",{key:e.productId,attrs:{product:e,cartItem:t.cartList.includes(e.productId)},on:{addItem:t.addItem,removeItem:t.removeItem}})})),1)},L=[],E=(r("d81d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-card"},[r("span",{staticClass:"gender"},[r("b",[t._v("Gender:")]),t._v(" "+t._s(t.product.gender))]),r("span",{staticClass:"color"},[r("b",[t._v("Color:")]),t._v(" "+t._s(t.product.primaryColour))]),r("img",{attrs:{src:t.product.searchImage}}),r("div",{staticClass:"brand"},[t._v(t._s(t.product.brand))]),r("div",{staticClass:"product"},[t._v(t._s(t.product.productName))]),r("div",{staticClass:"cost"},[t._v(" Cost: "+t._s(t.product.price)+" "),t.added?r("button",{staticClass:"remove-cart",attrs:{type:"button"},on:{click:function(e){return t.removeCart(t.product.productId)}}},[t._v(" Remove ")]):r("button",{staticClass:"add-cart",attrs:{type:"button"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v(" Add to Cart ")])])])}),R=[],$={name:"Card",props:{product:Object,cartItem:Boolean},data:function(){return{added:this.cartItem}},methods:{addToCart:function(t){this.$store.dispatch("addToCart",t),this.$emit("addItem",t.productId),this.added=!0},removeCart:function(t){this.$store.dispatch("removeFromCart",t),this.$emit("removeItem",t),this.added=!1}}},w=$,j=Object(l["a"])(w,E,R,!1,null,null,null),N=j.exports,S={name:"HomePage",components:{Card:N},data:function(){return{cartList:[],next:this.$store.getters.getNext,range:this.$store.getters.getRange,total:this.$store.getters.getTotal}},computed:Object(T["b"])({productList:function(t){return t.searchList?t.searchList:t.productList},searchOn:function(t){return!!t.searchList}}),created:function(){this.cartList=this.$store.getters.getCart.map((function(t){return t.productId}))},mounted:function(){var t=this,e=function(){!t.searchOn&&t.next<=t.total/t.range&&window.innerHeight+window.scrollY>=document.body.scrollHeight&&t.getNextData()};document.addEventListener("scroll",e)},methods:{getNextData:function(){var t=this;g(this.next*this.range,this.range,(function(e){t.loaded=!0,t.$store.dispatch("addProducts",e).then((function(){t.next++}))}))},addItem:function(t){this.cartList.push(t)},removeItem:function(t){this.cartList=this.cartList.filter((function(e){return e!==t}))}}},D=S,k=Object(l["a"])(D,I,L,!1,null,null,null),A=k.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._l(t.products,(function(e){return r("Card",{key:e.productId,attrs:{product:e,cartItem:!0},on:{removeItem:t.removeItem}})})),0==t.products.length?r("h2",{staticClass:"empty-cart"},[t._v("No items added in cart!")]):t._e()],2)},H=[],U={name:"Cart",components:{Card:N},data:function(){return{products:[],cartList:[]}},created:function(){this.products=this.$store.getters.getCart,this.cartList=this.products.map((function(t){return t.productId}))},methods:{removeItem:function(t){this.cartList=this.cartList.filter((function(e){return e!==t})),this.products=this.products.filter((function(e){return e.productId!==t}))}}},F=U,V=Object(l["a"])(F,M,H,!1,null,null,null),B=V.exports;n["a"].use(x["a"]);var J=[{path:"/",name:"home",component:A,props:!0},{path:"/myCart",name:"myCart",component:B,props:!0}],X=new x["a"]({mode:"history",base:"/",routes:J}),G=X;n["a"].config.productionTip=!1,new n["a"]({router:G,store:P,render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=app.d8ae719e.js.map