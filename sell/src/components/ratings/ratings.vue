<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc"
                    :ratings="ratings" @getRatingType="modifySelectType"
                    @getOnlyContent="modifyOnlyContent"></ratingselect>
      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" v-show="needShow(rating.rateType,rating.text)" class="rating-item border-1px">
            <div class="avatar">
              <img :src="rating.avatar" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length>0">
                <i class="icon-thumb_up"></i>
                <span v-for="item in rating.recommend" class="item">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime | formatDate}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="shopcart-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from '../../components/star/star.vue'
  import split from '../../components/split/split.vue'
  import ratingselect from '../../components/ratingselect/ratingselect.vue'
  import {formatDate} from '../../common/js/date'
  import BScroll from 'better-scroll'
  import shopcart from '../../components/shopcart/shopcart.vue'
  const response = require('../../common/data/ratings.json')

  const ALL = 2
  const ERR_OK = 0

  export default {
    components: {
      star,
      split,
      ratingselect,
      shopcart
    },
    data(){
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        },
        ratings: []
      }
    },
    props: {
      seller: {
        type: Object
      }
    },
    filters: {
      formatDate(time){
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    methods: {
      modifySelectType(type){
        this.selectType = type
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      modifyOnlyContent(value){
        this.onlyContent = value
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      needShow(type, text){
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return this.selectType === type
        }
      }
    },
    created(){
//      this.$http.get('/api/ratings').then((response) => {
//        let res = response.body
//        if (res.errNo === ERR_OK) {
//          this.ratings = res.data
//          this.$nextTick(() => {
//            if (!this.scroll) {
//              this.scroll = new BScroll(this.$refs.ratings, {
//                click: true
//              })
//            } else {
//              this.scroll.refresh()
//            }
//          })
//        }
//      })
      if (response.errNo === ERR_OK) {
        this.ratings = response.data
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.ratings, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  @import "../../common/stylus/base.styl"
  .ratings
    position: absolute
    top: 174px
    left: 0
    bottom: 0
    width: 100%
    overflow: hidden
    z-index: 40
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        text-align: center
        border-right: 1px solid rgba(7, 17, 27, .1)
        @media only screen and (max-width: 320px)
          flex: 0 0 120px
          width: 120px
        .score
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
          margin-bottom: 6px
        .title
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
          margin-bottom: 8px
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
        @media only screen and (max-width: 320px)
          padding: 6px 0 6px 6px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .star
            display: inline-block
            vertical-align: top
            margin: 0 12px
          .score
            display: inline-block
            line-height: 18px
            font-size: 12px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            margin-right: 12px
            font-size: 12px
            color: rgb(7, 17, 27)
          .time
            line-height: 18px
            font-size: 12px
            color: rgb(147, 153, 159)
    .rating-wrapper
      padding: 0 18px
      .rating-item
        display: flex
        padding: 18px 0
        border-1px(rgba(7, 17, 27, .1))
        before-none()
        .avatar
          flex: 0 0 28px
          width: 28px
          margin-right: 12px
          img
            border-radius: 50%
        .content
          flex: 1
          position: relative
          .name
            margin-bottom: 4px
            line-height: 12px
            font-size: 10px
            color: rgb(7, 17, 27)
          .star-wrapper
            margin-bottom: 6px
            font-size: 0
            .star
              display: inline-block
              vertical-align: top
              margin-right: 6px
            .delivery
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)

          .text
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
            margin-bottom: 8px
          .recommend
            line-height: 16px
            font-size: 0
            .icon-thumb_up, .item
              display: inline-block
              vertical-align: top
              line-height: 16px
              margin: 0 8px 4px 0
              font-size: 9px
            .icon-thumb_up
              color: rgb(0, 160, 220)
            .item
              padding: 0 6px
              color: rgb(147, 153, 159)
              border: 1px solid rgba(7, 17, 27, .1)
              border-radius: 1px

          .time
            position: absolute
            top: 0
            right: 0
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
</style>
