<template>
  <div class="page3--container">
    {{str}}
  </div>
</template>

<script>
export default {
  name: 'Page3',
  data() {
    return {
      str:
        `<p>< img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/2063089739/TB2YBRra29TBuNjy0FcXXbeiFXa_!!2063089739.jpg" class="img-ks-lazyload" style="margin: 0px; padding: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">< img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/2063089739/TB2ZLRza1uSBuNjy1XcXXcYjFXa_!!2063089739.jpg" class="img-ks-lazyload" style="margin: 0px; padding: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">< img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/2063089739/TB2Fcxya4SYBuNjSspjXXX73VXa_!!2063089739.jpg" class="img-ks-lazyload" style="margin: 0px; padding: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">< img src="https://img.alicdn.com/imgextra/i2/2063089739/TB2OLzMXRsmBKNjSZFsXXaXSVXa_!!2063089739.jpg" align="absmiddle" class="img-ks-lazyload" style="margin: 0px; padding: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">< img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/2063089739/TB2AdJya4WYBuNjy1zkXXXGGpXa_!!2063089739.jpg" class="img-ks-lazyload" style="margin: 0px; padding: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">< img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/2063089739/TB258Nma3mTBuNjy1XbXXaMrVXa_!!2063089739.jpg" class="img-ks-lazyload" style="margin: 0px; padding: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">< img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/2063089739/TB2UrxAa25TBuNjSspmXXaDRVXa_!!2063089739.jpg" class="img-ks-lazyload" style="margin: 0px; padding: 0px; animation: ks-fadeIn 350ms linear 0ms 1 normal both; opacity: 1; vertical-align: top; max-width: 100%; float: none; color: rgb(64, 64, 64); font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;"><br></p >",
        "attention":"< img src="http://admin.houdafs.com/static/data/photo/20180124165405.jpg">`,
       index: 0, // 开始的位置
       list: [] // 找到的链接
    }
  },
  created() {
    this.getStr()
  } ,
  methods: {
    search(val, index = -1, reg = "src=") {
      return val.indexOf(reg, index)
    },
    getStr() {
      const begin = this.search(this.str, this.index)
      const end = this.search(this.str, this.index + 5 , '.jpg')
      const link = this.str.substring(begin + 5, end + 4)
      this.index = end                      
      if (begin !== -1) {
        this.list.push(link)       
        this.getStr()         
      }
    }
   }
}
</script>
<style lang="stylus">
 .page3--container {
   font-size: 14px
 }
</style>
