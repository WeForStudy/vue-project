<template>
  <div id="app" class="flex">
    <div class="nav--wrapper">
      store's list length is {{$store.title}}      
    </div>
    <div class="content--wrapper flex flex--1">
      <div class="slider--wrapper">
        <Slide />
      </div>
      <div class="router--wrapper flex--1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from 'pages/slider'
export default {
  name: 'App',
  components: {
    Slide,
  },
}
</script>
<style lang="stylus">
  #app
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    flex-direction column

    .nav--wrapper 
      padding 20px 0px
      background-color lightblue
      font-size 20px
      text-align center 

    .content--wrapper
      .slider--wrapper
        width 120px
</style>
