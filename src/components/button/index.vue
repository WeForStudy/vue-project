<template>
  <div class="button--component--wrapper" :style="style" @click="onClick">
    <slot name="left"></slot>
    <slot></slot>
  </div>
</template>

<script>
  const TYPELIST = {
    NORMAL: 'normal',
    DANGER: 'danger',
    WARNING: 'warning',
    DISABLE: 'disable',
  }
  export default {
    name: "Button",
    props: {
      type: {
        type: String,
        validator: val => Object.values(TYPELIST).indexOf(val) !== -1
      },
    },
    data() {
      return {
        style: null
      }
    },
    methods: {
      onClick() {
        this.$emit('sonClick')
      }
    },
    created() {
      const type = this.type
      let style = {
        borderRadius: '20px',
      }
      let typeStyle = null
      switch (type) {
        case TYPELIST.DANGER:
          typeStyle = {
            border: '1px solid rgb(238, 107, 96)',
            backgroundColor: 'rgb(238, 107, 96)',
            color: '#fff',
          }
          break
        case TYPELIST.WARNING:
          typeStyle = {
            border: '1px solid rgb(247, 192, 82)',
            backgroundColor: 'rgb(247, 192, 82)',
            color: '#fff',
          }
          break
        case TYPELIST.NORMAL:
          typeStyle = {
            border: '1px solid #000',
            color: '#585858',
          }
          break
        case TYPELIST.DISABLE:
          typeStyle = {
            border: '1px solid rgb(169, 169, 169)',
            backgroundColor: 'rgb(169, 169, 169)',
            color: '#fff',
          }
          break;
      }
      this.style = Object.assign({}, style, typeStyle)
    }
  }
</script>

<style scoped lang="stylus">
.button--component--wrapper {
  display flex
  align-items center
  height 50px
  justify-content center
  box-sizing border-box
  cursor pointer
  width auto
  font-size 15px
}
</style>