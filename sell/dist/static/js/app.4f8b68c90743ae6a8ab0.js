webpackJsonp([0],{"+mdc":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.ratings},on:{getRatingType:t.modifySelectType,getOnlyContent:t.modifyOnlyContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length>0,expression:"rating.recommend && rating.recommend.length>0"}],staticClass:"recommend"},[e("i",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}))])],1),t._v(" "),e("div",{staticClass:"shopcart-wrapper"})])},a=[],n={render:i,staticRenderFns:a};s.a=n},"/cZ4":function(t,s,e){"use strict";var i=e("NVrd"),a=e("fJdx"),n=e("e9KK"),r=e("fjIZ"),o=e("m3es"),c=e.n(o),l=e("xSw9");s.a={components:{star:i.a,split:a.a,ratingselect:n.a,shopcart:l.a},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"满意",negative:"不满意"},ratings:[]}},props:{seller:{type:Object}},filters:{formatDate:function(t){var s=new Date(t);return e.i(r.a)(s,"yyyy-MM-dd hh:mm")}},methods:{modifySelectType:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},modifyOnlyContent:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||this.selectType===t)}},created:function(){var t=this;this.$http.get("/api/ratings").then(function(s){var e=s.body;0===e.errNo&&(t.ratings=e.data,t.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new c.a(t.$refs.ratings,{click:!0})}))})}}},0:function(t,s){},"04Q5":function(t,s){},"0AMi":function(t,s){},"1Iyw":function(t,s,e){"use strict";s.a={}},"34KM":function(t,s){},"3RRX":function(t,s){},"8J2q":function(t,s,e){"use strict";function i(t){e("94gg")}var a=e("PkAO"),n=e("x8iV"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},"94gg":function(t,s){},AKNT:function(t,s,e){"use strict";function i(t){e("0AMi")}var a=e("/cZ4"),n=e("+mdc"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},AsYy:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice)+"元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){s.stopPropagation(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n          "+t._s(t.payDesc)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},[e("transition-group",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},t._l(t.balls,function(t,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"ball.show"}],key:s,staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])}))],1),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},B1bB:function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("xSw9"),r=e("Jn7X"),o=e("8J2q");s.a={components:{shopcart:n.a,cartcontrol:r.a,food:o.a},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},props:["seller"],computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{_initScroll:function(){var t=this;this.menuScroll=new a.a(this.$refs.menuWrapper,{click:!0}),this.foodScroll=new a.a(this.$refs.foodWrapper,{probeType:3,click:!0}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0,i=t.length;e<i;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodWrapper.getElementsByClassName("food-list-hook"),i=e[t];this.foodScroll.scrollToElement(i,300)}},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopCart.drop(t)})},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())}},created:function(){var t=this;this.$http.get("/api/goods").then(function(s){var e=s.body;0===e.errNo&&(t.goods=e.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))}),this.classMap=["decrease","discount","special","invoice","guarantee"]}}},Bh5c:function(t,s,e){"use strict";function i(t,s,e){var i=window.localStorage.__seller__;i?(i=JSON.parse(i),i[t]||(i[t]={})):(i={},i[t]={}),i[t][s]=e,window.localStorage.__seller__=r()(i)}function a(t,s,e){var i=window.localStorage.__seller__;return i&&(i=JSON.parse(i)[t])?i[s]||e:e}s.b=i,s.a=a;var n=e("mvHQ"),r=e.n(n)},EKWH:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t})}))},a=[],n={render:i,staticRenderFns:a};s.a=n},FETT:function(t,s,e){"use strict";s.a={props:["size","score"],computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}}},GU4f:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月销"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),e("span",[t._v("元")])])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),e("span",[t._v("元")])])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),e("span",[t._v("分钟")])])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("i",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"supports-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e()])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item border-1px"},[t._v(t._s(s))])}))])],1)])},a=[],n={render:i,staticRenderFns:a};s.a=n},Jn7X:function(t,s,e){"use strict";function i(t){e("wRoe")}var a=e("MM04"),n=e("qyqs"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},M93x:function(t,s,e){"use strict";function i(t){e("OsaY")}var a=e("xJD8"),n=e("xSyG"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},MM04:function(t,s,e){"use strict";var i=e("7+uW");s.a={props:{food:{type:Object}},created:function(){},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("getCartAdd",this.$refs.cartAdd))},decreaseCart:function(t){t._constructed&&this.food.count--}}}},N0EE:function(t,s,e){"use strict";function i(t){e("XngF")}var a=e("VCv5"),n=e("GU4f"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("M93x"),n=e("YaEn"),r=e("ORbq"),o=e("34KM");e.n(o);i.a.use(r.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:n.a,template:"<App/>",components:{App:a.a}}),n.a.push({path:"goods"})},NVrd:function(t,s,e){"use strict";function i(t){e("mJOd")}var a=e("FETT"),n=e("EKWH"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},OSoY:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foodWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57px",height:"57px",src:s.icon,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v(t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{getCartAdd:t._drop}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopCart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},OsaY:function(t,s){},PXOj:function(t,s,e){"use strict";function i(t){e("nybZ")}var a=e("B1bB"),n=e("OSoY"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},PkAO:function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("Jn7X"),r=e("7+uW"),o=e("fJdx"),c=e("e9KK"),l=e("fjIZ");s.a={components:{cartcontrol:n.a,split:o.a,ratingselect:c.a},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},props:{food:{type:Object}},filters:{formatDate:function(t){var s=new Date(t);return e.i(l.a)(s,"yyyy-MM-dd hh:mm")}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new a.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&r.a.set(this.food,"count",1)},modifySelectType:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},modifyOnlyContent:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||this.selectType===t)}}}},QYgV:function(t,s){},RgqF:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+" / "+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v("\n          "+t._s(t.seller.supports[0].description)+"\n        ")])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports-count",on:{click:t.detailShow}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.detailShow}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"supports-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v("\n              "+t._s(t.seller.bulletin)+"\n            ")])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},VCv5:function(t,s,e){"use strict";var i=e("NVrd"),a=e("fJdx"),n=e("m3es"),r=e.n(n),o=e("Bh5c");s.a={components:{star:i.a,split:a.a},data:function(){var t=this;return{classMap:[],picBscroll:null,favorite:function(){return e.i(o.a)(t.seller.id,"favorite",!1)}()}},props:{seller:{type:Object}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},watch:{seller:function(){var t=this;this.$nextTick(function(){t._initScroll()}),this._initPics()}},methods:{_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new r.a(this.$refs.seller,{click:!0})},_initPics:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picBscroll?t.picBscroll.refresh():t.picBscroll=new r.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}},toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite,e.i(o.b)(this.seller.id,"favorite",this.favorite))}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},mounted:function(){this._initScroll(),this._initPics()}}},XngF:function(t,s){},YaEn:function(t,s,e){"use strict";var i=e("7+uW"),a=e("/ocq"),n=e("PXOj"),r=e("AKNT"),o=e("N0EE");i.a.use(a.a),s.a=new a.a({linkActiveClass:"active",routes:[{path:"/goods",component:n.a},{path:"/ratings",component:r.a},{path:"/seller",component:o.a}]})},e9KK:function(t,s,e){"use strict";function i(t){e("04Q5")}var a=e("esg4"),n=e("wYts"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},esg4:function(t,s,e){"use strict";s.a={data:function(){return{}},props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t,s){s._constructed&&this.$emit("getRatingType",t)},toggleContent:function(t){if(t._constructed){var s=!this.onlyContent;this.$emit("getOnlyContent",s)}}}}},fJdx:function(t,s,e){"use strict";function i(t){e("m9tc")}var a=e("1Iyw"),n=e("siU2"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},fjIZ:function(t,s,e){"use strict";function i(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var n=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?n:a(n))}return s}function a(t){return("00"+t).substr(t.length)}s.a=i},"h/N8":function(t,s,e){"use strict";var i=e("NVrd");s.a={props:["seller"],data:function(){return{showDetail:!1,classMap:[]}},methods:{detailShow:function(){this.showDetail=!this.showDetail},hideDetail:function(){this.showDetail=!this.showDetail}},components:{star:i.a},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]}}},hhm8:function(t,s,e){"use strict";function i(){var t=window.location.search,s={},e=/[?&][^?&]+=[^?&]+/g,i=t.match(e);return i&&i.forEach(function(t){var e=t.slice(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);s[i]=a}),s}s.a=i},hxP8:function(t,s,e){"use strict";function i(t){e("QYgV")}var a=e("h/N8"),n=e("RgqF"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},jUHR:function(t,s,e){"use strict";var i=e("Jn7X"),a=e("m3es"),n=e.n(a);s.a={components:{cartcontrol:i.a},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){return"还差￥"+(this.minPrice-this.totalPrice)+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new n.a(t.$refs.listContent,{click:!0})}),s}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px, 0)",t.style.transform="translate3d(0,"+n+"px, 0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.WebKitTransform="translate3d("+a+"px,0,0)",r.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0, 0)",t.style.transform="translate3d(0,0, 0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.WebKitTransform="translate3d(0,0, 0)",s.style.transform="translate3d(0,0, 0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}}}},m9tc:function(t,s){},mJOd:function(t,s){},nybZ:function(t,s){},qyqs:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{ref:"cartAdd",staticClass:"cart-add icon-add_circle",on:{click:function(s){s.stopPropagation(),t.addCart(s)}}})],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},siU2:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"split"})},a=[],n={render:i,staticRenderFns:a};s.a=n},wRoe:function(t,s){},wYts:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("i",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},a=[],n={render:i,staticRenderFns:a};s.a=n},x8iV:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v(t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),t.addFirst(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{getRatingType:t.modifySelectType,getOnlyContent:t.modifyOnlyContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,alt:"",width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(" "),e("span",[t._v(t._s(s.text))])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},a=[],n={render:i,staticRenderFns:a};s.a=n},xJD8:function(t,s,e){"use strict";var i=e("woOf"),a=e.n(i),n=e("hhm8"),r=e("hxP8");s.a={components:{"v-header":r.a},data:function(){return{seller:{id:function(){return e.i(n.a)().id}()}}},methods:{},created:function(){var t=this;this.$http.get("/api/seller?id="+this.seller.id).then(function(s){var e=s.body;0===e.errNo&&(t.seller=a()({},t.seller,e.data))})}}},xSw9:function(t,s,e){"use strict";function i(t){e("3RRX")}var a=e("jUHR"),n=e("AsYy"),r=e("VU/8"),o=i,c=r(a.a,n.a,o,null,null);s.a=c.exports},xSyG:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:this.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评价")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},a=[],n={render:i,staticRenderFns:a};s.a=n}},["NHnr"]);