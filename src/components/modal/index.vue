<template>
  <div class="modal--wrapper"  v-show="showModal">
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
const modal = {
  name: 'modal',
  data() {
    return {
      showModal: true
    }
  },
  
  methods: {
    show() {
      this.showModal = true  
    },

    hide() {
      this.showModal = false  
    }
  },
}
export default {

  /**
   * 1. 把modal对象挂载到vue的原型链上（$modal）
   * 2. 把modal的html's element 挂载到body
   * 3. 返回show和hide
   * 
  */

 install(Vue) {
   
    const parent = document.querySelector('body')
    // console.log(parent)
    const obj = new Vue(modal)
    // console.log(obj)
    const insert = document.createElement('div')
    const id = 'modal--global--component'
    insert.id = id
    parent.appendChild(insert)
    obj.$mount(`#${id}`)
    const toMoal = {
      show() {
        modal.methods.show()
        // console.log()
        // obj.show()
        // modal.show.call(modal)
      },
      hide() {
        obj.hide.call(obj)
      } 
    }
    Vue.prototype.$modal = toMoal
    return {
      toMoal,
    }
  },
}
</script>

<style scoped>

</style>