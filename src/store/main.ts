import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: '超级管理员',
  }),
  // getters
  getters: {
    nameLength: (state) => {
      return state.name.length
    },
  },
  actions: {
    async insertPost(data: string) {
      // 异步
      // await ajaxRequest(data)
      this.name = data
    },
  },
})
