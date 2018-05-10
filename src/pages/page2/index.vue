<template>
  <div>
    <div class="btn--wrapper">
      <Button type="disable" @sonClick="fatherClick">dian wo <div slot="left">Im left</div></Button>
    </div>
  </div>
</template>

<script>
import Button from 'components/button'
export default {
  name: 'Page2',
  components: {
    Button,
  },
  methods: {
    fatherClick() {
      alert('me')
    }
  }
}
</script>
<style lang="stylus">
 .btn--wrapper {
   width 200px
 }
</style>
