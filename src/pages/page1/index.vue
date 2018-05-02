<template>
  <div class="page--wrapper">
   im page
   <button @click="push">Click me</button>
   <button @click="pop">Pop me</button>
   <ul>
     <li v-for="(item, index) in list" :key="index">
      {{item}}<button @click="remove({ index })">delete me</button>
     </li>
   </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Page1',
  created() {
  },
  methods:{
    ...mapActions([
      'push',
      'remove',
      'pop'
    ]),
  },
  computed: {
    ...mapState([
      'list'
    ])
  }
}
</script>
<style lang="stylus">
 .page--wrapper {
   padding 20px 50px
   font-size 15px
 }
</style>
