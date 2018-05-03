<template>
  <div class="modal--wrapper" ref="myModal">
  
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'modal',
  // install(Vue) {
  //   console.log(myModal)
  // },
  
}
</script>
<style lang="stylus">
.modal--wrapper {
  position fixed
  top 0 
  bottom 0
  right 0
  left 0
  background-color rgba(0, 0, 0, 0.8 )
}
</style>
