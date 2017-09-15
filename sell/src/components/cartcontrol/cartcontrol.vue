<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>

    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" ref="cartAdd" @click.stop="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    props: {
      food: {
        type: Object
      }
    },
    created(){
    },
    methods: {
      addCart(event){
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        this.$emit('getCartAdd', this.$refs.cartAdd)
      },
      decreaseCart(event){
        if (!event._constructed) {
          return
        }
        this.food.count--
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    height: 36px
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      opacity: 1
      transform: translate3d(0, 0, 0)
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
      /*进入动画完成 和 离开动画开始时的样式*/
      &.move-enter-active, &.move-leave-active
        transition: all .4s linear
        .inner
          transform: rotate(0)
          transition: all .4s linear
      /*进入动画开始时 和 离开动画结束后的样式*/
      &.move-enter, &.move-leave-to
        opacity: 0
        transform: translate3D(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      font-size: 24px
      color: rgb(0, 160, 220)

</style>
