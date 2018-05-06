const store = {
  state: {
    count: 0,
    list: [],
  },
  // 真正对数据进行操作的地方
  mutations: {
    increment (state) {
      state.count++
    },
    push (state) {
      state.list.push(Math.random())
    },
    remove(state, { index }){
      const arr = state.list
      state.list.splice(index, 1)
    },
    pop(state) {
      state.list.pop()
    }
  },
  // 暴露给外部使用的方法
  actions: {
    increment (context) {
      context.commit('increment')
    },
    push (context) {
      context.commit('push')
    },
    remove(context, params) {
      context.commit('remove', params)
    },
    pop(context) {
      context.commit('pop')
    }
  },
  // 暴露给外部显示的一些状态
  getters: {
    listLength: state => {
      return state.list.length
    }
  }
}
export default store