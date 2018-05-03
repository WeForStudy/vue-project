<template>
  <div class="slider">
      <ul class="slider--box">
        <li v-for="(item, index) in list" :key="index" :class="{'active': index === selectedIndex, 'slider--item' : true}" @click="push(item.route, index)">
          {{item.name}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  data() {
    return {
      list: [
        {
          name: 'Vuex小示例',
          route: 'vuex',
        },
        {
          name: '页面二',
          route: 'page2',
        },
        {
          name: '页面三',
          route: 'page3',
        },
        {
          name: '页面四',
          route: 'page4',
        }, 
      ],
      selectedIndex: 0
    }
  },
  created() {
    const index = this.getIndex()
    this.selectedIndex = index
    if(index === 0) {
      this.$router.push(this.list[0].route)
    }
    console.log(this.$route)
  },

  methods: {
    push(route, index) {
      const current = window.location.pathname
      if(current !== `/${route}`) {
        this.$router.push(route)
      }
    },
    /**
     * @augments none
     * @description 判断当前路径的哈希，返回当前路径在路径列表里的下标
     */
    getIndex() {
      const current = window.location.hash.slice(2)
      let index = 0
      this.list.some((item, currentIndex) => {
        if (item.route === current) {
          index = currentIndex
          return true
        }
      })
      return index
    },
  },
 
  watch: {
    '$route'(to, from) {
      this.selectedIndex = this.getIndex()
    }
  }
  
}

</script>

<style lang="stylus">
  .slider {
    height 100%
    width 100%
    .slider--item {
      padding 10px 30px
      font-size 15px
      text-align center
      cursor pointer
      &.active {
        color lightblue
      }
    }
    
  }
</style>
