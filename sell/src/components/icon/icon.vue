<template>
  <span class="icon"></span>
</template>

<script type="text/ecmascript-6">
  export default {
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .icon
    display: inline-block
    vertical-align: top
    width: 16px
    height: 16px
    margin-right: 6px
    background-size: 16px 16px
    background-repeat: no-repeat
    &.decrease
      bg-image('img/decrease_2')
    &.discount
      bg-image('img/discount_2')
    &.guarantee
      bg-image('img/guarantee_2')
    &.invoice
      bg-image('img/invoice_2')
    &.special
      bg-image('img/special_2')
</style>
