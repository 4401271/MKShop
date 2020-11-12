<template>
  <div class="footer-guide">

    <span class="guide-item" :class="{on: $route.path === '/msite'}" @click="goto('/msite')">
      <span class="item-icon">
        <i class="iconfont iconwaimaixinxi"></i>
      </span>
      <span class="item-title">首页</span>
    </span>


    <span class="guide-item" :class="{on: $route.path === '/search'}" @click="goto('/search')">
      <span class="item-icon">
        <i class="iconfont iconsousuo1"></i>
      </span>
      <span class="item-title">搜索</span>
    </span>


    <span class="guide-item" :class="{on: $route.path === '/order'}" @click="goto('/order')">
      <span class="item-icon">
        <i class="iconfont icondingdan"></i>
      </span>
      <span class="item-title">订单</span>
    </span>


    <span class="guide-item" :class="{on: $route.path === '/profile'}" @click="goto('/profile')">
      <span class="item-icon">
        <i class="iconfont iconuser"></i>
      </span>
      <span class="item-title">个人</span>
    </span>


  </div>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods: {
      goto(path){
        /*push和replace表示需不需要回退效果*/
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*需要引入样式方法库的时候就直接用@引入*/
  @import "../../common/stylus/mixins.styl"
  .footer-guide
    top-border-1px(#ccc)
    display flex
    position fixed
    left 0
    bottom 0
    height 55px
    width 100%
    .guide-item
      display flex
      flex-direction column
      text-align center
      width: 25%
      .item-icon
        margin-top: 5px
        i
          font-size: 23px
      .item-title
        margin-top: 1px
        font-size: 12px
    /*时刻主意好这个层级关系*/
    .on
      .item-icon
        color #FFD000
</style>