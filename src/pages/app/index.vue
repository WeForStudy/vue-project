<template>
  <div id="app" class="flex">
    <div class="nav--wrapper"></div>
    <div class="content--wrapper flex flex--1">
      <div class="slider--wrapper"></div>
      <div class="router--wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { getData } from 'service'
export default {
  name: 'App',
  beforeCreate() {
    getData({id: 0, name: '213'}).then(res => {
    })
  }
}
</script>
<style lang="stylus">
  #app
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background-color red
    flex-direction column
    .nav--wrapper 
      height 60px
      background-color lightblue
    .content--wrapper
      .slider--wrapper
        width 120px
        background-color lightgreen
   
</style>
