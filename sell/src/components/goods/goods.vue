<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" @click="selectMenu(index,$event)" class="menu-item"
            :class="{'current':currentIndex===index}">
          <span class="text border-1px">
            <span class="icon" :class="classMap[item.type]" v-show="item.type>0"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <!--为了让js选中才写的class，一般都有-hook后缀-->
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px" @click="selectFood(food,$event)">
              <div class="icon">
                <img width="57px" height="57px" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span class="old"
                                                                v-show="food.oldPrice">{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol @getCartAdd="_drop" :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart ref="shopCart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice"
              :min-price="seller.minPrice"></shopcart>
    <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import shopcart from '../../components/shopcart/shopcart.vue'
  import cartcontrol from '../cartcontrol/cartcontrol.vue'
  import food from '../../components/food/food.vue'

  const ERR_OK = 0
  export default {
    components: {
      shopcart,
      cartcontrol,
      food
    },
    data(){
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      }
    },
    props: ['seller'],
    computed: {
      currentIndex(){
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
            return i
          }
        }
        return 0
      },
      selectFoods(){
        let foods = []
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    },
    methods: {
      _initScroll(){
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {
          probeType: 3,
          click: true
        })
        this.foodScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _calculateHeight(){
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')
        let height = 0
        this.listHeight.push(height)
        for (let i = 0, len = foodList.length; i < len; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      selectMenu(index, event){
        if (!event._constructed) {
          return
        }
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook')
        let el = foodList[index]
        this.foodScroll.scrollToElement(el, 300)
      },
      _drop(target){
//          体验优化，异步执行下落动画
        this.$nextTick(() => {
          this.$refs.shopCart.drop(target)
        })
      },
      selectFood(food, event){
        if (!event._constructed) {
          return
        }
        this.selectedFood = food
        this.$refs.food.show()
      }
    },
    created(){
      this.$http.get('/api/goods').then(
        response => {
          let res = response.body
          if (res.errNo === ERR_OK) {
            this.goods = res.data
            // vue拿到数据，更新DOM的函数
            this.$nextTick(() => {
              this._initScroll()
              this._calculateHeight()
            })
          }
        })
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  @import '../../common/stylus/base.styl'
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 64px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        line-height: 14px
        padding: 0 12px
        &.current
          position: relative
          mragin-top: 1px
          z-index: 10
          background: #ffffff
          font-weight: 700
          .text
            after-none()
      .text
        display: table-cell
        font-size: 12px
        vertical-align: middle
        border-1px(rgba(7, 17, 27, .1))
        before-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 16px
          height: 16px
          margin-right: 2px
          background-size: 16px 16px
          background-repeat: no-repeat
          &.decrease
            bg-image('img/decrease_3')
          &.discount
            bg-image('img/discount_3')
          &.guarantee
            bg-image('img/guarantee_3')
          &.invoice
            bg-image('img/invoice_3')
          &.special
            bg-image('img/special_3')
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        padding: 18px
        border-1px(rgba(7, 17, 27, .1))
        before-none()
        &:last-child
          after-none()
          before-none()
        .icon
          flex: 0 0 57px
          margin-right: 10px
          img
            border-radius: 2px
        .content
          flex: 1
          .name
            margin: 2px 0 8px
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            margin-bottom: 8px
            line-height: 1.2
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)

          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
            height: 36px
</style>
